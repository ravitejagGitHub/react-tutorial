import React from "react";
import ReactDOM from "react-dom";
// import { App } from './App';
import { Clock } from "./State/Clock";

import "./index.css";
import { Counter } from "./State/Counter";

import { Toggle } from "./HandlingEvents/Toggle";
import { LoginControl } from "./ConditionalRendering/LoginControl";
import { Page } from "./ConditionalRendering/PreventingRendering/Page";
import { NumberList } from "./ListsAndKeys/List";

ReactDOM.render(
	<>
		<Clock />
		<Counter />
		<Toggle />
		<LoginControl />
		<Page />
		<NumberList numbers={[1, 2, 3, 4, 5, 6]} />
	</>,
	document.querySelector("#root")
);
