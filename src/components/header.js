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
                <h2>5-а класс <small>уголок общения</small></h2>
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