/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : FormFIeld Component
* @usage : <TextInput config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

/**Class Defination**/
export default function TextInput({config,data,onFormFieldChange}){
	let aClassNames=['cyn-textinput', ...(config.classNames ? config.classNames : [])];
	function handleChange(e,value){
		onFormFieldChange(e,value,config)
	}
	function handleChangeFUI(value){
		onFormFieldChange(null,value,config)
	}
	return(
		<TextField
		  name = {config.key}
		  label= {config.label}
		  className={aClassNames.join(' ')}
          value={data}
          onChange = {handleChange}
        />
	)
}

/**PropTypes**/
TextInput.propTypes = {
	config : PropTypes.shape({
		label: PropTypes.string,
		key: PropTypes.any,
		type: PropTypes.string
	}),
	data : PropTypes.any
}