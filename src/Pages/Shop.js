import React, { useEffect, useState } from "react";
import Product from "./Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div class="flex flex-row p-20">
        <div className="">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 col-span-3 gap-10">
            {products.map((p) => (
              <Product key={p._id} p={p}></Product>
            ))}
          </div>
        </div>

        <div className="">
          <h1 className="text-5xl">Cart</h1>
        </div>
      </div>
    </div>
  );
};

export default Shop;
