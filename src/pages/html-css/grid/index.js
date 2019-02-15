import React from 'react'

class DashboardPage extends React.Component {
  handleLike = () => {
    return this.props.actions.likePostById(pageId)
  }
  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (
      <div>
        <div className="layer1">
          <div className="layer3" />
          <div className="layer2">
            <div className="layer3" />
          </div>
        </div>
      </div>
    )
  }
}
export default DashboardPage
