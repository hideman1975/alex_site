import React from 'react';

export default class MenuButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clickMee: props.clickApp,
            homeLink: props.actionType
            

        };
    }

    onChangeLink(){
        this.props.clickApp(this.state.homeLink);

    }

    render(){
        return(
            <div onClick={() => this.onChangeLink()} className= "menuitem">{this.props.label}</div>
        );
    }
}