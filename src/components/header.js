/**
 * Created by andrey.manaenko on 10.02.2017.
 */
import React from 'react';
import {logInUserToSite} from '../actions/loginActions';
import store from '../store';
import LoginForm from './loginForm';
import { connect } from 'react-redux';


class header extends React.Component{
    constructor(props){
        super();
    }

    render(){

        return(

            <div className="header">
                  <div className="logo"><img src="./img/header.png"></img></div>
                <LoginForm userName={this.props.userName}/>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {

       userName: state.userName,
       userRole: state.userRole


    };
};

export default connect(mapStateToProps)(header);