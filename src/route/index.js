import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import { MenuConfig } from '../config'
import store from '../store'
import containers from '../containers'

const BasicRouter = () => (
	<HashRouter>
		<Switch>
			{MenuConfig.map(item => (
				<Route exact path={item.route} render={() => {
					const Comp = containers[item.container]
					return store.loginStatus ? <Comp /> : <Redirect to='/login' />
				}} key={item.route} />
			))}
		</Switch>
	</HashRouter>
)

export default BasicRouter