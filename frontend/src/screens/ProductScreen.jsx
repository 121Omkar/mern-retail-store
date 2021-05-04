import "./ProductScreen.css";
import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';


// Actions
import {getProductDetails} from "../redux/actions/productActions";
import {addToCart} from "../redux/actions/cartActions";


const ProductScreen = ({match, history}) => {

	const [qty, setQty] = useState(1);
	const  dispatch = useDispatch();

	const productDetails = useSelector(state => state.getProductDetails);
	const {loading, error, product} = productDetails;


	useEffect(() => {
		if(product && match.params.id !== product._id) {
			dispatch(getProductDetails(match.params.id))
		}
	}, [dispatch, product, match]);

	const addToCartHandler = () => {
		dispatch(addToCart(product._id, qty));
		history.push('/cart');
	};

	return (
		<div className="ps">
			{loading?<h2>Loading...</h2>:
			error?<h2>{error}</h2>:
			<>
				<div className="psleft">
					<div className="leftimg">
						<img src={product.imageUrl} alt={product.name}/>
					</div>
					<div className="leftinfo">
					<p className="leftname">{product.name}</p>
						<p>Price <i className="fas fa-rupee-sign">{product.price}</i></p>
						<p>Description: {product.description}</p>
					</div>
				</div>
				<div className="psright">
					<div className="rightinfo">
					<p>Price: <span><i className="fas fa-rupee-sign    ">{product.price}</i></span></p>
					<p>Status: <span>{product.countInStock > 0?"In Stock":"Out Of Stock"}</span></p>
					<p>Quantity:
						<select value={qty} onChange={(e) => setQty(e.target.value)}>
							{[...Array(product.countInStock).keys()].map((x) => (
								<option value={x+1} key={x+1}>{x+1}</option>
							))}
						</select>
					</p>
					<p>
					<button type="button" className="btn btn-success" onClick={addToCartHandler}>Add To Cart</button>
					</p>
					</div>
				</div>
			</>
			}
		</div>
	);
};

export default ProductScreen;