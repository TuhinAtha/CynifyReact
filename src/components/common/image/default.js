/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : TableHeader Component
* @usage : <TableHeader config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import PropTypes from 'prop-types';
import './default.scss';

/**Class Defination**/
export default function Image({rKey,config,data}){
	let aClassNames=['cyn-image', ...(config.classNames ? config.classNames : [])];
	return(
		<img src="http://lorempixel.com/400/200/" key={`${rKey}-image`} className={aClassNames.join(' ')}/>
	);
}

/**PropTypes**/
Image.propTypes = {
	config : PropTypes.any,
	data : PropTypes.any
}