import * as actionTypes from './actionTypes'

export const addTodoItem = data => {
  return {
    type: actionTypes.ADD_TODO,
    data
  }
}

