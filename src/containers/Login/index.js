import React, { Component, Fragment } from 'react'
import { Tabs } from 'antd'

import BaseForm from '@/components/BaseForm'
import './style/index.styl'

const { TabPane } = Tabs

class Login extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <Fragment>
        <div className='login-container'>
          <Tabs defaultActiveKey="1" size='large'>
            <TabPane tab="登录" key="1" className='child-tab'>
              <BaseForm login={true} />
            </TabPane>
            <TabPane tab="注册" key="2" className='child-tab'>
              <BaseForm register={true} />
            </TabPane>
          </Tabs>
        </div>
      </Fragment>
    )
  }
}

export default Login