import React from 'react';
import Img from 'gatsby-image';

const HomeHero = ({ homeContent }) => {
  return (
    <main>
      <section className='w-full'>
        <Img fluid={homeContent.heroImage.asset.fluid} />
      </section>
      <section className='grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-4 max-w-6xl mx-auto mt-4 mb-20'>
        <div className='md:col-start-1 md:col-end-5 lg:col-start-1 lg:col-end-8'>
          <Img fluid={homeContent.secondImage.asset.fluid} />
        </div>
        <div className='md:col-start-5 md:col-end-9 lg:col-start-8 lg:col-end-13'>
          <Img fluid={homeContent.thirdImage.asset.fluid} />
        </div>
      </section>
    </main>
  );
};

export default HomeHero;
