import "./index.css"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Sketchbook } from "./components/Sketchbook.js"

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Sketchbook />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
)
