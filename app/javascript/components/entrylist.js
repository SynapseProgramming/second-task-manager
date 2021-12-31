import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import {useFormik} from "formik";

const schema = Yup.object().shape({
	task: Yup.string().required("Required"),
	description: Yup.string().required("Required")
});

const TaskInput = () => {
	const updateDatabase = values => {
		const {task, priority, description} = values;
		// if theres no data filled inside
		if (task.length == 0 || description.length == 0) return;
		//simple json display
		const body = {
			task,
			priority,
			description
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
				//TODO: Add a popup which shows that the submission is successful
				// TODO: Add data checks for the input fields.
				console.log("Successfully Added");
			})
			.catch(error => console.log(error.message));
	};

	const formik = useFormik({
		initialValues: {task: "", priority: "High", description: ""},
		onSubmit: updateDatabase,
		validationSchema: schema
	});

	return (
		<Form noValidate onSubmit={formik.handleSubmit}>
			<Form.Group className="mb-3" controlId="TaskInput">
				<Form.Label>Task</Form.Label>
				<Form.Control
					type="textarea"
					placeholder="Enter Task"
					rows={3}
					name="task"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.task && formik.errors.task ? (
					<div>{formik.errors.task}</div>
				) : null}
			</Form.Group>
			<Form.Group className="mb-2" controlId="PriorityInput">
				<Form.Label>Priority</Form.Label>
				<Form.Select name="priority" onChange={formik.handleChange}>
					<option value="High">High</option>
					<option value="Medium">Medium</option>
					<option value="Low">Low</option>
				</Form.Select>{" "}
			</Form.Group>
			<Form.Group className="mb-3" controlId="DescriptionInput">
				<Form.Label>Description</Form.Label>
				<Form.Control
					name="description"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					as="textarea"
					rows={3}
				/>
			</Form.Group>
			<Button type="submit">Submit</Button>
		</Form>
	);
};

export default TaskInput;
