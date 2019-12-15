import React from 'react';
import { render } from '../../utils/test-utils';
import { navigate } from 'gatsby';
import Page from '../404';

jest.mock('gatsby', () => ({
  navigate: jest.fn(),
}));
test('should call gatsby navigate', () => {
  render(<Page />);

  expect(navigate).toHaveBeenCalledWith('/');
});
