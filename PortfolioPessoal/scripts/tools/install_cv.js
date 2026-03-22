#!/usr/bin/env node
// install_cv.js
// Uso: node scripts/tools/install_cv.js /caminho/para/MeuCV.pdf [nome-destino.pdf]
// Copia o arquivo para assets/ e atualiza data/cv.json

const fs = require('fs');
const path = require('path');

function exit(msg) {
  console.error(msg);
  process.exit(1);
}

const src = process.argv[2];
if (!src) exit('Forneça o caminho para o PDF como argumento.');
if (!fs.existsSync(src)) exit('Arquivo de origem não encontrado: ' + src);

const requestedName = process.argv[3];

const assetsDir = path.join(__dirname, '..', '..', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const base = requestedName || 'matheus-kubrusly-cv.pdf';
const dest = path.join(assetsDir, base);

fs.copyFileSync(src, dest);
console.log('Copiado para', dest);

// atualizar data/cv.json
const cvJsonPath = path.join(__dirname, '..', '..', 'data', 'cv.json');
let cvCfg = {};
if (fs.existsSync(cvJsonPath)) {
  try {
    cvCfg = JSON.parse(fs.readFileSync(cvJsonPath, 'utf8')) || {};
  } catch (e) {
    console.warn('Falha ao ler data/cv.json, sobrescrevendo.');
  }
}
cvCfg.path = 'assets/' + base;
cvCfg.downloadName = base;
fs.writeFileSync(cvJsonPath, JSON.stringify(cvCfg, null, 2), 'utf8');
console.log('data/cv.json atualizado com', cvCfg.path);
