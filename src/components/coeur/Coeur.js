import React from 'react';
import './coeur.sass';


export default function Coeur(props) {  
    return (
        <div>
            <div className="backgroundbanner d-flex justify-content-center align-items-center">
                <h2 className="text-white fs-1">FAVOURITE</h2>
            </div>
            <div>
            <div className='container'>
                <div className='row justify-content-center p-5'>
                    {/* Title Row */}
                    <div className='row title-row p-0'>
                        <div className='col-2'>
                            <h6>PRODUCT</h6>
                        </div>
                        <div className='col-2'>
                            <h6>PRICE</h6>
                        </div>
                        <div className='col-2'>
                            <h6>QUANTITY</h6>
                        </div>
                        <div className='col-3'>
                            <h6>TOTAL</h6>
                        </div>
                        <div className='col-3'>
                            <h6>ADD</h6>
                        </div>
                    </div>
                    {/* Product Row */}
                    <div className='row'>
                        {
                            props.tableauLikesProp.map(element => (
                                <div className='row product-row'>
                                    <div className='row col-2 p-3'>
                                        <img className='col-12' src={element.src}/>
                                    </div>
                                    <div className='row col-2 p-3 align-items-center justify-content-center'>
                                        {element.price}
                                    </div>
                                    <div className='row col-2 row p-3 align-items-center justify-content-center'>
                                        <button className='col-4 quantity-button p-1 px-3'>-</button>
                                        <p className='col-4 m-0'>X</p>
                                        <button className='col-4 quantity-button p-1 px-3'>+</button>
                                    </div>
                                    <div className='row col-3 p-3 align-items-center justify-content-center'>
                                        <p className='text-center'>X</p>
                                    </div>
                                    <div className='row col-3 text-end p-3 align-items-center'>
                                        <button className='add-button px-3 py-1 ms-5'>ADD</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

