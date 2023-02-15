import {
  REMOVE_ONE_FROM_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  ADD_TO_CART,
} from '../types';

export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });
export const deleteAllFromCart = (id) => ({
  type: REMOVE_ALL_FROM_CART,
  payload: id,
});
export const deleteOneFromCart = (id) => ({
  type: REMOVE_ONE_FROM_CART,
  payload: id,
});
export const clearCart = () => ({ type: CLEAR_CART });
