import React, { Component, Fragment } from 'react'


class LifeCircle extends Component {
  constructor(props) {
    super(props)

  }

  static getDerivedStateFromProps(props) {
    console.log(props)
    return props
  }

  getSnapshotBeforeUpdate(nextProps) {

  }




  render() {
    return (
      <Fragment>
        HelloWorld
      </Fragment>
    )
  }
}

export default LifeCircle