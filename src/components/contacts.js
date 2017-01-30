/**
 * Created by andrey.manaenko on 27.01.2017.
 */
import React from 'react';

export default class Contacts extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div className={this.props.className}>
            <div className= "contacts"><h3>Здесь будут контакты</h3></div>
            </div>
        );
    }
}