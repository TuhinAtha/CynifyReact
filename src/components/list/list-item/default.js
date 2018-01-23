import React from 'react';
import ListItemBloack from './list-item-block/default'
export default function ListItem({rKey,config,data}){
	function getBlock(block,index){
		return (<ListItemBloack key={`${rKey}-block-${index}`} rKey={`${rKey}-block-${index}`} config={block} data={data}/>)
	}
	let blocks = config.blocks;
	return(
		<li className="list-group-item">
		<div  className ="container-fluid">
		{blocks.map((block,index)=>getBlock(block,index))}
		</div>
		</li>
	);
	
}