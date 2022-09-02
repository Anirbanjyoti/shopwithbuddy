import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  
  // pick data from localStorage
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const _id in storedCart) {
      const addedProduct = products?.find((p) => p._id === _id);
      // console.log(addedProduct);
      if (addedProduct) {
        const quantity = storedCart[_id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return [cart, setCart];
};

export default useCart;
