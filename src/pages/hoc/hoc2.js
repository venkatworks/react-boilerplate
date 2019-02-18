import React, { PureComponent } from 'react'

export function hoc2(WrappedComponent) {
  function onclick(e) {
    console.log('in hoc1 onclick:' + this.props.className)
  }
  return class extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} click={onclick.bind(this)} />
    }
  }
}
