import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';


const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        // console.log(savedCart);
        // console.log(productKey);

        const cartProduct = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            // console.log(product);
            product.quantity = savedCart[key];
            // console.log("quantity = ",product.quantity);
            return product;

        })
        setCart(cartProduct);
        // console.log(cartProduct);
    }, [])

    //handle Removing product
    const removeProduct = productKey => {
        //    console.log('btn clicked');
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        //removing from local storage
        removeFromDatabaseCart(productKey);
    }

    const [orderPlaced, setOrderPlaced] = useState(false);
    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    let thankYou ;
    if(orderPlaced){
        thankYou = <img src={happyImage} alt=""/>
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                <h1>This is Review section Boss!</h1>
                <h2 style={{ textAlign: "center" }}>Your order review: {cart.length}</h2>
                {
                    cart.map(pd => <ReviewItem product={pd}
                        removeProduct={removeProduct}
                    >
                    </ReviewItem>)
                }

            </div>
            
                {thankYou}

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder}
                        className="main-btn">Place Order
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;