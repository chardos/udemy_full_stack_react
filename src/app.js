'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import BooksList from './components/pages/BooksList';

import {createStore} from 'redux';
import reducers from './reducers/index';
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBook, updateBook } from './actions/booksActions';

const store = createStore(reducers);
store.subscribe(() => {
  console.log(store.getState());
})

render (
    <Provider store={store}>
        <BooksList />
    </Provider>, document.getElementById('app')
)

// STEP 2 create and dispatch actions
// store.dispatch(postBooks(
//
// ));

// store.dispatch(deleteBook({id: 1}));
// store.dispatch(updateBook({
//     id: 2,
//     title: 'learn react in 24H'
// }));
//
// // ======= CART ACTIONS =========
//
// store.dispatch(
//     addToCart([{id: 1}])
// );
