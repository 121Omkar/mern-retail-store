import "./HomeScreen.css"
import React from 'react';
import { Container } from 'react-bootstrap';
import Product from '../components/Product'

const Homescreen = () => {
	return (
		<div className="w-auto m-5">
			<span className="mb-4 font-weight-bolder">Latest Products</span>
			<div className="pc">
				<Product/>
				<Product/>
				<Product/>
				<Product/>
				<Product/>
				<Product/>
				<Product/>
			</div>
		</div>
	);
};

export default Homescreen;