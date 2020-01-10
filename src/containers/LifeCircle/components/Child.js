import React, { Component, Fragment } from 'react'

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
      next: 222
    }
  }

  static getDerivedStateFromProps(props) {
    console.log('props from father', props)
    let newProps = { ...props }
    newProps.count += 10
    return newProps
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps & nextState', nextProps, nextState)
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps)
    return 1
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