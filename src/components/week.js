/**
 * Created by andrey.manaenko on 25.01.2017.
 */
import React from 'react';
import Shed from './shedule';
import store from '../store';
import {switchDay} from '../actions/loginActions';

export default class Week extends React.Component{
    constructor(props){
        super();
        this.state = {
            subject: props.subject

        };

    }

    switchNextDay(){
        var i;
        var dayShed = this.props.dayShedule.slice();
            for (i = 0; i < dayShed.length; i++){
            if(dayShed[i]=="activePage"){
                dayShed[i]="passivePage";
                if(i!=4) {
                    i++;
                    dayShed[i] = "activePage";
                    break;
                }
                else {
                    i=0;
                    dayShed[i] = "activePage";
                    break;
                }
            }

        }

        //store.dispatch({type: "SWITCH_DAY", dayShed: dayShed});
        store.dispatch(switchDay(dayShed));
        //var newProps = this.props.testProps;
        //newProps++;
        //store.dispatch({type: "TEST_ACTION", testProps: newProps});
        //console.log("STORE after change",store.getState());
    }





    
    switchPrevDay(){
        //console.log("I switched from week to previous ");
        var i;
        //var dayShed = this.props.dayShedule;
        var dayShed = this.props.dayShedule.slice();
        for (i = 0; i < dayShed.length; i++){
            if(dayShed[i]=="activePage"){
                dayShed[i]="passivePage";
                if(i!=0) {
                    i--;
                    dayShed[i] = "activePage";
                    break;
                }
                else {
                    i=4;
                    dayShed[i] = "activePage";
                    break;
                }
            }

        }

        //store.dispatch({type: "SWITCH_DAY", dayShed: dayShed});
        store.dispatch(switchDay(dayShed));
        //var newProps = this.props.testProps;
        //newProps++;
        //store.dispatch({type: "TEST_ACTION", testProps: newProps});
        //console.log("STORE after change",store.getState());

    }
    
    
    
    eachComment(subj,i){
//var dayShed = state.dayShedule[1];
       // console.log(this.state.dayShedule[i]);
        return (

                <Shed
                    key={i}
                    subject={subj}
                    active={this.props.dayShedule[i]}
                    switchNextDay={this.switchNextDay.bind(this)}
                    switchPrevDay={this.switchPrevDay.bind(this)}
                />

            
        );
    }

    render(){
        return(
                <div className={this.props.className + " week"}>
                    {this.state.subject.map(this.eachComment.bind(this))}
                </div>
               );
    }
}
