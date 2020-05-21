#! /usr/bin/env node

const app = require('commander');

//console.log(app);
app
  .option('-d, --dir <dir>', '获得初始化配置文件')
  .parse(process.argv);

console.log(app.args)
console.log(app.dir);
