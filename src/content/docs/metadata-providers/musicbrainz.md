---
title: MusicBrainz 元数据提供者
description: MusicBrainz 元数据提供者的功能与注意事项
---

# MusicBrainz 元数据提供者 <img src="/assets/icons/musicbrainz-icon.svg" alt="MusicBrainz logo" style="width: 70px; float: right;"  loading="lazy" />

MusicBrainz 是一个开放的音乐百科全书，它帮助 Music Assistant 在不同的音乐服务中匹配相同的艺术家、专辑或曲目。它是一个始终启用的内置提供者。

## 功能

Music Assistant 可以显示一个包含重要日期的**艺术家活动**推荐行：艺术家生日、纪念日（逝世周年）、乐队成立日期和解散日期。启用后，此推荐行将出现在您的“发现”页面上。

<img width="2160" height="1188" alt="Artist Events recommendation showing timeline of events" src="/assets/screenshots/musicbrainz/timeline.png" loading="lazy" />

活动按类型分组：

- **生日** — 生日在配置的天数窗口内的艺术家
- **纪念日** — 逝世日期（逝世周年）在配置的天数窗口内的艺术家
- **成立** — 在窗口内日期成立的乐队/团体
- **解散** — 在窗口内日期解散的乐队/团体

## 配置

该提供者有一个可配置的设置：

<img width="4512" height="1380" alt="Advanced configuration settings" src="/assets/screenshots/musicbrainz/config.png" loading="lazy" />

- **推荐天数**（默认：3，范围：1-15）— 在艺术家活动推荐行中包含今天之前和之后的天数。例如，3 天会显示从 3 天前到 3 天后的活动（总共 7 天的窗口）。

### 选择窗口

默认的 3 天是一个合理的平衡：

**短窗口（1-2 天）：**
- 更集中的视图，仅显示刚刚过去和即将到来的活动
- 如果您的媒体库很大且包含许多艺术家，可减少杂乱感
- 适合每日查看

**长窗口（7-15 天）：**
- 更宽的时间范围，可见更多艺术家活动
- 如果您的媒体库较小，或者更喜欢查看未来一整周/两周的活动，这会很有用
- 如果您的媒体库中有许多艺术家在全年都有活动，可能会导致较长的水平滚动
