import React from 'react'
import { hot } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import { Route, Router } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './middleware'
import LoginPage from './pages/login/index'
import HocPage from './pages/hoc/index'
import SignupPage from './pages/signup/index'
import PositionPage from './pages/html-css/position/index'
import BlockPage from './pages/html-css/block/index'
import FlexPage from './pages/html-css/flex/index'
import GridPage from './pages//html-css/grid/index'
import DashboardPage from './pages/dashboard/index'
import NotFoundPage from './pages/not-found/index'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

if (process.env.NODE_ENV !== 'production') {
  window.React = React
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path="/" component={BlockPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/position" component={PositionPage} />
            <Route path="/block" component={BlockPage} />
            <Route path="/flex" component={FlexPage} />
            <Route path="/grid" component={GridPage} />
            <Route path="/hoc" component={HocPage} />
            <Route path="/index.html" component={LoginPage} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default hot(module)(App)
