import React from 'react'
import './ourstory.sass'

export default function OurStory() {
    return (
        <div className="container">
            <div className="row d-flex m-xl-5 m-4">
                <div className="col-xl-5 col-lg-5 col-md-5 col-12 p-md-2 p-0">
                    <img src="./img/story.webp" alt="story girl" className="img-fluid storygirl" />
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-12 mt-xl-0 mt-lg-0 mt-md-0 mt-5 p-md-2 p-0">
                    <h2 className="">
                        Our story
                    </h2>
                    <p className="">
                        Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                    </p>
                    <div className="steve">
                        <p className="m-2">
                            Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                        </p>
                        <span className="m-2">
                            - Steve Job’s
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
