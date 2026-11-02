---
title: "远程访问"
---

# 远程访问设置 <img src="/assets/icons/remote-access-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

远程访问（Remote Access）允许您从世界任何地方安全地连接到您的 Music Assistant 服务器。它还使[内置网页播放器](/player-support/sendspin/#the-web-player)能够从您自己的网络之外访问您的服务器。

## 配置

- 将远程访问状态切换为开启。设置过程是自动的，更多说明会显示在 MA UI 中
- 如果您订阅了 <a href="https://www.nabucasa.com/" target="_blank" rel="noopener noreferrer">Nabu Casa</a>（Home Assistant Cloud），请确保（Home Assistant Cloud 设置中的）`WebRTC Connections` 选项处于开启状态

对于大多数用户来说，完成以上步骤就足够了。

## 技术细节

远程访问通常在没有 Nabu Casa 订阅的情况下也能正常工作。例外情况是复杂的网络环境，例如双重 NAT、移动运营商，或阻止标准 <a href="https://medium.com/@jamesbordane57/what-is-a-stun-server-df3563dbf14a" target="_blank" rel="noopener noreferrer">STUN 服务器</a>的企业网络。这时 TURN 服务器（由 Nabu Casa 提供）就非常有用，因为它们可以中继流量。

更多信息会显示在 MA UI 中。有关本文档其他部分使用的网络术语，请参阅[网络基础](/faq/networking/)。
