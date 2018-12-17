module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/setupTest.ts",
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "spec.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
  ],
}
