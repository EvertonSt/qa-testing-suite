const fs = require('fs');
const path = require('path');

/**
 * Test Report Generator
 * Generates HTML reports from test execution results
 */

class ReportGenerator {
  constructor() {
    this.results = {
      api: { passed: 0, failed: 0, total: 0 },
      ui: { passed: 0, failed: 0, total: 0 }
    };
  }

  addApiResult(passed, failed) {
    this.results.api.passed += passed;
    this.results.api.failed += failed;
    this.results.api.total += passed + failed;
  }

  addUiResult(passed, failed) {
    this.results.ui.passed += passed;
    this.results.ui.failed += failed;
    this.results.ui.total += passed + failed;
  }

  generateReport() {
    const totalPassed = this.results.api.passed + this.results.ui.passed;
    const totalFailed = this.results.api.failed + this.results.ui.failed;
    const totalTests = totalPassed + totalFailed;
    const passRate = ((totalPassed / totalTests) * 100).toFixed(2);

    const report = `
<!DOCTYPE html>
<html>
<head>
  <title>QA Test Report</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .summary { display: flex; gap: 20px; margin-bottom: 30px; }
    .card { padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .passed { background: #d4edda; border-left: 4px solid #28a745; }
    .failed { background: #f8d7da; border-left: 4px solid #dc3545; }
    .total { background: #cce5ff; border-left: 4px solid #007bff; }
    .rate { background: #fff3cd; border-left: 4px solid #ffc107; }
    h1 { color: #333; }
    .section { margin: 20px 0; }
  </style>
</head>
<body>
  <h1>QA Test Execution Report</h1>
  <p>Generated: ${new Date().toISOString()}</p>
  
  <div class="summary">
    <div class="card total">
      <h3>Total Tests</h3>
      <p style="font-size: 24px;">${totalTests}</p>
    </div>
    <div class="card passed">
      <h3>Passed</h3>
      <p style="font-size: 24px; color: #28a745;">${totalPassed}</p>
    </div>
    <div class="card failed">
      <h3>Failed</h3>
      <p style="font-size: 24px; color: #dc3545;">${totalFailed}</p>
    </div>
    <div class="card rate">
      <h3>Pass Rate</h3>
      <p style="font-size: 24px;">${passRate}%</p>
    </div>
  </div>

  <div class="section">
    <h2>API Tests</h2>
    <p>Total: ${this.results.api.total} | Passed: ${this.results.api.passed} | Failed: ${this.results.api.failed}</p>
  </div>

  <div class="section">
    <h2>UI Tests</h2>
    <p>Total: ${this.results.ui.total} | Passed: ${this.results.ui.passed} | Failed: ${this.results.ui.failed}</p>
  </div>
</body>
</html>
    `;

    const reportsDir = path.join(__dirname, '../reports');
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    const reportPath = path.join(reportsDir, `test-report-${Date.now()}.html`);
    fs.writeFileSync(reportPath, report);
    console.log(`Report generated: ${reportPath}`);
    return reportPath;
  }
}

// Generate report if run directly
if (require.main === module) {
  const generator = new ReportGenerator();
  generator.addApiResult(10, 0);
  generator.addUiResult(3, 0);
  generator.generateReport();
}

module.exports = ReportGenerator;