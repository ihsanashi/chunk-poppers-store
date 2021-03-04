import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Logo from '../components/Logo';
import dayjs from 'dayjs';
import PortableText from '@sanity/block-content-to-react';

const LegalPage = (props) => {
  const { data, errors } = props;
  const legal = (data || {}).legal;
  const otherLegal = (data || {}).otherLegal;
  const otherLegalEdges = otherLegal.edges;

  const serializers = {
    types: {
      span: (props) => <span>{props}</span>,
      h1: (props) => <h1 className='hello'>{props}</h1>,
    },
  };

  return (
    <>
      <Helmet>
        <title>{`${legal.pageName} - Chunk Poppers`}</title>
      </Helmet>
      <main className='max-w-4xl mx-auto py-12'>
        <div className='grid grid-cols-12 gap-4'>
          <aside className='col-span-3 h-full min-h-screen border-r border-gray-100'>
            <section className='fixed'>
              <Link to='/'>
                <Logo />
              </Link>
              <div className='mt-7'>
                <h5 className='font-medium text-2xl text-gray-800 mb-4'>
                  Legal
                </h5>
                {otherLegalEdges.map((item) => (
                  <Link
                    to={`/legal/${item.node.slug.current}`}
                    key={item.node._id}
                  >
                    <p className='my-2'>{item.node.pageName}</p>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
          <section className='col-span-9'>
            <h2 className='font-semibold text-2xl lg:text-3xl text-gray-900'>
              {legal.documentTitle}
            </h2>
            <p className='mt-3 mb-7'>{legal._updatedAt}</p>
            <PortableText
              blocks={legal._rawContent}
              serializers={serializers}
            />
          </section>
        </div>
      </main>
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
      _rawContent
      _updatedAt
    }
    otherLegal: allSanityLegal(sort: { order: ASC, fields: pageName }) {
      edges {
        node {
          _id
          pageName
          slug {
            current
          }
        }
      }
    }
  }
`;
