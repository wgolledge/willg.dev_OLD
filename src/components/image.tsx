import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { styled } from '../utils/style';

const StyledWrapper = styled.div`
  ${({ theme: { media } }) => media.mobile`
    min-width: 140px;
    padding: 0;
  `}
  ${({ theme: { media } }) => media.desktop`
    min-width: 230px;
    padding: 20px;
  `}
  grid-row: row1-start / row2-end;
`;

const StyledImage = styled(GatsbyImage)`
  border: 2px solid ${({ theme }) => theme.palette.text};
  border-radius: 50%;
`;

const SafariBug = styled.div`
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -webkit-transform: translateZ(0);
  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
  overflow: hidden;
`;

export const query = graphql`
  query {
    selfie: file(relativePath: { eq: "img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Img = () => {
  const { selfie } = useStaticQuery(query);

  return (
    <StyledWrapper>
      <SafariBug>
        <StyledImage fluid={selfie.childImageSharp.fluid} />
      </SafariBug>
    </StyledWrapper>
  );
};

export default Img;
