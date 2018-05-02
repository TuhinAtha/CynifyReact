import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Button from 'material-ui/Button';
import { FormControl } from 'material-ui/Form';
import Icon from 'material-ui/Icon';

import styles from './styles'

import { connect,bindActionCreators  } from 'react-redux';
import {cynAppLogin} from '../../redux/actions/app.action';  

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.doLogin = this.doLogin.bind(this);
	}
	handleChange(e){
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	doLogin(){
		let self = this;
		this.props.login({
			username: this.state.username,
			password: this.state.password
		}).then((data)=>{
				self.props.history.push('/dashboard')			
		}).catch(()=>{
			console.log("Error");
		})
	}
	render(){
		const {classes} = this.props
		return(
			<div className={classes.root}>
				<Grid container justify='center' spacing={0}>
					<Grid item xs={12} sm={10} md={8} lg={6}>
					<Paper className={classes.content}>
						<TextField
		          id="username"
		          label="Username"
		          name="username"
		          onChange={this.handleChange}
		          margin="normal"
		          fullWidth
		          helperText='Enter your username'
		        />
		        <TextField
		          id="password"
		          type="password"
		          label="Password"
		          name="password"
		          onChange={this.handleChange}
		          margin="normal"
		          fullWidth
		          helperText='Enter your Password'
		        />
		        
		        <Button fullWidth variant="raised" color="primary" onClick={this.doLogin}>
			        Login
			    	</Button>
			    </Paper>
			    </Grid>
		    </Grid>
	    </div>
		);
	}
}
const mapStateToProps = (state) =>{
	return {

	}
}
const mapDispatchToProps = (dispatch,ownProps) => {

	return {
		login : (data) => dispatch(cynAppLogin(data))
		
	}
}

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Login));
