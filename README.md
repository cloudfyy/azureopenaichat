# azurazure openai VUE和node.js示例程序

## 功能

* Chat Completeion接口
* token计算接口

## 项目结构

* frontend VUE前端，默认端口8080
* backend node.js后端，默认端口8081
* lib共享库

## Project 配置

请到frontend和backend后边运行
```
npm install
```

### 运行

前端
```
npm run serve
```

后端
运行前需要配置，请打开backend/.env文件，修改如下配置并保存
```
azureOpenAIBaseUrl= 'https://xxx.openai.azure.com',
azureOpenAIDeploymet= 'qiqi1',
azureOpenAIAPIVersion= '2023-03-15-preview',
azureOpenAIKey= 'xxxxxxxxxxx',
max_token= 4096,
azureOpenAIModelVersion= 'gpt-3.5-turbo'
```
然后运行
```
node server.js
```
## 运行效果

![演示页面](/img/demo-page.png)
![后端](/img/backend-dev.png)
![前端](/img/frontend-dev.png)


## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
