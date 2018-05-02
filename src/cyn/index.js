import React from 'react'
import ReactDom from 'react-dom'
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {MuiThemeProvider} from 'material-ui/styles'
import {store, persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import history from './history'
import App from './app'
import theme from './theme'

ReactDom.render(
	<Provider store={store}>
	 <PersistGate loading={null} persistor={persistor}>
      <Router history={history} component={App}>
				<MuiThemeProvider theme={theme}>
					<App />
				</MuiThemeProvider>
			</Router>
   </PersistGate>
		
	</Provider>,
	document.getElementById('app')
);