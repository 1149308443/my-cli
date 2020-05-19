#! /usr/bin/env node

var program = require('commander');

const path = require('path');

const download = require('download-git-repo');


// 可用模板
const templates = {
    'reactCli': {
        url: 'https://github.com/1149308443/react',
        downloadUrl: 'https://github.com/1149308443/react#master',
        description: 'my-cli脚手架react'
    },
    'reactReduxCli': {
        url: 'https://github.com/1149308443/react',
        downloadUrl: 'https://github.com/1149308443/react#dev',
        description: 'my-cli脚手架react-redux'
    },
    'reactMobxCli': {
        url: 'https://github.com/1149308443/react',
        downloadUrl: 'https://github.com/1149308443/react#dev-mobx',
        description: 'my-cli脚手架react-mobx'
    },
    'reactTsCli': {
        url: 'https://github.com/1149308443/react',
        downloadUrl: 'https://github.com/1149308443/react#dev-typescript',
        description: 'my-cli脚手架react-typesceript'
    }
}

 
program
    .version('0.0.1', '-v, --version')
    .command('init <template> <project>')
    .description('初始化项目模板')
    .action((templateName, projectName) => {
        console.log(templateName, projectName);
        // let {downloadUrl} = templates[templateName];        
        // //第一个参数是github仓库地址，第二个参数是创建的项目目录名，第三个参数是clone
        // download(downloadUrl, projectName, {clone: true}, err => {
        //     if(err){
        //         console.log('下载模板出错');
        //     }else{
        //         console.log('下载模板成功');
        //     }
        // })
    })
//     .option('-i, --init ,<template>[name]', 'init a project', 'myFirstProject')

    .parse(process.argv);  // 解析命令行参数
// if(program.init){
//     // 获取将要构建的项目根目录
//     var projectPath = path.resolve(program.init);
//     // 获取将要构建的的项目名称
//     var projectName = path.basename(projectPath);

//     console.log(program.init);
//     console.log(projectName);
// }