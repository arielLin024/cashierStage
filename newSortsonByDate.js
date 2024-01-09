const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const directory = 'cypress/results/.jsons';

// 讀取目錄下的所有 JSON 檔案
const files = fs.readdirSync(directory).filter(file => file.endsWith('.json'));

// 解析並處理每個 JSON 檔案
const processedData = files.map(file => {
    const filePath = path.join(directory, file);
    const rawData = fs.readFileSync(filePath, 'utf-8');
    console.log(`Read file from path: ${filePath}`);
    const jsonData = JSON.parse(rawData);

    // 從檔名中獲取日期（這裡使用 start 的日期）
    const date = jsonData.stats && jsonData.stats.start ? new Date(jsonData.stats.start) : null;

    // 修改指定套件的標題
    if (jsonData.results && jsonData.results.length > 0 && jsonData.results[0].suites) {
        jsonData.results[0].suites.forEach(suite => {
            suite.title = file.replace(/\..+$/, ''); // 移除檔案副檔名的部分
        });
    }

    // 添加日期到 JSON 內容
    jsonData.date = date ? date.toISOString().replace(/[-T:.]/g, '_') : null;

    return { file, date, content: jsonData };
});

console.log('Data before sorting:');
console.log(processedData);

// 按日期排序（由新到舊）
const sortedData = processedData.sort((a, b) => {
    const fileA = a.file.toLowerCase();
    const fileB = b.file.toLowerCase();
    return fileB.localeCompare(fileA);
});

// 寫回原始檔案
sortedData.forEach(item => {
    const filePath = path.join(directory, item.file);
    fs.writeFileSync(filePath, JSON.stringify(item.content, null, 2), 'utf-8');
    console.log(`Write file to path: ${filePath}`);
});

console.log('Sorting and adding dates completed.');

// 準備要合併的 JSON 文件列表
const fileArgs = sortedData.map(item => `"${path.join(directory, item.file)}"`).join(' ');
console.log(fileArgs);

// 使用 mochawesome-merge 合併
exec(`mochawesome-merge ${fileArgs} > mochawesome.json`, (error, _stdout, _stderr) => {
    if (error) {
        console.error(`Error during merge: ${error.message}`);
        return;
    }
    console.log(`Merge successful!`);
});
