// BOOKS REDUCERS

export const booksReducers = (state = {
    books: [],
}, action) => {
    switch (action.type) {
        case "GET_BOOKS":
            return {
                ...state,
                books: [...action.payload]
            };
        case "POST_BOOK":
            return {
                books: [...state.books, ...action.payload]
            };
        case "DELETE_BOOK":
            return {
                books: state.books.filter((book) => {
                    return book._id !== parseFloat(action.payload);
                })
            };
        case "UPDATE_BOOK":
            // Create a copy of the current array of books
            const currentBookToUpdate = [...state.books]
            // Determine at which index in books array is the book to be deleted
            const indexToUpdate = currentBookToUpdate.findIndex(book => {
                return book._id === action.payload._id;
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
