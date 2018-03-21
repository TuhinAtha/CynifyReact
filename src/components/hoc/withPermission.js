import React from 'react'
import { connect,bindActionCreators  } from 'react-redux';
export const withPermission = (WrappedComponent,ElseComponent) => {

	class Permission extends React.Component {
    render() {
    	if(this.props.permissions.indexOf(this.props.allowedPermission) >= 0){
      		return (<WrappedComponent {...this.props}/>)
    	}
			if(ElseComponent){
				return (<ElseComponent {...this.props}/>)
			}
			return null
    }
  }
  const mapStateToProps = (state) => {
  	return {
  		permissions : state.app.permissions
  	}
  }
  return connect(mapStateToProps)(Permission)
}
  
  