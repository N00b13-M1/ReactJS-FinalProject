import React from "react";
import "./panier.sass";

export default function Panier({ finalCart = [], handleItem, handleRemoveItem }) {


    const totalAmountToPay = () => {
        const total = finalCart.reduce((acc, curr) => {
            return acc = acc + curr.totalAmount;
        }, 0);

        return total;
    };



    return (
        <div>
            <div className="backgroundbanner d-flex justify-content-center align-items-center">
                <h2 className="text-white fs-1">PANIER</h2>
            </div>
            <div className="container">
                <div className="row justify-content-center p-5">
                    <table>
                        <tr>
                            <th>PICTURE</th>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                        </tr>
                        {finalCart?.map((val) => {
                            return (
                                <tr key={val.id}>
                                    <td><img src={val.src} width='150px' height='150px' style={{ padding: '6px' }} alt="product" /></td>
                                    <td>{val.thename}</td>
                                    <td>{val.price}</td>
                                    <td>
                                        <button
                                            className="quantity-button p-1 px-3"
                                            onClick={() => {
                                                val.quantitySelected > 1
                                                    ? handleItem(val, "remove", "panier")
                                                    : handleRemoveItem(val, "panier");
                                            }}
                                        >
                                            -
                                        </button>
                                        <input
                                            className="quantity-input"
                                            type="number"
                                            value={val.quantitySelected}
                                        />
                                        <button
                                            className="quantity-button p-1 px-3"
                                            onClick={() => {
                                                handleItem(val, "add", "panier");
                                            }}
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td>${val.totalAmount}</td>
                                </tr>
                            );
                        })}
                    </table>
                    {finalCart.length > 0 && (
                        <div className="d-flex justify-content-end pr-5 mr-2">
                            <div>
                                <p className="add-button ml-2 px-3 py-1">Total : $ {totalAmountToPay() || 0}</p>
                                <button
                                className="add-button ml-2 px-3 py-1">
                                Pay
                            </button>
                            </div>    
                    
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
