import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Container from '../components/Container';

const ContactPage = (props) => {
  const { data } = props;
  const contactContent = (data || {}).sanityContact;
  return (
    <>
      <Helmet>
        <title>Contact Us - Chunk Poppers</title>
      </Helmet>
      <Layout>
        <main className='mb-20'>
          <section className='w-full'>
            <img
              className='h-80 w-full'
              src='https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2124&q=80'
              alt='Contact hero'
            />
          </section>
        </main>
        z
        <Container>
          <section className='mb-20'>
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
