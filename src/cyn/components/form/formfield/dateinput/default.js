/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : DateField Component
* @usage : <DateInput config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

/**Class Defination**/
export default function DateInput({config,data,onFormFieldChange}){
	let aClassNames=['cyn-dateinput', ...(config.classNames ? config.classNames : [])];
	function handleChange(e,value){
		onFormFieldChange(e,value,config)
	}
	function handleChangeFUI(value){
		onFormFieldChange(null,value,config)
	}
	return(
		 <TextField
		 	name = {config.key}
	        type="date"
	        className={aClassNames.join(' ')}
	        value={data}
	        label={config.label}
	        onChange = {handleChange}
	        InputLabelProps={{
	          shrink: true,
	        }}
	      />
	);
	
}

/**PropTypes**/
DateInput.propTypes = {
	config : PropTypes.shape({
		label: PropTypes.string,
		key: PropTypes.any,
		type: PropTypes.string
	}),
	data : PropTypes.any
}