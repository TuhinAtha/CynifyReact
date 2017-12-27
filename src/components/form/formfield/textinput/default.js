/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : FormFIeld Component
* @usage : <TextInput config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { TextField as TextFieldFUI} from 'office-ui-fabric-react/lib/TextField';


/**Class Defination**/
export default function TextInput({config,data,onFormFieldChange}){
	function handleChange(e,value){
		onFormFieldChange(e,value,config)
	}
	function handleChangeFUI(value){
		onFormFieldChange(null,value,config)
	}
	if(appConfig.uxfw.toLowerCase() == 'material-ui'){
		return(
			<TextField
			  name = {config.value}
			  floatingLabelText= {config.label}
	          value={data}
	          onChange = {handleChange}
	        />
		)
	}else if(appConfig.uxfw.toLowerCase() == 'fabric-ui'){
		return(
			<TextFieldFUI
			  name = {config.value}
			  label= {config.label}
	          value={data}
	          onChanged = {handleChangeFUI}
	        />
		)
	}else{
		return(
			<TextField
			  name = {config.value}
			  floatingLabelText= {config.label}
	          value={data}
	          onChange = {handleChange}
	        />
		)
	}
	
	
}

/**PropTypes**/
TextInput.propTypes = {
	config : PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.any,
		type: PropTypes.string
	}),
	data : PropTypes.any
}