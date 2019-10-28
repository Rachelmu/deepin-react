// import App from './App'
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {

	constructor(props) {
		super(props)
	}



	render () {
		return (
			<Fragment>
					Hello World
			</Fragment>
		)
	}
}

console.log(<App name='jeden' key='1'><div>Component</div></App>)

ReactDOM.render(<App name='Jeden' />, document.getElementById('app'))