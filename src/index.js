// import App from './App'
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App.js'
import store from './redux'

ReactDOM.render(
	<Fragment>
		<Provider store={store}>
			<App name='Jeden' />
		</Provider>
	</Fragment>,
	document.getElementById('app')
)