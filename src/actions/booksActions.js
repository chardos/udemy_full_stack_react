import axios from 'axios';

export function getBooks() {
    return dispatch => {
        axios.get('/books')
            .then(response => {
                dispatch({
                    type: 'GET_BOOKS',
                    payload: response.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: 'GET_BOOK_REJECTED',
                    payload: err,
                })
            })
    }
    return {
        type: 'GET_BOOKS'
    }
}

export function postBooks(book) {
    return function(dispatch) {
        axios.post('/books', book)
            .then(response => {
                dispatch({
                    type: 'POST_BOOK',
                    payload: response.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: 'POST_BOOK_REJECTED',
                    payload: 'There was an error posting a new book.',
                })
            })
    }
}

export function deleteBook(id){
    return dispatch => {
        axios.delete('/books/' + id)
            .then(response => {
                dispatch({
                    type: 'DELETE_BOOK',
                    payload: id,
                })
            })
            .catch(err => {
                dispatch({
                    type: 'POST_BOOK_REJECTED',
                    payload: 'There was an error posting a new book.',
                })
            })
    }
}

export function updateBook(book) {
    return {
        type: "UPDATE_BOOK",
        payload: book
    }
}
