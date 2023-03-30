import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Prouect.css'
const Prouect = (props) => {
  console.log(props)
  const {img,name,seller,quatity,price,ratings} =props.product;
  const handleAddToCart =props.handleAddToCart;
  return (
    <div className='product'>
     <img  src={img} alt=""/>
   <div className="product-info">
   <h6 className='prouduct-name'>Name:{name}</h6>
      <p>Price :${price}</p>
      <p>Manufacturef:{seller}</p>
      <p>Rating:{ratings} Stars</p>
   </div>
   <button onClick={()=>handleAddToCart(props.product)} 
   className='btn-cart'>
    Add To Cart
    <FontAwesomeIcon icon={faShoppingCart} />
    </button>
    </div>
  );
};

export default Prouect;