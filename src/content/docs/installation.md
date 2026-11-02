---
title: 安装
description: Music Assistant 安装指南
---

# 安装服务器 <img src="/assets/icons/installation-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant（简称：MA）旨在与 Home Assistant 配合使用，并以自动化为核心进行构建。推荐的安装方法是将服务器作为 Home Assistant 应用运行，然后可选择<a href="https://music-assistant.io/integration/installation/" target="_blank" rel="noopener noreferrer">添加 HA 集成（integration）</a>。对于未使用 Home Assistant 操作系统（HAOS）的用户，还提供了 Docker 选项。

## 开始之前

Music Assistant 必须始终在某个地方持续运行，并且必须位于正确类型的网络上。这两点决定了它是否能正常工作，因此在选择安装方法之前请先检查这些条件。

**您的网络。** 服务器使用多播（mDNS 和 uPnP）来发现播放器并向其推流，因此它**必须与您的播放器位于同一个二层网络上**，且它们之间不能有 VLAN。请参阅[网络基础知识](/faq/networking/)了解这些术语的含义。这是导致支持请求的最常见原因，且没有任何安装方法可以绕过此限制。

**您的硬件。** MA 需要 64 位操作系统，并且：

- 较新的 64 位 Intel CPU（最多 10 年机龄，尽管 15 年机龄的可能仍可使用）
- 较新的 AMD CPU（最多 5 年机龄，尽管 10 年机龄的可能仍可使用）
- 单板计算机：Raspberry Pi 4 或更新版本，或同等设备
- 其他受 Home Assistant 支持的基于 aarch64 的 CPU（例如 Rockchip）
- 物理设备或容器上**至少** 2GB 的 RAM（如果物理设备/容器还运行其他程序，建议配备 4GB 或以上的 RAM）

如果 MA 无法启动，且 CPU 机龄超出了上述最大年限，则说明不受支持。

硬件的处理能力也设定了一些实际限制。[Smart Fades](/audio-analysis/smart-fades/#performance-notes) 功能非常消耗资源，至少需要 4GB RAM，并且在单核安装中不会自动启用。创建或操作包含上千个项目的播放列表或队列可能会导致无响应或资源占用过高；Raspberry Pi 4 能处理的数量远不及 i7。

## Home Assistant 应用

<img src="/assets/label-easiest.png" alt="easiest label" style="width: 128px;"  loading="lazy" />

此方法仅在运行完整版 Home Assistant 时可用，其中包括 <a href="https://developers.home-assistant.io/docs/operating-system/" target="_blank" rel="noopener noreferrer">Home Assistant 操作系统（HAOS）</a>。由于其易用性和完整的功能，运行 Home Assistant 操作系统是运行 Home Assistant 和 Music Assistant 的推荐方式。

Music Assistant 应用仓库已在 Home Assistant 中提供。浏览 Home Assistant 内的应用商店进行安装，或点击以下按钮：

[![将 Music Assistant 作为应用添加到 Home Assistant。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=d5369777_music_assistant&repository_url=https%3A%2F%2Fgithub.com%2Fmusic-assistant%2Fhome-assistant-addon)

MA 团队完全支持 HAOS 安装，无论其运行在专用硬件上还是虚拟机（VM）中。唯一的其他要求是 HA/MA 主机和所有播放器设备必须位于同一个[扁平网络](/faq/networking/#the-jargon-translated)中，且没有 VLAN。

## Docker 镜像

<img src="/assets/label-expert.png" alt="expert label" style="width: 128px;"  loading="lazy" />

运行 Music Assistant 服务器的另一种方法是运行 Docker 镜像：

```
docker run -v <dir>:/data --network host ghcr.io/music-assistant/server
```

您必须以**主机网络模式**运行 Docker 容器（请参阅下方关于网络的说明）。数据卷为 `/data` - 将 `<dir>` 替换为可写目录，以确保数据卷在更新之间持久存在。如果您想从 MA 内部访问本地音乐文件，请确保同时挂载该本地目录，例如 `/media`（尽可能以只读方式挂载）。

推荐的设置会尽可能限制容器的权限。下文显示的额外权限（`SYS_ADMIN`、`DAC_READ_SEARCH` 和 `apparmor:unconfined`）**仅**在您希望 MA 从容器内部自行挂载远程（Samba/NFS）共享时才需要。对于大多数用户而言，在主机上挂载音乐并将其绑定挂载到容器中是更安全的选择。

> [!WARNING]
> 请勿尝试通过简单更改镜像上的版本标签来从稳定版切换到测试版（或反之）。同样，请勿尝试在测试版和稳定版实例之间移动或复制数据库（或反之）。您可以[并行运行服务器版本](/release/#running-parallel-server-versions)
  
**Docker compose（推荐）：**

```
services:
  music-assistant-server:
    image: ghcr.io/music-assistant/server:latest # <<< Desired release version here (or use beta to get the latest beta version)
    container_name: music-assistant-server
    restart: unless-stopped
    # Network mode must be set to host for MA to discover and stream to players (see networking note below)
    network_mode: host
    volumes:
      - ${USERDIR:-$HOME}/docker/music-assistant-server/data:/data/
      # Optional: expose local music to MA by bind-mounting it read-only
      - /path/to/your/music:/media:ro
    environment:
      # Provide logging level as environment variable.
      # default=info, possible=(critical, error, warning, info, debug)
      - LOG_LEVEL=info

```

所需的发布版本可在<a href="https://github.com/music-assistant/server/pkgs/container/server" target="_blank" rel="noopener noreferrer">容器镜像发布页面</a>上找到

### 进阶：在容器内部挂载 SMB/网络共享

Music Assistant 可以使用 SMB 文件提供程序自行挂载远程（Samba/NFS）共享。从**容器内部**执行此操作需要授予容器广泛的权限：`SYS_ADMIN` 和 `DAC_READ_SEARCH` 功能以及 `apparmor:unconfined`。这些权限会显著降低容器隔离性，并且如果 MA 或其依赖项之一遭到入侵，会使容器逃逸更具破坏性，因此只有在确实需要容器内挂载时才添加它们。

更安全的替代方案是**在主机上挂载共享**（例如通过 `/etc/fstab` 或您的 NAS 工具），并将该路径以只读方式绑定挂载到容器中，就像本地音乐文件夹一样：

```
    volumes:
      - /mnt/nas/music:/media:ro
```

如果您确实需要 MA 自行挂载共享，请将上述权限添加到推荐的 compose 文件中：

```
    # WARNING: only needed to mount SMB/NFS shares from inside the container.
    # These reduce container isolation - prefer host-mounting the share instead.
    cap_add:
      - SYS_ADMIN
      - DAC_READ_SEARCH
    security_opt:
      - apparmor:unconfined
```

### 在不使用主机网络的情况下运行

`network_mode: host` 使容器能够直接（二层）访问您的网络。Music Assistant 依赖此功能进行本地播放器发现（mDNS/uPnP，[在网络基础知识中解释](/faq/networking/)）以及向网络设备（AirPlay、Chromecast、DLNA、Sonos）推流和交互，这些设备会打开随机的 TCP/UDP 端口。这就是为什么主机网络（或 macvlan）是受支持的要求 - 请参阅下方的支持说明。

如果您不使用任何本地/网络播放器，而仅向软件播放器推流，则可以在普通的桥接网络上运行容器，并显式映射端口，例如 Web UI 映射到 `8095`，推流服务器映射到 `8097`：

```
    ports:
      - "8095:8095"
      - "8097:8097"
```

请注意权衡利弊：在桥接网络上，播放器发现以及任何需要直接网络访问的播放器（AirPlay、Chromecast、DLNA、Sonos 及类似设备）将无法工作，并且 MA 团队不支持此配置。

## 受支持的安装方式

MA 团队规模较小。为了使支持工作切实可行，我们只能为以下安装方式提供帮助，并且我们可能会关闭支持请求或要求您在受支持的设置上重现问题。

- **HAOS 上的 Home Assistant 应用。** 完全支持，无论是在专用硬件上还是在 VM 中。
- **简单的独立 Docker 容器**，按上述说明安装。不支持 Kubernetes，也不支持编排堆栈。

在这两种情况下：

- MA、HA 和所有播放器必须位于同一个扁平网络（或 VLAN）上
- Music Assistant 需要直接（二层）访问网络才能正确发现播放器并向其推流，因此主机网络或 macvlan 网络是 Docker 容器的强制性要求
- 不支持对可用端口进行任何限制，例如在[防火墙](/faq/networking/#the-jargon-translated)后运行 MA，因为 AirPlay 等协议会打开随机的 TCP 和 UDP 端口

其他所有情况均不受支持。如果您在 Docker 安装中遇到问题，请尝试在 VM 或备用 RPi 上运行 Home Assistant OS，看看是否也会出现同样的问题。

## 安装后

**访问 Web 界面。** 服务器在 TCP 端口 **8095** 上托管其自己的 Web 界面。在 Docker 安装中，打开 `http://YOUR_MA_IP_ADDRESS:8095`；如果 8095 已被其他程序使用，请释放该端口或在 MA 设置中更改端口。在 HAOS 上，该界面也可通过 Ingress 访问，这会为您提供一个侧边栏快捷方式。

要将前端置于[反向代理](/faq/networking/#the-jargon-translated)之后，请将代理指向端口 8095 并添加 SSL 证书。具体工作原理因每种实现而异。

**向播放器推流。** MA 通过单独的端口推流音频，默认为 TCP **8097**，并且播放器必须能够通过该端口访问服务器。如果 8097 被占用，则会尝试下一个端口，依此类推。服务器还需要播放器通过 HTTP 按 IP 地址访问其 Web 界面 - 请在启动时检查服务器日志，以确认它检测到了正确的本地 IP。

**添加您的音乐。** 初始状态下未安装任何音乐源。请从 MA 设置中添加[您需要的每个音乐源](/faq/listen-to/)。

**您的播放器。** AirPlay、Chromecast、DLNA、Sendspin 和 Sonos 播放器提供程序在首次安装时会自动添加，如果您没有使用这些协议的播放器，除 Sendspin 外均可删除。如果您拥有的播放器不在这些范围内，请参阅[您可以推流到哪些设备](/faq/stream-to/)。

**首次同步。** 来自您源的音乐会自动加载到 [Music Assistant 媒体库](/usage/#the-library)中，多个源会合并为一个媒体库。首次同步可能需要一些时间；在设置中，UI 会在正在处理的源旁边显示一个 ![icon](/assets/icons/sync-icon.png)。源会定期重新同步，您可以在设置中更改此间隔。

MA 旨在与 Home Assistant 一起在 Raspberry Pi 4 上运行，因此它不会提出过高的要求。用于获取封面和元数据的免费 API 调用也有限制。综合这些因素，大型媒体库的初始同步可能需要很长时间；后续同步会明显快得多。

[repository-badge]: https://img.shields.io/badge/Add%20repository%20to%20my-Home%20Assistant-41BDF5?logo=home-assistant&style=for-the-badge
[repository-url]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fmusic-assistant%2Fhome-assistant-addon
