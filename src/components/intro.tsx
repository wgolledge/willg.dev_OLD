import React from 'react';
import styled from 'styled-components';

const IntroWrapper = styled.div`
  text-align: center;
  width: 100%;
`;
const StyledH1 = styled.h2`
  ${({ theme: { media } }) => media.mobile`
    font-size: 1.4rem;
    text-align: left;
  `}
`;
const StyledH2 = styled.h2`
  font-size: 1.2rem;
  ${({ theme: { media } }) => media.mobile`
    font-size: 1rem;
    text-align: left;
  `}
`;
const Intro = () => (
  <IntroWrapper>
    <StyledH1>Hi, welcome to my site!</StyledH1>
    <StyledH2>
      I&apos;m Will, a developer consultant for AND Digital, currently working
      at Shawbrook Bank.
    </StyledH2>
  </IntroWrapper>
);
export default Intro;
