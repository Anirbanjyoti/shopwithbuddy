import React from 'react';

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    } 
    
    return (
        <div>
              <h1 className="text-3xl ">Order Summery</h1>
          <p>Selected Item: {cart.length}</p>
          <p>Total Price: {total}</p>
          <p>Total Shipping:{shipping} </p>
          <p>Selected Item: </p>
        </div>
    );
};

export default Cart;