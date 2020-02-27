import React, { Fragment } from "react"
import { Layout } from 'antd'

import BasicRouter from './route'
import LeftMenu from './components/LeftMenu'
import HeadMine from './components/HeadMine'
import './assets/App.styl'

const { Header, Sider, Content } = Layout;

const App = () => (
  <Fragment>
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible>
        <div className="logo" style={{ color: '#fff', fontSize: '20px', marginTop: '20px', textAlign: 'center' }}> Jeden </div>
        <LeftMenu />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <div className='head-mine'>
            <HeadMine />
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          {/* 这里放匹配的容器 */}
          <BasicRouter />
        </Content>
      </Layout>
    </Layout>
  </Fragment>
)


export default App