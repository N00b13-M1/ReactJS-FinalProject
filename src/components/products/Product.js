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
                            <li className='my-1' onClick={() => {changepageCategory('Women')}}>Women</li>
                            <li className='my-1' onClick={() => {changepageCategory('Kids')}}>Kids</li>
                            <li className='my-1' onClick={() => {changepageCategory('Men')}}>Men</li>
                            <li className='my-1 mb-2' onClick={() => {changepageCategory('Accessories')}}>Accessories</li>
                            <h4>Filter</h4>
                            <input type="text" placeholder='Search Product' />
                            
                        </ul>
                    </div>
                    {/* Products */}
                    <div className='col-md-9 col-12 row justify-content-center p-4 pt-0'>
                    <ul className="row p-0">
                            {
                                itemList.filter(chaqueElementDuTableau => chaqueElementDuTableau.category.match(pageCategory)).map((element,index) =>{
                                    return(
                                        <>
                                            {console.log(element)}

                                            <li className='product-item col-md-3 col-12 mb-3 mx-md-3 p-0' key={index}>
                                                {
                                                    element.sale === true &&
                                                    <p className='sale py-1 px-2 m-2'>Sale</p>
                                                }
                                                {
                                                    element.new === true &&
                                                    <p className='new py-1 px-2 m-2'>New</p>
                                                }
                                                {
                                                    element.bestseller === true &&
                                                    <p className='best-seller py-1 px-2 m-2'>Best 							Seller</p>
                                                }
                                                {
                                                    element.old === true &&
                                                    <p className='old py-1 py-1 px-2 m-2'>Old</p>
                                                }
                                                <img className="img-fluid" src={element.cover} alt="" />
                                                <p className='mb-0 mt-2 text-dark fw-bold'>{element.thename}</p>
                                                <p>{element.price}</p>
                                            </li>

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
