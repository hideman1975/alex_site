/**
 * Created by andrey.manaenko on 07.02.2017.
 */

import { ADD_MESSAGE } from '../actions/chatActions';

export default function(state, action) {

    if (action.type === 'ADD_MESSAGE') {

        return {...state, chat: action.message}
    }
    
    if (action.type === 'LOGIN_USER'){
        return {...state, userRole: action.user.role, userName: action.user.name}
    }

    if (action.type === 'LOGOUT_USER'){
        return {...state, userRole: 'user', userName: 'Гость'}
    }

    return state;
}