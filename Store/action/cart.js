export const CART_ITEM = 'CART_ITEM';

export const cartAction = data => {
  return {
    type: CART_ITEM,
    cartData: data,
  };
};
