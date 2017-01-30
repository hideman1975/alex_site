/**
 * Created by andrey.manaenko on 27.01.2017.
 */
import React from 'react';

export default class MenuShort extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clickMee: props.clickApp

        };
    }

    

    render(){
        return(
            <div onClick={this.props.clickApp} className= "menuShort">{this.props.label}</div>
        );
    }
}
