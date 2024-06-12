import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { food_list } from '../../assets/assets';
const Cart = () => {

  const { cartItems, addToCart, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (

              <div>
                    <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                    </div>
                    <hr />
              </div>

            )
          }
        })}
      </div>
      <div className="cart-buttom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <p>${getTotalCartAmount()+2}</p>
            </div>
            
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If have a promo code, Enter it here </p>
            <div className="promocode-input">
              <input type="text" placeholder='promo code' />
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart