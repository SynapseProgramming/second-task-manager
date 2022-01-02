import React from "react";
import Card from "react-bootstrap/Card";

export default () => (
	<div>
		<Card border="primary" className="text-center">
			<Card.Header>Remaining Tasks</Card.Header>
			<Card.Body>
				<Card.Title>You have 6 Tasks Remaining!</Card.Title>
				<Card.Text>Remember to take frequent breaks :)</Card.Text>
			</Card.Body>
			<Card.Footer className="text-muted">Never gonna give you up!</Card.Footer>
		</Card>
	</div>
);
