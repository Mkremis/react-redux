import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import {
  addToCart,
  deleteFromCart,
  clearCart,
} from '../actions/shoppingActions';
import CartItem from './CartItem';
import ProductItem from './ProductItem';

const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { products, cart } = state.shopping;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={() => dispatch(addToCart(product.id))}
          />
        ))}
      </article>
      <h3>Cart</h3>
      <article className="box grid-responsive">
        {cart.map((item) => (
          <CartItem
            key={`cart_${item.id}`}
            data={item}
            deleteAllFromCart={() => dispatch(deleteFromCart(item.id, true))}
            deleteOneFromCart={() => dispatch(deleteFromCart(item.id))}
          />
        ))}
      </article>
      {cart.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      )}
    </div>
  );
};

export default ShoppingCart;
