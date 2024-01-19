import type { Config } from 'jest';

const config: Config = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir/src/**>'],
  testEnvironment: "node",
  transform:{
    '.+\\.ts$': 'ts-jest'
  },
  coverageDirectory: "coverage",
  coverageProvider: "v8",
};

export default config;
