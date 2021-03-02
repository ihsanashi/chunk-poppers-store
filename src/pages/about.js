import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../components/Container';
import Layout from '../components/Layout';

const AboutPage = (props) => {
  return (
    <>
      <Helmet>
        <title>About - Chunk Poppers</title>
      </Helmet>
      <Layout>
        <Container>About</Container>
      </Layout>
    </>
  );
};
