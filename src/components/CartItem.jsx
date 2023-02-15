import React from 'react';

const CartItem = ({ data, deleteAllFromCart, deleteOneFromCart }) => {
  const { id, name, price, quantity } = data;
  return (
    <div className="box">
      <h4>{name} </h4>

      <h5>
        ${price} x {quantity} = $ {price * quantity}.00
      </h5>

      <button onClick={() => deleteOneFromCart(id)}>
        Delete one from cart
      </button>
      <button onClick={() => deleteAllFromCart(id)}>
        Delete all from cart
      </button>
    </div>
  );
};

export default CartItem;
