---
title: Subsonic Scrobbler 插件
description: 将您播放的内容报告给 Subsonic 媒体服务器，使其播放次数和历史记录保持准确。
pluginGroup: scrobbling
---

# Subsonic Scrobbler <img src="/assets/icons/subsonic_icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 可以将播放的曲目报告给 [Subsonic 媒体服务器](/music-providers/subsonic/)。由 <a href="https://github.com/clusters" target="_blank" rel="noopener noreferrer">Clusters</a> 贡献并维护

## 功能

- 将音乐播放 Scrobble 到 Subsonic 媒体服务器。这对于跟踪播放次数或播放历史非常有用
- 支持正在播放（Now playing）功能

## 配置

- 无需进行插件特定的配置，但必须配置 Subsonic 音乐源，插件才能正常工作

### 设置

- <b>在曲目名称后添加版本后缀。</b>这会在曲目发送到 Subsonic 服务器时，将 Music Assistant 数据库中存储的版本添加到曲目名称的末尾。如果无法使用 Musicbrainz ID 来区分同一艺术家的同名曲目，这可能会很有用
- <b>为用户 Scrobble。</b>这允许选择此插件将为哪个已登录用户进行 Scrobble。可以添加此插件的多个实例
- <b>为播放器 Scrobble。</b>这允许选择哪些播放器将记录 Scrobble

## 已知问题 / 说明

- 歌曲只有在完整播放（90% 以上）后才会被报告为已播放
