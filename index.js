#! /usr/bin/env node

const program = require('commander');  //命令行开发工具

program 
    .version('0.0.1', '-v, --version')
    .command('list','查看所有可用的项目模板')
    .command('init','初始化项目模板工程')

program.parse(process.argv);  // 解析命令行参数

// const fs = require('fs');

// const download = require('download-git-repo'); // 模板仓库下载工具

// const inquirer = require('inquirer');  //命令行交互工具

// const ora = require('ora');  // 命令行中加载状态标识

// const chalk = require('chalk');     //命令行输出字符颜色

// // 可用模板
// const templates = {
//     'reactCli': {
//         url: 'https://github.com/1149308443/react',
//         downloadUrl: '1149308443/react#master',
//         description: 'my-cli脚手架react'
//     },
//     'reactReduxCli': {
//         url: 'https://github.com/1149308443/react',
//         downloadUrl: '1149308443/react#dev',
//         description: 'my-cli脚手架react-redux'
//     },
//     'reactMobxCli': {
//         url: 'https://github.com/1149308443/react',
//         downloadUrl: '1149308443/react#dev-mobx',
//         description: 'my-cli脚手架react-mobx'
//     },
//     'reactTsCli': {
//         url: 'https://github.com/1149308443/react',
//         downloadUrl: '1149308443/react#dev-typescript',
//         description: 'my-cli脚手架react-typesceript'
//     }
// }

 
// program
//     .version('0.0.1', '-v, --version')
//     .command('init <template> <project>')
//     .description('初始化项目模板工程')
//     .action(( templateName, projectName ) => {
//         const  spinner = ora('正在下载模板...').start();
//         if(!(templateName in templates)){
//             spinner.fail('下载模板出错,请输入正确的模板');
//             return;
//         }    
//         let { downloadUrl } = templates[templateName];    

//         //第一个参数是github仓库地址，第二个参数是创建的项目目录名，第三个参数是clone(是clone还是正常下载,可省略) 
//         download(downloadUrl, projectName, err => {
//             console.log(downloadUrl, projectName,err);
//             if(err){
//                 spinner.fail('下载模板出错');
//             }else{
//                 spinner.succeed('下载模板成功');

//                 //命令行交互
//                 inquirer.prompt([
//                     {
//                         type:'input',
//                         name:'name',
//                         message: '请输入项目名称',
//                         default: 'myProject'
//                     },
//                     {
//                         type: 'input',
//                         name: 'description',
//                         message: '请输入项目简介',
//                         default: ''
//                     },
//                     {
//                         type: 'input',
//                         name: 'author',
//                         message: '请输入作者名称',
//                         default: ''
//                     }
//                 ]).then((answers )=>{
//                     console.log(answers)
//                 })
//             }
//         })
//     })


// program 
//     .command('list')
//     .description('查看所有可用的项目模板')
//     .action(()=>{
//         console.log({
//             reactCli:'react基础模板',
//             reactReduxCli:'react+redux模板',
//             reactMobxCli:'react+mobx模板',
//             reactTsCli:'react+typescript模板'
//         })
//     })

// program.parse(process.argv);  // 解析命令行参数