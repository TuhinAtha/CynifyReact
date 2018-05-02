import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Link } from "react-router-dom";
import { withStyles } from 'material-ui/styles';
import styles from './styles';
import { connect,bindActionCreators  } from 'react-redux';
import { cynAppLogout } from '../../redux/actions/app.action';
import { withPermission } from '../hoc/withPermission'
import { withRouter } from 'react-router'

const PrivateNavigatorItem = withPermission((props) => {
	const { nav, allowedPermission } = props;
	return(
		<ListItem allowedPermission={allowedPermission} button component={Link} to={nav.to}>
      <ListItemIcon>
        <Icon>{nav.icon ? nav.icon : 'album'}</Icon>
      </ListItemIcon>
      <ListItemText inset primary={nav.text} />
    </ListItem>
  )
})
class AppNavigatior extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen : false
		}
		this.toggleNav = this.toggleNav.bind(this)
		this.logout = this.logout.bind(this)
	}
	toggleNav() {
		this.setState({
			isNavOpen : !this.state.isNavOpen
		})
	}
	logout() {
		let self = this
		this.props.logout().then(()=> {
			self.props.history.push('/login')
		})
	}
	render() {
		let {
			classes,
			auth,
			navs,
			permissions
		} = this.props;
		let {
			isNavOpen
		} = this.state;

		if(this.props.location.pathname === '/login' || auth === null){
			return null
		}

		return(
			<div>
		      <AppBar className={classes.root} position="static">
		        <Toolbar>
		          <IconButton onClick={() => this.toggleNav()} color="inherit" aria-label="Menu">
		            <Icon>menu</Icon>
		          </IconButton>
		          <Typography type="title" color="inherit" className={classes.flex}>
		            Title
		          </Typography>
		        </Toolbar>
		      </AppBar>
		      <Drawer open={isNavOpen} onClose={() => this.toggleNav()}>
		      	{this.getNavList(navs)}
		      	<Divider/>
		      	<Button color="inherit" onClick={this.logout}>Logout</Button>
		      </Drawer>
		    </div>
		);
	}
	getNavList(navs){
		let listItems = navs && navs.map((nav, index)=>(
			<PrivateNavigatorItem  key={`nav-${index}`} nav={nav} allowedPermission='CanViewCustomerList'/>
      )
		)
		return(<List component="nav">
			{listItems}
		</List>)
	}
}
const mapStateToProps = (state) => {
	return {
		navs : state.app.navs,
		auth : state.app.auth
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		logout : () => dispatch(cynAppLogout())
	}
}
export default withRouter(withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(AppNavigatior)));
