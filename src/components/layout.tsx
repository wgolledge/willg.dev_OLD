import React from 'react';
import { styled } from '../utils/style';
import Footer from './footer';

const LayoutDiv = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxContentWidth}px;
  padding: 0px 1.1rem;
  position: relative;
  color: ${({ theme }) => theme.palette.text};
`;

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <LayoutDiv>
      <main>{children}</main>
      <Footer />
    </LayoutDiv>
  </>
);

export default Layout;
