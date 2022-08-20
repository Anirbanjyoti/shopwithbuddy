import React, { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import Product from "./Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart=(p)=>{
    console.log(p);
    const newCart = [...cart, p]
    setCart(newCart)
  }
  return (
    <div>
      <div class="flex flex row justify-center p-20 pr-0">
        <div className="lg:basis-3/4 md:basis-3/4 sm:basis-full">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
            {products.map((p) => (
              <Product key={p._id} p={p} handleAddToCart={handleAddToCart}></Product>
            ))}
          </div>
        </div>

        <div className="lg:basis-1/4 md:basis-1/4 sm:basis-full xs:basis-full border-2 mx-10 rounded-lg text-center pt-10">
        <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
