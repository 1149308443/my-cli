#! /usr/bin/env node

const program = require('commander');  //命令行开发工具

const path = require('path');

const download = require('download-git-repo'); // 模板仓库下载工具

const inquirer = require('inquirer');  //命令行交互工具

const ora = require('ora');  // 命令行中加载状态标识

const chalk = require('chalk');     //命令行输出字符颜色

// 可用模板
const templates = {
    'reactCli': {
        url: 'https://github.com/1149308443/react',
        downloadUrl: '1149308443/react#master',
        description: 'my-cli脚手架react'
    },
    'reactReduxCli': {
        url: 'https://github.com/1149308443/react',
        downloadUrl: '1149308443/react#dev',
        description: 'my-cli脚手架react-redux'
    },
    'reactMobxCli': {
        url: 'https://github.com/1149308443/react',
        downloadUrl: '1149308443/react#dev-mobx',
        description: 'my-cli脚手架react-mobx'
    },
    'reactTsCli': {
        url: 'https://github.com/1149308443/react',
        downloadUrl: '1149308443/react#dev-typescript',
        description: 'my-cli脚手架react-typesceript'
    }
}

 
program
    .version('0.0.1', '-v, --version')
    .command('init <template> <project>')
    .description('初始化项目模板工程')
    .action((templateName, projectName) => {
        let {downloadUrl} = templates[templateName];        
        //第一个参数是github仓库地址，第二个参数是创建的项目目录名，第三个参数是clone(是clone还是正常下载,可省略) 
        console.log(downloadUrl);
        download(downloadUrl, projectName, err => {
            console.log(downloadUrl, projectName,err);
            if(err){
                console.log('下载模板出错');
            }else{
                console.log('下载模板成功');
            }
        })
    })


program 
    .command('list')
    .description('查看所有可用的项目模板')
    .action(()=>{
        console.log({
            reactCli:'react基础模板',
            reactReduxCli:'react+redux模板',
            reactMobxCli:'react+mobx模板',
            reactTsCli:'react+typescript模板'
        })
    })

program.parse(process.argv);  // 解析命令行参数