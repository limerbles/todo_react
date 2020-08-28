import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navBar';
import ItemList from './components/itemList';
import { Provider } from 'react-redux';
import store from './components/store';
import ItemForm from './components/itemForm';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<NavBar />
					<ItemForm />
					<ItemList />
				</div>
			</Provider>
		);
	}
}

export default App;
