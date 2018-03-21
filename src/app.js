import 'bootstrap/scss/bootstrap.scss'
import './app.scss'
import React from 'react'
import { withRouter } from 'react-router-dom'
import Routes from './routes'
import AppNavigator from './components/navigator'

class App extends React.Component {
  render() {
    return (
    	<div>
	    	<AppNavigator/>
	    	<Routes/>
    	</div>
    );
  }
}

export default withRouter(App);