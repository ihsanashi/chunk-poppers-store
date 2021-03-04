import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';

const LegalPage = (props) => {
  const { data, errors } = props;
  const legal = (data || {}).legal;
  const otherLegal = (data || {}).otherLegal;

  return (
    <>
      <Helmet>
        <title>{`${legal.pageName} - Chunk Poppers`}</title>
      </Helmet>
      <h2>{legal.documentTitle}</h2>
    </>
  );
};

export default LegalPage;

export const query = graphql`
  query legalAndOtherLegalPage($_id: String, $slug: String) {
    legal: sanityLegal(_id: { eq: $_id }, slug: { current: { eq: $slug } }) {
      _id
      pageName
      slug {
        current
      }
      documentTitle
      content {
        _rawChildren
      }
    }
    otherLegal: allSanityLegal(
      filter: { _id: { ne: $_id }, slug: { current: { ne: $slug } } }
    ) {
      edges {
        node {
          pageName
          slug {
            current
          }
        }
      }
    }
  }
`;
