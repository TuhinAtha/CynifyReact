/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : FormField Component
* @usage : <FormField config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './textinput/default';
import DateInput from './dateinput/default';


/**Class Defination**/
export default function FormField({config,data,onFormFieldChange}){
	
	const getFieldByType = () =>{
		switch(config.type){
			case 'date' : {
				return (
					<DateInput config={config} data={new Date(data)}  onFormFieldChange={onFormFieldChange}/>
				)
			};
			default : {
				return (
					<TextInput config={config} data={data}  onFormFieldChange={onFormFieldChange}/>
				)
			}
		}
	}

	return(
		<div className="form-group">
			{/*config.label && <label className="col-form-label">{config.label}</label>*/}
			{getFieldByType()}			
		</div>
	)
	
}

/**PropTypes**/
FormField.propTypes = {
	config : PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.any,
		type: PropTypes.string
	}),
	data : PropTypes.any
}