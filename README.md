## 项目说明文档

> 项目使用 [vue3](https://cn.vuejs.org/) + [TS](https://www.tslang.cn/index.html) 编写。

### 1、推荐使用软件

- [VSCode](https://code.visualstudio.com/)
- [NVM 安装 nodejs 的方法](https://blog.csdn.net/sinat_23958625/article/details/86491282)

### 2、项目启动前检查

- **Node.js** 版本需大于 **`14.0.0`**

```bash
# 检测 node 是否安装以及已安装版本（windows通过 cmd 运行，Mac通过 终端 运行，以下所有命令同理）
$ node -v
```

- **yarn (推荐使用)**

```bash
# 检测 yarn 是否安装以及已安装版本
$ yarn -v

# 如果未安装可以在安装node后执行下面命令安装，按照后仍然无法使用，请自行配置环境变量。
$ npm install yarn -g
```

### 3、项目启动步骤

使用 `npm`：

```bash
# 切换到项目目录
$ cd <project-name>

# 安装项目依赖
$ npm install

# 运行项目
$ npm run dev
```

或者 `yarn`：

```bash
# 切换到项目目录
$ cd <project-name>

# 安装项目依赖
$ yarn

# 运行项目
$ yarn dev
```

详细启动步骤参考：

[./src/doc/项目运行说明文档.md](./src/doc/项目运行说明文档.md)

### 3、项目打包

使用 `npm`：

```bash
# 切换到项目目录
$ cd <project-name>

# 打包项目
$ npm run build
```

或者 `yarn`：

```bash
# 切换到项目目录
$ cd <project-name>

# 打包项目
$ yarn build
```

详细打包步骤参考：

[./src/doc/项目打包发行说明文档.md](./src/doc/项目打包发行说明文档.md)
