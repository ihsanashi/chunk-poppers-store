import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Container from '../components/Container';
import LabelWithInput from '../components/LabelWithInput';

const ContactPage = (props) => {
  const { data } = props;
  const contactContent = (data || {}).sanityContact;
  return (
    <>
      <Helmet>
        <title>Contact Us - Chunk Poppers</title>
      </Helmet>
      <Layout>
        <section className='w-full'>
          <img
            className='h-80 w-full'
            src='https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2124&q=80'
            alt='Contact page hero'
          />
        </section>

        <main className='bg-gray-100 py-10 lg:py-16'>
          <Container>
            <div className='max-w-md mx-auto text-center my-12'>
              <h3 className='font-semibold text-gray-900 text-3xl lg:text-4xl'>
                {contactContent.sectionTitle}
              </h3>
              <p className='text-gray-600 font-normal text-base md:text-lg mt-2'>
                {contactContent.sectionSubtitle}
              </p>
            </div>
            <div className='flex flex-col md:flex-row bg-white shadow-md'>
              <div className='w-full md:w-1/3 bg-pearlyPurple-400 p-5'>
                <h5 className='text-lg font-medium text-white'>
                  Contact information
                </h5>
                <p className='text-base text-gray-100 my-4'>
                  Neque, mattis nunc lacus, urna sit lobortis arcu lacinia.
                </p>
                <div className='flex flex-col items-start'>
                  {contactContent.contactInfo.map((item) => (
                    <div
                      className='flex flex-row items-start justify-start my-3'
                      key={item._key}
                    >
                      <div className='p-2 bg-pearlyPurple-700 flex justify-center items-center rounded'>
                        <Img fixed={item.icon.asset.fixed} />
                      </div>
                      <div className='ml-4'>
                        <h4 className='text-lg font-medium text-white'>
                          {item.title}
                        </h4>
                        <p className='text-sm text-gray-100 font-normal leading-relaxed'>
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='w-full md:w-2/3 p-5'>
                <h5 className='text-lg font-medium text-gray-900'>
                  Send us a message
                </h5>
                <form className='py-5'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-5'>
                    <LabelWithInput
                      name='name'
                      type='text'
                      required={true}
                      labelTitle='Full name'
                      placeholderText='Siti Aishah'
                    />
                    <LabelWithInput
                      name='email'
                      type='email'
                      required={true}
                      labelTitle='Email'
                      placeholderText='siti@example.com'
                    />
                    <LabelWithInput
                      name='phone'
                      type='tel'
                      required={false}
                      labelTitle='Phone'
                      placeholderText='+60123940588'
                      optionalMessage='Optional'
                      pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                    />
                    <label class='block'>
                      <span class='font-medium text-base text-gray-800 inline-block mb-2'>
                        What is your enquiry about?
                      </span>
                      <select class='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'>
                        <option>General</option>
                        <option>My order(s)</option>
                        <option>Delivery & fulfilment</option>
                        <option>Sales & refunds</option>
                        <option>Large orders & catering</option>
                        <option>Others</option>
                      </select>
                    </label>
                  </div>
                  <div>
                    <LabelWithInput
                      name='subject'
                      type='text'
                      labelTitle='Subject'
                      required={true}
                    />
                    <label class='block mt-5'>
                      <span class='font-medium text-base text-gray-800 inline-block mb-2'>
                        Message
                      </span>
                      <textarea
                        class='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                        rows='3'
                      ></textarea>
                    </label>
                  </div>
                  <div className='flex justify-end mt-10'>
                    <button className='text-lg text-white font-medium bg-pearlyPurple-500 hover:bg-pearlyPurple-600 px-5 py-2 rounded-md'>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Container>
        </main>
      </Layout>
    </>
  );
};

export default ContactPage;

export const query = graphql`
  query {
    sanityContact {
      sectionTitle
      sectionSubtitle
      contactInfo {
        _key
        title
        subtitle
        icon {
          asset {
            fixed(height: 24, width: 24) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;
