import React from "react";

const Product = ({ p, handleAddToCart }) => {
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure>
        <img src={p.img} alt="images" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{p.name}</h2>
        <p>Price: ${p.price}</p>
        <p>Seller: {p.seller}</p>
        <p>Ratings: {p.ratings} star</p>
        <div class="card-actions justify-end">
          <button onClick={()=>handleAddToCart(p)} class="btn bg-secondary text-black">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
