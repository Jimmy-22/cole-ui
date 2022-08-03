技术栈：`Vite+TypeScript+Sass`

创建`Vite`项目，模板选择`vue-ts`

使用`husky`在代码提交前进行代码质量监测。首先安装和初始化 husky，然后使用`npx husky add`命令新增了 commit-msg 钩子，husky 会在我们执行 git commit 的时候执行 node scripts/verifyCommit 命令来校验 commit 信息格式
```js
  npm install -D husky // 安装 husky
  npx husky install // 初始化husky
  // 新增commit msg钩子
  npx husky add .husky/commit-msg "node scripts/verifyCommit.js"
  // 备注：这里npx如果用不了，可以换成yarn
```
在 verifyCommit.js 文件中，先去 .git/COMMIT_EDITMSG 文件中读取了 commit 提交的信息，然后使用了正则去校验提交信息的格式。如果 commit 的信息不符合要求，会直接报错并且终止代码的提交。这样就确保在 github 中的提交日志都符合`type(scope):message`的格式。

[git 提交规范参考](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)

- feat: 新功能
- fix: 修改 bug
- docs: 文档
- perf: 性能相关
- refactor: 代码重构（就是不影响使用，内部结构的调整）
- test: 测试用例
- style: 样式修改
- workflow: 工作流
- build: 项目打包构建相关的配置修改
- ci: 持续集成相关
- revert: 恢复上一次提交（回滚）
- wip: work in progress 工作中 还没完成
- chore: 其他修改（不在上述类型中的修改）
- release: 发版
- deps: 依赖相关的修改

<!-- npm install node-sass

npm install sass --save-dev -->

安装sass `npm install sass -D`

**组件库引入Jest**

vue-jest 和 @vue/test-utils 是测试 Vue 组件必备的库，然后安装 babel 相关的库，最后安装 Jest 适配 TypeScript 的库
```js
npm install -D jest@26 vue-jest@next @vue/test-utils@next 
npm install -D babel-jest@26 @babel/core @babel/preset-env 
npm install -D ts-jest@26 @babel/preset-typescript @types/jest@26
```
安装完毕后，在根目录下新建 babel.config.js。配置目的是让 babel 解析到 Node 和 TypeScript 环境下。再新建 jest.config.js，用来配置 jest 的测试行为