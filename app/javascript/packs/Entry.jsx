import React from "react";
import {render} from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "../components/App";
import Home from "../components/home";
import Bk from "../components/bookeep";

document.addEventListener("DOMContentLoaded", () => {
	render(<Bk />, document.body.appendChild(document.createElement("div")));
});
