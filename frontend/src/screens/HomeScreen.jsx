import "./HomeScreen.css";
import React from 'react';
// Component
import Product from '../components/Product';

import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Actions
import {getProducts as listProducts} from '../redux/actions/productActions';


const Homescreen = () => {

	const dispatch = useDispatch();

	const getProducts = useSelector(state => state.getProducts);
	const {products, loading, error} = getProducts;

	useEffect(() => {
		dispatch(listProducts())
	}, [dispatch]);

	return (
		<div className="w-auto m-5">
			<span className="mb-4 font-weight-bolder">Latest Products</span>
			<div className="pc">
				{loading? <h2>Loading....</h2>:error? <h2>{error}</h2>: products.map(product => (
						<Product 
						key={product._id}
						productId={product._id}
						name={product.name}
						price={product.price}
						description={product.description}
						imageUrl={product.imageUrl}
						/>
				))}
			</div>
		</div>
	);
};

export default Homescreen;