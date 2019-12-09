import React, { Component, Fragment } from 'react'

import BaseForm from '@/components/BaseForm'

class Home extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {
		return (
			<Fragment>
				<p>基本表单</p>
				<BaseForm />

			</Fragment>
		)
	}

}

export default Home