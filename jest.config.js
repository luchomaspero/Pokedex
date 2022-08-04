module.exports = {
    verbose: true,
    rootDir: "",
    coverageDirectory: "../coverage/",
    testPathIgnorePatterns: ["/node_modules/", ".*fixture.js"],
    coveragePathIgnorePatterns: ["/node_modules/", ".*fixture.js"],
    testEnvironment: "jest-environment-jsdom",
  };