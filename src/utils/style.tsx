import React from 'react';
import baseStyled, {
  ThemeProvider,
  css,
  ThemedStyledInterface,
} from 'styled-components';

interface IBreakpoints {
  mobile: number;
  desktop: number;
  [key: string]: number | undefined;
}

interface IPalette {
  background: string;
  secondary: string;
  text: string;
}

interface IFont {
  minSize: number;
  maxSize: number;
}

export interface ITheme {
  breakpoints: IBreakpoints;
  maxContentWidth: number;
  media: mediaType;
  palette: IPalette;
  font: IFont;
}

const BREAKPOINTS: IBreakpoints = {
  mobile: 0,
  desktop: 650,
};

type mediaType = Record<
  keyof typeof BREAKPOINTS,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (l: TemplateStringsArray, ...p: any[]) => string
>;

export const media = Object.keys(BREAKPOINTS).reduce(
  (acc, size, idx, arr) => {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    acc[size] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
      css`
        @media (min-width: ${BREAKPOINTS[size]}px) ${arr.includes(
            arr[idx + 1],
          ) && `and (max-width: ${BREAKPOINTS[arr[idx + 1]]}px)`} {
          ${css(literals, ...placeholders)};
        }
      `.join('');
    return acc;
  },
  {} as mediaType,
);

export const THEME: ITheme = {
  breakpoints: BREAKPOINTS,
  maxContentWidth: 1060,
  media,
  palette: {
    background: '#332E3C',
    secondary: '#F3F3D6',
    text: '#F3F3D6',
  },
  font: {
    minSize: 13,
    maxSize: 26,
  },
};

export const styled = baseStyled as ThemedStyledInterface<ITheme>;

export const withTheme = (Component: React.ComponentType<React.ReactNode>) => {
  const WithTheme = () => (
    <ThemeProvider theme={THEME}>
      <Component />
    </ThemeProvider>
  );

  return WithTheme;
};
