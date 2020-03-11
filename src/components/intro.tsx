import React from 'react';
import styled from 'styled-components';

const IntroWrapper = styled.div`
  text-align: center;
  width: 100%;
`;
const Hi = styled.h2`
  margin: 0 0 ${p => p.theme.spacing.md} 0;
  font-size: 2rem;
  ${({ theme: { media } }) => media.mobile`
    font-size: 1.4rem;
  `}
`;
const StyledH2 = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
  overflow-wrap: break-word;
  ${({ theme: { media } }) => media.mobile`
    font-size: 1.2rem;
    text-align: left;
  `}
`;
const Intro = () => (
  <IntroWrapper>
    <Hi>Hi 👋 welcome to my site!</Hi>
    <StyledH2>
      I&apos;m Will, a developer consultant for Formidable, helping clients to
      build beautiful and performant apps.
    </StyledH2>
  </IntroWrapper>
);
export default Intro;
