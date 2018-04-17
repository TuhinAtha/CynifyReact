import React from 'react';

import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

import styles from './styles';

class Unreachable extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const {
			classes
		} = this.props

		return(
			<Paper className={classes.root}>
				<Typography variant="title" align="center" gutterBottom>
					Server Unreachable. Please Try After Some Time.
				</Typography>
			</Paper>
	  )
	}
	
}

export default withStyles(styles)(Unreachable);
