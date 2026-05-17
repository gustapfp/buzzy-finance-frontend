/** @type {import('jest').Config} */
export default {
  projects: [
    {
      displayName: "unit",
      testEnvironment: "jsdom",
      testMatch: ["<rootDir>/tests/unit/**/*.test.{ts,tsx}"],
      extensionsToTreatAsEsm: [".tsx", ".ts"],
      setupFilesAfterEnv: ["<rootDir>/test-setup.ts"],
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
    },
    {
      displayName: "integration",
      testEnvironment: "node",
      testMatch: ["<rootDir>/tests/integration/**/*.test.ts"],
      extensionsToTreatAsEsm: [".ts"],
      transform: {
        "^.+\\.tsx?$": [
          "babel-jest",
          {
            presets: [
              ["@babel/preset-env", { targets: { node: "current" } }],
              "@babel/preset-typescript",
            ],
          },
        ],
      },
      moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
      },
    },
  ],
};
