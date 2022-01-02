import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";

const ShowCards = () => {
	const [remainingTasks, setremainingTasks] = useState(0);

	useEffect(() => {
		const url = "/api/v1/tasks/show";
		let is_mounted = true;
		if (is_mounted) {
			fetch(url)
				.then(response => {
					if (response.ok) {
						return response.json();
					}
					throw new Error("Network response was not ok.");
				})
				.then(response => {
					setremainingTasks(response.task_count);
				})
				.catch(() => console.log("something went wrong!"));
		}
		return () => {
			is_mounted = false;
		};
	});

	return (
		<div>
			<Card border="primary" className="text-center">
				<Card.Header>Remaining Tasks</Card.Header>
				<Card.Body>
					<Card.Title>You have {remainingTasks} Tasks remaining!</Card.Title>
					<Card.Text>Remember to take frequent breaks :)</Card.Text>
				</Card.Body>
				<Card.Footer className="text-muted">
					Never gonna give you up!
				</Card.Footer>
			</Card>
		</div>
	);
};

export default ShowCards;
