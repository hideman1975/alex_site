import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';

require("!style!css!./style.css");

/* Отправка первого экшена, чтобы выразить намерение изменить состояние */
store.dispatch({type: 'ADD_USER', user: {name: 'Dan', age: 28}});
store.dispatch({type: 'ADD_USER', user: {name: 'Andrew', age: 41}});
store.dispatch({type: 'ADD_USER', user: {name: 'Sergey', age: 47}});
store.dispatch({type: 'ADD_USER', user: {name: 'Sam', age: 37}});


console.log("Мой стор-",store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

