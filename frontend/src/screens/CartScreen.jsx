import "./CartScreen.css";
import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

// Actions
import {addToCart, removeFromCart} from '../redux/actions/cartActions';
// Component
import CartItem from '../components/CartItem';

const CartScreen = () => {
	const dispatch = useDispatch();

	const cart = useSelector(state => state.cart);
	const {cartItems} = cart;

	const qtyChangeHandler = (id, qty) => {
		dispatch((addToCart(id, qty)));
	};

	const removeHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => Number(item.qty) + Number(qty), 0);
	};

	const getCartSubtotal = () => {
		return cartItems.reduce((price, item) => (item.price*item.qty) + price, 0)
	};
	
	return (
		<div className="cs">
			<div className="csleft">
				<h2>Shopping Cart</h2>
				{cartItems.length === 0? (
					<div>
						Your Cart Is Empty <Link to="/">Go Back</Link>
					</div>
				): cartItems.map(item => (
					<CartItem
						key={item.product}
						item={item}
						qtyChangeHandler={qtyChangeHandler}
						renoveHandler={removeHandler}
					/>
				))}
			</div>
			<div className="csright">
				<div className="csrightinfo">
					<p>Subtotal ({getCartCount()}) items</p>
					<p><i className="fas fa-rupee-sign    ">{getCartSubtotal().toFixed(2)}</i></p>
				</div>
				<div>
					<button className="btn btn-success w-100 pointer-event">Proceed To Checkout</button>
				</div>
			</div>
		</div>
	);
};

export default CartScreen;