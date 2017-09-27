'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import BooksList from './components/pages/BooksList';
import Cart from './components/pages/Cart';
import BooksForm from './components/pages/BooksForm';
import Main from './main';

import Menu from './components/Menu'
import Footer from './components/Footer'

import {createStore} from 'redux';
import reducers from './reducers/index';
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBook, updateBook } from './actions/booksActions';

const store = createStore(reducers);
store.subscribe(() => {
  console.log(store.getState());
})

const Routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={BooksList} />
        <Route path="/admin" component={BooksForm} />
        <Route path="/cart" component={Cart} />
      </Route>
    </Router>
  </Provider>
)

render (
    Routes, document.getElementById('app')
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
