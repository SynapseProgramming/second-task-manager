import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "../components/home";
import TaskTable from "../components/tasktable";
import EntryList from "../components/entrylist";

document.addEventListener("DOMContentLoaded", () => {
	render(
		<Router>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="tasktable" element={<TaskTable />} />
					<Route path="entrylist" element={<EntryList />} />
				</Route>
			</Routes>
		</Router>,
		document.body.appendChild(document.createElement("div"))
	);
});
