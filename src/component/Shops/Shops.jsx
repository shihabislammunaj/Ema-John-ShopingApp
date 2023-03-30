import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Prouect from '../Prouect/Prouect';
import'./Shops.css';
const Shops = () => {
  const [proudcts,setProuducts]=useState([]);
    const [cart,setCart]=useState([])
  useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProuducts(data))
  },[])
  const handleAddToCart =(product)=>{
    // cart.push(proudct);
    const newCart=[...cart,product];
    setCart(newCart);
  }
  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          proudcts.map(product => <Prouect
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
          >
          </Prouect> )
        }
       </div>
      <div className="cart-container">
      <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shops;