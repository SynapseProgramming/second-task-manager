import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../components/home";
import Hello from "../components/HelloWorld";

export default (
	<Router>
		<Routes>
			<Route path="/" exact component={Hello} />
		</Routes>
	</Router>
);
