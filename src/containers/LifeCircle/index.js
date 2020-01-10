import React, { Fragment, Component } from 'react'
import { Button } from 'antd'

import Child from './components/Child'

class LifeCircle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 1
    }
  }

  // static getDerivedStateFromProps() {
  //   console.log()

  //   return {

  //   }
  // }

  addCount = () => {
    let count = this.state.count

    count++

    this.setState({
      count
    })
  }

  componentWillUpdate() {
    console.log('component will update')
  }

  componentDidUpdate() {
    console.log('component did update')

  }



  render() {
    return (
      <Fragment>
        <Child count={this.state.count} />

        <p>{this.state.count}</p>
        <p>{this.state.count}</p>
        <p>{this.state.count + 1}</p>
        <Button onClick={this.addCount}>
          Add Count
        </Button>
      </Fragment>
    )
  }
}

export default LifeCircle