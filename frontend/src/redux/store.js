import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// Reducers
import {cartReducer} from './reducers/cartReducers';
import {getProductDetailsReducer, getProductReducer} from './reducers/productReducers';


const reducer = combineReducers({
	cart: cartReducer,
	getProducts: getProductReducer,
	getProductDetails:getProductDetailsReducer,
});
// Helps in making async requests which are not possible with redux
const middleware = [thunk];

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
