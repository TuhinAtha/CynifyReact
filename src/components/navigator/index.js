import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Icon from 'material-ui/Icon';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Link } from "react-router-dom";
import { withStyles } from 'material-ui/styles';
import styles from './styles';
import { connect,bindActionCreators  } from 'react-redux';
import { cynAppNavToggle } from '../../redux/actions/app.action';
import { withPermission } from '../hoc/withPermission'
const PrivateNavigatorItem = withPermission((props) => {
	const { nav, allowedPermission } = props;
	debugger
	return(
		<ListItem allowedPermission={allowedPermission} button component={Link} to={nav.to}>
      <ListItemIcon>
        <Icon>{nav.icon ? nav.icon : ''}</Icon>
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
	}
	toggleNav() {
		this.setState({
			isNavOpen : !this.state.isNavOpen
		})
	}
	render() {
		let {
			classes,
			navs,
			permissions
		} = this.props;
		let {
			isNavOpen
		} = this.state;
		return(
			<div>
		      <AppBar className={classes.root} position="static">
		        <Toolbar>
		          <IconButton onClick={() => this.toggleNav()} color="inherit" aria-label="Menu">
		            <MenuIcon />
		          </IconButton>
		          <Typography type="title" color="inherit" className={classes.flex}>
		            Title
		          </Typography>
		        </Toolbar>
		      </AppBar>
		      <Drawer open={isNavOpen} onClose={() => this.toggleNav()}>
		      	{this.getNavList(navs)}
		      </Drawer>
		    </div>
		);
	}
	getNavList(navs){
		debugger;
		let listItems = navs && navs.map((nav, index)=>(
			<PrivateNavigatorItem  key={`nav-${index}`} nav={nav} allowedPermission='CanViewCustomerList'/>
				/*<ListItem key={`nav-${index}`} button component={Link} to={nav.to}>
	          <ListItemIcon>
	            <Icon>{nav.icon ? nav.icon : ''}</Icon>
	          </ListItemIcon>
	          <ListItemText inset primary={nav.text} />
	      </ListItem>*/
      )
		)
		return(<List component="nav">
			{listItems}
		</List>)
	}
}
const mapStateToProps = (state) => {
	return {
		navs : state.app.navs
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(AppNavigatior));
