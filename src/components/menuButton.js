import React from 'react';
import store from '../store';
import {switchPage} from '../actions/loginActions';

export default class MenuButton extends React.Component{
    constructor(props){
        super(props);

    }


    clickMeTender(){

        //store.dispatch({type: 'SWITCH_PAGE', menuItem: this.props.actionType});
        store.dispatch(switchPage(this.props.actionType));
    }

    render(){
        return(
            <div onClick={this.clickMeTender.bind(this)}
                 className= {this.props.className} data-title={this.props.cont}>
                <img className="menuLabel" src={"icons/"+this.props.label+".png"}/>
            </div>
        );
    }
}