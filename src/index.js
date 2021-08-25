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
import { NameForm } from "./Forms/NameForm";
import { SelectForm } from "./Forms/SelectForm";
import { FileInput } from "./Forms/FileInput";
import { MultipleInputs } from "./Forms/MultipleInputs";
import { Calculator } from "./LiftingStateUp/Calculator";
import { WelcomeDialog } from "./CompositionvsInheritance/WelcomeDialog";
import { SplitPane } from "./CompositionvsInheritance/SplitPane";
import { SignUpDialog } from "./CompositionvsInheritance/SignUpDialog";

ReactDOM.render(
	<>
		<SplitPane
			left={<WelcomeDialog color="blue" />}
			right={<WelcomeDialog color="green" />}
		/>

		<SignUpDialog />

		<Calculator />

		<Clock />
		<Counter />
		<Toggle />
		<LoginControl />
		<Page />
		<NumberList numbers={[1, 2, 3, 4, 5, 6]} />

		<NameForm />
		<SelectForm multiple={true} />

		<FileInput />

		<MultipleInputs />
	</>,
	document.querySelector("#root")
);
