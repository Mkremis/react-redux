import React, { useReducer } from 'react';
import {
  shoppingInitialState,
  shoppingReducer,
} from '../reducers/shoppingReducer';
import CartItem from './CartItem';
import ProductItem from './ProductItem';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Cart</h3>
      <article className="box grid-responsive">
        {cart.map((item) => (
          <CartItem
            key={`cart_${item.id}`}
            data={item}
            deleteAllFromCart={deleteAllFromCart}
            deleteOneFromCart={deleteOneFromCart}
          />
        ))}
      </article>
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
};

export default ShoppingCart;
