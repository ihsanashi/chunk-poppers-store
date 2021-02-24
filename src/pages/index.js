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
        <title>Chunk Poppers - Home</title>
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
      hero_image {
        caption
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      second_image {
        caption
        asset {
          fluid(maxWidth: 720) {
            ...GatsbySanityImageFluid
          }
        }
      }
      third_image {
        caption
        asset {
          fluid(maxWidth: 720) {
            ...GatsbySanityImageFluid
          }
        }
      }
      featured_products {
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
      testimonial_subtitle
      testimonial_title
      reviews {
        _key
        quote
        customer_name
        order_summary
        customer_avatar {
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
