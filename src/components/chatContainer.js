/**
 * Created by andrey.manaenko on 27.01.2017.
 */
import React from 'react';
import ChatMessage from './chatMessage';
import { connect } from 'react-redux';
//import { postAjax, getRequestBody, createXMLHttp } from './ajax_POST_UTF8';

class chatContainer extends React.Component{
    constructor(props){
        super();
    }

    getConsole(){
    postAjax();
    document.getElementById('message').value=null;
    }

    componentDidMount()
    {
        //console.log("userContainer Замаунтился, Ура!",this);
    }

    renderChat()
    {
        var cutingMsg = [];

        var leng = this.props.ChaildChat.length;
        for (var i = 1; i < this.props.strQuantity; i ++){
            cutingMsg.unshift(this.props.ChaildChat[leng-i]);

        }
        return <div>

            {cutingMsg.map((msg) =>
                <ChatMessage key = {msg.id} mes = {msg}/>)}

        </div>

    }
    render(){

        return(

            <div className={this.props.className + " blog"}>
               {this.renderChat()}
               
                <input id="author" hidden="true" type="text" value = {this.props.UserName}/>
                <input id="room" hidden="true" type="text" value = {this.props.room}/>
                 Сообщить:  <p><textarea id="message" cols="40" rows="3"></textarea></p>
                <div id="status"></div>
                <button onClick={this.getConsole} className="btn btn-primary">Отправить</button>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        ChaildChat: state.chat,
        UserName: state.userName,
        room: state.room

    };
};

export default connect(mapStateToProps)(chatContainer);


function createXMLHttp() {
    console.log("из createXMLHttp()");
    if (typeof XMLHttpRequest != "undefined") { // для браузеров аля Mozilla
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) { // для Internet Explorer (all versions)
        var aVersions = [
            "MSXML2.XMLHttp.5.0",
            "MSXML2.XMLHttp.4.0",
            "MSXML2.XMLHttp.3.0",
            "MSXML2.XMLHttp",
            "Microsoft.XMLHttp"
        ];
        for (var i = 0; i < aVersions.length; i++) {
            try {
                var oXmlHttp = new ActiveXObject(aVersions[i]);
                return oXmlHttp;
            } catch (oError) {}
        }
        throw new Error("Невозможно создать объект XMLHttp.");
    }
}


// функция Ajax POST
function postAjax() {
    // создаем Объект
    console.log("из postAjax");
    var oXmlHttp = createXMLHttp();

    var url = "./php/addmess.php";

    //потом заменить, сейчас сил нет
    var author= document.getElementById('author').value;
    var room= document.getElementById('room').value;
    var message= document.getElementById('message').value;


    // конкатинируем данные
    var sBody = "author="+author+"&room="+room+"&message="+message;
    console.log(sBody);
    // подготовка, объявление заголовков
    oXmlHttp.open("POST", url, true);

    oXmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // описание функции, которая будет вызвана, когда придет ответ от сервера
    oXmlHttp.onreadystatechange = function() {
        if (oXmlHttp.readyState == 4 && oXmlHttp.status == 200) {
            var return_data = oXmlHttp.responseText;
            document.getElementById('status').innerHTML = return_data;
        }
    };
    // отправка запроса, sBody - строка данных с формы
    oXmlHttp.send(sBody);
}

