import React, { PureComponent } from 'react'

class Paper extends React.Component {
  render() {
    return (
      <div
        onMouseDownCapture={this.props.mousedowncapture}
        onMouseUpCapture={this.props.mouseupcapture}
        style={{
          height: this.props.height || '30vh',
          width: this.props.width || '30vw',
          backgroundColor: this.props.bg || 'black'
        }}
        onClick={this.props.click}
        onMouseDown={this.props.mousedown}
        onMouseUp={this.props.mouseup}
      >
        {this.props.children}
      </div>
    )
  }
}
export default Paper
