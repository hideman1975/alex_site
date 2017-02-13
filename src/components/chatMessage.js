/**
 * Created by andrey.manaenko on 06.02.2017.
 */
import React from 'react';

export default class chatMessage extends React.Component{
    constructor(props){
        super();
    }

    
    render(){
        return(
            <div className={this.props.className}>
                <div className="Message">
                   <h4>{this.props.mes.author}: {this.props.mes.message}</h4>

                </div>
            </div>
        );
    }
}