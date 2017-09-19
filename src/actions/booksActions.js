

export function getBooks(book) {
    console.log('getBooks action creator');
    return {
        type: 'GET_BOOKS'
    }
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
