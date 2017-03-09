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
                    {this.props.mes.time}<br/>
                   <b>{this.props.mes.author}:</b> {this.props.mes.message}

                </div>
            </div>
        );
    }
}