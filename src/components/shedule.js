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
                time={subj.time}
                number={subj.numberOfLesson}            
            
            
            />
        );
    }

    render(){
        return(

            <table className="table">
                <caption>{this.state.subject[0].day}</caption>
                <tbody>
                <tr>
                    <th>&nbsp;</th><th>время</th><th>каб.</th><th>предмет</th><th>задано</th>
                </tr>

                {this.state.subject.map(this.eachComment)}
                </tbody>
            </table>

        );

    }

}

