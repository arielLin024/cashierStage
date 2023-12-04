const testResults = [];
Cypress.on('test:after:run', (test, runnable) => {
  const result = {
    timestamp: new Date().toISOString(), // 获取时间戳
    date: new Date().toLocaleDateString(), // 获取日期
    testTitle: test.title,
    result: test.state // 获取测试结果 (pass 或 fail)
  };

  testResults.push(result);
});