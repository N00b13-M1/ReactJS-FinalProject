import './product.sass';
import ProductList, { itemList } from '../data/ProductList'
import React, { useState } from 'react';



export default function Product(props) {  

    const [pageCategory, setPageCategory] = useState('');

    const changepageCategory = (newPageCategory) => {
        setPageCategory(newPageCategory)
        console.log(pageCategory);
    }    


    return (
        <div className='text-center'>
            <div className="backgroundbanner d-flex justify-content-center align-items-center">
                <h2 className="text-white fs-1">COUP DE COEUR</h2>
            </div>
            <div className="container py-5">
                <div className='row'>
                    {/* Categories */}
                    <div className='col-3'>
                        <h4>Category</h4>
                        <ul className=''>
                            <li onClick={() => {changepageCategory('')}}>All</li>
                            <li onClick={() => {changepageCategory('women')}}>Women</li>
                            <li onClick={() => {changepageCategory('kids')}}>Kids</li>
                            <li onClick={() => {changepageCategory('men')}}>Men</li>
                            <li onClick={() => {changepageCategory('accessories')}}>Accessories</li>
                        </ul>
                        <h4>Filter</h4>
                        <input type="text" placeholder='Search Product' />
                    </div>
                    {/* Products */}
                    <div className='col-9 row'>
                        <ul className="col-12 row">
                            {
                                itemList.filter(chaqueElementDuTableau => chaqueElementDuTableau.category.toLowerCase().includes(pageCategory))
                                .map((element,index) =>{
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
