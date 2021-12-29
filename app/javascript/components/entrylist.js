import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Taskinput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: "",
			priority: "",
			description: ""
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}
	onSubmit(event) {
		// prevent default html redirect
		event.preventDefault();
		const {task, priority, description} = this.state;
		// if theres no data filled inside
		if (task.length == 0 || description.length == 0) return;
		//simple json display
		const body = {
			task,
			priority,
			description: description.replace(/\n/g, "<br> <br>")
		};
		const token = document.querySelector('meta[name="csrf-token"]').content;
		const url = "api/v1/tasks/create";
		fetch(url, {
			method: "POST",
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

	render() {
		return (
			<Form onSubmit={this.onSubmit}>
				<Form.Group className="mb-3" controlId="TaskInput">
					<Form.Label>Task</Form.Label>
					<Form.Control
						type="textarea"
						placeholder="Enter Task"
						rows={3}
						name="task"
						onChange={this.onChange}
					/>
				</Form.Group>
				<Form.Group className="mb-2" controlId="PriorityInput">
					<Form.Label>Priority</Form.Label>
					<Form.Select name="priority" onChange={this.onChange}>
						<option value="High">High</option>
						<option value="Medium">Medium</option>
						<option value="Low">Low</option>
					</Form.Select>{" "}
				</Form.Group>
				<Form.Group className="mb-3" controlId="DescriptionInput">
					<Form.Label>Description</Form.Label>
					<Form.Control
						name="description"
						onChange={this.onChange}
						as="textarea"
						rows={3}
					/>
				</Form.Group>
				<Button type="submit">Submit</Button>
			</Form>
		);
	}
}
