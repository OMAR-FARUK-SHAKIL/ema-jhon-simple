import React, { useState } from 'react';
import './Shop.css';
import fakeData from "../../fakeData";
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    const [Products, setProducts] = useState(first10)
    const [cart, setCart] = useState([]);

    const handleAddProduct =(product) =>{
        console.log('salamuali jcgs jsg sjcfj');
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    Products.map(product =>
                        <Product product = {product} 
                        handleAddProduct={handleAddProduct}> </Product>)       
                }
            
            </div>
            <div className="cart-container">
                <h1>This is the cart</h1>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;