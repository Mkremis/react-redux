import { REMOVE_ALL_FROM_CART } from '../types';
import { REMOVE_ONE_FROM_CART } from '../types';
import { CLEAR_CART } from '../types';
import { ADD_TO_CART } from '../types';

const initialState = {
  products: [
    {
      id: 1,
      name: 'product 1',
      price: 100,
    },
    {
      id: 2,
      name: 'product 2',
      price: 200,
    },
    {
      id: 3,
      name: 'product 3',
      price: 300,
    },
    {
      id: 4,
      name: 'product 4',
      price: 400,
    },
    {
      id: 5,
      name: 'product 5',
      price: 500,
    },
    {
      id: 6,
      name: 'product 6',
      price: 600,
    },
  ],
  cart: [],
};

export function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) => {
              return item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item;
            }),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }
    case CLEAR_CART:
      return {
        products: state.products,
        cart: [],
      };
    case REMOVE_ALL_FROM_CART:
      return {
        products: state.products,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case REMOVE_ONE_FROM_CART: {
      let itemInCart = state.cart.find((item) => item.id === action.payload);
      return itemInCart.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) => {
              return item.id === itemInCart.id
                ? { ...item, quantity: item.quantity - 1 }
                : item;
            }),
          }
        : {
            products: state.products,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    default:
      return state;
  }
}
