#! /usr/bin/env node

const program = require('commander');  //命令行开发工具

program 
    .version('0.0.1', '-v, --version')
    .command('list')
    .description('查看所有可用的项目模板')
    .action(()=>{
        console.log(`
            reactCli        react基础模板
            reactReduxCli   react+redux模板
            reactMobxCli    react+mobx模板
            reactTsCli      react+typescript模板
        `)
    })

program
    .command('init <template> <project>')
    .description('初始化项目模板工程')
    .action(( templateName, projectName)=>{
        require('./command/init.js')(templateName, projectName)
    })

program.parse(process.argv);  // 解析命令行参数
