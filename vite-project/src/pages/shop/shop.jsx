
import React from "react";
import './shop.css'
import {PRODUCTS} from '../../products.db'
import Product from "./product";

export default function Shop () {

    const allProducts = PRODUCTS.map((product)=> <Product data= {product} />)

    return (
        <>
        <div className="shop">
            <div className="shopTitle">
                <h1> ShopApp</h1>
            </div>
            <div className="products">
                {allProducts}
            </div>
        </div>
        </>
    )
}