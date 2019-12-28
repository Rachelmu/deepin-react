// import App from './App'
import React, { Fragment } from 'react'
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css';

import App from './App.js'
import Login from './containers/Login'
import Profile from './containers/Profile'

// 基本路由, 匹配 login
const BaseRouter = () => (
	<HashRouter>
		<Switch>
			<Route exact path="/" render={() =>
				<Redirect to='/login'></Redirect>
			}></Route>
			<Route path='/login' component={Login} />
			{/* 别 TM 的用 exact */}
			<Route path='/home' component={App} />
			<Route path='/profile' component={Profile} />
		</Switch>
	</HashRouter>
)

ReactDOM.render(
	<Fragment>
		<BaseRouter style={{ height: '100%' }} />
	</Fragment>,
	document.getElementById('app')
)