import { useState } from 'react'

export const useReducer = (reducer, initial, init) => {
  let initialState
  if (init) {
    initialState = init(initial)
  } else {
    initialState = initial
  }
  const [state, setState] = useState(() => {
    return reducer(initialState, {})
  })
  const dispatch = action => setState(reducer(state, action))
  return [state, dispatch]
}
