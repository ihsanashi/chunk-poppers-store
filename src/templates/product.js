import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Container from '../components/Container';

const ProductPage = (props) => {
  const { data, errors } = props;
  const product = data && data.product;
  const categorySlug = product.category.slug.current;
  console.log(product);

  return (
    <>
      <Helmet>
        <title>
          {product.title} - {product.category.title} | Shop - Chunk Poppers
        </title>
      </Helmet>
      <Layout>
        <Container>
          <section className='mb-8'>
            <div className='inline'>
              <small>
                <Link to='/'>Home / </Link>
              </small>
              <small>
                <Link to='/shop'>Shop / </Link>
              </small>
              <small>
                <Link to={`/shop/category/${categorySlug}`}>
                  {product.category.title} /
                </Link>
              </small>
              <small className='text-gray-600'> {product.title}</small>
            </div>
          </section>
          <section
            className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-20
          '
          >
            <div>
              <Img
                fluid={product.media[0].asset.fluid}
                alt={product.media[0].caption}
              />
            </div>
            <div>
              <h2 className='font-semibold text-gray-900 text-4xl'>
                {product.title}
              </h2>
              <div className='mt-5'>
                <p className='text-sm text-gray-600 mb-3'>Select a variant:</p>
                {product.variants.map((item) => (
                  <div key={item._key} className='flex'>
                    <input
                      className='mr-2'
                      type='radio'
                      id={item.name}
                      name='variant'
                      value={item.name}
                    />
                    <label htmlFor='variant'>{item.name}</label>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default ProductPage;

export const query = graphql`
  query Products($id: String, $slug: String) {
    product: sanityProduct(id: { eq: $id }, slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      _id
      title
      variants {
        _key
        name
        price
      }
      slug {
        current
      }
      category {
        title
        slug {
          current
        }
      }
      media {
        caption
        asset {
          fluid(maxWidth: 600, maxHeight: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
