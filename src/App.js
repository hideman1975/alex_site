import React from 'react';
import Week from './components/week';
import sortLessons from './activeConnect';
import getMessages from './chatConnect';
import Menu from './components/menu';
import ChatContainer from './components/chatContainer';
import Contacts from './components/contacts';
import Fotos from './components/fotos';
import News from './components/news';
import Header from './components/header';


import store from './store';

//Над этим я долго бился________________________
setInterval(getNewMessage, 5000);
getNewMessage();
function getNewMessage() {
    var AllMessages = getMessages();
    
    store.dispatch({type: 'ADD_MESSAGE', message: AllMessages});
}
//______________________________________________


export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            Chatclass: "passivePage",
            Contactclass: "passivePage",
            Fotoclass: "passivePage",
            Messageclass: "passivePage",
            Lessonsclass: "activePage"
        };
    }

    componentDidMount()
    {
        console.log("App Замаунтился, Ура!");
        var user = checkCookie();
        if(user.login) {
            postAjax(user);
        }
    }


    render() {
        return (
            <div>
                <Header />
                <Menu collmeback = {this.menuKey.bind(this)}/>
                <ChatContainer className={this.state.Chatclass} strQuantity={12}/>
                <Contacts className={this.state.Contactclass}/>
                <Fotos className={this.state.Fotoclass}/>
                <News className={this.state.Messageclass}/>
                <Week className={this.state.Lessonsclass} subject={sortLessons}/>

            </div>
        );
    }

    menuKey(mess){

        switch (mess) {
            case "SHEDULE":

                this.setState({Chatclass: "passivePage"});
                this.setState({Contactclass: "passivePage"});
                this.setState({Fotoclass: "passivePage"});
                this.setState({Messageclass: "passivePage"});
                this.setState({Lessonsclass: "activePage"});
                    break;
            case "CHAT":

                this.setState({Chatclass: "activePage"});
                this.setState({Contactclass: "passivePage"});
                this.setState({Fotoclass: "passivePage"});
                this.setState({Messageclass: "passivePage"});
                this.setState({Lessonsclass: "passivePage"});
                break;

            case "FOTOS":

                this.setState({Chatclass: "passivePage"});
                this.setState({Contactclass: "passivePage"});
                this.setState({Fotoclass: "activePage"});
                this.setState({Messageclass: "passivePage"});
                this.setState({Lessonsclass: "passivePage"});
                break;
            case "CONTACTS":

                this.setState({Chatclass: "passivePage"});
                this.setState({Contactclass: "activePage"});
                this.setState({Fotoclass: "passivePage"});
                this.setState({Messageclass: "passivePage"});
                this.setState({Lessonsclass: "passivePage"});
                break;
            case "NEWS":

                this.setState({Chatclass: "passivePage"});
                this.setState({Contactclass: "passivePage"});
                this.setState({Fotoclass: "passivePage"});
                this.setState({Messageclass: "activePage"});
                this.setState({Lessonsclass: "passivePage"});
                break;
            default:
                console.log("Левое нажатие");
                break;
        }

    }
}

function checkCookie() {
    var user = {
      login: null,
      password: null
    };
    var ComeInUserLogin = getCookie("ComeInUserLogin");
    var ComeInUserPassword = getCookie("ComeInUserPassword");

    if (ComeInUserLogin != "") {
       console.log("Welcome again " + ComeInUserLogin + " Пароль " + ComeInUserPassword);
       user.login = ComeInUserLogin;
       user.password = ComeInUserPassword;
        //store.dispatch({type: "LOGIN_USER", user: user});
    } else {
        console.log("Пустой куки");
    }
    return user;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
    //var ComeInUser = null;
    console.log("из postAjax");
    var oXmlHttp = createXMLHttp();

    var url = "./php/login.php";

    var login= ComeInUser.login;
    var password= ComeInUser.password;
    //var message= document.getElementById('message').value;
    // конкатинируем данные
    var sBody = "login="+login+"&password="+password;
    //console.log(sBody);
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
