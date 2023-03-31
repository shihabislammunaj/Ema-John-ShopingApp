import React from 'react';
import Prouect from '../Prouect/Prouect';
import'./Cart.css'
const Cart = ({cart}) => {
  // const cart =props.cart; op-1
  // const {cart}=props; //op -2

  console.log(cart);
   let totalPrice =0;
   let totalShiping=0;
   for(const product of cart){
    totalPrice = totalPrice + product.price;
    totalShiping =totalShiping + product.shipping;
  }
const Tax=totalPrice*7/100;


const grandTotal= totalPrice + totalShiping + Tax
 
  return (
    <div className='cart'>
        <h4>Order Summary</h4>
        <p>Selected Items :{cart.length}</p>
        <p>Total Price:${totalPrice}</p>
        <p>Total Shopping:${totalShiping}</p>
        <p>Tax:${Tax.toFixed(2)}</p>
        <h6>Grand Total:${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;