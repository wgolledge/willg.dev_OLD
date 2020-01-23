/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { styled } from '../utils/style';
import Image from './image';

const Wrapper = styled.div`
  align-items: center;
  display: grid;
  justify-items: center;
  width: 100%;
  ${({ theme: { media } }) => media.mobile`
    grid-template-columns: 1fr;
    grid-template-rows: [row1-start] auto;
  `}
  ${({ theme: { media } }) => media.desktop`
    grid-template-columns: 1fr 2fr;
    grid-template-rows: [row1-start] auto [row2-start] auto [row2-end];
  `}
`;

const StyledP = styled.p`
  font-size: 1.1rem;
  ${({ theme: { media } }) => media.mobile`
    font-size: 0.9rem;
  `}
`;

const Italic = styled.span`
  font-style: italic;
`;

const About = () => (
  <>
    <Wrapper>
      <Image />
      <StyledP>
        I've had over 4 years experience working as a developer and consultant
        for clients such as Condé Nast, HSBC, Freshfields, and insurethebox
        (Toyota). My skillset is tilted towards front-end, though I have code in
        production across the whole stack.
      </StyledP>
      <StyledP>
        I'm passionate about tooling and optimising DX. While I care more about
        the product than the technology used, I love working with JavaScript
        (and React❤️). I value the importance of making things{' '}
        {<Italic>fast</Italic>} so have been upskilling in Golang and Workbox🚀.
      </StyledP>
    </Wrapper>
    <StyledP>
      If you notice the lack of a 'blog posts' section; that's because I've
      always been much more of an avid blog-reader than blog-writer. Maybe
      that's something I'll try to change over the next year.
    </StyledP>
    <StyledP>
      That's pretty much it! Thanks for dropping by. If you'd like to get in
      touch come and find me using the links below.
    </StyledP>
  </>
);

export default About;
