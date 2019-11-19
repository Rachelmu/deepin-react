import React, { Fragment } from "react"

import Todo from "./components/Todo"
import Hooks from './components/Hooks'

const App = () => {
	return (
		<Fragment>
			<Todo></Todo>
			<Hooks></Hooks>
		</Fragment>
	)
}

export default App