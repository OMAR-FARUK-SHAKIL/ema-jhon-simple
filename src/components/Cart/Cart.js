
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // console.log("cart props= ", props, "  cart= ", cart);
    // const total = cart.reduce((total,prd) => {
    //     const cal = total + (prd.price*prd.quantity);
    //     return cal;
    // },0)


    // let total = 0;
    // const limit = cart.length;
    // console.log("cart len = ",limit);
  
    // for (let i = 0; i < limit; i++) {
    //     const product = cart[i];
    //     total = total + product.price * product.quantity;
    //     console.log("total= ",total);
       
    // }

    // let total = cart.reduce((total,prd) => total + prd.price,0)
    let total = 0;
    for(let i = 0 ; i<cart.length; i++){
        const product = cart[i];
        total = product.price * product.quantity + total;
    } 

    let shipping = 0;
    if(total<500 && total >0 )
        shipping = 15;

    let tax = (total / 10).toFixed(2);
    total = total + shipping + Number(tax);
    total = total.toFixed(2);
    

    return (
        <div className="cart">
            <h2>This is your cart review</h2>
            <h2>Order summary</h2>
            <h3>Items:{cart.length} </h3>
            <p>shipping cost :{shipping} </p>
            <p>Tax = {tax}</p>
            <h1>Total Price: ${total}</h1>
            {
                props.children
            }
        </div>
    );
};

export default Cart;