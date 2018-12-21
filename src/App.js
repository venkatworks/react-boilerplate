import React from 'react'
import { hot } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import { Route, Router } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './middleware'
import LoginPage from './pages/login/index'
import SignupPage from './pages/signup/index'
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
            <Route exact path="/" component={LoginPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/index.html" component={LoginPage} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default hot(module)(App)
