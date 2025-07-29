import {React} from 'react'
import { useSelector } from "react-redux";


const Cart = () => {
    const allProducts = useSelector((state)=> state.allProducts);
    const product =useSelector((state)=> state.product);
    const cartItems = useSelector((state)=> state.cart.addedItems);
    console.log("cart",cartItems.addedItems)
    console.log("allproducts",allProducts)
    console.log("product",product)
    
    const renderList = cartItems && cartItems.map((products)=>{
      const {id,title,image,price,category}=products;

      return(
          <div className="four wide column" key={id}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={image} alt={title} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">$ {price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
          
        </div>
      )
  })

  return (
    <div >
      <div className='cart-heading'>
      <h1>Cart</h1></div>
      {Object.keys(cartItems)=== 0 ? (<h1>loading.......</h1>):( 
          renderList
          )} 
    </div>
  )
}

export default Cart