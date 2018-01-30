import 'bootstrap/scss/bootstrap.scss'
import './app.scss'
import React from 'react'
import { withRouter } from 'react-router-dom'
import Routes from './routes'

class App extends React.Component {
  render() {
    return (
       <Routes/>
    );
  }
}

export default withRouter(App);