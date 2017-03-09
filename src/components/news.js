/**
 * Created by andrey.manaenko on 30.01.2017.
 */
import React from 'react';

export default class News extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div className={this.props.className}>
                <div className= "news">
                    <h3>Объявления</h3>
                    <p>
                    Продаётся кошка, окрас рыжий.
                    </p>
                    <p>
                        Продаётся велосипед, цвет синий.
                    </p>
                    <p>
                        Продаются коньки, размер 37.
                    </p>
                </div>
            </div>
        );
    }
}