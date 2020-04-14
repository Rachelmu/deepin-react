import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import Step from '../module/Step'

const App = () => {
  return (
    <Fragment>
      <Step config={{
        describtions: [ // 每一步的配置
          {
            top: '100px',
            left: '200px',
            highLight: {
              height: '100px',
              width: '300px'
            },
            title: '第一步',
            subDescs: [
              '在这里, 你可以XXX',
              '在这里, 你可以CCC',
              '在这里, 你可以CCC',
              '在这里, 你可以CCC',
            ]
          },
          {
            top: '200px',
            left: '400px',
            highLight: {
              height: '100px',
              width: '100px'
            },
            title: '第二步',
            subDescs: [
              '在这里, 你可以ZZZ',
              '在这里, 你可以AAA',
            ]
          },
          {
            top: '300px',
            left: '500px',
            highLight: {
              height: '100px',
              width: '400px'
            },
            title: '恭喜你完成全部教程'
          }
        ]
      }} />
    </Fragment>
  )
}


ReactDOM.render(<App />, document.getElementById('app'))