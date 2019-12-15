module.exports = {
  preset: 'jest-preset-gatsby/typescript',
  globals: {
    __PATH_PREFIX__: ``,
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/components/banner.tsx'],
  roots: [`<rootDir>/src`],
  setupFiles: [
    `<rootDir>/gatsby-shimloader.js`,
    `<rootDir>/src/utils/test-utils.tsx`,
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
