import React from "react";


function ProductItem(id, thename, cover, price) {
    <li key={id}>
        <img className="product-item-cover" src={cover} />
        <p>{thename}</p>
        <p>{price}</p>
    </li>
}

export default ProductItem;