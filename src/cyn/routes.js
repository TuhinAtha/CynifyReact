import React from 'react'
import { Router, Switch, Route } from 'react-router-dom';

import history from './history'

import Login from './modules/login';
import Unreachable from './modules/unreachable'
import CustomerList from '../modules/customer/customerList';
import Dashboard from './modules/dashboard';
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
                  <Route exact path='/unreachable' component={Unreachable} />
                  <PrivateRoute exact path='/dashboard' component={Dashboard} allowedPermission='CanViewDashboard'/>
                  <PrivateRoute exact path='/customerlist' component={CustomerList} allowedPermission='CanViewCustomerList'/>
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
