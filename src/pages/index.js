import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import HomeHero from '../components/home/Hero';
import Layout from '../components/Layout';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Reviews from '../components/home/Reviews';

const IndexPage = (props) => {
  const { data } = props;
  const homeContent = (data || {}).sanityHome;
  return (
    <>
      <Helmet>
        <title>Home - Chunk Poppers</title>
      </Helmet>
      <Layout>
        <HomeHero homeContent={homeContent} />
        <FeaturedProducts homeContent={homeContent} />
        <Reviews homeContent={homeContent} />
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    sanityHome {
      title
      heroImage {
        caption
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      secondImage {
        caption
        asset {
          fluid(maxWidth: 720) {
            ...GatsbySanityImageFluid
          }
        }
      }
      thirdImage {
        caption
        asset {
          fluid(maxWidth: 720) {
            ...GatsbySanityImageFluid
          }
        }
      }
      featuredProducts {
        title
        slug {
          current
        }
        title
        variants {
          price
        }
        media {
          asset {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      testimonialSubtitle
      testimonialTitle
      reviews {
        _key
        quote
        customerName
        orderSummary
        customerAvatar {
          asset {
            fixed(width: 50, height: 50) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;
