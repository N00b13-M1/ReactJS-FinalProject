import React from 'react'
import './footer.sass'

export default function Footer() {
    return (
        <>
            <footer className="">
                <div className="container">
                <div className="row row1 d-flex justify-content-between mx-lg-5 mx-md-5 mb-5">
                    <div className="col-lg-5 col-md-5 col-10 px-md-5 px-lg-5 mx-auto">
                        <h6 className="text-center mt-5">GET IN TOUCH</h6>
                        <p className="copyright text-center my-4">Any questions?Let us know in store at 8th floor, 379 Hudson st. New York, NY 10018 or call us on (+1) 96 716 6879</p>
                        <ul className="list1 d-flex justify-content-center p-0">
                            <li className="mx-2 my-2"><a href="http://www.facebook.com"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li className="mx-2 my-2"><a href="http://www.instagram.com"><i className="fa-brands fa-instagram"></i></a></li>
                            <li className="mx-2 my-2"><a href="http://www.pinterest.com"><i className="fa-brands fa-pinterest-p"></i></a></li>
                            <li className="mx-2 my-2"><a href="http://www.snapchat.com"><i className="fa-brands fa-snapchat"></i></a></li>
                            <li className="mx-2 my-2"><a href="http://www.youtube.com"><i className="fa-brands fa-youtube"></i></a></li>
                        </ul>
                    </div>
                    <div className="list2 col-lg-3 col-md-3 col-7 px-md-0 px-5 px-lg-5 mx-auto">
                        <h6 className="mb-4 mt-5">LINKS</h6>
                        <ul className="p-0">
                            <li className="mb-2"><a href="###">Search</a></li>
                            <li className="my-2"><a href="###">About Us</a></li>
                            <li className="my-2"><a href="###">Contact Us</a></li>
                            <li className="my-2"><a href="###">Returns</a></li>
                        </ul>
                    </div>
                    <div className="list3 col-lg-3 col-md-3 col-7 px-md-0 px-5 px-lg-5 mx-auto">
                        <h6 className="mb-4 mt-5">LINKS</h6>
                        <ul className="p-0">
                            <li className="mb-2"><a href="###">Search</a></li>
                            <li className="my-2"><a href="###">About Us</a></li>
                            <li className="my-2"><a href="###">Contact Us</a></li>
                            <li className="my-2"><a href="###">Returns</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row row2 justify-content-center align-items-center mx-aut mt-3">
                    <div className="col-lg-4 col-md-4 col-10">
                        <ul className="d-flex justify-content-center p-0">
                            <li className=""><img src="./img/paypal.webp" alt="paypal logo" /></li>
                            <li className=""><img src="./img/visa.webp" alt="visa logo" /></li>
                            <li className=""><img src="./img/mastercard.webp" alt="mastercard logo" /></li>
                            <li className=""><img src="./img/express.webp" alt="american express logo" /></li>
                            <li className=""><img src="./img/discover.webp" alt="discovery logo" /></li>
                        </ul>
                        <p className="copyright text-center">Copyright © All rights reserved</p>
                    </div>
                </div>
                </div>
            </footer>

        </>
    )
}


