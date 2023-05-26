import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { img, name, seller, price, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='product-details'>
                <h5 className='product-name'>{name}</h5>
                    <p>Price: ${price}</p>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} Star</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Card
                <FontAwesomeIcon icon={faShoppingCart}/>
            </button>
        </div>
    );
};
export default Product;