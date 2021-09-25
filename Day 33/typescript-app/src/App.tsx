import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoList from "./TodoList";
import Todos from "./Todos";

const App = () => {
	return (
		<div className=="App">
			<Todos />
		</div>
	);
};

export default App;
