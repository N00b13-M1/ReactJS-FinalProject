import React from 'react';
import './product.sass';
import ProductList, { itemList } from '../data/ProductList'


export default function Product(props) {  
    return (
        <div className='text-center'>
            <div className="backgroundbanner d-flex justify-content-center align-items-center">
                <h2 className="text-white fs-1">COUP DE COEUR</h2>
            </div>
            <div className="container py-5">
                <div className='row'>
                    {/* Categories */}
                    <div className='col-3'>
                        <h4 cl>Category</h4>
                        <ul className=''>
                            <li>All</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Men</li>
                            <li>Accessories</li>
                        </ul>
                        <h4>Filter</h4>
                        <input type="text" placeholder='Search Product' />
                    </div>
                    {/* Products */}
                    <div className='col-9 row'>
                        <ul className="col-12 row">
                            {
                                itemList.map((element,index) =>{
                                    return(
                                        <li className='col-3 mb-3' key={index}>
                                            <img className="product-item-cover col-12" src={element.cover} alt=""/>
                                            <p>{element.thename}</p>
                                            <p>{element.price}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
