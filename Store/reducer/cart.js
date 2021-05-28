import {CART_ITEM} from '../action/cart';

const initialState = {
  cartNumbers: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ITEM:
      return {...state, cartNumbers: [...state.cartNumbers, action.cartData]};
    default:
      return state;
  }
};

export default CartReducer;
