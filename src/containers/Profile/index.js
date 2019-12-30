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
        <div className="container">
          <div className="head-img">
            <img src={Img} alt="" />
            <p>Jeden</p>
          </div>


        </div>
      </Fragment>
    )
  }
}

export default Profile