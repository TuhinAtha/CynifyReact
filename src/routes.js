import React from 'react'
import { Router, Switch, Route } from 'react-router-dom';

import history from './history'
//Pages
import Login from './modules/login/default';
import CustomerList from './modules/customers/list/default';
import CustomerDetail from './modules/customers/detail/default';
import Dashboard from './modules/dashboard/default';
import {withPermission} from './components/hoc/withPermission'
import { connect, bindActionCreators  } from 'react-redux';

const UnauthorizedComponent = (props) => {
  return (
    <div>You don't have permission to see this page</div>
  )
}
const PrivateRoute = withPermission((props)=>{
  return (<Route {...props} />)
}, UnauthorizedComponent)

class Routes extends React.Component {
  render() {
    return (
       <Router history={history}>
               <Switch>
                  <Route exact path='/login' component={Login} />
                  <PrivateRoute exact path='/Dashboard' component={Dashboard} allowedPermission='CanViewDashboard'/>
                  <PrivateRoute exact path='/customerlist' component={CustomerList} allowedPermission='CanViewCustomerList'/>
                  <PrivateRoute exact path='/customer/:id' component={CustomerDetail} />
               </Switch>
       </Router>
      );
  }
}
const mapStateToProps = (state) => {
  return {
    auth : state.app.auth
  }
}
export default connect(
  mapStateToProps
)(Routes)
