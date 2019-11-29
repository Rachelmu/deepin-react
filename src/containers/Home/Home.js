import React, { Component, Fragment } from 'react'

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
				<Login />
			</Fragment>
		)
	}

}

export default Home