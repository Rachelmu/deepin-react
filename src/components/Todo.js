import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import store from '../redux'
import { addTodoItem } from '../redux/actionCreator'

class Todo extends Component {

  constructor(props) {
    super(props)

    console.log(props)
  }

  render () {
    return (
      <Fragment>

      </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state,
    ownProps: ownProps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodoItem,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)