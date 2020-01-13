// import App from './App'
import React, { Fragment } from 'react'
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'

// 基本路由, 匹配 login
const BaseRouter = () => (
	<HashRouter>
		<Switch>
			<Route exact path="/" render={() =>
				<Redirect to='/login'></Redirect>
			}></Route>
			<Route path='/login' component={(() => require('./containers/Login').default)()} />
			{/* 别 TM 的用 exact */}
			<Route path='/home' component={(() => require('./App').default)()} />
		</Switch>
	</HashRouter>
)

ReactDOM.render(
	<Fragment>
		<BaseRouter style={{ height: '100%' }} />
	</Fragment>,
	document.getElementById('app')
)