# 汇丰商学院飞跃手册

由经济学会整理的非官方学生指南。内容使用 Quarto 编写，并通过一个轻量 Next.js 兼容层发布到 OpenAI Sites。

## 本地维护

```powershell
quarto render
node scripts/sync-quarto.mjs
npm install
npm run build
```

日常内容编辑只需修改根目录的 `.qmd` 文件和 `_quarto.yml`。`public/handbook/` 是供 Sites 部署的已生成内容，每次发布前需要重新渲染并提交。

