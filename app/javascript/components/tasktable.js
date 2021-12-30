import React, {Component} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import cellEditFactory from "react-bootstrap-table2-editor";
// TODO: Add popup for successful deletion of task
// TODO: Add update functionality for each column
class Tasks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		};
	}
	CellEditParameters = cellEditFactory({
		mode: "dbclick"
	});

	// This function generates the table
	MainTable = props => {
		//helper functions

		const handleDelete = rowId => {
			console.log(rowId);
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
					console.log("successfully deleted record!");
					this.update_state();
				})
				.catch(error => console.log(error.message));
		};

		const columns = [
			{
				dataField: "task",
				text: "Task"
			},
			{
				dataField: "priority",
				text: "Priority"
			},
			{
				dataField: "description",

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
			<div>
				<BootstrapTable
					keyField="id"
					data={props.data}
					columns={columns}
					cellEdit={this.CellEditParameters}
				/>
			</div>
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
