/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : Form Component
* @usage : <Form config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import PropTypes from 'prop-types';
import FormField from './formfield/default';

/**Class Defination**/
export default function Form({config, data, onFormFieldChange}){
	function getFormField(field){
		return <FormField key={REACT_KEY++} config={field} data={data[field.value]} onFormFieldChange={onFormFieldChange}/>
	}
	let fields =config.fields;
	return(
		<form>
			{fields.map((field) => getFormField(field))}
		</form>
	)
	
}

/**PropTypes**/
Form.propTypes = {
	config : PropTypes.any,
	data : PropTypes.any
}