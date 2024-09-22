import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({rating}) => {
  return (
    <div className='rating'>
      <Rating
        initialRating={rating}
        emptySymbol={<FontAwesomeIcon icon={faStarEmpty} color="gray" />} // Empty star
        fullSymbol={<FontAwesomeIcon icon={faStar} color="gold" />} // Full star
      />
    </div>
  );
};

export default StarRating;
