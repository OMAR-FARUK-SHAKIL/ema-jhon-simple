import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd) => total+prd.price,0)
    
    let shipping = 0;
    if(total>50 || total == 0){
        shipping = 0;
    }
    else if(total>20){shipping=10.99;}
    else{shipping = 15.99;}

    let tax = (total/10).toFixed(2);

    return (
        <div className="cart">
            <h2>Order summary</h2>
            <h3>Items:{cart.length} </h3>
            <p>shipping cost :{shipping} </p>
            <p>Tax = {tax}</p>
            <h1>Total Price: ${total+shipping + Number(tax)}</h1>
            
        </div>
    );
};

export default Cart;