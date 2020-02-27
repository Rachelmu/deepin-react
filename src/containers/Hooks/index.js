import React, { Fragment, useState, useEffect, useContext, useLayoutEffect, useMemo, createContext, useReducer, useCallback, useRef } from 'react'

// useState
const UseStateExp = props => {
  const [a, setA] = useState(0)

  return (
    <Fragment>
      <button onClick={() => setA(a + 1)}>
        {a}
      </button>
    </Fragment>
  )
}

// useEffect
const UseEffectExp = props => {
  const [a, seta] = useState(0)

  useEffect(() => {
    console.log('aChanged', a)
  }, [a])
  return (
    <Fragment>
      <button onClick={() => seta(a + 1)}>
        {a}
      </button>
    </Fragment>
  )
}

// useContext
const NameContext = createContext('jeden')

const Inner = props => {
  const value = useContext(NameContext)
  console.log(value)
  return (
    <Fragment>
      Inner
    </Fragment>
  )
}

const UseContextExp = props => {
  return (
    <NameContext.Provider value='JedenZhan'>
      <Inner />
    </NameContext.Provider>
  )
}

// useReducer
const initState = {
  count: 0
}

const reducer = (state, action) => {
  if (action.type === 'add') return {
    count: state.count + 1
  }

  if (action.type === 'incre') return {
    count: state.count - 1
  }
}

const UseReducerExp = props => {
  const [state, dispatch] = useReducer(reducer, initState)


  return (
    <Fragment>
      <button onClick={() => { dispatch({ type: 'add' }) }}>{state.count}</button>
      <button onClick={() => { dispatch({ type: 'incre' }) }}>{state.count}</button>
    </Fragment>
  )
}

// useCallback
const set = new Set()

const UseCallbackExp = props => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(999)

  const callback = useCallback(() => {
    console.log(a)
  }, [a])
  set.add(callback)

  return (
    <Fragment>
      a:{a}, size:{set.size}
      <button onClick={() => setA(a + 1)}>set a</button>
      <button onClick={() => setB(b - 1)}>set b</button>
    </Fragment>
  )
}

// useMemo
const UseMemoExp = props => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(999)
  const memoValue = useMemo(() => {
    console.log('重新计算')
    return a + b
  }, [a, b])

  return (
    <Fragment>
      <button onClick={() => { setA(a + 1) }}>a: {a} memo: {memoValue}</button>
      <button onClick={() => { setB(b - 1) }}>b: {b} memo: {memoValue}</button>
    </Fragment>
  )
}

// useRef
const UseRefExp = props => {
  const el = useRef(null)
  const onclick = () => {
    console.log(el.current)
    el.current.focus()
  }

  return (
    <Fragment>
      <input ref={el} type='text' />
      <button onClick={() => { onclick() }}>click me</button>
    </Fragment>
  )
}

// without memo
const WithoutMemo = props => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(999)

  const expensive = () => {
    console.log('computed')
    let sum = 0
    for (let i = 0; i < a * 100; i++) {
      sum += i
    }
    return sum
  }

  return (
    <Fragment>
      <p>{a}-{b}-{expensive()}</p>
      <button onClick={() => { setA(a + 1) }}>set a</button>
      <button onClick={() => { setB(b - 1) }}>set b</button>
    </Fragment>
  )
}




const HooksExp = props => (
  <Fragment>
    <UseStateExp />
    <hr />
    <UseEffectExp />
    <hr />
    <UseContextExp />
    <hr />
    <UseReducerExp />
    <hr />
    <UseCallbackExp />
    <hr />
    <UseMemoExp />
    <hr />
    <UseRefExp />
    <hr />
    <WithoutMemo />
  </Fragment>
)



export default HooksExp