import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
	constructor(props) {
		super(props);
	}

	renderDish(dish) {
		if (dish != null) {
			return (
				<Card key={dish.id} className="col-12 col-md-6">
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
					 	<CardTitle>{dish.name}</CardTitle>
					 	<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
		}
		else {
			return (
				<div></div>
			);
		}
	}

	buildDate(date) {
		var date = new Date(date);
		const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		const month = date.getMonth();
		const day = date.getDate();
		const year = date.getFullYear();
		const readableDate = months[month] + ' ' + day + ', ' + year;
		return readableDate;
	}

	renderReviewList(dish) {
		const reviews = dish.comments.map((comment) => {
			const reviewDate = this.buildDate(comment.date);
			return (
				<li key={ comment.id } className="dish__review-item">
					{ comment.comment }<br />— { comment.author }, { reviewDate }
				</li>
			);
		});

		return (
			<ul className="dish__review-list">
				{ reviews }
			</ul>
		);
	}

	renderReviews(dish) {
		if (dish != null) {
			return (
				<Card className="col-12 col-md-6">
					<CardBody>
						<CardTitle>Comments</CardTitle>
						{ this.renderReviewList(dish) }
					</CardBody>
				</Card>
			);
		}
		else {
			return (
				<div></div>
			);
		}
	}

	render() {
		return (
			<div className="row">
				{this.renderDish(this.props.dish)}
				{this.renderReviews(this.props.dish)}
			</div>
		);
	}
}

export default DishDetail;