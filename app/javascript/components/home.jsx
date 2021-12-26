import React from "react";
import {Outlet, Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export default () => (
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<a class="navbar-brand" href="#">
				Task Planner V1.0
			</a>
			<form class="form-inline">
				<a class="btn btn-outline-success" role="button">
					View Tasks
				</a>
				<button class="btn btn-sm btn-outline-secondary" type="button">
					Add Tasks
				</button>
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">
					Search
				</button>
				<LinkContainer to="/hehe">
					<Nav.Link>BooKeeper</Nav.Link>
				</LinkContainer>
			</form>
		</nav>
		<Outlet />
	</div>
);
