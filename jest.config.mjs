/** @type {import('jest').Config} */
export default {
  projects: [
    {
      displayName: "UI",
      testEnvironment: "jsdom",
      testMatch: ["<rootDir>/tests/**/*.test.{ts,tsx}"],
      extensionsToTreatAsEsm: [".tsx", ".ts"],
      moduleDirectories: ["node_modules", "<rootDir>"],
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
  ],
};
