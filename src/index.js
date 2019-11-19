// import App from './App'
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'antd/dist/antd.css';

import App from './App.js'
import store from './redux'

ReactDOM.render(
	<Fragment>
		<Provider store={store}>
			<App style={{height: '100%'}}/>
		</Provider>
	</Fragment>,
	document.getElementById('app')
)