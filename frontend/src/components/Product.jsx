import "./Product.css"
import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Product = () => {
	return (
		<Card className="pr">
		<Card.Img variant="top" src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80" />
		<Card.Body>
		<Card.Title>Card Title</Card.Title>
		<Card.Text><i className="fas fa-rupee-sign">499</i></Card.Text>
		<Card.Text>
			Some quick example text to build on the card title and make up the bulk of
			the card's content.
		</Card.Text>
		<Link to={`/product/${111}`}>View</Link>
		</Card.Body>
		</Card>
	);
};

export default Product;