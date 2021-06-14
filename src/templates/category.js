import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import Container from '../components/Container';
import SingleProduct from '../components/product/Single';
import GraphQLErrorList from '../components/graphql-error-list';

const CategoryPage = (props) => {
  const { data, errors } = props;
  const category = data && data.category;
  const categorySlug = category.slug.current;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>{category.title} | Shop - Chunk Poppers</title>
      </Head>
      <Layout>
        <Container>
          <section className='mb-8'>
            <div className='inline'>
              <small>
                <Link href='/'>Home / </Link>
              </small>
              <small>
                <Link href='/shop'>Shop / </Link>
              </small>
              <small className='text-gray-600'>{category.title}</small>
            </div>
          </section>
          {/* <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20'>
            {category.products.map((item) => (
              <SingleProduct
                key={item._id}
                link={`/shop/category/${categorySlug}/${item.slug.current}`}
                _id={item._id}
                imageSrc={item.media[0].asset.fluid}
                title={item.title}
                basePrice={item.basePrice}
              />
            ))}
          </section> */}
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
        basePrice
        variants {
          ... on SanityQuantity {
            _key
            _type
            priceDifferential
            title
          }
          ... on SanitySize {
            _key
            _type
            priceDifferential
            title
          }
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
