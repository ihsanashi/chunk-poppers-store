import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import ContactHero from '../components/contact/Hero';
import ContactInfo from '../components/contact/Info';
import Layout from '../components/Layout';

const ContactPage = (props) => {
  const { data } = props;
  const contactContent = (data || {}).sanityContact;
  return (
    <>
      <Helmet>
        <title>Contact Us - Chunk Poppers</title>
      </Helmet>
      <Layout>
        <ContactHero />
        <ContactInfo contactContent={contactContent} />
      </Layout>
    </>
  );
};

export default ContactPage;

export const query = graphql`
  query {
    sanityContact {
      sectionTitle
      sectionSubtitle
      contactInfo {
        _key
        title
        subtitle
        icon {
          asset {
            fixed(height: 24, width: 24) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;
