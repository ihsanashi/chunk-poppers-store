import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import Container from '../components/Container';
import ProductAccordion from '../components/product/Accordion';
import ProductAccordionItem from '../components/product/AccordionItem';
import GraphQLErrorList from '../components/graphql-error-list';

import '../styles/accordion.css';
import SingleProduct from '../components/product/Single';
import AddToCartButton from '../components/product/AddToCartButton';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ProductPage = (props) => {
  const { data, errors } = props;

  const product = (data || {}).product;
  const productVariants = product.variants;
  const variantTypeTitle = capitalizeFirstLetter(productVariants[0]._type);

  let variantOptions = [];
  let variantOptionsString = '';
  productVariants.forEach((item) => {
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
      <Head>
        <title>
          {`${product.title} - ${product.category.title} | Shop - Chunk Poppers`}
        </title>
      </Head>
      <Layout>
        <Container>
          {/* breadcrumbs */}
          <section className='my-8 text-sm md:text-base'>
            <div className='inline'>
              <p className='inline text-gray-500 hover:text-gray-700'>
                <Link href='/'>Home</Link>
              </p>
              <p className='inline text-gray-500'>
                {'  '}/{'  '}
              </p>
              <p className='inline text-gray-500 hover:text-gray-700'>
                <Link href='/shop'>Shop</Link>
              </p>
              <p className='inline text-gray-500'>
                {'  '}/{'  '}
              </p>
              <p className='inline text-gray-500 hover:text-gray-700'>
                <Link href={`/shop/category/${categorySlug}`}>
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
              {/* <Image
                fluid={product.media[mainImageIndex].asset.fluid}
                alt={product.media[mainImageIndex].caption}
              /> */}
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
                    {/* <Image fluid={item.asset.fluid} alt={item.caption} /> */}
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
                  <p className='text-sm md:text-base font-medium text-gray-600 mb-3'>
                    {`Select a ${variantTypeTitle}:`}
                  </p>
                  {productVariants.map((item, index) => (
                    <label
                      key={item._key}
                      className='flex items-center my-2 cursor-pointer'
                    >
                      <input
                        className='mr-2 cursor-pointer text-mountbattenPink-400'
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
                      <span
                        className='text-base text-gray-800 ml-1'
                        htmlFor={variantTypeTitle}
                      >
                        {item.title}
                      </span>
                    </label>
                  ))}
                </div>
                <div>
                  <h5 className='text-2xl text-gray-800 text-right font-medium'>
                    {`RM ${displayPrice}`}
                  </h5>
                </div>
              </div>
              <div className='my-7'>
                <AddToCartButton
                  _id={`${product._id}-${variantTitle}`}
                  title={product.title}
                  basePrice={product.basePrice}
                  image={product.media[0].asset.url}
                  slug={productSlug}
                  description={product.excerpt}
                  variantType={variantTypeTitle}
                  variantOptions={variantOptionsString}
                  variantTitle={variantTitle}
                  variantPrice={displayPrice}
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
                    title='Included items'
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
