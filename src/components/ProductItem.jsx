import React from 'react';

const ProductItem = ({ data, addToCart }) => {
  const { id, name, price } = data;

  return (
    <div className="box">
      <h4>{name} </h4>
      <h5>$ {price}.00</h5>
      <button onClick={() => addToCart(id)}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
