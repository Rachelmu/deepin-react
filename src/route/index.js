import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'


import Home from '../containers/Home'
import ShowData from '../containers/Display'

const routeConfig = [
	{
		path: '/home/index',
		component: Home
	},
	{
		path: '/home/showdata',
		component: ShowData
	}
]

const BasicRouter = () => (
	<HashRouter>
		<Switch>
			{routeConfig.map(item => (
				<Route exact path={item.path} component={item.component} key={item.path} />
			))}
		</Switch>
	</HashRouter>
)

export default BasicRouter