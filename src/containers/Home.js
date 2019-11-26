import React, { Component, Fragment } from 'react'
import axios from 'axios'

import LoginForm from '../components/Form'

class Home extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		axios.get('http://localhost:8082').then(data => {
			console.log(data)
		})
	}

	render() {
		return (
			<Fragment>
				<LoginForm />
			</Fragment>
		)
	}

}

export default Home