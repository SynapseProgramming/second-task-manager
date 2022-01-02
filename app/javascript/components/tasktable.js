import React, {Component} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import cellEditFactory, {Type} from "react-bootstrap-table2-editor";

class Tasks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		};
	}
	CellEditParameters = cellEditFactory({
		mode: "click",
		blurToSave: true,
		afterSaveCell: (oldValue, newValue, row, column) => {
			const {id, task, priority, description} = row;
			// if theres no data filled inside
			if (task.length == 0 || description.length == 0) return;
			//simple json display
			const body = {
				task,
				priority,
				description
			};
			const token = document.querySelector('meta[name="csrf-token"]').content;
			const url = "api/v1/update/" + String(id);
			fetch(url, {
				method: "PUT",
				headers: {
					"X-CSRF-Token": token,
					"Content-Type": "application/json"
				},
				body: JSON.stringify(body)
			})
				.then(response => {
					if (response.ok) {
						return response.json();
					}
					throw new Error("Network response was not ok.");
				})
				.then(response => {
					console.log("Successfully Added");
				})
				.catch(error => console.log(error.message));
		}
	});

	//function which validates the length of new entries
	validateLength = (newValue, row, column) => {
		newValue = String(newValue);
		if (newValue.length === 0) {
			return {
				valid: false,
				message: "empty text boxes are not allowed!"
			};
		}
		return true;
	};

	// This function generates the table
	MainTable = props => {
		//helper functions

		const {SearchBar, ClearSearchButton} = Search;
		const handleDelete = rowId => {
			const url = `/api/v1/destroy/${rowId}`;
			const token = document.querySelector('meta[name="csrf-token"]').content;
			fetch(url, {
				method: "DELETE",
				headers: {
					"X-CSRF-Token": token,
					"Content-Type": "application/json"
				}
			})
				.then(response => {
					if (response.ok) {
						return response.json();
					}
					throw new Error("Network response was not ok.");
				})
				.then(() => {
					this.update_state();
				})
				.catch(error => console.log(error.message));
		};

		const columns = [
			{
				dataField: "task",
				text: "Task",
				validator: this.validateLength
			},
			{
				dataField: "priority",
				text: "Priority",
				sort: true,
				editor: {
					type: Type.SELECT,
					options: [
						{
							value: "High",
							label: "High"
						},
						{
							value: "Medium",
							label: "Medium"
						},
						{
							value: "Low",
							label: "Low"
						}
					]
				}
			},
			{
				dataField: "description",
				validator: this.validateLength,
				text: "Description"
			},
			{
				dataField: "id",
				text: "Remove",
				editable: false,
				formatter: (cellContent, row) => {
					return (
						<button
							className="btn btn-danger btn-xs"
							onClick={() => handleDelete(row.id)}
						>
							Delete
						</button>
					);
				}
			}
		];
		return (
			<ToolkitProvider keyField="id" data={props.data} columns={columns} search>
				{pops => (
					<div>
						<SearchBar {...pops.searchProps} />
						<ClearSearchButton {...pops.searchProps} />
						<hr />
						<BootstrapTable
							cellEdit={this.CellEditParameters}
							{...pops.baseProps}
						/>
					</div>
				)}
			</ToolkitProvider>
		);
	};

	//helper function to fetch the latest record from the database
	update_state = () => {
		const url = "/api/v1/tasks/index";
		fetch(url)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				throw new Error("Network response was not ok.");
			})
			.then(response => this.setState({tasks: response}))
			.catch(() => this.props.history.push("/"));
	};

	componentDidMount() {
		this.update_state();
	}

	render() {
		return <this.MainTable data={this.state.tasks} />;
	}
}
export default Tasks;
