import React, { Component, Fragment } from 'react'

import Register from '../Register/Register'
import Login from '../Login/Login'

class Home extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {
		return (
			<Fragment>
				<Register />
				<Login />
			</Fragment>
		)
	}

}

export default Home