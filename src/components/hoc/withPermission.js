import React from 'react'
import { connect,bindActionCreators  } from 'react-redux';
export const withPermission = (WrappedComponent,ElseComponent) => {

	class Permission extends React.Component {
    render() {

      let innerProps = {...this.props}
      delete innerProps.allowedPermission
      delete innerProps.permissions

    	if((this.props.allowedPermission === 'ALL') || (this.props.permissions.indexOf(this.props.allowedPermission) >= 0)){
      		return (<WrappedComponent {...innerProps}/>)
    	}
			if(ElseComponent){
				return (<ElseComponent {...innerProps}/>)
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
  
  