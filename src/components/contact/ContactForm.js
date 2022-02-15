import React from 'react'
import './contactform.sass'

export default function ContactForm() {
    return (
        <div className="container">
            <div className="row my-5 d-flex justify-content-xl-center justify-content-lg-around">
                <div className="first col-xl-4 col-lg-4 col-md-8 col-12 mx-md-auto my-md-5 m-lg-0">
                    <iframe className="img-responsive" title="map" width={400} height={400} frameBorder={0} scrolling="yes" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?q=Kings%20Plaza%20Shopping%20Center&t=&z=15&ie=UTF8&iwloc=&output=embed" />
                </div>
                <div className="second col-xl-4 col-lg-4 col-md-8 col-12 mx-md-auto m-lg-0 mt-xl-0 mt-lg-0 mt-md-0 mt-5">
                    <h3 className="">Send us your message</h3>
                    <form action="" method="get">
                        <input type="text" name="name" id="" placeholder="Full Name"    className="w-100 my-2 mt-4 py-2 px-4" />
                        <input type="tel" name="phone" id="" placeholder="Phone Number" className="w-100 my-2 py-2 px-4" />
                        <input type="email" name="email" id="" placeholder="Email Address" className="w-100 my-2 py-2 px-4"/>
                        <textarea name="message" id="" cols="30" rows="3" placeholder="Message" className="w-100 my-2 py-2 px-4"></textarea>
                        <button className="bg-black text-white py-2 px-5 border rounded-pill"
                        type="submit">SEND</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
