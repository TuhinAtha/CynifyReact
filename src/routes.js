import React from 'react'
import { Router, Switch, Route } from 'react-router-dom';

import history from './history'
//Pages
import Login from './modules/login/default';
import CustomerList from './modules/customers/list/default';
import CustomerDetail from './modules/customers/detail/default';
import Dashboard from './modules/dashboard/default';

class Routes extends React.Component {
  render() {
    return (
      /*<Login/>*/
       <Router history={history}>
               <Switch>
                  <Route exact path='/' component={Dashboard} />
                  <Route exact path='/customerlist' component={CustomerList} />
                  <Route exact path='/customer/:id' component={CustomerDetail} />
               </Switch>
       </Router>
    );
  }
}

export default Routes;