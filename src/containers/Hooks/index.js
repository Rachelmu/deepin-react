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
const UseCallBackExp = props => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(999)
  const callback = useCallback(() => {
    console.log(`a:${a} and b:${b} changed`)
  }, [a, b])

  return (
    <Fragment>
      <button onClick={() => { setA(a + 1); callback() }}>a: {a}</button>
      <button onClick={() => { setB(b - 1); callback() }}>b: {b}</button>
      <button onClick={() => { callback() }}> none</button>
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
    <UseCallBackExp />
    <hr />
    <UseMemoExp />
    <hr />
    <UseRefExp />
  </Fragment>
)



export default HooksExp