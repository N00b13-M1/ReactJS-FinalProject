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
                    <div className='row title-row'>
                        <div className='col-3'>
                            <h6>PRODUCT</h6>
                        </div>
                        <div className='col-2'>
                            <h6>PRICE</h6>
                        </div>
                        <div className='col-2'>
                            <h6>QUANTITY</h6>
                        </div>
                        <div className='col-2'>
                            <h6>TOTAL</h6>
                        </div>
                        <div className='col-2'>
                            <h6>ADD</h6>
                        </div>
                    </div>
                    {/* Product Row */}
                    <div className='row'>
                        {
                            props.tableauLikesProp.map(element => (
                                <div className='row product-row'>
                                    <div className='row col-3'>
                                        <img className='col-12' src={element.src}/>
                                    </div>
                                    <div className='col-2'>
                                        {element.price}
                                    </div>
                                    <div className='col-2 row'>
                                        <button className='col-4 quantity-button p-1 px-3'>-</button>
                                        <p className='col-4 quantity m-0'>X</p>
                                        <button className='col-4 quantity-button p-1 px-3'>+</button>
                                    </div>
                                    <div className='col-2'>
                                        <p>X</p>
                                    </div>
                                    <div className='col-2'>
                                        <button className='add-button px-3 py-1'>ADD</button>
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

