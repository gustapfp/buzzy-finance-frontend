/** @type {import('jest').Config} */
export default {
  testEnvironment: "jsdom",
  extensionsToTreatAsEsm: [".tsx", ".ts"],
  setupFilesAfterEnv: ["./test-setup.ts"],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "babel-jest",
      {
        presets: [
          ["@babel/preset-env", { targets: { node: "current" } }],
          ["@babel/preset-react", { runtime: "automatic" }],
          "@babel/preset-typescript",
        ],
      },
    ],
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
