import React, { Component, Fragment } from 'react'
import { Menu, Icon } from 'antd'

import { MenuConfig } from '../config/config'

const { SubMenu } = Menu

const LeftMenu = () => {

	const switchMenu = route => {
		location.replace('/#' + route)
	}

	const renderMenu = list => {
		return list.map(item => {
			if (item.children) {
				return (
					<SubMenu
						title={
							<span>
                <Icon type={item.iconType} />
                <span route={item.route}>{item.title}</span>
              </span>
						}
						key={ item.title }
						onClick={() => switchMenu(item.route)}
					>
						{
							renderMenu(item.children)
						}
					</SubMenu>
				)
			}
			return (
				<Menu.Item title={ item.title } key={ item.title } onClick={() => switchMenu(item.route)}>
					<Icon type={item.iconType}/>
					<span route={item.route}>{ item.title }</span>
				</Menu.Item>
			)
		})
	}

	return (
		<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className='left-menu'>
			{
				renderMenu(MenuConfig)
			}
		</Menu>
	)
}


export default LeftMenu