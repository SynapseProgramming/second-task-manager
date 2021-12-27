import React, {Component} from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";

const SimpleTable = props => {
	return (
		<div>
			<BootstrapTable data={props.data}>
				<TableHeaderColumn isKey dataField="id" dataAlign="center">
					Id
				</TableHeaderColumn>
				<TableHeaderColumn dataField="task" dataAlign="center">
					Task
				</TableHeaderColumn>
				<TableHeaderColumn dataField="priority" dataAlign="center">
					Priority
				</TableHeaderColumn>
				<TableHeaderColumn dataField="description" dataAlign="center">
					Description
				</TableHeaderColumn>
			</BootstrapTable>
		</div>
	);
};

class Tasks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		};
	}

	componentDidMount() {
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
	}
	render() {
		return <SimpleTable data={this.state.tasks} />;
	}
}
export default Tasks;
