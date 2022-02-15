import React from 'react';
import './ourproduct.sass';


function OurProduct() {  
    return (
        <div className='container py-5'>
            {/* Coming Soon Section */}
            <div className="row justify-content-around">
                <div className='coming-soon-image1 col-4'>
                    <div className='coming-soon-div'>
                        <p>COMING SOON</p>
                    </div>
                </div>
                <div className='coming-soon-image2 col-4'>
                    <div className='coming-soon-div'>
                        <p>COMING SOON</p>
                    </div>
                </div>
                <div className='coming-soon-image3 col-4'>
                    <div className='coming-soon-div'>
                        <p>COMING SOON</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProduct;