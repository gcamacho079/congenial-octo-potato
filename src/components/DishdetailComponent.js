import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}) {
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

function RenderReviewList({dish}) {
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

function RenderReviews({dish}) {
	if (dish != null) {
		return (
			<Card className="col-12 col-md-6">
				<CardBody>
					<CardTitle>Comments</CardTitle>
					<RenderReviewList dish={dish} />
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

const DishDetail = (props) => {
	return (
		<div className="container">
			<div className="row">
				<RenderDish dish={props.dish} />
				<RenderReviews dish={props.dish} />
			</div>
		</div>
	);
}

export default DishDetail;