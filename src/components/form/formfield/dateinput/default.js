/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : DateField Component
* @usage : <DateInput config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'material-ui/DatePicker';
import {  DatePicker as DatePickerFUI} from 'office-ui-fabric-react/lib/DatePicker';

/**Class Defination**/
export default function DateInput({config,data,onFormFieldChange}){
	function handleChange(e,value){
		onFormFieldChange(e,value,config)
	}
	function handleChangeFUI(value){
		onFormFieldChange(null,value,config)
	}
	if(appConfig.uxfw.toLowerCase() == 'material-ui'){
		return(
			<DatePicker
			    name = {config.value}
		        autoOk = {true}
		        value={data}
		        floatingLabelText={config.label}
		        onChange = {handleChange}
		    />
		)
	}if(appConfig.uxfw.toLowerCase() == 'fabric-ui'){
		return(
			<DatePickerFUI
			 label={config.label}
			 value={data}
			 onSelectDate = {handleChangeFUI}
			/>

		)
	}else{
		return(
			<DatePicker
			    name = {config.value}
		        autoOk = {true}
		        value={data}
		        floatingLabelText={config.label}
		        onChange = {handleChange}
		    />
		)
	}
	
}

/**PropTypes**/
DateInput.propTypes = {
	config : PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.any,
		type: PropTypes.string
	}),
	data : PropTypes.any
}