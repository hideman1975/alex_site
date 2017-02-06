/**
 * Created by andrey.manaenko on 06.02.2017.
 */
import React from 'react';

import { connect } from 'react-redux'
import store from '../store';

export default class chatMessage extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div className={this.props.className}>
                <div className="Message">
                   <h3>{this.props.mes.chatMessage.author}: {this.props.mes.chatMessage.message}</h3>

                </div>
            </div>
        );
    }
}