import Head from 'next/head';
import HomeHero from '../src/components/home/Hero';
import Layout from '../src/components/Layout';
import FeaturedProducts from '../src/components/home/FeaturedProducts';
import Reviews from '../src/components/home/Reviews';

const IndexPage = (props) => {
  const { data } = props;
  const homeContent = (data || {}).sanityHome;
  return (
    <>
      <Head>
        <title>Home - Chunk Poppers</title>
      </Head>
      <Layout>
        <HomeHero homeContent={homeContent} />
        <FeaturedProducts homeContent={homeContent} />
        <Reviews homeContent={homeContent} />
      </Layout>
    </>
  );
};

export default IndexPage;
