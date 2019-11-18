import React, { Fragment } from "react"

import store from './redux'

import Todo from "./components/Todo"
import Hooks from './components/Hooks'

const App = () => {

	console.log(store)

	return (
		<Fragment>
			<Todo></Todo>
			<Hooks></Hooks>
		</Fragment>
	)
}

export default App