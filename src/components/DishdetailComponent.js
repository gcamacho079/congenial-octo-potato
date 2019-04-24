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

	renderReviewList(dish) {
		const reviews = dish.comments.map((comment) => {
			const reviewDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)));
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
			<div className="container">
				<div className="row">
					{this.renderDish(this.props.dish)}
					{this.renderReviews(this.props.dish)}
				</div>
			</div>
		);
	}
}

export default DishDetail;