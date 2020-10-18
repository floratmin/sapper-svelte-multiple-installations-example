const fs = require('fs');
const path = require('path');

const scriptFiles = fs.readdirSync('./__sapper__/export/client');
const subpageScriptFiles = fs.readdirSync('./__sapper__/export/shop/client');

console.log(subpageScriptFiles)
subpageScriptFiles.forEach(file => {
  if (!scriptFiles.includes(file)) {
    const filePath = path.resolve('./__sapper__/export/shop/client/', file);
    console.log('Copying file', filePath);
    fs.copyFileSync(filePath, path.resolve('./__sapper__/export/client/', file));
  }
});

// Comment these lines out to clean up unnecessary files
// fs.rmdirSync('./__sapper__/export/shop/client', { recursive: true });
// fs.rmdirSync('./__sapper__/export/shop/app', { recursive: true });
// ['service-worker.js', 'manifest.json', 'favicon.png'].forEach(file => {
//   fs.unlinkSync(`./__sapper__/export/shop/${file}`)
// })

console.log(scriptFiles);

function findFile(pagePart, files) {
  return {
    js: files.find(file => file.match(new RegExp(`${pagePart}\.[a-z0-9]*\.js`))),
    css: files.find(file => file.match(new RegExp(`${pagePart}\.[a-z0-9]*\.css`))),
  };
}

const appHtmlPath = './__sapper__/export/app/index.html'
const appHtmlTemplate = fs.readFileSync(appHtmlPath, 'utf8');

const appFiles = findFile('app', scriptFiles);
const appHtml = appHtmlTemplate
  .replace(/\/client\/app\.\.js/, `/client/${appFiles.js}`)
  .replace(/\/client\/app-\.css/, `/client/${appFiles.css}`);

fs.writeFileSync(appHtmlPath, appHtml);

const pageFiles = findFile('client', scriptFiles);
const subPageFiles = findFile('shop', scriptFiles);

console.log(pageFiles);
console.log(subPageFiles);

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function testFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.resolve(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      testFiles(filePath);
    } else if(filePath.match(/\.html$/)) {
      console.log('changing file', filePath)
      const fileHtmlTemplate = fs.readFileSync(filePath, 'utf8');
      const fileHtml = fileHtmlTemplate
        .replace(/\/shop\/client\//g, '/client/')
        .replace(new RegExp(escapeRegExp(pageFiles.js), 'g'), subPageFiles.js)
        .replace(new RegExp(escapeRegExp(pageFiles.css), 'g'), subPageFiles.css)
        .replace(/if *\( *["']serviceWorker["'] +in +navigator *\)/, 'if ( false )')
        .replace(/href=client\//g, 'href=/client/')
        .replace(/href=global\.css/, 'href=/global.css')
        .replace(/href=manifest\.json/, 'href=/manifest.json')
        .replace(/href=favicon\.png/, 'href=/favicon.png')
        ;
      fs.writeFileSync(filePath, fileHtml);
    }
  })
}

testFiles(path.resolve(process.cwd(), './__sapper__/export/shop'));
