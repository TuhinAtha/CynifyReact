import React from 'react';
import ListItem from './list-item/default'
export default function List({config,data}){
	let items = data;
	let listItems = items && items.map((item,i)=><ListItem key={`${config.key}-item-${i}`} rKey={`${config.key}-item-${i}`} data={item} config={config} />);
	return(
		<ul className="list-group">
			{listItems}
		</ul>
	);
}