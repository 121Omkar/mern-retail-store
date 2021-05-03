import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const MyNavbar = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand>Mern Retail Store</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Link to='/cart' className="btn text-white"><i className="fas fa-shopping-cart" aria-hidden="true">Cart</i><span>0</span></Link>
					<Link to='/' className="btn text-white">Shop</Link>
				</Nav>
			</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default MyNavbar
