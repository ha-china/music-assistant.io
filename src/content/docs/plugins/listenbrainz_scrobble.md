---
title: Listenbrainz Scrobbler 插件
description: 将你播放的内容 scrobble（提交听歌记录）到 Listenbrainz。
pluginGroup: scrobbling
---

# Listenbrainz Scrobbler <img src="/assets/icons/listenbrainz-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 可以将播放的内容 <a href="https://www.collinsdictionary.com/dictionary/english/scrobble" target="_blank" rel="noopener noreferrer">scrobble</a>（提交听歌记录）到 <a href="https://listenbrainz.org" target="_blank" rel="noopener noreferrer">Listenbrainz</a>。该插件由 <a href="https://github.com/ijc" target="_blank" rel="noopener noreferrer">Ian Campbell</a> 贡献并维护

## 功能

- 连接到 Listenbrainz 并 scrobble 正在播放的歌曲
- 支持正在播放（Now Playing）功能

## 配置

- 从 https://listenbrainz.org/settings/ 获取你的用户令牌（User Token）

### 设置

- <b>为曲目名称附加版本后缀。</b> 这会在发送到 ListenBrainz 时，把 Music Assistant 数据库中存储的版本添加到曲目名称的末尾。当没有可用的 Musicbrainz ID 来区分某位艺术家的同名曲目时，此功能可能很有用
- <b>为用户 scrobble。</b> 此选项允许选择此插件将为哪个已登录用户进行 scrobble。可以添加此插件的多个实例
- <b>为播放器 scrobble。</b> 此选项允许选择哪些播放器会记录 scrobble

## 已知问题 / 注意事项

- 目前，歌曲只有完整播放（超过 90%）后才会被 scrobble
- 请注意避免重复 scrobble。如果所使用的音乐源本身也会在内部进行 scrobble，就可能出现重复。未来的改进计划是支持配置哪些音乐源会被 scrobble
