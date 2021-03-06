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

class InlineExample2 extends React.Component {
  listener = null
  state = {
    childHeight: 1
  }
  componentDidUpdate() {
    if (this.state.childHeight === 80) {
      this.setState({ childHeight: 1 })
    }
  }
  componentWillMount = () => {
    this.intervalHandler = setInterval(() => {
      console.log(this.state.childHeight)
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
            className="inline"
          >
            <b>expanding padded inline element</b>
          </ExpadingPaddingInlineBlockChild>
          <div className="inline d1">inline 1</div>
          <ol>
            <li>
              Observe how the padding of inline element is covering other top
              inline elements
            </li>
            <li>
              Observe how the padding of inline element overflowing the parent
              element.
            </li>
            <li>
              Observe how the 'padded element' content is aligning with the
              other inline elements
            </li>
            <li>
              Observe how the 'inline 1' element's content and padding is
              covered with next line inline elements padding.
            </li>
          </ol>
        </div>
      </div>
    )
  }
}
export default InlineExample2
