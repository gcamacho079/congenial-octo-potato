import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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
			return (
				<li> { comment.comment } </li>
			);
		});

		return (
			<ul>
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
						<CardText> 
							{ this.renderReviewList(dish) }
						</CardText>
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