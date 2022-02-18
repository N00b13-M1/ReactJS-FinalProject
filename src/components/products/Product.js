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
                <h2 className="text-white fs-1">PRODUCTS</h2>
            </div>
            <div className="container py-5">
                <div className='row justify-content-center'>
                    {/* Categories */}
                    <div className='col-md-3 col-12 text-start'>
                        <ul className='text-start'>
                            <h4>Category</h4>
                            <li className='my-1' onClick={() => {changepageCategory('')}}>All</li>
                            <li className='my-1' onClick={() => {changepageCategory('women')}}>Women</li>
                            <li className='my-1' onClick={() => {changepageCategory('kids')}}>Kids</li>
                            <li className='my-1' onClick={() => {changepageCategory('men')}}>Men</li>
                            <li className='my-1 mb-2' onClick={() => {changepageCategory('accessories')}}>Accessories</li>
                            <h4>Filter</h4>
                            <input type="text" placeholder='Search Product' />
                            
                        </ul>
                    </div>
                    {/* Products */}
                    <div className='col-md-9 col-12 row justify-content-center p-4 pt-0'>
                        <ul className="row p-0">
                            {
                                itemList.filter(chaqueElementDuTableau => chaqueElementDuTableau.category.toLowerCase().includes(pageCategory))
                                .map((element,index) =>{
                                    return(
                                        <>
                                            {
                                                element.sale === true &&
                                                <li className='col-md-3 col-12 mb-3 mx-md-3 p-0' key={index}>
                                                    <p className='sale py-1 px-2 ms-2 mt-2'>Sale</p>
                                                    <img className="product-item-cover col-12" src={element.cover} alt=""/>
                                                    <p className='mb-0 mt-2 text-dark fw-bold'>{element.thename}</p>
                                                    <p>{element.price}</p>
                                                </li>
                                            }
                                            {
                                                element.sale === false &&
                                                <li className='col-md-3 col-12 mb-3 mx-md-3 p-0' key={index}>
                                                    <img className="product-item-cover col-12" src={element.cover} alt=""/>
                                                    <p className='mb-0 mt-2 text-dark fw-bold'>{element.thename}</p>
                                                    <p>{element.price}</p>
                                                </li>
                                            }
                                            

                                            {/* <li className='col-md-3 col-12 mb-3 mx-md-3 p-0' key={index}>
                                                <img className="product-item-cover col-12" src={element.cover} alt=""/>
                                                <p className='mb-0 mt-2 text-dark'>{element.thename}</p>
                                                <p>{element.price}</p>
                                            </li> */}
                                        </>
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
