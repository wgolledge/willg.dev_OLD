import React from 'react';
import styled from 'styled-components';
interface ILinkItem {
  url: string;
  name: string;
}

export const LINK_DATA: ILinkItem[] = [
  {
    url: `https://twitter.com/willgolledge`,
    name: `twitter`,
  },
  {
    url: `https://github.com/wgolledge`,
    name: `github`,
  },
  {
    url: `https://www.linkedin.com/in/will-5a935683/`,
    name: `linkedin`,
  },
  {
    url: `mailto:hi@willg.dev`,
    name: `email`,
  },
];

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;

  a {
    color: ${({ theme }) => theme.palette.text};
    font-size: 1.1rem;
    font-weight: 800;
    text-decoration: none;
  }
`;

const LinkContainer = styled.div`
  grid-area: 1 / ${({ index }: { index: number }) => (index + 1) * 2} / 2 /
    ${({ index }: { index: number }) => 1 + (index + 1) * 2};
`;

const Links = () => (
  <Container>
    {LINK_DATA.map(({ url, name }, index) => (
      <LinkContainer key={url} index={index}>
        <a href={url}>{name}</a>
      </LinkContainer>
    ))}
  </Container>
);

export default Links;
