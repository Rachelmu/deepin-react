import React, { Component, Fragment } from 'react'

import BaseForm from '@/components/BaseForm'
import CommentComp from '@/components/CommentComp'
import ContextExp from '@/components/Context'

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
				<hr />
				<ContextExp></ContextExp>
			</Fragment>
		)
	}

}

export default Home