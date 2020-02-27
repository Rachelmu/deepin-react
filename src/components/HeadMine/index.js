import React, { Fragment, useState } from 'react'
import { Popover, Button, Modal } from 'antd'

import './style'

const HeadMine = props => {
  const [visible, setVisiable] = useState(false)

  const showModel = () => {
    setVisiable(true)
  }

  const handleCancel = () => {
    setVisiable(false)
  }

  const logout = () => {
    location.replace('/#/login')
  }

  return (
    <Fragment>
      <span onClick={showModel} className='logout'>安全退出</span>
      <Modal
        title="确定要安全退出吗"
        visible={visible}
        onOk={logout}
        onCancel={handleCancel}
      >
        <p>将删除本地缓存用户数据</p>
      </Modal>
      <Popover placement="bottomRight" title={'Hello Jeden'} content={
        '啦啦啦'
      } trigger="click">
        <Button>
          Jeden
          </Button>
      </Popover>
    </Fragment>
  )
}

export default HeadMine