import React from 'react';
import { render } from '@testing-library/react';
import { THEME } from './style';
import { ThemeProvider } from 'styled-components';

const WithTheme = ({ children }: { children: any }) => {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};

const customRender = (ui: any, options?: object) =>
  // @ts-ignore
  render(ui, { wrapper: WithTheme, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
