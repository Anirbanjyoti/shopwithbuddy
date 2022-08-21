import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../Hooks/useProducts";
import { addToDb, getStoredCart } from "../utilities/fakedb";
import Cart from "./Cart/Cart";
import Product from "./Product";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);

  // pick data from localStorage
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const _id in storedCart) {
      const addedProduct = products.find((p) => p._id === _id);
      console.log(addedProduct);
      if (addedProduct) {
        const quantity = storedCart[_id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((p) => p._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (p) => p._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct._id);
  };
  return (
    <div>
      <div class="flex flex row justify-center p-20 pr-0">
        <div className="lg:basis-3/4 md:basis-3/4 sm:basis-full">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
            {products.map((p) => (
              <Product
                key={p._id}
                p={p}
                handleAddToCart={handleAddToCart}
              ></Product>
            ))}
          </div>
        </div>

        <div className="lg:basis-1/4 md:basis-1/4 sm:basis-full xs:basis-full border-2 mx-10 rounded-lg p-10 bg-neutral">
          <Cart cart={cart}></Cart>
          <Link to="/orders">
            <button className="bg-secondary rounded-lg px-10 py-2 mt-10">Review Order </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Shop;
