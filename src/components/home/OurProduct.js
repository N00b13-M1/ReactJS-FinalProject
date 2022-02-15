import React from 'react';
import './ourproduct.sass';


function OurProduct() {  
    return (
        <>
        <div className='container py-5'>
            {/* Coming Soon Images */}
            <div className="row col-12 justify-content-evenly mx-0">
                <div className='coming-soon-image col-md-3 col-12'>
                    <p className='coming-soon text-center py-2'>J'arrive pas</p>
                </div>
                <div className='coming-soon-image col-md-3 col-12'>
                    <p className='coming-soon text-center py-2'>à centrer</p>
                </div>
                <div className='coming-soon-image col-md-3 col-12'>
                    <p className='coming-soon text-center py-2'>ces merdes là</p>
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
                        <a className='filter'>Sale</a>
                    </li>
                </ul>
            </div>
            <ul>
                <li>map product vient ici. </li>
            </ul>
            {/* LookBook Banner */}
        </div>
        <div className='container-fluid lookbook text-center'>
                <h5><span>The Beauty</span><br /> LOOKBOOK</h5>
                <p><i className="fa-solid fa-play" /> Play Video</p>
        </div>
        </>
    )
}

export default OurProduct;