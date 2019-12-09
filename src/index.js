// import App from './App'
import React, { Component, Fragment } from 'react'
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Provider } from 'react-redux'

import 'antd/dist/antd.css';

import App from './App.js'
import store from './redux'
import Login from './containers/Login'
import BasicRouter from './route'

const BaseRouter = () => (
	<HashRouter>
		<Switch>
			<Route exact path="/" render={() =>
				<Redirect to='/login'></Redirect>
			}></Route>
			<Route path='/login' component={Login} />
			{/* 别 TM 的用 exact */}
			<Route path='/home' component={App} />
		</Switch>
	</HashRouter>
)

ReactDOM.render(
	<Fragment>
		<Provider store={store}>
			<BaseRouter style={{ height: '100%' }} />
		</Provider>
	</Fragment>,
	document.getElementById('app')
)