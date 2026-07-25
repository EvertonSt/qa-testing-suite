const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.com',
    specPattern: 'tests/ui/**/*.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});