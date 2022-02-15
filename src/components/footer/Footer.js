import React from 'react'
import './footer.sass'

export default function Footer() {
    return (
        <>
            <footer className="container-fluid">
                <div className="row row1">
                    <div className="col-lg-4 col-md-4 col-10">
                        <h6>GET IN TOUCH</h6>
                        <p className="copyright text-center">Any questions?Let us know in store at 8th floor, 379 Hudson st. New York, NY 10018 or call us on</p>
                        <ul className="d-flex justify-content-center p-0">
                            <li className=""><i class="fa-brands fa-facebook-f"></i></li>
                            <li className=""><i class="fa-brands fa-instagram"></i></li>
                            <li className=""><i class="fa-brands fa-pinterest-p"></i></li>
                            <li className=""><i class="fa-brands fa-snapchat"></i></li>
                            <li className=""><i class="fa-brands fa-youtube"></i></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-10">
                        <h6>LINKS</h6>
                        <ul className="p-0">
                            <li className="">Search</li>
                            <li className="">About Us</li>
                            <li className="">Contact Us</li>
                            <li className="">Returns</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-10">
                        <h6>LINKS</h6>
                        <ul className="p-0">
                            <li className="">Search</li>
                            <li className="">About Us</li>
                            <li className="">Contact Us</li>
                            <li className="">Returns</li>
                        </ul>
                    </div>
                </div>
                <div className="row row2 justify-content-center align-items-center mx-aut my-3">
                    <div className="col-4">
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
            </footer>

        </>
    )
}


