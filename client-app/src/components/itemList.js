import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';

class ItemList extends Component {
	componentDidMount() {
		this.props.getItems();
	}

	onDeleteClick = (id) => {
		this.props.deleteItem(id);
	};

	render() {
		const { items } = this.props.item;
		return (
			<Container>
				<ListGroup>
					{items.map(({ _id, name }) => (
						<ListGroupItem key={_id}>
							{name} <Button onClick={this.onDeleteClick.bind(this, _id)}>X</Button>
						</ListGroupItem>
					))}
				</ListGroup>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ItemList);
