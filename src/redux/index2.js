export function createStore(reducer, enhancer) {
  if (enhancer) return enhancer(createStore)(reducer)

    let currentState = {}, // preloadState
    listeners = []

  function getState() {
    return currentState
  }

  function subscribe(listener) {
    listeners.push(listener)

    return function unsubscribe() {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  function dispatch(action) {
    try {
      currentState = reducer(currentState, action)
    } catch(e) {
      console.log(e)
    }
    listeners.forEach(listener => listener())
  }

  dispatch({ type: 'init-x-x-x' })

  const store = {
    dispatch,
    getState,
    subscribe
  }

  return store
}

function compose(...chain) {
  if (chain.length === 1) return chain[0]
  return chain.reduce((a, b) => (...args) => a(b(...args)))
}

export function applyMiddleware(...middleware) {
  return function (createStore) {
    return (reducer) => {
      const store = createStore(reducer)
      let dispatch = () => {}
      const middlewareAPI = {
        getState: store.getState,
        dispatch: action => dispatch(action)
      }
      const chain = middleware.map(middleware => middleware(middlewareAPI))
      dispatch = compose(...chain)(store.dispatch)
      return {
        ...store,
        dispatch
      }
    }
  }
}

export function combineReducers (reducers) {
  const reducerKeys = Object.keys(reducers)

  // 使用combineReducers函数拿到的合并后的reducer
  return function combination(state, action) {
    let hasChanged = false
    const nextState = {}
    for (let i = 0, len = reducerKeys.length; i < len; i ++) {
      const key = reducerKeys[i],
        reducer = reducers[key],
        previousStateForKey = state[key],
        nextStateForKey = reducer(previousStateForKey, action)

      nextState[key] = nextStateForKey
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey // 对象之间比较的是指针, 这也是redux让我们必须返回一个全新的对象的原因
    }
    // 再次判断就是判断state的长度和reducer的长度
    hasChanged = hasChanged || reducers.length !== Object.keys(state).length

    // 若未更新(你的reducer直接返回原来的state)就返回旧的state
    return hasChanged ? nextState : state
  }
}