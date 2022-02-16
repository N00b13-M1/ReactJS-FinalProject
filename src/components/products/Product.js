import React from 'react';
import './product.sass';
import ProductList, { itemList } from '../data/ProductList'


export default function Product(props) {  
    return (
        <div className='text-center bg-danger'>
            <div className="backgroundbanner d-flex justify-content-center align-items-center">
                <h2 className="text-white fs-1">COUP DE COEUR</h2>
            </div>
            <div>
                <ul className="">
                    {
                        itemList.map((element,index) =>{
                            return(
                                <li key={index}>
                                    <img className="product-item-cover" src={element.cover} alt=""/>
                                    <p>{element.thename}</p>
                                    <p>{element.price}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
