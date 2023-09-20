# rollup-react-library

React 组件库脚手架模板，使用 Rollup 构建

## Features

- 构建 commonJS 和 ESModule
- Jest 和 React Testing Library
- TypeScript 支持
- SourceMap
- 支持 CSS 和 SASS
- Storybook 用于设计组件时在库内部测试组件
- 部署 Storybook 到 GitHub Pages

## Scripts

- npm run build 构建库到 dist
- npm run dev 构建库，监听源文件更改
- npm test 测试库并显示覆盖率
- npm run lint 运行 ESLint
- npm run storybook 本地运行主机 Storybook 应用程序
- npm run deploy-storybook 构建并部署Storybook 到 GitHub Pages

## Publishing to npm

发布需要在 .npmrc 添加：

```bash
registry=https://registry.npmjs.org/
@GITHUB_USERNAME:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=AUTH_TOKEN
```

替换你的 GITHUB_USERNAME 和 AUTH_TOKEN 然后运行：

```bash
npm publish
```