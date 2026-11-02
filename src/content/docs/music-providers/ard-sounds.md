---
title: "ARD Sounds"
---

# ARD Sounds <img src="/assets/icons/ard-sounds.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持从 <a href="https://www.ardsounds.de/" target="_blank" rel="noopener noreferrer">ARD Sounds</a> 进行流媒体播放。由 <a href="https://github.com/jfeil" target="_blank" rel="noopener noreferrer">Jan Feil</a> 贡献并维护。

ARD Sounds（前身为 ARD Audiothek）是 ARD 的音频平台，ARD 是德国的公共广播集团。它汇集了来自全国和各地方电台的广播节目、播客、广播剧和纪录片，全部免费收听。

此音源使这些内容可在 Music Assistant 中使用。ARD 账户是可选的，主要适用于希望所关注的播客能同步你的收听进度的情况。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media   | No |
| Media Types Supported | Radio, Podcasts |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
| Maximum Stream Quality | Lossy variable bitrate |
| Login Method | Password |

### Other

- Progress reporting and acquiring
- Populates libraries with subscribed podcasts
- Updates playlog on regular provider syncs

### Other

- Progress reporting and acquiring
- Populates libraries with subscribed podcasts
- Updates playlog on regular provider syncs

### 其他

- 播放进度的上报与获取
- 将已订阅的播客添加到媒体库
- 在提供程序（provider）定期同步时更新播放日志

## 配置

如需同步，请先登录 ARD Sounds 应用

### 设置
- <b>ARD 账户的电子邮箱地址。</b>
- <b>ARD 账户的密码。</b>
- <b>流的最高比特率（0 表示不限制）</b> 定义流媒体的最大比特率
- <b>播客单集标记为已完整播放所需的百分比</b> 配置在播客被记录为已完整播放之前，单集必须播放多少内容（此选项仅用于 Music Assistant 中的可视化显示） 

## 已知问题 / 说明

- 无

## 尚不支持的功能

- 不支持订阅管理
- 尚未实现播客推荐
- 对于电台流：不显示当前播放的歌曲
