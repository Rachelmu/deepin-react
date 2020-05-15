## Docker

三要素: 容器, 镜像, 仓库

是什么: 使软件可以带环境安装, 把原始环境复制过来

理念: 一次封装, 到处运行    `hhh, 想起来了 weex`

**解决了运行环境和配置问题软件容器, 方便做持续集成并有助于整体发布容器虚拟化技术**



## Docker镜像

> 镜像是一种轻量级, 可执行的独立软件包, 用来打包软件运行环境和基于运行环境开发的软件, 它包含某个软件所需的所有内容, 包括代码, 运行时, 库, 环境变量和配置文件

特点

> docker镜像都是只读的, 当容器启动时, 一个新的可写层被加载到镜像顶部, 这一层被称为容器层, 容器层以下都叫镜像层

### commit

> 我们要基于一个官方镜像进行自定义, 则需要 commit 命令

```bash
docker commit -m='提交的信息' -a='作者' 容器ID 要创建的镜像名
```



## 常见命令

### 帮助命令

- docker version
- docker info
- docker --help



### 镜像命令

- 列出本机镜像

```bash
docker images [options]
# options: -a列出全部, 包含中间层, -q只显示镜像id, --digests显示镜像摘要, --no-trunc显示完整镜像信息
```

- 网站是[Docker Hub](http://hub.docker.com)

```
docker search XX
```

- 下载镜像: tag

```bash
docker pull XX:tag
```

- 删除镜像

```
docker rmi XX
```



### 容器命令

**有镜像才能创建容器**

- 新建并且启动

```bash
docker run [options] IMAGE [command] [args...]
```

- 列出当前正在运行的容器

```bash
docker ps [options]
```

- 退出容器

```bash
exit # 容器停止并且退出
ctrl + P + Q # 容器不停止
```

- 启动容器

```bash
docker start [容器ID || 容器名]
```

- 重启容器

```bash
docker restart [容器ID || 容器名]
```

- 停止容器

```bash
docker stop [容器ID || 容器名]
```

- 强制停止容器

```bash
docker kill [容器ID || 容器名]
```

- 删除容器

```bash
docker rm 容器ID
```



## Dockerfile

> dockerfile是用来构建 docker 镜像的构建文件, 是由一系列命令和参数构成的脚本
>
> 构建三部曲: 编写dockerfile ----> docker build ----> docker run

Dockerfile

```dockerfile
# 1. 每条指令都必须为大写字母后面要跟随至少一个参数
# 2. 指令从上到下顺序执行
# 3. 每条指令都会创建一个镜像层, 并对镜像进行提交

FROM scratch # 基础镜像, 当前新镜像是基于哪个镜像的
ADD centos-7.tar.gz # 将宿主机目录下的文件拷贝进镜像并且ADD命令会自动处理解压tar压缩包
CMD ['/bin/bash'] # 指定一个容器启动时要运行的命令
# ...
```



updating...







