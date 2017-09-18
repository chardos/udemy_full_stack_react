'use strict';

import {createStore} from 'redux';

const reducer = (state = {books: []}, action) => {
    switch (action.type) {
        case "POST_BOOK":
            return {
                books: [...state.books, ...action.payload]
            };
    }
    return state;
}

// STEP 1 create the store
const store = createStore(reducer);
store.subscribe(() => {
    console.log('current state: ', store.getState());
    // console.log('2nd book price: ', store.getState()[1].price);
})

// STEP 2 create and dispatch actions
store.dispatch({
    type: 'POST_BOOK',
    payload: [
        {
            id: 1,
            title: 'this is the book title',
            description: 'this is the book',
            price: 33.33,
        },
        {
            id: 2,
            title: 'this is the book title 2',
            description: 'this is the book 2',
            price: 44.44,
        },
    ]

});

store.dispatch({
    type: "POST_BOOK",
    payload: [{
        id: 3,
        title: 'title is 3rd',
        description: '3rd desc',
        price: 55.55,
    }]
})
