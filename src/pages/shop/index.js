import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../../components/Layout';
import Container from '../../components/Container';

const ShopLanding = (props) => {
  const { data } = props;
  const shopContent = (data || {}).allSanityCategory;
  const categoryEdges = shopContent.edges;
  return (
    <>
      <Helmet>
        <title>Shop - Chunk Poppers</title>
      </Helmet>
      <Layout>
        <Container>
          <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {categoryEdges.map((item) => (
              <Link
                to={`/shop/category/${item.node.slug.current}`}
                key={item.node.id}
              >
                <div className='relative'>
                  <div className='z-10 bg-gradient-to-t from-gray-100'>
                    <Img
                      imgStyle={{ zIndex: -5 }}
                      fluid={item.node.image.asset.fluid}
                      alt={item.node.image.caption}
                    />
                  </div>
                  <div className='p-5 absolute bottom-4'>
                    <div className='flex items-baseline justify-between'>
                      <h4 className='font-semibold text-2xl md:text-4xl uppercase'>
                        {item.node.title}
                      </h4>
                      <small className='text-gray-800'>
                        {item.node.products.length} item(s)
                      </small>
                    </div>
                    <p className='text-sm md:text-lg text-gray-700 mt-1 mb-5'>
                      {item.node.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default ShopLanding;

export const query = graphql`
  {
    allSanityCategory(sort: { fields: title, order: ASC }) {
      edges {
        node {
          id
          _id
          title
          description
          backgroundColorLight {
            hex
          }
          buttonBackgroundLight {
            hex
          }
          slug {
            current
          }
          image {
            caption
            asset {
              fixed(width: 360, height: 360) {
                ...GatsbySanityImageFixed
              }
              fluid(maxWidth: 400, maxHeight: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
          products {
            title
          }
        }
      }
    }
  }
`;
