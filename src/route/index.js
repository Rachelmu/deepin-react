import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import { MenuConfig } from '../config'
import containers from '../containers'

const BasicRouter = () => (
	<HashRouter>
		<Switch>
			{MenuConfig.map(item => (
				<Route exact path={item.route} component={containers[item.container]} key={item.route} />
			))}
		</Switch>
	</HashRouter>
)

export default BasicRouter