import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from '@emotion/styled'

const VerticallyExpadingInlineBlockChild = styled.div(({ childHeight }) => {
  return {
    margin: 0,
    height: childHeight
  }
})

class InlineExample1 extends React.Component {
  listener = null
  state = {
    childHeight: 1
  }
  componentDidUpdate() {
    if (this.state.childHeight === 100) {
      this.setState({ childHeight: 1 })
    }
  }
  componentWillMount = () => {
    this.intervalHandler = setInterval(() => {
      this.setState({
        childHeight: this.state.childHeight + 1
      })
    }, 300)
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
          <div className="inline d1" />
          <div className="inline d1" />
          <div className="inline d1">
            child inline-block element expanding height with out text
            <VerticallyExpadingInlineBlockChild
              childHeight={childHeight}
              className="inline-block child-of-inline"
            />
          </div>
          <ol>
            <li>
              if the children element of the inline element has no text then the
              bottom of the child element will be aligned with the parent
              element text. parent inline element
            </li>
            <li>
              you can observe that parent's Inline content height is not
              effected by its children
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
      </div>
    )
  }
}
export default InlineExample1
