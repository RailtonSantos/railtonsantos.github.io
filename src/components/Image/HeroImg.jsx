import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const HeroImg = ({ filename, alt, className }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              publicURL
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      if (image.node.childImageSharp) {
        const imageFluid = image.node.childImageSharp.fluid;
        return <Img alt={alt} fluid={imageFluid} className={className} />;
      }
      const imgSrc = image.node.publicURL;
      return <img alt={alt} src={imgSrc} className={className} />;
    }}
  />
);

HeroImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default HeroImg;
