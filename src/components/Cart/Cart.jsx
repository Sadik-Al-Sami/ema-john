import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const { cart, handleClearCart, children } = props;
    let total = 0;
    let totalShipping = 0;
    let quantity = 0
    for (const product of cart) {
        // product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total * 0.07
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <div>
                <p>Selected Items {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
            </div>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            <button onClick={() => handleClearCart()} className='btn-clear'>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;