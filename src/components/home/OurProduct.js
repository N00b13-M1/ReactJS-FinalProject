import React, {useEffect, useState} from 'react';
import { itemList } from '../data/ProductList'
import './ourproduct.sass';

export default function OurProduct() {
	const [ourProductList,setOurProductList]=useState([])
	const [changeSaleCategory, setChangeSaleCategory] = useState('Best-Seller');

	useEffect(()=>{
		setOurProductList(itemList)
	},[itemList])

	
	// const [pageSaleCategory, setPageSaleCategory] = useState('');

	// const changepageCategory = (newPageCategory) => {
	//     setPageCategory(newPageCategory)
	//     console.log(pageCategory);
	// }

	// let changeSaleCategory = (input) => {
	// 	// console.log(document.getElementsByClassName('element4')[0])
	// 	// console.log(itemList[0].bestseller)
	// 	itemList.map((element, index) => {
	// 		if (input.replaceAll('-', '').toLowerCase() === element[index]) {
	// 			console.log("Hello")
	// 		}
	// 	})
	// }

	const filteredProductList=()=>{
	
		let filteredList=ourProductList.filter((val)=>{
			if(val[changeSaleCategory.replaceAll('-', '').toLowerCase()]){
				// console.log('1')
				return true
			}
			else 
			console.log('2')	
			return false
		})
		return filteredList
	}

	return (
		<>
			<div className='container py-5'>
				{/* Coming Soon Images */}
				<div className='row justify-content-center pb-5'>
					<div className='col-md-4 col-12 d-flex justify-content-center align-items-end mb-md-0 mb-3'>
						<button className='coming-soon-button m-4 py-2 px-4'>COMING SOON</button>
						<img className='col-12' src="./img/coming-soon1.webp" />
					</div>
					<div className='col-md-4 col-12 d-flex justify-content-center align-items-end mb-md-0 mb-3'>
						<button className='coming-soon-button m-4 py-2 px-4'>COMING SOON</button>
						<img className='col-12' src="./img/coming-soon1.webp" />
					</div>
					<div className='col-md-4 col-12 d-flex justify-content-center align-items-end mb-md-0 mb-3'>
						<button className='coming-soon-button m-4 py-2 px-4'>COMING SOON</button>
						<img className='col-12' src="./img/coming-soon1.webp" />
					</div>
				</div>
				{/* Our Products Section */}
				<div>
					<h3 className='text-center'>OUR PRODUCTS</h3>
					<ul className='d-flex justify-content-center p-0'>
						<li>
							<a className='filter' onClick={() => setChangeSaleCategory('Best-Seller')}>Best-Seller</a>
						</li>
						<li>
							<a className='filter' onClick={() => setChangeSaleCategory('New')}>New</a>
						</li>
						<li>
							<a className='filter' onClick={() => setChangeSaleCategory('Sale')}>Sale</a>
						</li>
						<li>
							<a className='filter' onClick={() => setChangeSaleCategory('Old')}>Old</a>
						</li>
					</ul>
				</div>
				<div className="row element4 text-center">
					{
						filteredProductList().map((element, index) => {
							return (

								<>
									{
										element.bestseller === true &&
										<div className='col-md-3 col-12' key={index}>
											{/* <p className='bestseller py-1 px-2 ms-2 mt-2'>Best Seller</p> */}
											<img className="product-item-cover img-fluid" src={element.cover} alt="" />
											<p className='mb-0 mt-2 text-dark fw-bold'>{element.thename}</p>
											<p>{element.price}</p>
										</div>
									}
									{/* {
										element.sale === true &&
										<div className='col-md-3 col-12' key={index}>
												<p className='sale py-1 px-2 ms-2 mt-2'>Sale</p>
												<img className="product-item-cover img-fluid" src={element.cover} alt="" />
												<p className='mb-0 mt-2 text-dark fw-bold'>{element.thename}</p>
												<p>{element.price}</p>
										</div>
									}
									{
										element.old === true &&
										<div className='col-md-3 col-12' key={index}>
												<p className='old py-1 px-2 ms-2 mt-2'>Old</p>
												<img className="product-item-cover img-fluid" src={element.cover} alt="" />
												<p className='mb-0 mt-2 text-dark fw-bold'>{element.thename}</p>
												<p>{element.price}</p>
										</div>
									}
									{
										element.new === true &&
										<div className='col-md-3 col-12' key={index}>
												<p className='new py-1 px-2 ms-2 mt-2'>New</p>
												<img className="product-item-cover img-fluid" src={element.cover} alt="" />
												<p className='mb-0 mt-2 text-dark fw-bold'>{element.thename}</p>
												<p>{element.price}</p>
										</div>
									} */}
								</>
							)
						})
					}
				</div>
				{/* LookBook Banner */}
			</div>
			<div className='container-fluid lookbook text-center'>
				<h5><span>The Beauty</span><br /> LOOKBOOK</h5>
				<p className='text-center'><i className="fa-solid fa-play" /> Play Video</p>
			</div>
		</>
	);
}