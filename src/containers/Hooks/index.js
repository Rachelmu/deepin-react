import React, { useState, useEffect } from 'react'

const Example = props => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You Click Me ${count} Times`
  })

  return (
    <Fragment>
      <p>{count}</p>
      <button onclick={() => { setCount(count + 1) }}>AddCount</button>
    </Fragment>
  )
}

export default Example