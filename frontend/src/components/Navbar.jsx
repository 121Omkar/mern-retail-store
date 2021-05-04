import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';


const MyNavbar = () => {
	const cart = useSelector(state => state.cart);
	const {cartItems} = cart;
	
	const getCartCount = () => {
		return cartItems.reduce((qty, item) => Number(item.qty) + Number(qty), 0);
	};

	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand>Mern Retail Store</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
				<Link to='/cart' className="btn text-white"><i className="fas fa-shopping-cart" aria-hidden="true">Cart</i><span className="m-2">{getCartCount()}</span></Link>
					<Link to='/' className="btn text-white">Shop</Link>
				</Nav>
			</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default MyNavbar
