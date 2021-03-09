import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, seller, stock, price, key } = props.product;
    // console.log(props);

    return (

        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h3>
                    <Link to={"/product/" + key}> {name} </Link>
                </h3>
                <p><small>By: {seller}</small></p>
                <h5>${price}</h5>
                <br />
                <p>Only {stock} left now-Order soon.</p>
                { props.showAddToCart && <button className="main-btn"
                    onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                     Add to cart
                     </button>}
            </div>

        </div>
    );
};

export default Product;