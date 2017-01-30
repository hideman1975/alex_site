/**
 * Created by andrey.manaenko on 27.01.2017.
 */
import React from 'react';

export default class Blog extends React.Component{
    constructor(props){
        super();
    }


    
    render(){
        return(
            <div className={this.props.className}>
                <div className= "blog"><h3>Здесь будет болтовня</h3></div>
            </div>
        );
    }
}