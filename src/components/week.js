/**
 * Created by andrey.manaenko on 25.01.2017.
 */
import React from 'react';
import Shed from './shedule';

export default class Week extends React.Component{
    constructor(props){
        super();
        this.state = {
            subject: props.subject

        };

    }

    eachComment(subj,i){
        return (
                            
                <Shed
                    key={i}
                    subject={subj}
                />

            
        );
    }


    render(){
        return(
                <div className={this.props.className + " week"}>
                    {this.state.subject.map(this.eachComment)}
                </div>
               );
    }
}
