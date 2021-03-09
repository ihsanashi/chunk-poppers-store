import React from 'react';
import Container from '../Container';
import SingleProduct from '../product/Single';

const FeaturedProducts = ({ homeContent }) => {
  const featuredProducts = homeContent.featuredProducts;

  return (
    <Container>
      <section className='my-20'>
        <h3 className='text-center text-2xl font-medium mb-10'>Featured</h3>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {featuredProducts.map((item) => (
            <SingleProduct
              key={item._id}
              link={`/shop/category/${item.category.slug.current}/${item.slug.current}`}
              _id={item._id}
              imageSrc={item.media[0].asset.fluid}
              title={item.title}
              basePrice={item.basePrice}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default FeaturedProducts;
