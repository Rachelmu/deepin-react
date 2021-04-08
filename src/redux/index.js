export const createStore = (reducer, enhancer) => {
  if (enhancer) enhancer(createStore)(reducer)

  let currentState = {},
    listeners = []
  

  const getState = () => currentState

  const dispatch = (action) => {
    if (!action.type) console.error('xxx')
    try {
      currentState = reducer(state, action)
    } catch(e) {
      console.log(e)
    }
    listeners.forEach(listener => listener())
  }

  const subscribe = listener => {
    listeners.push(listener)

    return () => {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  dispatch({ type: 'init XXXX' })

  return {
    dispatch,
    getState,
    subscribe
  }
}

const compose = (...chain) => {
  if (chain.length === 1) return chain[0]
  return chain.reduce((a, b) => (...arg) => a(b(...arg)), )
}


export const applyMiddleware = (...middleWares) => createStore => reducer => {
  let dispatch = () => {}

  const store = createStore(reducer)

  const middleWareAPI = {
    dispatch: action => dispatch(action),
    getState: store.getState
  }

  const chain = middleWares.map(middleWare => middleWare(middleWareAPI))

  dispatch = compose(...chain)(store.dispatch)

  return {
    ...store,
    dispatch
  }
}

export const combineReducers = (reducers) => {
  const reducerKeys = Object.keys(reducers)
  
  return (state, action) => {
    const nextState = {}
    let isChanged = false
    for (let i = 0, n = reducerKeys.length; i < n; i ++) {
      const key = reducerKeys[i],
        currentReducer = reducers[key],
        currentStateForKey = state[key],
        nextStateForKey = currentReducer(currentStateForKey, action)

      nextState[key] = nextStateForKey
      isChanged = isChanged || currentStateForKey !== nextStateForKey
    }

    return isChanged ? nextState : state
  }
}