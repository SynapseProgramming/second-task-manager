import React, {useState} from "react";
import Card from "react-bootstrap/Card";

const ShowCards = () => {
	const [remainingTasks, setremainingTasks] = useState(0);

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
