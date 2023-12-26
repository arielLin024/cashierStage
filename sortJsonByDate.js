const fs = require('fs');
const path = require('path');

const directory = 'cypress/results'; // 更改為您的 JSON 文件所在的目錄
const outputFilename = 'mochawesome-sorted.json';

const jsonFiles = fs.readdirSync(directory).filter(file => file.endsWith('.json'));

const sortedJsonFiles = jsonFiles
  .map(file => ({
    path: path.join(directory, file),
    stat: fs.statSync(path.join(directory, file)),
  }))
  .sort((a, b) => b.stat.mtime.getTime() - a.stat.mtime.getTime())
  .reduce((accumulator, file) => {
    const content = fs.readFileSync(file.path, 'utf-8');
    const cleanedContent = content.replace(/^\uFEFF/, '');  // 移动到这里进行处理
    const parsedContent = JSON.parse(cleanedContent);
    return { ...accumulator, [file.path]: parsedContent };
  }, {});

fs.writeFileSync(outputFilename, JSON.stringify(sortedJsonFiles, null, 2), 'ascii');
// console.log('Successfully wrote sorted JSON to', outputFilename);
