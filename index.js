#! /usr/bin/env node

const program = require('commander');  //命令行开发工具

program 
    .version('0.0.1', '-v, --version')
    .command('list')
    .description('查看所有可用的项目模板')
    .action(()=>{
        console.log(`
            react                 react基础模板
            react-redux           react+redux模板
            react-Mobx            react+mobx模板
            react-typescript      react+typescript模板
        `)
    })

program
    .command('init <project>')
    .description('初始化项目模板工程')
    .action(( projectName)=>{
        require('./command/init.js')(projectName)
    })

program.parse(process.argv);  // 解析命令行参数
