/**
 * Created by andrey.manaenko on 27.01.2017.
 */
import React from 'react';
import ChatMessage from './chatMessage';
import { connect } from 'react-redux';
import store from '../store';

class chatContainer extends React.Component{
    constructor(props){
        super();
    }

    renderChat()
    {

        return <div>
            {this.props.ChaildChat.map((msg) =>
                <ChatMessage key = {msg.chatMessage.id} mes = {msg}/>
            )}
        </div>
    }

    
    render(){
        return(
            <div className={this.props.className}>
               {this.renderChat()}
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        ChaildChat: store.chat

    };
};

export default connect(mapStateToProps)(chatContainer);