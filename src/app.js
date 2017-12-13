import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import configureStore from './store';  
import Login from './modules/login/default';
import CustomerList from './modules/customers/list/default';
import CustomerDetail from './modules/customers/detail/default';

import Dashboard from './modules/dashboard/default';

const isActiveFunction = (match,location) =>{
	console.info(match,location)
	if(match){
		return  match.path == location.pathname;
	}
	return false;
}
export default class App extends React.Component {
  render() {
  	window.REACT_KEY = 0;
    return (
      /*<Login/>*/
       <Router>
            <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				  <a className="navbar-brand" href="#">Navbar</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarNav">
				    <ul className="navbar-nav">
				      <li className="nav-item">
				        <NavLink className="nav-link" isActive={isActiveFunction} activeClassName="active" to={'/'}>Dashboard</NavLink>
				      </li>
				      <li className="nav-item">
				      	<NavLink className="nav-link" isActive={isActiveFunction} activeClassName="active" to={'/customerlist'}>CustomerList</NavLink>
				      </li>
				    </ul>
				  </div>
			   </nav>
               <Switch>
                  <Route exact path='/' component={Dashboard} />
                  <Route exact path='/customerlist' component={CustomerList} />
                  <Route exact path='/customer/:id' component={CustomerDetail} />
               </Switch>
            </div>
         </Router>
    );
  }
}
try{
	const store = configureStore();
	store.subscribe(() => {
		console.log("Store Updated",store.getState());
	});
	ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
}catch(e){
	console.log("problem here");
}
