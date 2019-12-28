import React, { Component, Fragment } from 'react'

import BaseForm from '@/components/BaseForm'
import CommentComp from '@/components/CommentComp'

import './style'

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
				<hr />
				<p>评论</p>
				<CommentComp />
			</Fragment>
		)
	}

}

export default Home