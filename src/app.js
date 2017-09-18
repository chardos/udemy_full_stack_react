'use strict';

import {createStore} from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload
        case "DECREMENT":
            return state - action.payload
    }
    return state;
}

// STEP 1 create the store
const store = createStore(reducer);
store.subscribe(() => {
    console.log('current state: ' + store.getState());
})

// STEP 2 create and dispatch actions
store.dispatch({type: "INCREMENT", payload: 1})
store.dispatch({type: "DECREMENT", payload: 1})
store.dispatch({type: "INCREMENT", payload: 1})
