/* eslint-disable */

import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import "babel-polyfill";
import "normalize-css";

import App from "./containers/App";
import tickets from "./tickets.json";
require("./favicon.ico");

render(
	<AppContainer>
		<App ticketsList={tickets}/>
	</AppContainer>,
	document.getElementById("app")
);
