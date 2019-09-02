import { combineReducers } from 'redux'

import * as actionTypes from './actionTypes'

const todoReducer = (defaultStore = {
  item: '',
  list: ''
}, action) => {
  let result = {...defaultStore}

  switch(action.type) {
    case actionTypes.TODO_ITEM:
      console.log(action)
  }

  return result
}

const rootReducer = combineReducers({
  todoReducer
})

export default rootReducer