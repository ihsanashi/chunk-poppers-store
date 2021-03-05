import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Container from '../components/Container';
import Layout from '../components/Layout';
import PortableText from '@sanity/block-content-to-react';

const AboutPage = (props) => {
  const { data } = props;
  const about = (data || {}).sanityAbout;
  return (
    <>
      <Helmet>
        <title>About - Chunk Poppers</title>
      </Helmet>
      <Layout>
        <Container>
          <main className='grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left my-20'>
            <div>
              <h2 className='font-semibold text-gray-900 text-3xl md:text-4xl'>
                {about.heroTitle}
              </h2>
            </div>
            <div>
              <p className='font-normal text-base text-gray-700'>
                {about.heroSubtitle}
              </p>
            </div>
          </main>
          <section className='grid grid-cols-2 gap-4 my-20'>
            {about.gallery.map((item) => (
              <div key={item._key}>
                <Img className='rounded-lg' fluid={item.asset.fluid} />
              </div>
            ))}
          </section>
        </Container>
        <section className='px-5 md:px-10 lg:px-20 py-20 my-20 text-center bg-mountbattenPink-50'>
          <Container>
            <PortableText blocks={about._rawContent} />
          </Container>
        </section>
        <Container>
          <section className='my-20'>
            <div className='text-center'>
              <h6 className='text-sm text-gray-400 font-semibold uppercase'>
                {about.featuresSubtitle}
              </h6>
              <h3 className='text-2xl md:text-3xl font-semibold text-gray-800 mt-3 mb-5'>
                {about.featuresTitle}
              </h3>
              <p className='text-base md:text-lg text-gray-700 font-normal max-w-xl mx-auto'>
                {about.featuresDesc}
              </p>
            </div>
          </section>
          <section className='grid grid-cols-1 md:grid-cols-3 my-20'>
            {about.features.map((item) => (
              <div
                key={item._key}
                className='bg-pearlyPurple-50 p-7 rounded-lg text-center'
              >
                <h6 className='text-lg text-gray-800 font-medium'>
                  {item.title}
                </h6>
                <p className='mt-5 font-normal text-gray-600 text-base'>
                  {item.description}
                </p>
              </div>
            ))}
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    sanityAbout {
      _id
      heroTitle
      heroSubtitle
      gallery {
        _key
        caption
        asset {
          fluid(maxHeight: 400, maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      featuresTitle
      featuresSubtitle
      featuresDesc
      features {
        _key
        title
        description
        icon {
          caption
          asset {
            path
          }
        }
      }
      _rawContent
    }
  }
`;
