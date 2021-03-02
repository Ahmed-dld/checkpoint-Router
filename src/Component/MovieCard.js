import React from 'react';
import {Card} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <Card style={{ width: '14rem' }} className="mov_card">
            <Card.Img variant="top" src={movie.posteUrl} style={{width:"100%"}}/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.genre}</Card.Text>
                <Card.Text>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={movie.rate}
               />
                </Card.Text>
                    <Link to={`/moviedescription/${movie.id}`} >Show more details</Link>
            </Card.Body>
            </Card>
        </div>
    )
}
export default MovieCard;