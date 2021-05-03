import "./CartScreen.css"
import React from 'react';
import CartItem from '../components/CartItem'

const CartScreen = () => {
	return (
		<div className="cs">
			<div className="csleft">
				<h2>Shopping Cart</h2>
				<CartItem />
			</div>
			<div className="csright">
				<div className="csrightinfo">
					<p>Subtotal (0) items</p>
					<p><i className="fas fa-rupee-sign    ">499</i></p>
				</div>
				<div>
					<button className="btn btn-success w-100 pointer-event">Proceed To Checkout</button>
				</div>
			</div>
		</div>
	);
};

export default CartScreen;