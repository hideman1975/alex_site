/**
 * Created by andrey.manaenko on 30.01.2017.
 */
import React from 'react';
//var url = require("../img/class05.jpg");
//require("url-loader?mimetype=image/png!./class05.jpg");

export default class Fotos extends React.Component{
    constructor(props){
        super();
    }
    render(){

        return(

            <div className={this.props.className}>
                <div className= "fotos">
                    <h3>Фото</h3>
                    <div>
                        <div className="fotoCont"><img src="./img/class01.jpg"></img></div>
                       <div className="fotoCont"><img src="./img/class02.jpg"></img></div>
                       <div className="fotoCont"><img src="./img/class03.jpg"></img></div>
                        <div className="fotoCont"><img src="./img/class04.jpg"></img></div>
                        <div className="fotoCont"><img src="./img/class10.jpg"></img></div>
                        <div className="fotoCont"><img src="./img/class06.jpg"></img></div>
                        <div className="fotoCont"><img src="./img/class08.jpg"></img></div>
                </div>
              </div>

            </div>
        );
    }
}