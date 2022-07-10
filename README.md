## 项目简介

1. 基于 [pc-vue-template](https://github.com/hjwhuge/pc-vue-template)
2. 基于vite2.x + vue3.x + ant-design-vue3.x + typescript 的基础后台管理系统模板

## 特性

- 📦 完善的代码规范配置；eslint + prettierrc + editorconfig + husky

- [axios 基础封装](https://github.com/axios/axios)

- [Mock 支持](https://github.com/vbenjs/vite-plugin-mock)

- [TypeScript 支持](https://github.com/microsoft/TypeScript)

- 结合 [GitHub Actions](https://github.com/features/actions)，使用 [Vitest](https://github.com/vitest-dev/vitest) 进行单元测试, [Cypress](https://cypress.io/) 进行 E2E 测试

### 插件

- [Vue Router](https://github.com/vuejs/vue-router)
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集

### 开发工具

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - 基于 Vite 的单元测试框架
- [pnpm](https://pnpm.js.org/) - 快, 节省磁盘空间的包管理器
- [Netlify](https://www.netlify.com/) - 零配置的部署

## 待添加功能

- [ ] 布局 layout
- [ ] 常用第三方库引入（antd、echarts...）
- [ ] 权限控制
- [ ] D3 使用
- [ ] 富文本
- [ ] Markdown
- [ ] 工具函数添加

## 使用

## 安装依赖

```
pnpm i
```

### 启动项目

```
pnpm dev
```

### 构建

```
pnpm build
```

### 代码格式化

```
pnpm lint
```
