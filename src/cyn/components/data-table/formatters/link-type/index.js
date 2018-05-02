import React from 'react';
import makeRoute from '../../../../utils/route-maker';
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button';

import {
  DataTypeProvider,
} from '@devexpress/dx-react-grid';

const LinkFormatter = (props) => {
	let url = makeRoute(props.column.path,props.column.replacements,props.row);
	let propsToButton = {};
	props.column.color && (propsToButton.color = props.column.color);
	return (
		<Button raised component={Link} to={url} {...propsToButton}>
		  {props.column.text}
		</Button>
	)

}

export default function LinkTypeProvider(props){
	return (<DataTypeProvider formatterComponent={LinkFormatter} {...props}/>)
}