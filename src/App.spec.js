import React from 'react'
import { render } from 'react-testing-library'
import App from './App'
import sinon from 'sinon'

describe('App', () => {
  it('Renders without error', () => {
    render(<App />)
  })
})
