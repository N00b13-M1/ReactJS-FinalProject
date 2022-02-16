import React from "react";


export default function ProductItem(id, thename, cover, price) {
    return(
        <>
            <li key={id}>
                <img className="product-item-cover" src={cover} alt=""/>
                <p>{thename}</p>
                <p>{price}</p>
            </li>
        </>
    );
}
