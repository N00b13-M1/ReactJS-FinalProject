import React from 'react';
import './ourproduct.sass';


function OurProduct() {  
    return (
        <div className='container py-5'>
            {/* Coming Soon Images */}
            <div className="row col-12 justify-content-evenly mx-0">
                <div className='coming-soon-image1 col-3 text-center'>
                    <div className='coming-soon-div col-8'>
                        <p>COMING SOON</p>
                    </div>
                </div>
                <div className='coming-soon-image2 col-3 text-center'>
                    <div className='coming-soon-div col-8'>
                        <p>COMING SOON</p>
                    </div>
                </div>
                <div className='coming-soon-image3 col-3'>
                    <div className='coming-soon-div col-8 text-center me-0'>
                        <p>COMING SOON</p>
                    </div>
                </div>
            </div>
            {/* Our Products Section */}
            <div>
                <h2 className='text-center'>OUR PRODUCTS</h2>
            </div>
        </div>
    )
}

export default OurProduct;