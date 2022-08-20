import React from "react";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;

  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  const gradTotal = total + shipping + tax;
  return (
    <div>
      <h1 className="text-3xl ">Order Summery</h1>
      <p>Selected Item: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping:{shipping} </p>
      <p>Tax: {tax}</p>
      <p>Gran Total: {gradTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
