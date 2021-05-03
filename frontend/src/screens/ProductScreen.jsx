import "./ProductScreen.css"
import React from 'react';
import {Link } from 'react-router-dom';

const ProductScreen = () => {
	return (
		<div className="ps">
			<div className="psleft">
				<div className="leftimg">
					<img src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8
					MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80" alt="product"/>
				</div>
				<div className="leftinfo">
					<p className="leftname">Product 1</p>
					<p>Price <i className="fas fa-rupee-sign">499</i></p>
					<p>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod quam, aperiam consequatur
					dolore totam. Commodi ex esse praesentium nesciunt sapiente debitis provident quibusdam impedit odit, earum quas eaque doloribus.
					</p>
				</div>
			</div>
			<div className="psright">
				<div className="rightinfo">
				<p>Price: <span><i className="fas fa-rupee-sign    "> 499</i></span></p>
				<p>Status: <span>In Stock</span></p>
				<p>Quantity:
					<select>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
				</p>
				<p>
				<button type="button" className="btn btn-success">Add To Cart</button>
				</p>
				</div>
			</div>
		</div>
	);
};

export default ProductScreen;