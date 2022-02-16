import React from 'react'
import './banner.sass'

export default function Banner(props) {
    return (
        <div className="backgroundbanner d-flex justify-content-center align-items-center">
            <h2 className="text-white fs-1">{props.isma}</h2>
        </div>
    )
}
