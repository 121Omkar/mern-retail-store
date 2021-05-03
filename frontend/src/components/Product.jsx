import "./Product.css"
import React from 'react';
import {Link} from 'react-router-dom';

const Product = ({imageUrl, name, price, description, productId}) => {
	return (
		<div className="pr card">
		<img className="card-img-top" src={imageUrl}  alt={productId}/>
		<div className="card-body">
			<div className="card-title">{name}</div>
			<div className="card-text"><i className="fas fa-rupee-sign">{price}</i></div>
			<div className="card-text">
				{description}....
			</div>
			<Link to={`/products/${productId}`} className="btn btn-dark w-100">View</Link>
		</div>
		</div>
	);
};

export default Product;