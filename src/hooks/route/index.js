import React, { Fragment } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import { MenuConfig } from '../config'
import useLogin from '../hooks/useLogin'
import * as containers from '../containers'


const route = (r) => {
	const Component = r.container && containers[r.container]()
	return (
		<Route
			key={r.route || r.key}
			exact
			path={r.route || r.key}
			render={props => {
				const reg = /\?\S*/g
				// 匹配?及其以后字符串
				const queryParams = location.hash.match(reg)
				// 去除?的参数
				const { params } = props.match
				Object.keys(params).forEach(key => {
					params[key] =
						params[key] && params[key].replace(reg, '')
				})
				props.match.params = { ...params }
				const merge = {
					...props,
					query: queryParams ? queryString.parse(queryParams[0]) : {},
				}
				// 重新包装组件
				const wrappedComponent = (
					<Fragment>
						<Component {...merge} />
					</Fragment>
				)
				return useLogin()
					? wrappedComponent
					: <Redirect to='/login' />
			}}
		/>
	)
}

const BasicRouter = () => (
	<HashRouter>
		<Switch>
			{MenuConfig.map(item => {
				return item.container ? route(item) : item.children && item.children.map(r => route(r))
			})}
		</Switch>
	</HashRouter>
)

export default BasicRouter