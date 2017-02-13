/**
 * Created by andrey.manaenko on 09.02.2017.
 */
import React from 'react';
import store from '../store';

export default class loginForm extends React.Component{
    constructor(props){
        super();
    }

    logIn(){

        postAjax();

    }

    logOut(){

        store.dispatch({type: 'LOGOUT_USER'});
        setCookie("ComeInUserLogin", null, 30);
        setCookie("ComeInUserHash", null, 30);
        setCookie("ComeInUserRole", null, 30);
        setCookie("ComeInUserPassword", null, 30);

}

    componentDidMount()
    {
        //console.log("Логин Замаунтился, Ура!");
    }

    
    render(){

        if(this.props.userName =="Гость") {
            return (

                <div className="loginForm">
                    <input id="login" type="text" placeholder="логин"/>
                    <input id="password" type="text" placeholder="пароль"/>
                    <button onClick={this.logIn}>Войти</button>
                    <br/>
                </div>
            );
        } else return (
            <div>
                Добрый день {this.props.userName} !
                <button onClick={this.logOut}>Выйти</button>
            </div>);
    }
}

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
function postAjax(ComeInUser) {
    // создаем Объект
    var ComeInUser = null;
    console.log("из postAjax");
    var oXmlHttp = createXMLHttp();

    var url = "./php/login.php";

    var login= document.getElementById('login').value;
    var password= document.getElementById('password').value;
    //var message= document.getElementById('message').value;
    // конкатинируем данные
    var sBody = "login="+login+"&password="+password;
    console.log(sBody);
    // подготовка, объявление заголовков
    oXmlHttp.open("POST", url, true);

    oXmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // описание функции, которая будет вызвана, когда придет ответ от сервера
    oXmlHttp.onreadystatechange = function() {
        if (oXmlHttp.readyState == 4 && oXmlHttp.status == 200) {
            var return_data = oXmlHttp.responseText;
            ComeInUser = JSON.parse(return_data);
            console.log("postAJAX says",ComeInUser);
            if (ComeInUser) {
                store.dispatch({type: 'LOGIN_USER', user: ComeInUser });
                setCookie("ComeInUserLogin", ComeInUser.login, 30);
                setCookie("ComeInUserHash", ComeInUser.hash, 30);
                setCookie("ComeInUserRole", ComeInUser.role, 30);
                setCookie("ComeInUserPassword", ComeInUser.password, 30);
            }
        }
    };



    // отправка запроса, sBody - строка данных с формы
    oXmlHttp.send(sBody);

}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}