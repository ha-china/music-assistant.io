---
title: "Yandex Station"
description: Yandex Station 播放器提供方的功能与说明
---

# Yandex Station <img src="/assets/icons/yandex-station-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant 可以在 <a href="https://station.yandex.ru/" target="_blank" rel="noopener noreferrer">Yandex Station</a> 智能音箱上播放音乐。音频从你的 Music Assistant 服务器直达音箱，不经过 Yandex。由 <a href="https://github.com/trudenboy" target="_blank" rel="noopener noreferrer">Mikhail Nevskiy</a> 贡献并维护。

> [!CAUTION]
> 这是非官方实现，与 Yandex 无隶属或认可关系。

> [!WARNING]
> 音箱必须与 Music Assistant 服务器在**同一网络**中，无法从家庭网络之外访问它们。

## Features

- Yandex Station 接入同一网络后会被 Music Assistant 自动发现
- 播放、暂停、停止、跳转、上一曲/下一曲，并支持音量控制
- 无损 FLAC 播放，从 Music Assistant 服务器流式传输
- 音频播报
- 通过 Yandex 场景开关机
- 实时更新播放状态
- 语音控制集成：播放时与 Alice 对话可暂停和恢复队列（实验性，默认关闭）
- 拦截 Station 原生播放并转移到其它 Music Assistant 播放器（实验性，默认关闭）
- 支持设备流（Device Flow）、二维码或 Cookie 登录
- 此提供方只能配置一个实例

### 支持的 Station 型号

任何暴露本地 Glagol API 的 Yandex Station 都受支持，包括 Station Mini、Station Mini 2、Station Midi、Station Max、Station 2、Station Lite、Station Light 和 Duo Max。内置 Alice 的第三方音箱（YandexModule、IRBIS A、DEXP Smartbox 等）只要暴露 `_yandexio._tcp.local.` 也应当可用。

## Configuration

1. 在 Music Assistant 中进入 **Settings → Player Providers**，点击 **Add a player provider** 并选择 Yandex Station。
2. 如果你已配置 Yandex Music 提供方，选择 <b>Yandex account source</b>：可以借用那个提供方的账号以共用登录，也可以使用本提供方自己的凭据并按下面步骤登录。
3. 选择<b>登录方式</b>，决定是否用 <b>Remember session</b> 保留会话，然后用拥有这些音箱的 Yandex 账号登录。
4. 音箱会被自动发现并出现在播放器列表中。

如果音箱没有出现，请按[发现排查清单](/faq/networking/#checklist-my-players-are-not-being-discovered)逐项检查。

### Authentication

- <b>Device Flow</b>（推荐）。Music Assistant 显示一个短码和输入地址。在已登录 Yandex 账号的浏览器中打开该地址并确认。首个码过期后会自动出现新码。此方式会得到 refresh token，会话在后台静默续期。
- <b>QR code</b>。用 Yandex 应用扫描设置过程中显示的二维码并确认登录。过期后自动显示新码。同样会得到 refresh token。
- <b>Cookies</b>（进阶备用）。打开 passport.yandex.ru/profile，用“Copy Cookies”浏览器扩展复制会话 Cookie 并粘贴。接受 JSON 数组和原始 Cookie 字符串。此方式没有 refresh token，过期后需手动更新。当网络或账号封锁前两种方式时使用。
- <b>Remember session</b>。默认开启。保存令牌，Music Assistant 重启后无需重新登录。关闭则不保留任何内容，每次重启后都要重新登录。

## Settings

除[播放器提供方设置](/settings/player-provider/)外，配置此提供方时还有以下设置：

- <b>Experimental: Enable intercept feature.</b> 默认关闭。下文拦截功能的主开关。关闭时，各播放器上的拦截设置不生效。还必须配置 yandex_music 音乐提供方，因为曲目解析依赖它。

除[单独播放器设置](/settings/individual-player/)和[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)外，Yandex Station 播放器还有以下设置：

- <b>Experimental: Intercept native Station playback.</b> 默认关闭。当 Station 自己开始播放 Yandex Music 时——通常来自 Alice 语音指令，也可能是触摸 Station 本体——它会静音 Station，并在下面选择的目标播放器上播放同一曲目。Station 在后台静默保持自己的队列，让 Music Assistant 能跟上每一首下一曲。需要先打开上面的提供方级开关。
- <b>Intercept target player.</b> 接收被拦截播放的 Music Assistant 播放器。列出除本 Station 外的所有已注册播放器，包括当前离线的，方便在设备开机前就选好目标。暂停、音量和跳转会同步到目标播放器支持的能力上，不支持的则静默跳过。
- <b>Experimental: Voice control integration.</b> 默认关闭。在“Алиса, стоп”“Алиса, дальше”等语音指令后自动恢复 Music Assistant 队列。实验性功能，行为可能不符合预期。
- <b>[HTTP Profile used for sending audio](/settings/individual-player/#http-profile-used-for-sending-audio).</b> 此处默认为 Profile 3 - forced content length，因为 Yandex Station 需要内容长度，无法处理分块流。

### 语音控制集成（实验性）

在 **Settings → Players → \<Your Station\> → Show advanced → Voice control integration** 中启用后，提供方会监听 Glagol 状态流并对 Alice 的活动作出反应：

| 语音指令 | 行为 |
|---|---|
| «Alice, stop» | 暂停 Music Assistant 队列（需在界面手动恢复）。 |
| «Alice, what's the weather?» *（或任何提问）* | Alice 说话期间暂停 MA，随后自动恢复播放。 |
| «Alice, turn up / turn down» | 播放中调节音量，并自动恢复队列。 |

### 拦截原生播放（实验性）

当 Station 开始原生 Yandex Music 播放（通常经 Alice 语音指令，也可能是触摸 Station 界面）时，提供方可以：

1. 通过 **`yandex_music`** Music Assistant 音乐提供方解析曲目。
2. 停止 Station 的原生播放器。
3. 在选定的**目标播放器**上开始播放同一曲目（任何 MA 播放器——Chromecast、AirPlay 接收器、另一台 Station 等）。
4. 拦截会话期间，把 Station 的音量/跳转/暂停/Alice 语音变化同步到目标。

用它让 Alice 继续充当语音入口，而音频在由 Music Assistant 管理的更好音箱上播放。

#### 两级开关模型

两个开关默认都关闭，且**必须同时打开**才会发生任何拦截动作：

1. 提供方级主开关：**Settings → Player Providers → Yandex Station → Show advanced → Enable intercept feature**。
2. 单播放器开关：**Settings → Players → \<Your Station\> → Show advanced → Intercept native Station playback**，外加 **Intercept target player**。

#### 要求

- 必须在 Music Assistant 中配置 **`yandex_music`** 音乐提供方。没有它，拦截会被静默跳过（记录一条警告）。
- 选定的目标播放器必须支持 `play_media`、`pause`、`volume_set` 和 `seek`（下拉列表按能力过滤）。

#### 行为说明

- 新的被拦截曲目到达（成功或干净的失败）或提供方卸载时会话结束。被静音 Station 发出的 `playing=False` 残留更新**不会**结束会话——因此 Alice 的查询或歌曲之间的安静期是被容忍的。
- 解析失败（缺少 `yandex_music`、未知曲目、无 URI、目标不可用）按曲目 ID 做 5 秒去重，避免每个 WebSocket tick 刷一条日志。
- 曲目 ID 与 Alice 活动在同一 tick 到达时，**不会**因 Alice 的语音触发新的接管——下一次接管要等 Alice 空闲。

## Known Issues / Notes

- Station 必须能在同一局域网内访问 Music Assistant。
- 语音指令«next»/«previous»无法推进 MA 队列——Alice 看不到 Music Assistant 使用的外部流旁路，因此 Station 自己的*下一曲/上一曲*作用于 Alice 的内容而非 MA 队列。请用 MA 界面或其它语音助手切换队列。
- 出于同样原因，语音跳转（seek）不受支持。
- Glagol 的“stop”指令在 Station 上表现为“暂停”（Station 会保留当前曲目）。
- 拦截是尽力而为，且依赖 Station 从 Alice 收到的内容——Yandex Smart Home API 没有面向第三方设备的 `play_media`，因此像 *«Алиса, включи песню X на колонке Y»*（Y 为 Music Assistant 播放器）这样的指令无法实现。请在每台 Station 上配置拦截，把原生播放路由到选定目标。
