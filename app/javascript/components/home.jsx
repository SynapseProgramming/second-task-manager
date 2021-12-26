import React from "react";
import {Outlet, Link} from "react-router-dom";

export default () => (
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<a class="navbar-brand" href="#">
				Task Planner V1.0
			</a>
			<form class="form-inline">
				<Link to="/hehe">
					<button class="btn btn-outline-success" type="button">
						View Tasks
					</button>
				</Link>
				<button class="btn btn-sm btn-outline-secondary" type="button">
					Add Tasks
				</button>
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">
					Search
				</button>
			</form>
		</nav>
		<Outlet />
	</div>
);
