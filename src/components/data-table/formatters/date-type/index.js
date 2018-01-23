import React from 'react';
import {
  DataTypeProvider,
} from '@devexpress/dx-react-grid';

const DateFormatter = ({ value }) => {
	if(value){
		 return value.substring(0,10);
	}else{
		return '';
	}
}

export default function DateTypeProvider(props){
	return (<DataTypeProvider formatterComponent={DateFormatter} {...props}/>)
}