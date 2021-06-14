import Image from 'next/image';
import Container from '../Container';

const Reviews = ({ homeContent }) => {
  // const customerReviews = homeContent.reviews;

  return (
    <section className='py-12 bg-fuchsiaRose-700'>
      <Container>
        <h5 className='uppercase font-semibold text-sm text-center text-gray-300 mb-2 lg:mb-3'>
          {/* {homeContent.testimonialSubtitle} */}
        </h5>
        <h3 className='font-semibold text-2xl lg:text-3xl text-center text-white w-full max-w-lg mx-auto'>
          {/* {homeContent.testimonialTitle} */}
        </h3>
        <div className='w-full max-w-lg mx-auto mt-7'>
          -- Used to be Swiper --
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
