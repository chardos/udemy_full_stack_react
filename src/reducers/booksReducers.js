// BOOKS REDUCERS

export const booksReducers = (state = {
    books: [
        {
            _id: 1,
            title: 'this is the book title',
            description: 'this is the book',
            price: 33.33,
        },
        {
            _id: 2,
            title: 'this is the book title 2',
            description: 'this is the book 2',
            price: 44.44,
        }
    ],
}, action) => {
    switch (action.type) {
        case "GET_BOOKS":
            return {
                ...state,
                books: [...state.books]
            };
        case "POST_BOOK":
            return {
                books: [...state.books, ...action.payload]
            };
        case "DELETE_BOOK":
            return {
                books: state.books.filter((book) => {
                    return book._id !== action.payload._id
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
