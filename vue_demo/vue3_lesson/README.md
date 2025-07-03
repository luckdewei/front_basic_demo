# vue3_principle

1. 使用 pnpm 创建一个 monorepo `pnpm init`
  
  安装 vue `pnpm add vue`

  因为 pnpm 会将依赖包都放到 .pnpm 下, 所以需要在添加.npmrc 文件 增加 `shamefully-hoist=true` 使得vue所有的包都在node_modules下

  创建配置文件 `pnpm-workspace.yaml` 支持 monorepo , 所有的包放在 packages 下

  删除 vue, 重新安装 vue `pnpm add vue` 会报错 `Running this command will add the dependency to the workspace root, which might not be what you want - if you really meant it, make it explicit by running this command again with the -w flag (or --workspace-root). If you don't want to see this warning anymore, you may set the ignore-workspace-root-check setting to true.`

  表示 monorepo 环境搭建好了，安装 vue ```pnpm add vue -w```

  2. 安装 esbuild typescript minimist
  `pnpm add esbuild typescript minimist -D -w`

  使用ts `pnpm tsc --init` 生成 tsconfig.json

  配置 tsconfig.json

  3. 配置 packages 下每个包的 package.json

    `.npmrc` 需配置 `link-workspace-packages = true`

    reactivity 包 依赖本地 shared 包  ```pnpm add @vue/shared@workspace --filter @vue/reactivity```




