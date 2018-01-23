import React from 'react';
import Image from '~/src/components/common/image/default.js';
export default function ListItemBlockContent({rKey,config,data}){
	function getField(field,index){
		if(field.type == 'image'){
			return (<Image key={`${rKey}-field-${index}`} rKey={`${rKey}-field-${index}`} config={field} data={data[field.key]} />)
		}
		return (<span key={`${rKey}-field-${index}`}>{data[field.key]}</span>);
	}
	let fields = config.fields;
	return(
		<div className={'d-flex '+`${config.width ? 'w-'+config.width : 'w-100'}`+' '+config.flex}>
			{fields && fields.map((field,index)=>getField(field,index))}
		</div>
	);
}