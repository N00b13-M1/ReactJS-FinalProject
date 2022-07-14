import React from 'react';
import './panier.sass';


export default function Panier(props) {  
    return (
        <div>
            <div className="backgroundbanner d-flex justify-content-center align-items-center">
                <h2 className="text-white fs-1">PANIER</h2>
            </div>
            <div className='container'>
                <div className='row justify-content-center p-5'>
                    <table>
                        <tr>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                            <th>ADD</th>
                        </tr>
                        <tr>
                            <td>mon produit</td>
                            <td>prix</td>
                            <td><button className='quantity-button p-1 px-3'>-</button><input className='quantity-input' type="number" /><button className='quantity-button p-1 px-3'>+</button></td>
                            <td>prix</td>
                        </tr>
                        <tr>
                            <td>mon produit</td>
                            <td>prix</td>
                            <td><button className='quantity-button p-1 px-3'>-</button><input className='quantity-input' type="number" /><button className='quantity-button p-1 px-3'>+</button></td>
                            <td>prix</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

