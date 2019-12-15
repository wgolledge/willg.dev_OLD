import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from '../../utils/test-utils';
import Page from '../index';
import { LINK_DATA } from '../../components/links';

jest.mock('gatsby', () => ({
  ...jest.requireActual('gatsby'),
  useStaticQuery: jest.fn(() => ({
    site: { siteMetadata: { description: 'myDescription' } },
    selfie: { childImageSharp: { fluid: 'fluid' } },
  })),
  graphql: jest.fn(),
}));

/* eslint-disable react/display-name */
jest.mock('gatsby-image', () => ({
  __esModule: true,
  default: () => <div />,
}));

jest.mock('../../components/banner', () => ({
  __esModule: true,
  default: () => <div />,
}));
/* eslint-enable react/display-name */

afterEach(cleanup);

test('it displays the correct text', async () => {
  const { getByText, getAllByRole } = render(<Page />);

  const headings = getAllByRole('heading');
  expect(headings[0]).toHaveTextContent(/Hi, welcome to my site!/i);
  expect(headings[1]).toHaveTextContent(
    /I'm Will, a developer consultant for AND Digital, currently working at Shawbrook Bank./i,
  );

  expect(getByText(/Hi, welcome to my site!/i)).toBeDefined();
  expect(
    getByText(
      /If you notice the lack of a 'blog posts' section; that's because I've always been much more of an avid blog-reader than blog-writer. Maybe that's something I'll try to change over the next year./i,
    ),
  ).toBeDefined();
  expect(
    getByText(
      /That's pretty much it! Thanks for dropping by. If you'd like to get in touch come and find me using the links below./i,
    ),
  ).toBeDefined();
  expect(getByText(/© 2020 Will Golledge/i)).toBeDefined();
});

test('it displays each of the links', async () => {
  const { getByText } = render(<Page />);

  for (const { url, name } of LINK_DATA) {
    // @ts-ignore
    expect(getByText(name)).toHaveAttribute('href', url);
  }
});
