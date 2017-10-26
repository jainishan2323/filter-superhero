import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        const {image, id, name, job, onSelect} = this.props;
        return (
            <div className="list-item card-level-1 hover" onClick={onSelect} data-id={id}>
                <img src={`./src/images/${image}`} />
                <div className="details">
                    <div className="name">{name}</div>
                    <div className="job">{job}</div>
                </div>
            </div>
        );
    }
}