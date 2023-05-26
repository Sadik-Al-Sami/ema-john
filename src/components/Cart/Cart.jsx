import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart){
        total = total + product.price;
    }
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <div>
                <p>Selected Items {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: $</p>
            </div>
            <h3>Grand Total: $</h3>
        </div>
    );
};

export default Cart;