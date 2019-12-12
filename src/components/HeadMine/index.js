import React, { Component, Fragment } from 'react'
import { Popover, Button } from 'antd'

import './style'

class HeadMine extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  logout = () => {
    location.replace('/#/login')
  }

  componentDidMount() {

  }

  render() {
    return (
      <Fragment>
        <span onClick={this.logout} className='logout'>Logout</span>
        <Popover placement="bottomRight" title={'text'} content={'content'} trigger="click">
          <Button>
            Jeden
          </Button>
        </Popover>
      </Fragment>
    )
  }
}

export default HeadMine