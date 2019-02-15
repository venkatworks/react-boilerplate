import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InlineExample1 from './inline-example1'
import InlineExample2 from './inline-example2'

const BlockPage = () => (
  <div>
    <div className="example-space">
      <div className="inline d1">inline 1</div>
      <div className="inline d1" />
      <div className="inline d1">
        please observe here that it is starting at the bottom of text
        <div className="inline-block child-of-inline" />
      </div>
      <div className="inline d1" />
    </div>
    <ol>
      <li>
        {' '}
        The children elements position start from the bottom of text of parent
        inline element
      </li>
      <li> Inline content height is not effected by its children</li>
      <li>
        {' '}
        Inline element's vertical padding can be rendered based on its children
        height and width
      </li>
      <li>
        {' '}
        Inline element's vertical padding can be rendered based on its "siblings
        children content" or siblings inline-blocks
      </li>
      <li>
        {' '}
        the second line inline elements contnent will be rendered from bellow
        the above line inline element's content.
      </li>
    </ol>
    <InlineExample1 />
    <InlineExample2 />
  </div>
)
export default BlockPage
