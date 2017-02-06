/**
 * Created by andrey.manaenko on 30.01.2017.
 */
import React from 'react';

export default class Messages extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div className={this.props.className}>
                <div className= "messages">
                    <p>
                    <strong>rendered as bold text</strong> eget <mark>highlight</mark> ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.
                    Maecenas sed diam <s>This line of text is meant to be treated as no longer accurate.</s> sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    </p>
                </div>
            </div>
        );
    }
}