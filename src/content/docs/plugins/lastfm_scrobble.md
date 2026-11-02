---
title: LastFM Scrobbler 插件
description: 将您播放的内容 Scrobble 到 LastFM 或 LibreFM。
pluginGroup: scrobbling
---

# LastFM Scrobbler <img src="/assets/icons/audioscrobbler-icon.svg" alt="Preview image" style="width: 126px; float: right;"  loading="lazy" />

Music Assistant 能够将播放的内容 <a href="https://www.collinsdictionary.com/dictionary/english/scrobble" target="_blank" rel="noopener noreferrer">scrobble</a>（记录正在播放的曲目）到 <a href="https://www.last.fm/" target="_blank" rel="noopener noreferrer">LastFM</a> 或 <a href="https://libre.fm/" target="_blank" rel="noopener noreferrer">LibreFM</a>。由 <a href="https://github.com/wjzijderveld" target="_blank" rel="noopener noreferrer">Willem-Jan Zijderveld</a> 贡献并维护

## 功能特性

- 连接到 LastFM 或 LibreFM，并对正在播放的歌曲进行 scrobble
- 支持正在播放（Now playing）功能

## 配置

对于 LastFM，Music Assistant 已包含所需的 API 凭据。您无需创建 LastFM API 应用。

- 将 Provider 保持为 `Last.FM`
- 点击 `Authorize with lastfm`，这将打开一个 LastFM 的新标签页，您需要点击 “Yes, allow access” 来授予权限
- UI 会显示登录成功。请务必点击 SAVE 以完成配置

> [!NOTE]
> LastFM 授权回调使用的是 [**设置 → 系统 → Web 服务器**](/settings/core/#webserver) 中的 Music Assistant Base URL。如果授权后没有返回到 Music Assistant，请将 Base URL 设置为与您在浏览器中打开 Music Assistant 时所使用的相同 URL。

对于 LibreFM，或者要使用您自己的 LastFM API 应用，请在授权前打开高级设置并输入 API Key 和 Shared secret。LibreFM 始终需要自定义 API 凭据。

### 设置

- <b>Provider（提供方）。</b>选择 `Last.FM` 进行 LastFM scrobble，或选择 `LibreFM` 进行 LibreFM scrobble
- <b>API Key（API 密钥）。</b>高级设置，仅在使用 LibreFM 或您更希望使用自己的 Last.fm 应用时才需要
- <b>Shared secret（共享密钥）。</b>同上，LibreFM 必须使用该设置
- <b>Suffix version to track names（在曲目名称后附加版本信息）。</b>当曲目被发送到 Last.fm 时，将曲目的版本（例如混音版或现场版）附加到其名称末尾。如果某位艺术家有多首名称相同的不同曲目，且它们被合并计数，则值得开启此选项
- <b>Scrobble for users（为哪些用户 scrobble）。</b>用于选择此插件将为哪些已登录用户进行 scrobble。可以添加此插件的多个实例
- <b>Scrobble for players（为哪些播放器 scrobble）。</b>用于选择哪些播放器会记录 scrobble

## 已知问题 / 说明

- 目前，只有当歌曲被完整播放（90% 以上）时才会被 scrobble
- 请注意避免重复 scrobble。如果所使用的音乐源内部也会进行 scrobble，就可能出现这种情况。未来的改进方向是将哪些音乐源会被 scrobble 设置为可配置
