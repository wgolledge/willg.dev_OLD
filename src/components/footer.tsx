import React from 'react';
import { styled } from '../utils/style';

import { Link } from 'gatsby';
import Links from './links';

const StyledFooter = styled.footer`
  width: 100%;
`;

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxContentWidth}px;
  padding: ${p => p.theme.spacing.sm} ${p => p.theme.spacing.xs};
`;

const StyledHr = styled.hr`
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.palette.secondary};
  width: 100%;
  margin: 0 auto;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    right bottom,
    color-stop(0.01, ${({ theme }) => theme.palette.background}),
    color-stop(0.5, ${({ theme }) => theme.palette.secondary}),
    color-stop(0.99, ${({ theme }) => theme.palette.background})
  );
`;

const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${p => p.theme.spacing.sm};
  a {
    color: ${({ theme }) => theme.palette.text};
    font-size: 0.9rem;
    font-weight: 800;
    text-decoration: none;
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledHr />
    <StyledDiv>
      <Links />
      <CopyrightWrapper>
        <Link to="/">© 2020 Will Golledge</Link>
      </CopyrightWrapper>
    </StyledDiv>
  </StyledFooter>
);

export default Footer;
