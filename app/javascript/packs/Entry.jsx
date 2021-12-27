import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "../components/home";
import Bk from "../components/bookeep";

document.addEventListener("DOMContentLoaded", () => {
	render(
		<Router>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="hehe" element={<Bk />} />
				</Route>
			</Routes>
		</Router>,
		document.body.appendChild(document.createElement("div"))
	);
});
