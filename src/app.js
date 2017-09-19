'use strict';

import {createStore} from 'redux';
import reducers from './reducers/index';
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBook, updateBook } from './actions/booksActions';

const store = createStore(reducers);

store.subscribe(() => {
    console.log('current state: ', store.getState());
    // console.log('2nd book price: ', store.getState()[1].price);
})

// STEP 2 create and dispatch actions
store.dispatch(postBooks(
    [
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
));


store.dispatch(deleteBook({id: 1}));
store.dispatch(updateBook({
    id: 2,
    title: 'learn react in 24H'
}));

// ======= CART ACTIONS =========

store.dispatch(
    addToCart([{id: 1}])
);
