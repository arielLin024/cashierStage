const fs = require('fs');
const fsOrig = require('fs');
const path = require('path');
const marge = require('marge');

async function mergeReports(options) {

  const { 
    reportsDir, 
    outputDir,
    outputName
  } = options;

console.log('Output Dir:', outputDir); // 添加这行日志打印

  // 驗證報告文件夾路徑
  if (fsOrig.statSync(reportsDir).isDirectory()) {
    await fs.promises.mkdir() 
  }

  // 創建輸出文件夾
  await fs.promises.mkdir(outputDir, { recursive: true});

  // 遍歷報告文件夾
  const reportFolders = await fs.promises.readdir(reportsDir);

  const reports = [];

  for (let folder of reportFolders) {

    const reportFilePath = path.join(reportsDir, folder, 'mochawesome-report/mochawesome.json');
    
    // 檢查報告文件是否存在
    if (!fs.promises.existsSync(reportFilePath)) {
      continue;
    }

    // 逐個讀取報告內容而非直接全部加載到內存
    const reportContent = await fs.promises.readFile(reportFilePath);

    try {
      const reportJson = JSON.parse(reportContent);
      reports.push(reportJson);  
    } catch(err) {
      console.error('Invalid report file');
    }

  }

  const result = await marge.merge({  
    reportDir: outputDir,
    reportFilename: outputName,
    inline: true    
  }, reports);

  // 將合併後報告寫入文件
  await fs.promises.writeFile(
    path.join(outputDir, `${outputName}.json`), 
    JSON.stringify(result, null, 2)  
  );

}

mergeReports({
  reportsDir: 'C:\\Users\\ariel.lin\\ecpay\\cashRegister\\tests\\e2e\\results', 
  outputDir: 'C:\\Users\\ariel.lin\\ecpay\\cashRegister\\tests\\e2e\\results',
  outputName: 'merged-report'
});