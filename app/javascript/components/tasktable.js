import React, {Component} from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";

const SimpleTable = props => {
	return (
		<div>
			<BootstrapTable data={props.data}>
				<TableHeaderColumn isKey dataField="id" />
				<TableHeaderColumn dataField="task" />
				<TableHeaderColumn dataField="priority" />
				<TableHeaderColumn dataField="description" />
			</BootstrapTable>
		</div>
	);
};

export default function App() {
	return (
		<div>
			<h1>Task Table</h1>
		</div>
	);
}
