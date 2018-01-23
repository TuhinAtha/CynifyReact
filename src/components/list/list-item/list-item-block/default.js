import React from 'react';
import ListItemBlockContent from './list-item-block-content/default'
export default function ListItemBlock({rKey,config,data}){
	let contents = config.contents;
	function getContent(content,index){
		return(<ListItemBlockContent  key={`${rKey}-content-${index}`} rKey={`${rKey}-content-${index}`} config={content} data={data}/>)
	}
	return(
		<div className={config.width ? 'w'+config.width : 'w-100'}>
			{contents && contents.map((content,index)=>getContent(content,index))}
		</div>
	);
}