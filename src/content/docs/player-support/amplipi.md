---
title: "AmpliPi"
---

# AmpliPi <img src="/assets/icons/amplipi-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持来自 MicroNova 的 <a href="https://www.amplipi.com/" target="_blank" rel="noopener noreferrer">AmpliPi</a> 多区域（zone）音频控制器。控制器的每个已启用区域都会作为一个单独的 Music Assistant 播放器（player）呈现，并支持 AmpliPi 原生的区域分组和音源管理。此提供程序由 [Nathaniel McAuliffe](https://github.com/mcaulifn) 贡献并维护

> [!NOTE]
> 此提供程序目前被视为**实验性**功能。

## 功能

- AmpliPi 控制器的每个已启用区域都会作为一个单独的 Music Assistant 播放器呈现
- 可以添加多个 AmpliPi 控制器（该提供程序支持多个实例）
- 同一控制器上的区域可以使用 AmpliPi 原生的区域分组进行分组并同步播放
- 每个区域的电源、音量和静音控制
- 可以选择 AmpliPi 控制器自身的音源并将其路由到某个区域（及任何已分组的区域），包括其原生流媒体（Spotify Connect、AirPlay、Pandora、DLNA、网络电台、Plexamp、蓝牙、LMS）及其物理输入（RCA 线路输入和前面板 Aux 输入）

## 配置

1. 在 Music Assistant 中，进入**设置 → 播放器提供程序**，点击**添加播放器提供程序**并选择 `AmpliPi`。
2. 在 `Host` 设置中输入您的 AmpliPi 控制器的主机名或 IP 地址（AmpliPi 控制器不会被自动发现）。详细信息请参阅下方的设置部分。

## 设置

在设置此提供程序时，除了[播放器提供程序设置](/settings/player-provider/)之外，还可以使用以下设置：

- <b>Host。</b>AmpliPi 控制器的主机名或 IP 地址（例如 `amplipi.local` 或 `192.168.1.50`）。也可以提供完整的 URL。添加提供程序时会要求输入此项，且为必填项，因为 AmpliPi 控制器不会被自动发现

控制器上的每个区域都会成为自己的播放器。AmpliPi 区域使用标准的[单个播放器设置](/settings/individual-player/)，包括[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)。

AmpliPi 区域始终将队列作为一个连续的流进行播放，因此没有可更改的流模式（flow mode）设置。

## 已知问题 / 说明

- 一个 AmpliPi 控制器拥有 4 个音频源，由其所有区域共享（区域数量可达 6 个或更多）。这意味着最多只能同时播放 4 个独立的流（或分组）。如果所有音频源都在使用中，额外的播放将失败，并出现 "All AmpliPi sources are currently in use" 错误
- AmpliPi 对流媒体音频没有原生的暂停功能，因此暂停是通过停止流来模拟的。恢复播放时，Music Assistant 会从保存的位置继续播放
- AmpliPi 不报告播放位置，且只播放单个流 URL，因此这些播放器始终使用队列流模式
- 选择控制器自身的音源（原生流或物理 RCA/Aux 输入）仅是路由操作——音频由有线输入或相应的应用程序驱动，因此 Music Assistant 不为这些音源提供播放控制
- 尚不支持向 AmpliPi 区域进行公告 / 文字转语音（TTS）播放
