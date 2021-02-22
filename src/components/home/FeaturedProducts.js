import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Container from '../Container';

const FeaturedProducts = ({ homeContent }) => {
  const featuredProducts = homeContent.featured_products;

  return (
    <Container>
      <section className='my-20'>
        <h3 className='text-center text-2xl font-medium mb-10'>Featured</h3>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {featuredProducts.map((item) => (
            <Link to='#' key={item.title}>
              <article className='my-2 lg:my-0'>
                <Img fluid={item.media[0].asset.fluid} />
                <h5 className='mt-4 mb-1 text-base font-medium text-gray-800'>
                  {item.title}
                </h5>
                <p className='text-sm text-gray-600'>{`From RM ${item.variants[0].price}`}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default FeaturedProducts;
