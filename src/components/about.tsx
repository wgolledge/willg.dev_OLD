/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { styled } from '../utils/style';
import Image from './image';

const Wrapper = styled.div`
  align-items: center;
  display: grid;
  grid-row-gap: ${p => p.theme.spacing.md};
  grid-template-columns: 1fr;
  justify-items: center;
  margin: ${p => p.theme.spacing.md} 0;
  width: 100%;
  ${p => p.theme.media.mobile`
    margin: ${p.theme.spacing.sm} 0;
    grid-row-gap: ${p.theme.spacing.sm};
  `}
  ${p => p.theme.media.desktop`
    grid-template-columns: 1fr 3fr;
    grid-template-rows: [row1-start] auto [row2-start] auto [row2-end];
  `}

  p {
    margin: 0;
    width: 100%;
  }
`;

const StyledP = styled.p`
  font-size: 1rem;
  margin-bottom: 0;
  ${({ theme: { media } }) => media.mobile`
    font-size: 0.9rem;
  `}
`;
const Final = styled(StyledP)`
  grid-column: 1 / 3;
  ${({ theme: { media } }) => media.mobile`
    grid-column: 1;
  `}
`;
const About = () => (
  <Wrapper>
    <Image />
    <StyledP>
      I've had over 4 years experience working as a developer and consultant for
      clients such as Condé Nast, HSBC, Freshfields, and insurethebox (Toyota).
      I enjoy working with clients to architect and build Web Apps that are
      modern, high-performing, and adhere to programming best practices.
    </StyledP>
    <StyledP>
      I'm passionate about tooling and optimising DX. I care more about the
      product than the technology used and love working with anything in the
      extended JS ecosystem that helps developers build great apps.
    </StyledP>
    <Final>
      That's pretty much it! Thanks for dropping by. If you'd like to get in
      touch come and find me using the links below.
    </Final>
  </Wrapper>
);

export default About;
