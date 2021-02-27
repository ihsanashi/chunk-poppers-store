import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Container from '../components/Container';
import PortableText from '@sanity/block-content-to-react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const ProductPage = (props) => {
  const { data, errors } = props;
  const product = data && data.product;
  const categorySlug = product.category.slug.current;

  const [variantName, setVariantName] = useState('');

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
                      value={item.price}
                      onChange={() => setVariantName(item.price)}
                    />
                    <label htmlFor='variant'>{item.name}</label>
                  </div>
                ))}
                <div className='flex items-center justify-between mt-8'>
                  <h5 className='text-2xl text-gray-800 font-medium'>RM</h5>
                  <h6 className='uppercase font-medium text-lg text-gray-700'>
                    Quantity
                  </h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h2 className='text-4xl lgtext-5xl font-bold text-gray-900'>
                    {variantName ? variantName : ''}
                  </h2>
                </div>
                <div className='flex my-7'>
                  <button
                    className={`text-white font-bold w-full py-2 px-4 rounded ${
                      variantName
                        ? 'bg-mountbattenPink-400 shadow-md hover:bg-mountbattenPink-500 hover:shadow-2xl'
                        : 'bg-gray-300'
                    }`}
                    disabled={true}
                  >
                    {variantName
                      ? `Add to cart — RM${variantName}`
                      : 'Please select a variant'}
                  </button>
                </div>
                <div>
                  <Accordion preExpanded={['description']}>
                    <AccordionItem uuid='description'>
                      <AccordionItemHeading>
                        <AccordionItemButton className='text-lg font-medium text-gray-700'>
                          Description and details
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <PortableText
                          blocks={product._rawDescription}
                          serializers={serializers}
                        />
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid='ingredients'>
                      <AccordionItemHeading>
                        <AccordionItemButton className='text-lg font-medium text-gray-700'>
                          Ingredients
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{product.ingredients}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid='allergens'>
                      <AccordionItemHeading>
                        <AccordionItemButton className='text-lg font-medium text-gray-700'>
                          Allergens
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{product.allergens}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid='includedItems'>
                      <AccordionItemHeading>
                        <AccordionItemButton className='text-lg font-medium text-gray-700'>
                          Items included with this product
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
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
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid='careInstructions'>
                      <AccordionItemHeading>
                        <AccordionItemButton className='text-lg font-medium text-gray-700'>
                          Care instructions
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{product.careInstructions}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
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
      _id
      title
      category {
        title
        slug {
          current
        }
      }
      _rawDescription
      description {
        _rawChildren
        children {
          text
        }
      }
      slug {
        current
      }
      variants {
        _key
        name
        price
      }
      media {
        caption
        asset {
          fluid(maxWidth: 600, maxHeight: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
      ingredients
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
      careInstructions
      allergens
    }
  }
`;
