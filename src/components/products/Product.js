import './product.sass';
import { itemList } from '../data/ProductList'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export default function Product({productList,addProductLikesProp,handleAddtoCart}) {

	const [allItemList,setAllItemList]=useState([])
	const [pageCategory, setPageCategory] = useState('');
	const [search,setSearch]=useState('')

	useEffect(() => {
    if (productList?.length) {
      setAllItemList(productList);
    }
  }, [productList]);

	const changePageCategory = (newPageCategory) => {
		setPageCategory(newPageCategory)
		setSearch('')
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

	const getUpdatedList = () => {
    if (search) {
      return allItemList.filter((element) => {
        return (
          element.category.match(pageCategory) &&
          element.thename.toLowerCase()?.includes(search.toLowerCase().trim())
        );
      });
    }
    return allItemList.filter((element) => element.category.match(pageCategory));
  };

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
							<li className='my-1' onClick={() => { changePageCategory('') }}>All</li>
							<li className='my-1' onClick={() => { changePageCategory('Women') }}>Women</li>
							<li className='my-1' onClick={() => { changePageCategory('Kids') }}>Kids</li>
							<li className='my-1' onClick={() => { changePageCategory('Men') }}>Men</li>
							<li className='my-1 mb-2' onClick={() => { changePageCategory('Accessories') }}>Accessories</li>
							<h4>Filter</h4>
							<input type="text" placeholder='Search Product...' value={search} onChange={(e)=>setSearch(e.target.value)} className='d-block text-truncate'/>
							{/* <input
                                        type="search"
                                        onChange={filter}
                                        placeholder="Search products..."
                                        name="productResearch"
                                        className=' border-0 d-block text-truncate'
                            /> */}
						</ul>
					</div>
					{/* Products */}
					<div className='col-md-9 col-12 row justify-content-center p-4 pt-0'>
						<ul className="row p-0">
							{
								getUpdatedList().map((element, key) => {
									return (
										<>
											<li className='product-item col-md-3 col-12 mb-3 mx-md-3 p-0' key={key}>
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
													<button className='add-cart py-2' onClick={()=>handleAddtoCart(element)}>ADD TO CART</button>
													<button onClick={() => {addProductLikesProp(element)}} className={`add-favorite ${element?.isLike && 'add-fix-favorite'}`} ><i className="fa-solid  fa-heart fa-red" /></button>
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
