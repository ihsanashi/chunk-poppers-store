import React from 'react';
import Img from 'gatsby-image';
import Container from '../Container';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Reviews = ({ homeContent }) => {
  const customerReviews = homeContent.reviews;

  return (
    <section className='py-12 bg-fuchsiaRose-700'>
      <Container>
        <h5 className='uppercase font-semibold text-sm text-center text-gray-300 mb-2 lg:mb-3'>
          {homeContent.testimonialSubtitle}
        </h5>
        <h3 className='font-semibold text-2xl lg:text-3xl text-center text-white w-full max-w-lg mx-auto'>
          {homeContent.testimonialTitle}
        </h3>
        <div className='w-full max-w-lg mx-auto mt-7'>
          <Swiper
            wrapperTag='ul'
            spaceBetween={24}
            slidesPerView={1}
            navigation
          >
            {customerReviews.map((item) => (
              <SwiperSlide key={item._key} tag='li'>
                <article className='bg-white rounded-md py-5 px-7'>
                  <p className='italic text-gray-700 font-normal'>
                    {item.quote}
                  </p>
                  <div className='border-b-2 my-5'></div>
                  <div className='flex flex-row items-center'>
                    <div className='h-12 w-12'>
                      <Img
                        className='rounded-full'
                        fixed={item.customerAvatar.asset.fixed}
                      />
                    </div>
                    <div className='ml-5'>
                      <h6 className='text-gray-800 font-medium'>
                        {item.customerName}
                      </h6>
                      <p className='text-gray-600 text-sm'>
                        {item.orderSummary}
                      </p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
