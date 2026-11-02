---
title: AriaCast Receiver 插件
description: 将音频从 Android 设备发送到您的任意播放器。
pluginGroup: incoming
---

# AriaCast Receiver <img src="/assets/icons/ariacast_icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />
**AriaCast Receiver** 插件支持将高品质音频以无线方式从 Android 设备流式传输到任意 Music Assistant 播放器。该插件由 [Lorenzo](https://github.com/AirPlr) 贡献并维护。

> [!NOTE]
> 该插件仍处于开发的早期阶段。功能有限，且可能会出现 bug。

---

## 配置
1. 通过 **设置 → 插件 → 添加插件** 添加 **AriaCast Receiver** 插件。
2. 选择 AriaCast 音频应播放到的 **Connected Music Assistant Player**（已连接的 Music Assistant 播放器）。接收器会以该播放器的名称向 AriaCast 发送端通告自身。

## 使用方法
1. 安装 [AriaCast Android 应用](https://github.com/AriaCast/AriaCast-app/releases/latest)。
2. 打开该应用，它会自动发现 Android 设备所连接网络中的服务器
3. 选择所需的 Music Assistant 服务器并开始播放内容
4. 音频将被流式传输到已配置的 Music Assistant 播放器。


## 故障排除

- **找不到服务器**：请确保 Android 设备与 MA 服务器位于同一网络，且 UDP 端口 `12888` 未被防火墙阻止。
- **无音频播放**：如果应用显示已连接但没有音频播放，请尝试在 Android 应用中断开连接后重新连接，以重置音频流。
- **一次只能有一个发送端**：接收器一次只接受一个 AriaCast 发送端。当已有设备正在流式传输时，第二台设备尝试连接将被拒绝，直到第一台设备断开连接。
- **启动问题**：如果插件无法启动（例如由于端口 `12889` 已被占用），请查看 Music Assistant 日志了解详情。
