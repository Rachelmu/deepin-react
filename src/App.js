import React, { Fragment } from "react"
import { Layout, Menu, Icon } from 'antd';

import Todo from "./components/Todo"
import Hooks from './components/Hooks'

const { Header, Sider, Content } = Layout;

const App = () => {
	const state = {
    collapsed: false
  }

  const toggle = () => {
    state.collapsed = !state.collapsed
  };
	return (
		<Fragment>
			<Layout style={{ height: '100%' }}>
        <Sider trigger={null} collapsible collapsed={state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
		</Fragment>
	)
}

export default App