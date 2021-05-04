import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const CartItem = ({item, qtyChangeHandler, renoveHandler}) => {
	return (
		<Card style={{display:'grid', gridTemplateColumns:"1fr 4fr 1fr 1fr 1fr", alignItems:"center", boxShadow:"0 1px 4px rgba(0, 0, 0, 0.4)", padding:"1rem", gap:"8px"}}>
			<Card.Img variant="top" src={item.imageUrl} alt={item.name}>
			</Card.Img>
			<Link to={`/product/${item.product}`}><Card.Title>{item.name}</Card.Title></Link>
			<Card.Title style={{alignItems:"center", height:"", margin:"0px"}}>Price: <i className="fas fa-rupee-sign">{item.price}</i></Card.Title>
			<select value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
				{[...Array(item.countInStock).keys()].map(x =>(
					<option key={x+1} value={x+1}>{x+1}</option>
				))}
			</select>
			<Button className="btn btn-danger" onClick={() => renoveHandler(item.product)}>
				<i className="fa fa-trash" aria-hidden="true"></i>
			</Button>
		</Card>
	)
}

export default CartItem
