import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from '@emotion/styled'

const ExpadingPaddingInlineBlockChild = styled.div(({ childHeight }) => {
  return {
    margin: 0,
    height: 1,
    padding: childHeight
  }
})

class InlineExample2 extends React.Component {
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
      console.log(this.state.childHeight)
      this.setState({
        childHeight: this.state.childHeight + 1
      })
    }, 100)
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
            className="inline-block child-of-inline"
          />
          <div className="inline d1">inline 1</div>
        </div>
        <ol>
          <li>
            Inline element's vertical padding can be rendered based on its
            children height and width
          </li>
          <li>
            {' '}
            Inline element's vertical padding can be rendered based on its
            "siblings children content" or siblings inline-blocks
          </li>
          <li>
            {' '}
            the second line inline elements contnent will be rendered from
            bellow the above line inline element's content.
          </li>
        </ol>
      </div>
    )
  }
}
export default InlineExample2
