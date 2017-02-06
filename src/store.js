/**
 * Created by andrey.manaenko on 06.02.2017.
 */
import React from 'react'
import ReactDom from 'react-dom'
import { applyMiddleware, createStore } from 'redux';

var userReducer = function(state, action) {
    if (state === undefined) {
        state = {arr: [], chat: []};
    }
    if (action.type === 'ADD_USER') {
        state.arr.push(action.user);
        
    }
    if (action.type === 'ADD_MESSAGE') {
        state.chat.push(action.message);
       
    }
   
    return state;
};

// Создание хранилища с передачей редьюсера
var store = createStore(userReducer);


export default store;