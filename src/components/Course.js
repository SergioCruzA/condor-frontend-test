import React from 'react';
import './Course.css';

import StarRatingComponent from 'react-star-rating-component';

const Course = ({ id, name, textImg, credits, price, rating }) => {
    return (
        <div className='container dib br3 pa3 ma2 grow bw2 shadow-5 br-ns'>
            <img className= 'ba' alt='robots' src={`https://robohash.org/${id}/200x200`}/>
            <div className= 'text'>
                <p>{name}</p>
            </div>
            <div className= 'text'>
                <p>{textImg}</p>
            </div>
            <div className= 'credits'>
                <p>{`${credits} CREDITS`}</p>
            </div>
            <div className= 'precio'>
                {(price)? <p>{`$${price}`}</p>: <p>{`FREE`}</p>}
            </div>
            <div>
                <StarRatingComponent
                    name="Rate"
                    starCount={5}
                    value={rating}
                />
            </div>
        </div>
    );
}

export default Course;