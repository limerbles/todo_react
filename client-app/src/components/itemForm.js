import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemForm extends Component {
	state = {
		showing: false,
		name: ''
	};

	toggle = () => {
		this.setState({
			showing: !this.state.showing
		});
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();

		const newItem = { name: this.state.name };
		this.props.addItem(newItem);
		this.toggle();
	};

	render() {
		return (
			<div>
				{this.state.showing === false && (
					<Button className="add-btn" onClick={this.toggle}>
						Add item
					</Button>
				)}

				{this.state.showing && (
					<Form onSubmit={this.onSubmit}>
						<input type="text" name="name" onChange={this.onChange} />{' '}
						<Button className="add-btn">Add item</Button>
					</Form>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemForm);
