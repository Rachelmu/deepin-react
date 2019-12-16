import React, { Component, Fragment } from 'react'

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
      next: 222
    }
  }

  static getDerivedStateFromProps(props) {
    console.log(props)

    return null
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    return false
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps)
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log(snapShot)
  }

  componentDidMount() {
    console.log(this.props)
  }


  render() {
    return (
      <Fragment>
        <p> Child : {this.props.count}</p>
      </Fragment>
    )
  }
}

export default Child