module.exports = {
  moduleFileExtensions: [
    "js",
    "ts",
    "json",
    "vue"
  ],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.tsx?$": ["babel-jest", require('./babel.config')],
    "^.+\\.ts$": "ts-jest",
    "^.+\\.(js|jsx)?$": "babel-jest"
  }
};
