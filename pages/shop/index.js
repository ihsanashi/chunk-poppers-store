import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../src/components/Layout';
import Container from '../../src/components/Container';

const ShopLanding = (props) => {
  const { data } = props;
  const shopContent = (data || {}).allSanityCategory;
  // const categoryEdges = shopContent.edges;
  return (
    <>
      <Head>
        <title>Shop - Chunk Poppers</title>
      </Head>
      <Layout>
        <Container>
          <h1>Shop page</h1>
          {/* <section className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-20'>
            {categoryEdges.map((item) => (
              <Link
                href={`/shop/category/${item.node.slug.current}`}
                key={item.node.id}
              >
                <div className='relative'>
                  <div className='z-10 bg-gradient-to-t from-gray-100'>
                    <Image
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
          </section> */}
        </Container>
      </Layout>
    </>
  );
};

export default ShopLanding;
