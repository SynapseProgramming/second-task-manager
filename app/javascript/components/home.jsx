import React from "react";
import {Outlet, Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

export default () => (
	<div>
		<Navbar bg="dark" variant="dark">
			<Nav className="ml-auto">
				<Navbar.Brand as={Link} to="/">
					Task Planner
				</Navbar.Brand>
				<Nav.Link as={Link} to="/tasktable">
					View Tasks
				</Nav.Link>
				<Nav.Link as={Link} to="/entrylist">
					Add Tasks
				</Nav.Link>
			</Nav>
		</Navbar>
		<Outlet />
	</div>
);
