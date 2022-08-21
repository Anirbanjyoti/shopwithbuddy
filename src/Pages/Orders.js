import React from "react";
import {Link} from "react-router-dom";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import Cart from "./Cart/Cart";
import ReviewItem from "./ReviewItem";

const Orders = () => {
  const [products] = useProducts();
  const [cart] = useCart(products);
  return (
    <div>
      <div class="flex flex row justify-center p-20 pr-0">
        <div className="lg:basis-3/4 md:basis-3/4 sm:basis-full">
          <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10">

            {
                cart.map(p=><ReviewItem key={p._id} p={p}></ReviewItem>)
            }
          </div>
        </div>

        <div className="lg:basis-1/4 md:basis-1/4 sm:basis-full xs:basis-full border-2 mx-10 rounded-lg p-10 bg-neutral">
          <Cart cart={cart}></Cart>
          <Link to="/orders">
            <button className="bg-secondary rounded-lg px-10 py-2 mt-10">
              Review Order{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orders;
