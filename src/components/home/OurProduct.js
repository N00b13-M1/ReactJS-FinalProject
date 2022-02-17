import React from 'react';
import { itemList } from '../data/ProductList';
import ProductItem from '../product-item/ProductItem';
import './ourproduct.sass';

export default function OurProduct() {  
    return (
        <>
        <div className='container py-5'>
            {/* Coming Soon Images */}
            <div className='row justify-content-center pb-5'>
                <div className='col-md-4 col-12 d-flex justify-content-center align-items-end mb-md-0 mb-3'>
                    <button className='coming-soon-button m-4 py-2 px-4'>COMING SOON</button>
                    <img className='col-12' src="./img/coming-soon1.webp" />
                </div>
                <div className='col-md-4 col-12 d-flex justify-content-center align-items-end mb-md-0 mb-3'>
                    <button className='coming-soon-button m-4 py-2 px-4'>COMING SOON</button>
                    <img className='col-12' src="./img/coming-soon1.webp" />
                </div>
                <div className='col-md-4 col-12 d-flex justify-content-center align-items-end mb-md-0 mb-3'>
                    <button className='coming-soon-button m-4 py-2 px-4'>COMING SOON</button>
                    <img className='col-12' src="./img/coming-soon1.webp" />
                </div>
            </div>
            {/* Our Products Section */}
            <div>
                <h3 className='text-center'>OUR PRODUCTS</h3>
                <ul className='d-flex justify-content-center p-0'>
                    <li>
                        <a className='filter'>Best-Seller</a>
                    </li>
                    <li>
                        <a className='filter'>New</a>
                    </li>
                    <li>
                        <a className='filter'>Sale</a>
                    </li>
                    <li>
                        <a className='filter'>Old</a>
                    </li>
                </ul>
            </div>
            <div>
            
            </div>
            {/* LookBook Banner */}
        </div>
        <div className='container-fluid lookbook text-center'>
                <h5><span>The Beauty</span><br /> LOOKBOOK</h5>
                <p><i className="fa-solid fa-play" /> Play Video</p>
        </div>
        </>
    );
}
