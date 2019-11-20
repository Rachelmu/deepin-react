import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from '../containers/Home.js'

const BasicRouter = () => (
	<HashRouter>
		<Switch>
			<Route exact path="/" render={() =>
    		<Redirect to='/login'></Redirect>
			}></Route>
			<Route exact path='/login' component={Home}/>
			<Route exact path='/home' component={Home}/>
			<Route exact path='/manage' component={Home}/>
		</Switch>
	</HashRouter>
)

export default BasicRouter