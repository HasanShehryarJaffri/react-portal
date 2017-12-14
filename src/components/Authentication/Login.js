import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Login extends React.Component{
    constructor(props,context){
        super(props,context);
    }

    render(){
        return(
            <div>
                <h1>This is login page</h1>
            </div>
        );
    }
}


export default Login;