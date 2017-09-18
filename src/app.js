'use strict';

import {createStore} from 'redux';

const reducer = (state = {books: []}, action) => {
    switch (action.type) {
        case "POST_BOOK":
            return {
                books: [...state.books, ...action.payload]
            };
        case "DELETE_BOOK":
            return {
                books: state.books.filter((book) => {
                    return book.id !== action.payload.id
                })
            };
        case "UPDATE_BOOK":
            // Create a copy of the current array of books
            const currentBookToUpdate = [...state.books]
            // Determine at which index in books array is the book to be deleted
            const indexToUpdate = currentBookToUpdate.findIndex(
                function(book){
                    return book.id === action.payload.id;
                })

                const newBookToUpdate = {
                    ...currentBookToUpdate[indexToUpdate],
                    title: action.payload.title
                }

                console.log("what is it newBookToUpdate", newBookToUpdate);

                return {
                    books: [
                        ...currentBookToUpdate.slice(0, indexToUpdate),
                        newBookToUpdate,
                        ...currentBookToUpdate.slice(indexToUpdate + 1)
                    ]
                }
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
    type: "DELETE_BOOK",
    payload: {
        id: 1,
    }
})

store.dispatch({
    type: "UPDATE_BOOK",
    payload: {
        id: 2,
        title: 'learn react in 24H'
    }
})
