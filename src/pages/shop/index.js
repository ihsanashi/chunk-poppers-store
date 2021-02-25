import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import ShopCategories from '../../components/shop/Categories';

const ShopLanding = (props) => {
  return (
    <>
      <Helmet>
        <title>Chunk Poppers - Shop</title>
      </Helmet>
      <Layout>
        <ShopCategories />
      </Layout>
    </>
  );
};

export default ShopLanding;
