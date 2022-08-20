import React from 'react';

const Product = ({p}) => {
    return (
     
          
            <div class="card bg-base-100 shadow-xl">
              <figure>
                <img src={p.img} alt="images" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
         
       
    );
};

export default Product;