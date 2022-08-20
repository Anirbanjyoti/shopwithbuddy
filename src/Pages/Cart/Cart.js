import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
              <h1 className="text-3xl ">Order Summery</h1>
          <p>Selected Item: {cart.length}</p>
        </div>
    );
};

export default Cart;