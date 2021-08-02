module.exports = {
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '#/(.*)$': '<rootDir>/test/$1'
  },
  testMatch: [
    '<rootDir>/(test/**/*.test.(js|jsx))'
  ]
}
