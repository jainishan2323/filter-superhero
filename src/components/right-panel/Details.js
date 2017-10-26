import React, { Component } from 'react';

export default class Details extends Component {
	render() {
        const {id, name, job, age, image} = this.props;
		return (
            <section className="details-container card-level-1" data-id={id} >
                <div className="image-placeholder">
                    <img src={`./src/images/${image}`} />
                </div>
                <div className="information">
                    <h3>Name: {name}</h3>
                    <h3>Occupation: {job}</h3>
                    <h3>Age: {age}</h3>
                </div>
            </section>
		)
	}
}
