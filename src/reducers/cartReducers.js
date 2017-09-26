export const cartReducers = (state={cart:[]}, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return ({
              ...state,
              cart: action.payload,
              totalAmount: totals(action.payload).amount,
              totalQty: totals(action.payload).qty,
            })
        case "UPDATE_CART":
            const currentBookToUpdate = [...state.cart]
            const indexToUpdate = currentBookToUpdate.findIndex(book => {
                return book._id === action._id;
            })

            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
            }

            let cartUpdated = [
                ...currentBookToUpdate.slice(0, indexToUpdate),
                newBookToUpdate,
                ...currentBookToUpdate.slice(indexToUpdate + 1)
            ]

            return {
                ...state,
                cart: cartUpdated,
                totalAmount: totals(cartUpdated).amount,
                totalQty: totals(cartUpdated).qty,
            }
        case "DELETE_CART_ITEM":
            return {
              ...state,
              cart: action.payload,
              totalAmount: totals(action.payload).amount,
              totalQty: totals(action.payload).qty,
            }
    }
    return state;
}

// CALCULATE TOTALS
export function totals(cartArr) {
  const totalAmount = cartArr.map(cartItem => {
    return cartItem.price * cartItem.quantity
  }).reduce((a,b) => {
    return a + b;
  }, 0);

  const totalQty = cartArr.map(cartItem => {
    return cartItem.quantity
  }).reduce((a,b) => {
    return a + b;
  }, 0);

  return {
    amount: totalAmount.toFixed(2),
    qty: totalQty.toFixed(2),
  };
}
