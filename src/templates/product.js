import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Container from '../components/Container';
import PortableText from '@sanity/block-content-to-react';
import ProductAccordion from '../components/product/Accordion';
import ProductAccordionItem from '../components/product/AccordionItem';

import '../styles/accordion.css';
import SingleProduct from '../components/product/Single';
import AddToCartButton from '../components/product/AddToCartButton';

const ProductPage = (props) => {
  const { data, errors } = props;
  const product = (data || {}).product;
  const productVariants = product.variants;
  const lastVariant = productVariants[productVariants.length - 1];
  const categorySlug = product.category.slug.current;
  const similarItems = (data || {}).similarItems;
  const similarItemsEdges = similarItems.edges;
  const productSlug = `/shop/category/${categorySlug}/${product.slug.current}`;

  const [variantPrice, setVariantPrice] = useState(lastVariant.price);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const serializers = {
    types: {
      span: (props) => <span>{props}</span>,
      h1: (props) => <h1 className='hello'>{props}</h1>,
    },
  };

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
              <div className='grid grid-cols-4 gap-4 mt-5'>
                {product.media.map((item, index) => (
                  <figure
                    role='button'
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
                  </figure>
                ))}
              </div>
            </div>
            <main>
              <h2 className='font-semibold text-gray-900 text-2xl md:text-3xl lg:text-4xl'>
                {product.title}
              </h2>
              <div className='mt-5 flex justify-between items-start'>
                <div>
                  <p className='text-sm text-gray-600 mb-3'>
                    Select a variant:
                  </p>
                  {product.variants.map((item) => (
                    <div key={item._key} className='flex'>
                      <input
                        className='mr-2'
                        type='radio'
                        id={item.name}
                        name='variant'
                        value={item.price}
                        defaultChecked={item.price === variantPrice}
                        onChange={() => setVariantPrice(item.price)}
                      />
                      <label htmlFor='variant'>{item.name}</label>
                    </div>
                  ))}
                </div>
                <div>
                  <h5 className='text-2xl text-gray-800 text-right font-medium'>
                    {`RM${variantPrice ? variantPrice : ''}`}
                  </h5>
                </div>
              </div>
              <div className='my-7'>
                <AddToCartButton
                  _id={product._id}
                  title={product.title}
                  buttonText={variantPrice}
                  variantPrice={variantPrice}
                  image={product.media[0].asset.url}
                  slug={productSlug}
                  excerpt={product.excerpt}
                />
              </div>

              <ProductAccordion>
                <ProductAccordionItem
                  uuid='description'
                  title='Description and details'
                >
                  <PortableText
                    blocks={product._rawDescription}
                    serializers={serializers}
                  />
                </ProductAccordionItem>
                <ProductAccordionItem uuid='ingredients' title='Ingredients'>
                  <p>{product.ingredients}</p>
                </ProductAccordionItem>
                <ProductAccordionItem uuid='allergens' title='Allergens'>
                  <p>{product.allergens}</p>
                </ProductAccordionItem>
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
                <ProductAccordionItem
                  uuid='careInstructions'
                  title='Care instructions'
                >
                  <p>{product.careInstructions}</p>
                </ProductAccordionItem>
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
                  lowestPrice={item.node.variants[0].price}
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
      category {
        title
        slug {
          current
        }
      }
      excerpt
      _rawDescription
      slug {
        current
      }
      variants {
        _key
        name
        price
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
          variants {
            name
            price
            _key
          }
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
