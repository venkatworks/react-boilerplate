import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InlineExample0 from './inline-example0'
import InlineExample1 from './inline-example1'
import InlineExample2 from './inline-example2'
import InlineExample3 from './inline-example3'

const BlockPage = () => (
  <div>
    <InlineExample0 />
    <InlineExample1 />
    <InlineExample2 />
    <InlineExample3 />
  </div>
)
export default BlockPage
