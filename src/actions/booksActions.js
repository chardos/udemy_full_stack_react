import axios from 'axios';

export function getBooks(book) {
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
    // return {
    //     type: 'POST_BOOK',
    //     payload: book
    // }
}

export function deleteBook(id){
    return {
        type: "DELETE_BOOK",
        payload: id
    }
}

export function updateBook(book) {
    return {
        type: "UPDATE_BOOK",
        payload: book
    }
}
