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
            <div className= "contacts">
                <h3>Контакты</h3>
                <p>
                    автор сайта: <b>Манаенко Андрей</b> <br/>
                    e-mail: man_ko@mail.ru <br/> <br/>
                    администратор: <b>Манаенко Алексей</b> <br/>
                    e-mail: aleksey_manaenko@mail.ru <br/> <br/>
                </p>

            </div>

            </div>
        );
    }
}