export const cartReducers = (state={cart:[]}, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            console.log(' action payload',action.payload);
            console.log('state cart',state.cart);
            return {
                cart: [
                    ...state.cart,
                    ...action.payload
                ]
            }
    }
    return state;
}
