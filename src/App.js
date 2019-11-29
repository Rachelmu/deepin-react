import React, { Fragment } from "react"
import { Layout, Menu, Icon } from 'antd'

import BasicRouter from './route'
import LeftMenu from './components/LeftMenu'


import './assets/App.styl'

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
          <div className="logo" style={{ color: '#fff', fontSize: '20px', marginTop: '20px', textAlign: 'center' }}> Jeden </div>
          <LeftMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <BasicRouter />
          </Content>
        </Layout>
      </Layout>
    </Fragment>
  )
}

export default App