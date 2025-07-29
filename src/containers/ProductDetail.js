import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./ProductDetail.css";
import { selectedProduct,removeSelectedProduct,addToCart } from "../actions/productActions";

const ProductDetail=()=>{
    
    const product = useSelector((state)=> state.product);
    const products=useSelector((state)=>state.products)
    const {image,title,price,category,description} = product;
    const {productId}=useParams();
    const dispatch=useDispatch();
    const navigate = useNavigate();
    console.log("ProductId : ",productId)
    console.log("product detail ",product)
    
    const fetchProductDetails = async()=>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err)=>{
                console.log("err",err);
            });
            dispatch(selectedProduct(response.data))
    }

    useEffect(()=>{
        if(productId && productId!==""){ fetchProductDetails();}
        return ()=>{
            dispatch(removeSelectedProduct());
        }
    },[productId])

    const cartPage=()=>{
      navigate(`/product/${productId}/cart`);
    }

    const handleClick = (product)=>{
      // const product = useSelector((state)=> state.product);
      // console.log(product)
      dispatch(addToCart(product))
    }
    
    return(
        <div>
            { Object.keys(product).length === 0 ? (<div id="loading">Loading....</div>):(
                <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                  <div className="ui vertical divider"></div>
                  <div className="middle aligned row">
                    <div className="column lp">
                      <img className="ui fluid image" src={image} />
                    </div>
                    <div className="column rp">
                      <h1>{title}</h1>
                      <h2>
                        <p className="ui teal tag label" >${price}</p>
                      </h2>
                      <h3 className="ui brown block header">{category}</h3>
                      <p>{description}</p>
                      <div className="ui vertical animated button" tabIndex="0">
                        {/* <div className="hidden content">
                          <i className="shop icon"></i>
                        </div> */}
                        <div className="visible content" onClick={()=>
                          {
                            dispatch(addToCart(product))
                            cartPage()
                            }} >Add to Cart</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
    )
}

export default ProductDetail;