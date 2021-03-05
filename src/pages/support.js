import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Container from '../components/Container';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';

const SupportPage = (props) => {
  const { data } = props;
  const supportContent = (data || {}).allSanitySupport;
  const supportEdges = supportContent.edges;

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      <Helmet>
        <title>Support - Chunk Poppers</title>
      </Helmet>
      <Layout>
        <Container>
          <section className='mx-auto text-center mt-20 mb-12'>
            <h3 className='text-3xl md:text-4xl text-gray-900 font-semibold'>
              Hello, how can we help?
            </h3>
            <p className='mx-auto max-w-lg mt-5 text-gray-600'>
              Choose from a category below to quickly get to the appropriate
              sections. If none of these are answering your queries,{' '}
              <strong className='text-gray-800'>please get in touch</strong>.
            </p>
          </section>
          <section className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-20'>
            {supportEdges.map((item, index) => (
              <div
                key={item.node._id}
                role='button'
                onClick={() => setActiveCategory(index)}
                className={`${
                  activeCategory === index
                    ? 'border-fuchsiaRose-500 bg-fuchsiaRose-50'
                    : 'border-gray-300'
                } border hover:border-fuchsiaRose-200 rounded-md text-center p-5`}
              >
                <Img fixed={item.node.icon.asset.fixed} />
                <h5 className='text-sm md:text-base font-medium text-gray-800'>
                  {item.node.categoryTitle}
                </h5>
              </div>
            ))}
          </section>
          <section className='max-w-2xl mx-auto my-20'>
            <div className='mb-24'>
              <h4 className='font-semibold text-2xl text-center mb-2'>
                {supportEdges[activeCategory].node.categoryTitle}
              </h4>
              <p className='font-normal text-base text-gray-700 text-center'>
                {supportEdges[activeCategory].node.categoryDescription}
              </p>
            </div>
            <div>
              {supportEdges[activeCategory].node.faq.map((item) => (
                <Accordion key={item._key} allowZeroExpanded={true}>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton className='flex items-center justify-between'>
                        <h6 className='text-lg font-medium text-gray-700'>
                          {item.question}
                        </h6>
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded ? (
                              <BiChevronUp size={20} color='#C1577E' />
                            ) : (
                              <BiChevronDown size={20} color='#C1577E' />
                            )
                          }
                        </AccordionItemState>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className='text-sm md:text-base text-gray-700 font-normal'>
                        {item.answer}
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default SupportPage;

export const query = graphql`
  {
    allSanitySupport(sort: { fields: categoryTitle, order: ASC }) {
      edges {
        node {
          _id
          categoryTitle
          categoryDescription
          icon {
            asset {
              fixed(height: 32, width: 32) {
                ...GatsbySanityImageFixed
              }
            }
          }
          faq {
            _key
            question
            answer
          }
        }
      }
    }
  }
`;
