import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const Logo = () => {
  const data = useStaticQuery(graphql`
    query logo {
      file(relativePath: { eq: "cp-logo.png" }) {
        childImageSharp {
          fixed(height: 60, width: 60) {
            ...GatsbyImageSharpFixed
            src
          }
        }
      }
    }
  `);

  return (
    <Img fixed={data.file.childImageSharp.fixed} alt='Chunk Poppers logo' />
  );
};

export default Logo;
