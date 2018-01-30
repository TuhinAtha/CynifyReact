import React from 'react'
import ReactDom from 'react-dom'
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {MuiThemeProvider} from 'material-ui/styles'
import store from './redux/store'
import history from './history'
import App from './app'

ReactDom.render(
	<Provider store={store}>
		<Router history={history} component={App}>
			<MuiThemeProvider>
				<App />
			</MuiThemeProvider>
		</Router>
	</Provider>,
	document.getElementById('app')
);