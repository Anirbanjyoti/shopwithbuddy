import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ p, handleRemoveProduct }) => {

  return (
    <div className="w-3/4 mx-auto">
      <div className="card card-side items-center bg-base-100 shadow-xl">
        <figure className="w-40 p-2">
          <img src={p.img} alt="images" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{p.name}</h2>
          <p>Price: ${p.price}</p>
          <p>Shipping:{p.shipping} </p>
          <p>Quantity: {p.quantity}</p>
        </div>
        <div className="pr-10">
          <button onClick={()=>handleRemoveProduct(p)} className="btn bg-accent text-2xl text-red rounded-full">
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
