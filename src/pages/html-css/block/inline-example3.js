import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from '@emotion/styled'

const ExpadingPaddingInlineBlockChild = styled.div(({ childHeight }) => {
  return {
    margin: 0,

    padding: childHeight
  }
})

class InlineExample3 extends React.Component {
  listener = null
  state = {
    childHeight: 1
  }
  componentDidUpdate() {
    if (this.state.childHeight === 50) {
      this.setState({ childHeight: 1 })
    }
  }
  componentWillMount = () => {
    this.intervalHandler = setInterval(() => {
      this.setState({
        childHeight: this.state.childHeight + 1
      })
    }, 400)
  }
  componentWillUnmount = () => {
    clearInterval(this.intervalHandler)
  }
  render() {
    const { childHeight } = this.state
    return (
      <div>
        <div className="example-space">
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <div className="inline d1">inline 1</div>
          <ExpadingPaddingInlineBlockChild
            childHeight={childHeight}
            className="inline-block  child-of-inline"
          >
            <b>expanding padded inline-block element</b>
          </ExpadingPaddingInlineBlockChild>
          <div className="inline d1">inline 1</div>
          <ol>
            <li>
              observe how the 'expanding padded inline-block element' content
              text last line is aligned with other inline element text
            </li>
          </ol>
        </div>
      </div>
    )
  }
}
export default InlineExample3
