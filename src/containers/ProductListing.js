import React, { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../actions/productActions";
import axios from "axios"

const ProductListing=()=>{
    const products=useSelector((state)=>state);
    console.log("product listing",products)
    const dispatch=useDispatch();
    const fetchProducts=async ()=>{
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("err",err);
        });
        //console.log(response)
        dispatch(setProducts(response.data));
    };

    useEffect(()=>{
        fetchProducts();
    },[]);
    console.log("products",products)
    return(
        <div>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing;