import { addToDb } from "../utilities/fakedb";
import useCart from "./useCart";
import useProducts from "./useProducts";

const useAddToCart = (selectedProduct) => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  let newCart = [];
  const exists = cart.find((p) => p._id === selectedProduct._id);
  if (!exists) {
    selectedProduct.quantity = 1;
    newCart = [...cart, selectedProduct];
  } else {
    const rest = cart.filter((p) => p._id !== selectedProduct._id);
    exists.quantity = exists.quantity + 1;
    newCart = [...rest, exists];
  }
  setCart(newCart);
  addToDb(selectedProduct._id);
  return [cart, setCart];
};

export default useAddToCart;
