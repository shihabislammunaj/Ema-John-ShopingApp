import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
  },[]);


useEffect(()=>{
     const storedCart =getShoppingCart();
     const savedCart=[];
     for(const id in storedCart){
      // console.log(id);
      const addedProduct =proudcts.find(proudct => proudct.id === id)
      if(addedProduct){
        const quantity =storedCart[id];
        addedProduct.quantity =quantity;
        savedCart.push(addedProduct)
      }
      // console.log('added Prouduct',addedProduct)
    }
    setCart(savedCart)
},[proudcts])


  const handleAddToCart =(product)=>{
    // cart.push(proudct);
    const newCart=[...cart,product];
    setCart(newCart);
    addToDb(product.id)
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