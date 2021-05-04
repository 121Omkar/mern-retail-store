import "./Product.css"
import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Product = ({imageUrl, name, price, description, productId}) => {
	return (
		<Card className="pr">
		<Card.Img variant="top" src={imageUrl}  alt={productId}/>
		<Card.Body>
			<Card.Title>{name}</Card.Title>
			<Card.Text><i className="fas fa-rupee-sign">{price}</i></Card.Text>
			<Card.Text>
				{description}....
			</Card.Text>
			<Link to={`/products/${productId}`} className="btn btn-dark w-100">View</Link>
		</Card.Body>
		</Card>
	);
};

export default Product;