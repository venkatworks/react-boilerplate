import React, { PureComponent } from 'react'

export function hoc1(WrappedComponent) {
  function mousedown(e) {
    console.log('in hoc1 mousedown:' + this.props.className)
    e.stopPropagation()
  }
  return class extends PureComponent {
    mousedowncapture = e => {
      console.log('in hoc1 mousedowncapture:' + this.props.className)
    }
    mouseupcapture = e => {
      console.log('in hoc1 mouseupcapture:' + this.props.className)
    }
    mouseup = e => {
      console.log('in hoc1 mouseup:' + this.props.className)
    }
    render() {
      return (
        <WrappedComponent
          {...this.props}
          mousedowncapture={this.mousedowncapture}
          mouseupcapture={this.mouseupcapture}
          mousedown={mousedown.bind(this)}
          mouseup={this.mouseup}
        />
      )
    }
  }
}
