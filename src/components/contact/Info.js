import React from 'react';
import Img from 'gatsby-image';
import Container from '../Container';

const ContactInfo = ({ contactContent }) => {
  console.log(contactContent);
  return (
    <Container>
      <section>
        <div className='max-w-md mx-auto text-center mb-12'>
          <h3 className='font-semibold text-gray-900 text-3xl lg:text-4xl'>
            {contactContent.sectionTitle}
          </h3>
          <p className='text-gray-600 font-normal text-base mt-2'>
            {contactContent.sectionSubtitle}
          </p>
        </div>
        <div className='max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
          {contactContent.contactInfo.map((item) => (
            <div
              className='flex flex-row items-start justify-start'
              key={item._key}
            >
              <div className='p-2 bg-fuchsiaRose-400 flex justify-center items-center rounded'>
                <Img fixed={item.icon.asset.fixed} />
              </div>
              <div className='ml-4'>
                <h4 className='text-lg font-medium text-gray-800'>
                  {item.title}
                </h4>
                <p className='text-sm text-gray-600 font-normal'>
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default ContactInfo;
