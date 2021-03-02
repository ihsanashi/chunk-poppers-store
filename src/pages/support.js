import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Container from '../components/Container';

const SupportPage = (props) => {
  const { data } = props;
  const supportContent = (data || {}).allSanitySupport;
  const supportEdges = supportContent.edges;

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      <Helmet>
        <title>Support - Chunk Poppers</title>
      </Helmet>
      <Layout>
        <Container>
          <section className='mx-auto text-center mt-20 mb-12'>
            <h3 className='text-3xl md:text-4xl text-gray-900 font-semibold'>
              Hello, how can we help?
            </h3>
            <p className='mx-auto max-w-lg mt-5 text-gray-600'>
              Choose from a category below to quickly get to the appropriate
              sections. If none of these are answering your queries,{' '}
              <strong className='text-gray-800'>please get in touch</strong>.
            </p>
          </section>
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20'>
            {supportEdges.map((item) => (
              <div
                key={item.node._id}
                role='button'
                className='border border-gray-300 hover:border-fuchsiaRose-300 rounded-md text-center p-5'
              >
                <Img fixed={item.node.icon.asset.fixed} />
                <h2>{item.node.categoryTitle}</h2>
              </div>
            ))}
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default SupportPage;

export const query = graphql`
  {
    allSanitySupport(sort: { fields: categoryTitle, order: ASC }) {
      edges {
        node {
          _id
          categoryTitle
          categoryDescription
          icon {
            asset {
              fixed(height: 32, width: 32) {
                ...GatsbySanityImageFixed
              }
            }
          }
          faq {
            question
            answer
          }
        }
      }
    }
  }
`;
