import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { withTheme, THEME } from '../utils/style';

import Layout from '../components/layout';
import About from '../components/about';
import SEO from '../components/seo';
import Banner from '../components/banner';
import Intro from '../components/intro';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${THEME.palette.background};

    font-family: 'Muli', sans-serif;
    font-size: ${THEME.font.minSize}px;
    letter-spacing: 0.09rem;
    line-height: 1.7rem;

    @media screen and (max-width: ${
      THEME.maxContentWidth
    }px) and (min-width: ${(THEME.font.minSize * THEME.maxContentWidth) /
  THEME.font.maxSize}px) {
      font-size: calc(${THEME.font.maxSize / THEME.maxContentWidth} * 100vw);
    }

    @media screen and (min-width: ${THEME.maxContentWidth}px) {
      font-size: ${THEME.font.maxSize}px;
    }
  }
`;

const IndexPage = () => (
  <>
    <GlobalStyle />
    <SEO
      title="WG"
      keywords={[`will`, `golledge`, `react`, `javascript`]}
    />{' '}
    <Banner />
    <Layout>
      <Intro />
      <About />
    </Layout>
  </>
);

export default withTheme(IndexPage);
