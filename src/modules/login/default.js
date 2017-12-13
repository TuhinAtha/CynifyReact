import React from 'react';
import ReactDom from 'react-dom';
import PageHeader from '../../components/page-header/default'
import PageContent from '../../components/page-content/default'
import PageFooter from '../../components/page-footer/default'
export default class Login extends React.Component{
	render(){
		return(
			<div>
				<PageHeader title="Login"/>
				<PageContent/>
				<PageFooter/>
			</div>
			);
		}
	}
