// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  setupFiles: ["<rootDir>/config/polyfills.js"],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // The test environment that will be used for testing
  testEnvironment: "node",

  coveragePathIgnorePatterns: [
    "node_modules",
    "example",
    "documentation",
    "build",
    "dist",
  ],

  modulePathIgnorePatterns: ["example", "documentation", "build", "dist"],

  testPathIgnorePatterns: [
    "node_modules",
    "example",
    "documentation",
    "build",
    "dist",
  ],
};
