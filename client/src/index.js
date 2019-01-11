import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { stat } from 'fs';
import userReducer from './reducers/userReducer.js';
document.title = "Ecom";

const store = createStore(combineReducers({
    user: userReducer,
}),{},applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, 
    document.getElementById('root')
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//import { createStore } from 'redux';

//default state = initial state 
/**
const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type){
        case "ADD":
            state = {
                 result: state.result,
                 lastValues: state.lastValues,
                 result: state.result + action.payload,
                 lastValues: [...state.lastValues, action.payload]
                 
            };
            break;
            case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;

};

const userReducer = (state = {
    name: "",
    age: 0,
}, action) => {
    switch (action.type){
        case "SET_NAME":
            state = {
                 ...state,
                 name: action.payload
            };
            break;
            case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};


const store = createStore(combineReducers({
    //mathReducer: mathReducer,
    //userReducer: userReducer,
    mathReducer,
    userReducer,
}), {}/**, applyMiddleware(myLogger )*///);

//myLogger middlewar3
/** 
const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action ", action);
    next(action);
}
store.subscribe(() => {
    console.log("Updated!", store.getState())
});

store.dispatch({
    type: "ADD",
    payload: 10
});
*/
