import React from 'react';
import './reviewItemStyle.css';

const ReviewItem = (props) => {
    console.log('props=', props);
    const { name, quantity, img, key,price } = props.product;



    return (


        <div className="reviewItemStyle">
            <img src={img} alt="" />
            <h1 className="main-product">{name}</h1>
            <h3>Quantity :{quantity}</h3>
            <p>Price : {price}</p>
            <button
                className="main-btn"
                onClick={() => props.removeProduct(key)}>
                Remove
                </button>
            <hr />
        </div>
    );
};

export default ReviewItem;