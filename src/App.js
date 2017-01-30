import React from 'react';
import Week from './components/week';
import weekData from './activeConnect';
import Menu from './components/menu';
import Blog from './components/blog';
import Contacts from './components/contacts';
import Fotos from './components/fotos';
import Messages from './components/messages';

console.log("Отсортированный массив:",weekData);

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            Blogclass: "passivePage",
            Contactclass: "passivePage",
            Fotoclass: "passivePage",
            Messageclass: "passivePage",
            Lessonsclass: "activePage"
        };
    }
    
    
    
    render() {
        return (
            <div>
                <Menu nock="nocknock" collmeback = {this.menuKey.bind(this)}/>
                <Blog className={this.state.Blogclass}/>
                <Contacts className={this.state.Contactclass}/>
                <Fotos className={this.state.Fotoclass}/>
                <Messages className={this.state.Messageclass}/>
                <Week className={this.state.Lessonsclass} subject={weekData}/>
                
            </div>
        );
    }


    menuKey(mess){

        switch (mess) {
            case "SHEDULE":

                this.setState({Blogclass: "passivePage"});
                this.setState({Contactclass: "passivePage"});
                this.setState({Fotoclass: "passivePage"});
                this.setState({Messageclass: "passivePage"});
                this.setState({Lessonsclass: "activePage"});
                    break;
            case "CHAT":

                this.setState({Blogclass: "activePage"});
                this.setState({Contactclass: "passivePage"});
                this.setState({Fotoclass: "passivePage"});
                this.setState({Messageclass: "passivePage"});
                this.setState({Lessonsclass: "passivePage"});
                break;

            case "FOTOS":

                this.setState({Blogclass: "passivePage"});
                this.setState({Contactclass: "passivePage"});
                this.setState({Fotoclass: "activePage"});
                this.setState({Messageclass: "passivePage"});
                this.setState({Lessonsclass: "passivePage"});
                break;
            case "CONTACTS":

                this.setState({Blogclass: "passivePage"});
                this.setState({Contactclass: "activePage"});
                this.setState({Fotoclass: "passivePage"});
                this.setState({Messageclass: "passivePage"});
                this.setState({Lessonsclass: "passivePage"});
                break;
            case "NEWS":

                this.setState({Blogclass: "passivePage"});
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






