import React, { Component, Fragment } from 'react'
import { Popover, Button, Modal } from 'antd'

import './style'

class HeadMine extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
    }
  }

  logout = () => {
    location.replace('/#/login')
  }

  componentDidMount() {

  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  redictToProfile() {
    location.replace('/#/profile')
  }

  render() {
    return (
      <Fragment>
        <span onClick={this.showModal} className='logout'>安全退出</span>
        <Modal
          title="确定要安全退出吗"
          visible={this.state.visible}
          onOk={this.logout}
          onCancel={this.handleCancel}
        >
          <p>将删除本地缓存用户数据</p>
        </Modal>
        <Popover placement="bottomRight" title={'Hello Jeden'} content={
          <Button onClick={this.redictToProfile}>
            进入我的设置
          </Button>
        } trigger="click">
          <Button>
            Jeden
          </Button>
        </Popover>
      </Fragment>
    )
  }
}

export default HeadMine