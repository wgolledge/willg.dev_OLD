import React from 'react';
import styled from 'styled-components';

const IntroWrapper = styled.div`
  text-align: center;
  width: 100%;
`;
const Hi = styled.h2`
  margin-top: 0;
  ${({ theme: { media } }) => media.mobile`
    font-size: 1.4rem;
  `}
`;
const StyledH2 = styled.h2`
  font-size: 1.2rem;
  padding-top: 1rem;
  ${({ theme: { media } }) => media.mobile`
    font-size: 1rem;
    text-align: left;
  `}
`;
const Intro = () => (
  <IntroWrapper>
    <Hi>Hi, welcome to my site!</Hi>
    <StyledH2>
      I&apos;m Will, a developer consultant for AND Digital, currently working
      at Shawbrook Bank.
    </StyledH2>
  </IntroWrapper>
);
export default Intro;
