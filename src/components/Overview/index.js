import React, { Component, Fragment } from 'react'
import G2 from '@antv/g2'

class Overview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ]
    }
  }

  static getDerivedStateFromProps(props) {

  }



  componentDidMount() {
    const chart = new G2.Chart({
      container: 'g2',
      width: 600,
      height: 300
    })
    chart.source(this.state.data)
    chart
      .interval()
      .position('genre*sold')
      .color('genre')
    chart.render()

    const chart2 = new G2.Chart({
      container: 'g3',
      width: 600,
      height: 300
    })
    chart2.source(this.state.data)
    chart2
      .interval()
      .position('genre*sold')
      .color('genre')
    chart2.render()
  }

  getSnapshotBeforeUpdate() {

  }


  render() {
    return (
      <Fragment>
        <div id='g2'></div>
        <div id='g3'></div>
        <div id='g4'></div>
        <div id='g5'></div>
      </Fragment>
    )
  }
}

export default Overview