import React, { Fragment, useState, useEffect } from 'react'
import './style/index.css'

const Step = props => {
  // 获取 配置文件
  console.log(props.config)
  const config = props.config,
    describtions = config.describtions,
    steps = config.steps || describtions.length

  const [step, nextStep] = useState(1),
    [show, setShow] = useState(true)

  let currentDescribtion = describtions[step - 1]
  useEffect(() => {
    if (step > steps) {
      setShow(true)
      nextStep(1)
    }
  }, [step])


  const { title, top, left, highLight, subDescs = [] } = currentDescribtion || {},
    { width = 'auto', height = 'auto' } = highLight
  return (
    <Fragment>
      <div className="main" style={{
        display: !show && 'none',
        top,
        left,
        width,
        height
      }}>
        <p className="exp">需要选中的地方</p>
        <div className="describtion" style={{ bottom: `${-subDescs.length - 5}rem` }}>
          <p className="title">{title}</p>
          <ul className="sub-desc">
            {
              subDescs.map(desc => <li>{desc}</li>)
            }
          </ul>
          <button className="next-step" onClick={() => { nextStep(step + 1) }}>{step === steps ? '我学会了' : '下一步'}</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Step