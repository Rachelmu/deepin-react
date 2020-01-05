import React, { Component, Fragment } from 'react'

import Img from '../../assets/img/testhead.jpg'

import './style'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  render() {
    return (
      <Fragment>
        <header>我的</header>
        <div className="container">
          <div className="head-img">
            <img src={Img} alt="" />
            <span>用户名:</span><span>Jeden</span>
          </div>


        </div>
      </Fragment>
    )
  }
}

export default Profile