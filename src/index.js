import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import "./css/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

import App from "./app";
ReactDOM.render(<App />, document.getElementById("root"));
