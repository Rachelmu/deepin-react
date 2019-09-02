import React, { Fragment, useState, useEffect, useReducer } from 'react'

const Hooks = props => {
  let [count, changeCount] = useState(0)

  return (
    <Fragment>
      {count}
      <button onClick={() => {changeCount(count + 1)}}>+ 1</button>
    </Fragment>
  )
}

export default Hooks