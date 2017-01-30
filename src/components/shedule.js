import React from 'react';
import Subject from './subject';

export default class Shedule extends React.Component {

    constructor(props){
        super();
        this.state = {
            subject: props.subject,
            status: 0

        };

    }

    eachComment(subj){
        return (
            <Subject
                key={subj.id}
                day={subj.day}
                classroom= {subj.classroom}
               lesson_name={subj.lesson_name}
                teacher={subj.teacher}
                home_work={subj.home_work}
            />
        );
    }

    render(){
        return(

            <table className="table">
                <tbody>
                {this.state.subject.map(this.eachComment)}
                </tbody>
            </table>
            

        );

    }

}

