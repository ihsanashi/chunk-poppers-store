import Head from 'next/head';
import Link from 'next/link';
import Logo from '../components/Logo';
import Layout from '../components/Layout';
import PortableText from '@sanity/block-content-to-react';
import GraphQLErrorList from '../components/graphql-error-list';

const LegalPage = (props) => {
  const { data, errors } = props;
  const legal = (data || {}).legal;
  const otherLegal = (data || {}).otherLegal;
  const otherLegalEdges = otherLegal.edges;
  const dateFormatted = legal._updatedAt.split('T')[0];

  const serializers = {
    types: {
      span: (props) => <span>{props}</span>,
      h1: (props) => <h1 className='hello'>{props}</h1>,
    },
  };

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
        <title>{`${legal.pageName} - Chunk Poppers`}</title>
      </Head>
      <main className='max-w-4xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
          <aside className='lg:col-span-3 lg:h-full lg:min-h-screen py-6 lg:py-12 border-b lg:border-r border-gray-200 lg:border-gray-200'>
            <section className='static lg:fixed'>
              <Link href='/'>
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
                    activeClassName='text-purple-500'
                  >
                    <p className='my-2 ml-3'>{item.node.pageName}</p>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
          <section className='lg:col-span-9 py-6 lg:py-12'>
            <h2 className='font-semibold text-2xl lg:text-3xl text-gray-900'>
              {legal.documentTitle}
            </h2>
            <p className='mt-3 mb-7 text-sm text-gray-700 font-medium'>
              Last updated: {dateFormatted}
            </p>
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
