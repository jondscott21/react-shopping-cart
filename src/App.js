import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import {ProductContext} from './contexts/ProductContext'
import {CartContext} from './contexts/CartContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = id => {
		let tempArr = cart.filter(item => item.id !== id) 
		setCart([...tempArr])
	}

	return (
		<CartContext.Provider value={{cart, removeItem}}>
			<ProductContext.Provider value={{products, addItem}}>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>

					<Route
						path="/cart"
						component={ShoppingCart}
					/>
				</div>
			</ProductContext.Provider>
		</CartContext.Provider>
	);
}

export default App;
