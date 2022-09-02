import React from "react";

const Product = ({ p, handleAddToCart }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={p.img} alt="images" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{p.name}</h2>
        <p>Price: ${p.price}</p>
        <p>Seller: {p.seller}</p>
        <p>Ratings: {p.ratings} star</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleAddToCart(p)} className="btn bg-secondary text-black">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
