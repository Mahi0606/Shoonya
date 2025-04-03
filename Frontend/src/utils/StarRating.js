import React from 'react';
import { Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const StarRating = ({ rating }) => {
  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Rating
        name="rating"
        value={rating}
        precision={1} 
        readOnly
        icon={<StarIcon fontSize="inherit" />}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
  );
};

export default StarRating;
