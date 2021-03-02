import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const SingleProduct = ({ link, imageSrc, title, lowestPrice }) => {
  return (
    <Link to={link}>
      <div>
        <Img fluid={imageSrc} />
        <h5 className='mt-3 mb-1 font-medium text-lg'>{title}</h5>
        <p className='text-gray-600 text-sm font-light'>From RM{lowestPrice}</p>
      </div>
    </Link>
  );
};

export default SingleProduct;
