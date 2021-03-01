import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Container from '../components/Container';
import SingleProduct from '../components/product/Single';

const CategoryPage = (props) => {
  const { data, errors } = props;
  const category = data && data.category;
  const categorySlug = category.slug.current;

  return (
    <>
      <Helmet>
        <title>{category.title} | Shop - Chunk Poppers</title>
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
              <small className='text-gray-600'>{category.title}</small>
            </div>
          </section>
          <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20'>
            {category.products.map((item) => (
              <SingleProduct
                link={`/shop/category/${categorySlug}/${item.slug.current}`}
                _id={item._id}
                imageSrc={item.media[0].asset.fluid}
                title={item.title}
                lowestPrice={item.variants[0].price}
              />
            ))}
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default CategoryPage;

export const query = graphql`
  query Categories($id: String, $title: String, $slug: String) {
    category: sanityCategory(
      id: { eq: $id }
      title: { eq: $title }
      slug: { current: { eq: $slug } }
    ) {
      title
      slug {
        current
      }
      products {
        _id
        title
        variants {
          price
        }
        slug {
          current
        }
        media {
          asset {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
