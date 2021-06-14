import Head from 'next/head';
import Image from 'next/image';
import Container from '../src/components/Container';
import Layout from '../src/components/Layout';
import PortableText from '@sanity/block-content-to-react';

const AboutPage = (props) => {
  const { data } = props;
  const about = (data || {}).sanityAbout;
  return (
    <>
      <Head>
        <title>About - Chunk Poppers</title>
      </Head>
      <Layout>
        <Container>
          {/* <main className='grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left my-20'>
            <div>
              <h2 className='font-semibold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-fuchsiaRose-300 to-pearlyPurple-500'>
                {about.heroTitle}
              </h2>
            </div>
            <div>
              <p className='font-normal text-base text-gray-700'>
                {about.heroSubtitle}
              </p>
            </div>
          </main> */}
          {/* <section className='grid grid-cols-2 gap-4 my-20'>
            {about.gallery.map((item) => (
              <div key={item._key}>
                <Image className='rounded-lg' fluid={item.asset.fluid} />
              </div>
            ))}
          </section> */}
        </Container>
        {/* <section className='px-5 md:px-10 lg:px-20 py-20 my-20 text-center bg-mountbattenPink-50'>
          <Container>
            <PortableText blocks={about._rawContent} />
          </Container>
        </section> */}
        <Container>
          <section className='my-20'>
            {/* <div className='text-center'>
              <h6 className='text-sm text-gray-400 font-semibold uppercase'>
                {about.featuresSubtitle}
              </h6>
              <h3 className='text-2xl md:text-3xl font-semibold text-gray-800 mt-3 mb-5'>
                {about.featuresTitle}
              </h3>
              <p className='text-base md:text-lg text-gray-700 font-normal max-w-xl mx-auto'>
                {about.featuresDesc}
              </p>
            </div> */}
          </section>
          {/* <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20'>
            {about.features.map((item) => (
              <div
                key={item._key}
                className='bg-pearlyPurple-50 rounded-lg text-center relative flex flex-col items-center my-3 lg:my-0'
              >
                <div className='absolute mx-auto -top-6 w-12 h-12 p-3 bg-fuchsiaRose-400 rounded-lg'>
                  <Img fixed={item.icon.asset.fixed} alt={item.icon.caption} />
                </div>
                <div className='p-7 mt-5'>
                  <h6 className='text-lg text-gray-800 font-medium'>
                    {item.title}
                  </h6>
                  <p className='mt-3 font-normal text-gray-600 text-base'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </section> */}
        </Container>
      </Layout>
    </>
  );
};

export default AboutPage;
