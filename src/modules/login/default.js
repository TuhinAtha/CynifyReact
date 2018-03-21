import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Button from 'material-ui/Button';
import { FormControl } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';

import styles from './styles'

import { connect,bindActionCreators  } from 'react-redux';
import {cynAppLogin} from '../../redux/actions/app.action';  

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			showPassword: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClickShowPasssword = this.handleClickShowPasssword.bind(this);
		this.doLogin = this.doLogin.bind(this);
	}
	handleClickShowPasssword() {
	    this.setState({
	    	showPassword: !this.state.showPassword 
	 	});
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
		return(
			<div>
				<TextField
          id="username"
          label="Username"
          name="username"
          onChange={this.handleChange}
          margin="normal"
        />
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            name="password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={this.handleClickShowPasssword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="raised" color="primary" onClick={this.doLogin}>
	        Login
	    </Button>
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
