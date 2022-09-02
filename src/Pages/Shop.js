import { Link } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import { addToDb } from "../utilities/fakedb";
import Cart from "./Cart/Cart";
import Product from "./Product";

const Shop = () => {
  const [products] = useProducts();
  // pick data from localStorage
  const [cart, setCart] = useCart(products)

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
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
  };
  return (
    <div>
      <div className="lg:flex md:flex justify-center relative">
        <div className="lg:basis-3/4 md:basis-3/4 sm:basis-full">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-20 pl-20">
            {products.map((p) => (
              <Product
                key={p._id}
                p={p}
                handleAddToCart={handleAddToCart}
              ></Product>
            ))}
          </div>
        </div>

        <div className="lg:basis-1/4 md:basis-1/4 sm:basis-full xs:basis-full border-2 ml-10 rounded-lg p-10 bg-neutral sticky top-0">
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

export default Shop;
