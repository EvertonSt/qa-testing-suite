# QA Testing Suite

![CI](https://github.com/EvertonSt/qa-testing-suite/actions/workflows/test.yml/badge.svg)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-green)
![License: MIT](https://img.shields.io/badge/License-MIT-blue)

A comprehensive automated testing suite demonstrating API testing, UI testing, and reporting capabilities.

## Features

- **API Testing**: Automated REST API testing with validation
- **UI Testing**: End-to-end browser testing with Cypress
- **Reporting**: Automated test reports with metrics
- **CI/CD Ready**: Integration with GitHub Actions

## Technologies

- Cypress (UI Testing)
- Mocha + Chai (API Testing)
- Axios (HTTP Requests)
- Node.js

## Project Structure

```
qa-testing-suite/
├── tests/
│   ├── api/           # API tests
│   └── ui/            # UI tests
├── fixtures/          # Test data
├── scripts/           # Utility scripts
├── reports/           # Generated reports
└── cypress.config.js  # Cypress configuration
```

## Getting Started

```bash
# Install dependencies
npm install

# Run API tests
npm run test:api

# Run UI tests
npm run test:ui

# Run all tests
npm run test:all

# Generate report
npm run report
```

## Test Coverage

- User authentication flows
- CRUD operations
- Form validation
- Error handling
- Performance testing