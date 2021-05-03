import "./CartItem.css"
import React from 'react'
import {Link} from 'react-router-dom'

const CartItem = () => {
	return (
		<div className="ci">
			<div className="cimg">
			<img src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8
					MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80" alt="product"/>
			</div>
			<Link to={`/product/${111}`}><p className="cname">Product 1</p></Link>
			<p className="cprice">Price: <i className="fas fa-rupee-sign">499</i></p>
			<select>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>

			<button>
				<i className="fa fa-trash" aria-hidden="true"></i>
			</button>
		</div>
	)
}

export default CartItem
