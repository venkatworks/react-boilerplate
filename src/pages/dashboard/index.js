import React from 'react'
import { getData } from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLineData } from '../../selectors/index'
// import { LineChart } from 'react-easy-chart'

const mapStateToProps = state => ({
  data: getLineData(state)
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getData
    },
    dispatch
  )
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage)
