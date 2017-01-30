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
            <div>
                <h2>{subj[0].day}</h2>
                <Shed
                    key={i}
                    subject={subj}
                />

            </div>
        );
    }

    render(){
        return(
                <div className={this.props.className}>{this.state.subject.map(this.eachComment)}</div>
               );
    }
}
