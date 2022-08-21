import React from 'react';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';

const Orders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h1>Total Orders: {products.length}</h1>
            <h1>cart has: {cart.length}</h1>
        </div>
    );
};

export default Orders;