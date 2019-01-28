import React from 'react'
import { render } from 'react-testing-library'
import App from './App'
import sinon from 'sinon'
const cons = {
  list: [],
  log: obj => cons.list.push(obj)
}
const helper = {
  security: params => {
    cons.log('in helper.security')
    cons.log(params)
  }
}

const securityMockFn = response => {
  cons.log(response)
  return params => {
    params.success(response)
  }
}

const thunk = data => {
  return dispatch => {
    dispatch({})
    const params = {
      success: res => {
        cons.log('in success')
        cons.log(res)
        dispatch({ type: 'SUCCESS' })
        dispatch({ type: 'SUCCESS_data' })
      }
    }
    helper.security(params)
  }
}

describe('App', () => {
  it('Renders without error', () => {
    render(<App />)
  })
  it('sinon', () => {
    const dispatch = sinon.spy()
    const securityMock = sinon
      .stub(helper, 'security')
      .callsFake(securityMockFn({ a: '1' }))
    thunk({ type: 'data' })(dispatch)
    expect(dispatch.callCount).toBe(3)
    //expect(cons.list).toBe([])
  })
})
