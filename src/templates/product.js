import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Container from '../components/Container';
import ProductAccordion from '../components/product/Accordion';
import ProductAccordionItem from '../components/product/AccordionItem';
import GraphQLErrorList from '../components/graphql-error-list';

import '../styles/accordion.css';
import SingleProduct from '../components/product/Single';
import AddToCartButton from '../components/product/AddToCartButton';

const ProductPage = (props) => {
  const { data, errors } = props;

  const product = (data || {}).product;
  const productVariants = product.variants;
  const variantTypeTitle = productVariants[0]._type;

  let variantOptions = [];
  let variantOptionsString = '';
  productVariants.forEach((item, index) => {
    let singleVariant = `${item.title}[+${item.priceDifferential}]`;
    variantOptions.push(singleVariant);
  });
  variantOptionsString = variantOptions.join('|');

  const categorySlug = product.category.slug.current;
  const similarItems = (data || {}).similarItems;
  const similarItemsEdges = similarItems.edges;
  const productSlug = `/shop/category/${categorySlug}/${product.slug.current}`;

  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [variantTitle, setVariantTitle] = useState(productVariants[0].title);
  const [displayPrice, setDisplayPrice] = useState(product.basePrice);

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {`${product.title} - ${product.category.title} | Shop - Chunk Poppers`}
        </title>
      </Helmet>
      <Layout>
        <Container>
          {/* breadcrumbs */}
          <section className='my-8 text-sm md:text-base'>
            <div className='inline'>
              <p className='inline text-gray-500 hover:text-fuchsiaRose-500'>
                <Link to='/'>Home</Link>
              </p>
              <p className='inline text-gray-500'>
                {'  '}/{'  '}
              </p>
              <p className='inline text-gray-500 hover:text-fuchsiaRose-500'>
                <Link to='/shop'>Shop</Link>
              </p>
              <p className='inline text-gray-500'>
                {'  '}/{'  '}
              </p>
              <p className='inline text-gray-500 hover:text-fuchsiaRose-500'>
                <Link to={`/shop/category/${categorySlug}`}>
                  {product.category.title}
                </Link>
              </p>
              <p className='inline text-gray-500'>
                {'  '}/{'  '}
              </p>
              <p className='text-gray-800 inline'> {product.title}</p>
            </div>
          </section>
          {/* breadcrumbs */}

          {/* product details */}
          <section
            className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-20
          '
          >
            <div>
              <Img
                fluid={product.media[mainImageIndex].asset.fluid}
                alt={product.media[mainImageIndex].caption}
              />
              <div className='grid grid-cols-4 gap-4 mt-3 md:mt-5'>
                {product.media.map((item, index) => (
                  <button
                    index={index}
                    key={item._key}
                    className={
                      mainImageIndex === index
                        ? 'border-fuchsiaRose-400 border-2'
                        : 'border-none'
                    }
                    onClick={() => setMainImageIndex(index)}
                  >
                    <Img fluid={item.asset.fluid} alt={item.caption} />
                  </button>
                ))}
              </div>
            </div>
            <main>
              <h2 className='font-semibold text-gray-900 text-2xl md:text-3xl lg:text-4xl'>
                {product.title}
              </h2>
              <div className='mt-5 flex justify-between items-start'>
                <div>
                  <p className='text-sm md:text-base text-gray-600 mb-3'>
                    {`Select a ${variantTypeTitle}:`}
                  </p>
                  {productVariants.map((item, index) => (
                    <div key={item._key} className='flex'>
                      <input
                        className='mr-2'
                        type='radio'
                        id={item.title}
                        name={variantTypeTitle}
                        value={item.priceDifferential}
                        defaultChecked={index === 0}
                        onChange={() => {
                          setDisplayPrice(
                            product.basePrice + item.priceDifferential
                          );
                          setVariantTitle(item.title);
                        }}
                      />
                      <label className='text-base' htmlFor={variantTypeTitle}>
                        {item.title}
                      </label>
                    </div>
                  ))}
                </div>
                <div>
                  <h5 className='text-2xl text-gray-800 text-right font-medium'>
                    {`RM${displayPrice}`}
                  </h5>
                </div>
              </div>
              <div className='my-7'>
                <AddToCartButton
                  _id={`${product._id}-${variantTitle}`}
                  title={product.title}
                  price={product.basePrice}
                  image={product.media[0].asset.url}
                  slug={productSlug}
                  description={product.description}
                  variantType={variantTypeTitle}
                  variantOptions={variantOptionsString}
                  variantTitle={variantTitle}
                />
              </div>

              <ProductAccordion>
                <ProductAccordionItem
                  uuid='description'
                  title='Description and details'
                >
                  <p>{product.description}</p>
                </ProductAccordionItem>
                {product.ingredients && (
                  <ProductAccordionItem uuid='ingredients' title='Ingredients'>
                    <p>{product.ingredients}</p>
                  </ProductAccordionItem>
                )}
                {product.allergens && (
                  <ProductAccordionItem uuid='allergens' title='Allergens'>
                    <p>{product.allergens}</p>
                  </ProductAccordionItem>
                )}
                {product.careInstructions && (
                  <ProductAccordionItem
                    uuid='careInstructions'
                    title='Care instructions'
                  >
                    <p>{product.careInstructions}</p>
                  </ProductAccordionItem>
                )}
                {product.includedItems.length !== 0 && (
                  <ProductAccordionItem
                    uuid='includedItems'
                    title='Items included with this item'
                  >
                    <div className='grid grid-cols-2 gap-4'>
                      {product.includedItems.map((item) => (
                        <article key={item._id}>
                          <Img
                            fluid={item.image.asset.fluid}
                            alt={item.image.caption}
                          />
                          <div>
                            <h5 className='text-lg text-gray-600 mt-2 mb-1'>
                              {item.title}
                            </h5>
                            <p className='text-sm text-gray-500'>
                              {item.details}
                            </p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </ProductAccordionItem>
                )}
              </ProductAccordion>
            </main>
          </section>
          {/* product details */}
        </Container>
        {/* similar items */}
        <section className='bg-mountbattenPink-50 py-12'>
          <Container>
            <h3 className='text-xl text-gray-800 font-medium mb-5'>
              You might also be interested in these items
            </h3>
            <div
              className='grid grid-cols-2 lg:grid-cols-4 gap-4
          '
            >
              {similarItemsEdges.map((item) => (
                <SingleProduct
                  key={item.node._id}
                  link={`/shop/category/${item.node.category.slug.current}/${item.node.slug.current}`}
                  _id={item.node._id}
                  imageSrc={item.node.media[0].asset.fluid}
                  title={item.node.title}
                  basePrice={item.node.basePrice}
                />
              ))}
            </div>
          </Container>
        </section>
        {/* similar items */}
      </Layout>
    </>
  );
};

export default ProductPage;

export const query = graphql`
  query productAndSimilarItems(
    $_id: String
    $slug: String
    $categoryTitle: String
  ) {
    product: sanityProduct(
      _id: { eq: $_id }
      slug: { current: { eq: $slug } }
      category: { title: { eq: $categoryTitle } }
    ) {
      _id
      title
      basePrice
      category {
        title
        slug {
          current
        }
      }
      slug {
        current
      }
      variants {
        ... on SanityColor {
          _key
          _type
          priceDifferential
          title
        }
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
      media {
        _key
        caption
        asset {
          url
          fluid(maxWidth: 600, maxHeight: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
      description
      ingredients
      careInstructions
      allergens
      includedItems {
        _id
        details
        title
        image {
          caption
          asset {
            fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    similarItems: allSanityProduct(
      filter: {
        category: { title: { eq: $categoryTitle } }
        _id: { ne: $_id }
        slug: { current: { ne: $slug } }
      }
      sort: { fields: title, order: ASC }
      limit: 4
    ) {
      edges {
        node {
          _id
          title
          basePrice
          slug {
            current
          }
          media {
            asset {
              fluid(maxHeight: 400, maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
          category {
            title
            slug {
              current
            }
          }
        }
      }
    }
  }
`;
