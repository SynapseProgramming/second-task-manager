import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Taskinput extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onChange = this.onChange.bind(this);
	}
	change_cnt = 0;
	onChange(event) {
		console.log("something has changed");
		console.log(this.change_cnt);
		this.change_cnt = this.change_cnt + 1;
	}
	do_stuff = () => {
		console.log("button pressed");
	};
	render() {
		return (
			<Form onChange={this.onChange}>
				<Form.Group className="mb-3" controlId="TaskInput">
					<Form.Label>Task</Form.Label>
					<Form.Control type="textarea" placeholder="Enter Task" rows={3} />
				</Form.Group>
				<Form.Group className="mb-2" controlId="PriorityInput">
					<Form.Label>Priority</Form.Label>
					<Form.Select>
						<option value="1">High</option>
						<option value="2">Medium</option>
						<option value="3">Low</option>
					</Form.Select>{" "}
				</Form.Group>
				<Form.Group className="mb-3" controlId="DescriptionInput">
					<Form.Label>Description</Form.Label>
					<Form.Control as="textarea" rows={3} />
				</Form.Group>
				<Button variant="primary" onClick={() => this.do_stuff()}>
					Submit
				</Button>
			</Form>
		);
	}
}
