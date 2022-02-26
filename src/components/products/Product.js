import './product.sass';
import { itemList } from '../data/ProductList'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Product(props) {

	const [pageCategory, setPageCategory] = useState('');

	const changepageCategory = (newPageCategory) => {
		setPageCategory(newPageCategory)
		console.log(pageCategory);
	}

	//Attempt for keywords search
	let changeToCategory = (e) => {
		// let keywords = []
		// itemList.forEach(element.thename => {
		// 	keywords.push(element.thename)
		// })
		// if (e.key === "Enter") {
		// 	console.log(Object.values(keywords))
		// }
	}

	return (
		<div className='text-center'>
			<div className="backgroundbanner d-flex justify-content-center align-items-center">
				<h2 className="text-white fs-1">PRODUCTS</h2>
			</div>
			<div className="container py-5">
				<div className='row justify-content-center'>
					{/* Categories */}
					<div className='col-md-3 col-12 text-start'>
						<ul className='text-start'>
							<h4>Category</h4>
							<li className='my-1' onClick={() => { changepageCategory('') }}>All</li>
							<li className='my-1' onClick={() => { changepageCategory('Women') }}>Women</li>
							<li className='my-1' onClick={() => { changepageCategory('Kids') }}>Kids</li>
							<li className='my-1' onClick={() => { changepageCategory('Men') }}>Men</li>
							<li className='my-1 mb-2' onClick={() => { changepageCategory('Accessories') }}>Accessories</li>
							<h4>Filter</h4>
							<input type="text" placeholder='Search Product' onKeyPress={(e) => changeToCategory(e)} />
						</ul>
					</div>
					{/* Products */}
					<div className='col-md-9 col-12 row justify-content-center p-4 pt-0'>
						<ul className="row p-0">
							{
								itemList.filter(chaqueElementDuTableau => chaqueElementDuTableau.category.match(pageCategory)).map((element, index) => {
									return (
										<>
											{console.log(element)}
											<li key={index} className='product-item col-md-3 col-12 mb-3 mx-md-3 p-0'>
												{
													element.sale === true &&
													<p className='sale py-1 px-2 m-2'>Sale</p>
												}
												{
													element.new === true &&
													<p className='new py-1 px-2 m-2'>New</p>
												}
												{
													element.bestseller === true &&
													<p className='best-seller py-1 px-2 m-2'>Best Seller</p>
												}
												{
													element.old === true &&
													<p className='old py-1 py-1 px-2 m-2'>Old</p>
												}
												<div className="div-product">
													<img className="img-fluid" src={element.cover} alt="" />
													<button className='add-cart py-2'>ADD TO CART</button>
													<button onClick={() => { props.addProductLikesProp(element) }} className='add-favorite'><i className="fa-solid fa-heart" /></button>
												</div>
												<p className='mb-0 mt-2 text-dark fw-bold'>{element.thename}</p>
												<p>{element.price}</p>
											</li>

										</>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
