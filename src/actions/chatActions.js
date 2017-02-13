/**
 * Created by andrey.manaenko on 07.02.2017.
 */

export const ADD_MESSAGE = 'ADD_MESSAGE';

export function addMessageToChat(chatMessage) {
        return {
        type: ADD_MESSAGE,
        message: chatMessage

    };
}