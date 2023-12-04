const archiver = require('archiver');
const fs = require('fs');

const output = fs.createWriteStream('cypress.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // 壓縮級別，可調整
});

output.on('close', () => {
  console.log('Cypress results have been zipped:', archive.pointer() + ' total bytes');
});

archive.on('warning', (err) => {
  if (err.code === 'ENOENT') {
    console.warn(err);
  } else {
    throw err;
  }
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);
archive.directory('cypress', false); // 將cypress目錄壓縮到cypress.zip中
archive.finalize();
