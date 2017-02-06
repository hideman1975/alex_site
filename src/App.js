import React from 'react';
import Week from './components/week';
import sortLessons from './activeConnect';
import getMessages from './chatConnect';
import Menu from './components/menu';
import ChatContainer from './components/chatContainer';
import Contacts from './components/contacts';
import Fotos from './components/fotos';
import Messages from './components/messages';
import ChatMessage from './components/chatMessage';
import store from './store';

//console.log("Отсортированный массив:",sortLessons);
console.log("Наш чат:",getMessages);
var AllMessages = getMessages;
var mes01 = getMessages[0];
var mes02 = getMessages[1];
console.log("Наш mes01:", AllMessages);
AllMessages.map(function (chatMessage) {
  //console.log(chatMessage.message);
    store.dispatch({type: 'ADD_MESSAGE', message: {chatMessage}});
});


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

    render() {
        return (
            <div>
                <Menu collmeback = {this.menuKey.bind(this)}/>
                <ChatContainer className={this.state.Chatclass}/>
                <Contacts className={this.state.Contactclass}/>
                <Fotos className={this.state.Fotoclass}/>
                <Messages className={this.state.Messageclass}/>
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






