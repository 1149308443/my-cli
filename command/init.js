"use strict";

const download = require("download-git-repo"); // 模板仓库下载工具

const inquirer = require("inquirer"); //命令行交互工具

const ora = require("ora"); // 命令行中加载状态标识

const chalk = require("chalk"); //命令行输出字符颜色

const fs = require("fs");

// // 可用模板
const templates = {
  react: {
    url: "https://github.com/1149308443/react",
    downloadUrl: "1149308443/react#master",
    description: "me-cli脚手架react",
  },
  'react-redux': {
    url: "https://github.com/1149308443/react",
    downloadUrl: "1149308443/react#dev",
    description: "me-cli脚手架react-redux",
  },
  'react-Mobx': {
    url: "https://github.com/1149308443/react",
    downloadUrl: "1149308443/react#dev-mobx",
    description: "me-cli脚手架react-mobx",
  },
  'react-typescript': {
    url: "https://github.com/1149308443/react",
    downloadUrl: "1149308443/react#dev-typescript",
    description: "me-cli脚手架react-typesceript",
  },
};

module.exports = (projectName) => {
  // 命令行交互
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "请输入项目名称",
        default: projectName,
      },
      {
        type: "input",
        name: "description",
        message: "请输入项目简介",
        default: "",
      },
      {
        type: "input",
        name: "author",
        message: "请输入作者名称",
        default: "",
      },
      {
        type: 'list',
        message: '请选择模版名称:',
        name: 'templateName',
        choices: [
          "react",
          "react-redux",
          "react-Mobx",
          "react-typescript"
        ],
      }
    ])
    .then((answers) => {
      const { templateName } = answers;
      Reflect.deleteProperty(answers, 'templateName'); //删除模版属性
      const spinner = ora("正在下载模板...").start();
      let { downloadUrl } = templates[templateName];
      //第一个参数是github仓库地址，第二个参数是创建的项目目录名，第三个参数是clone(是clone还是正常下载,可省略)
      download(downloadUrl, projectName, (err) => {
        if (err) {
          spinner.fail("下载模板出错");
        } else {
          spinner.succeed("下载模板成功");

          //根据命令行答询结果修改package.json文件
          fs.readFile(`${projectName}/package.json`, "utf8", function (
            err,
            data
          ) {
            if (err) {
              console.log(chalk.red("读取配置失败"));
              return;
            }
            const pg = JSON.parse(data);
            Object.assign(pg, answers);
            const newPackage = JSON.stringify(pg, null, 4);
            fs.writeFile(
              `${projectName}/package.json`,
              newPackage,
              "utf8",
              (err) => {
                if (err) {
                  console.log(chalk.red("修改配置失败"));
                  return;
                }
                console.log(chalk.green("项目初始化成功"));
              }
            );
          });
        }
      });
    })

};
