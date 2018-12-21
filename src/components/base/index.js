import React from 'react'
export default class Base extends React.Component {
  render() {
    return (
      <section className="base">
        <section className="base-right">{this.props.children}</section>
      </section>
    )
  }
}
