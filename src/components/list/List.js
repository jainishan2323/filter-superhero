import React, { Component } from 'react';
import ListItem from './ListItem';

export default class List extends Component {
	renderList() {
		const {clients, onSelect} = this.props;
		return clients.map(client => <ListItem key={client.id} onSelect={onSelect} {...client} />);
	}

	render() {
		return (
			<div className="list">
				{
					this.renderList()
				}
			</div>
		)
	}
}
