const { defineConfig } = require('cypress');
const path = require("path");  // 確保引入 path 模塊
const date = new Date()
const dateString = date.toISOString().split('T')[0] 
const timeString = date.toTimeString().slice(0, 5).replace(/:/g, ''); // 移除时间中的冒号
const reportFilename = `${dateString}_${timeString}_report`;
module.exports = defineConfig({
  e2e: {
    // ... 其他配置
  },
  reporter: 'cypress-mochawesome-reporter', // cypress run 时的测试报告生成策略
  reporterOptions: {
    reportDir: path.join("cypress/results"), // 設置 reportDir 為相對路徑
    // /${dateString}
    reportFilename: reportFilename,
    overwrite: false, // 是否覆盖原来的报告
    html: false, // 是否生成html报告
    json: true, // 是否生成json文件
  }  
});
