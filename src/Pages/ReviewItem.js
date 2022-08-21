import React from "react";

const ReviewItem = ({ p }) => {
  return (
    <div className="w-3/4 mx-auto">
      <div class="card card-side bg-base-100 shadow-xl">
        <figure className="w-40 p-2">
          <img src={p.img} alt="images" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{p.name}</h2>
          <p>Price: ${p.price}</p>
          <p>Shipping:{p.shipping} </p>
          <p>Quantity: {p.quantity}</p>
        </div>
        <button class="btn btn-primary">Delete</button>
      </div>
    </div>
  );
};

export default ReviewItem;
