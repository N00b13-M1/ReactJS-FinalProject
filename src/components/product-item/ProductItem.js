import React from "react";

function ProductItem(id, thename, cover) {
    <div key={id}>
        <img src={cover} />
        <p>{thename}</p>
    </div>
}

export default ProductItem;