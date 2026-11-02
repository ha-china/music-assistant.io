---
title: "Overcast"
description: "将您在 Overcast 中订阅的播客以及每集的收听进度带入 Music Assistant。"
---

# Overcast <img src="/assets/icons/overcast-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 <a href="https://overcast.fm" target="_blank" rel="noopener noreferrer">Overcast</a>。由 <a href="https://github.com/OzGav" target="_blank" rel="noopener noreferrer">OzGav</a> 贡献并维护

Overcast 是一款适用于 iPhone、iPad 和网页端的播客播放器。它会保存您订阅的播客列表，并记住您每集听到哪里，因此您可以在一台设备上暂停某一集，然后在另一台设备上继续收听。

该提供器（provider）将这两项内容都带入 Music Assistant。您订阅的播客会以可播放播客的形式出现，而您在 Overcast 中开始收听的一集节目可以在音箱上继续听完，并从上次中断的地方继续。

Overcast 没有公开的 API，因此该提供器以与网站相同的方式登录您的账户，并读取该账户的 OPML 导出内容。它仅支持单向工作，Music Assistant 的任何操作都不会被发送回 Overcast。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media  | No |
| Media Types Supported | Podcasts |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      |
| Maximum Stream Quality | Lossy variable bitrate |
| Login Method | Password |

### Other
- Acquires progress from Overcast, but does not report progress back
- Populates libraries with podcasts
- Updates playlog on regular provider syncs
- Episodes you are part way through appear under Continue Listening

### Other
- Acquires progress from Overcast, but does not report progress back
- Populates libraries with podcasts
- Updates playlog on regular provider syncs
- Episodes you are part way through appear under Continue Listening

### 其他
- 从 Overcast 获取进度，但不会将进度回传
- 使用播客填充媒体库
- 在提供器定期同步时更新播放记录
- 您听到一半的单集会显示在“继续收听”（Continue Listening）下方

## 配置

### Overcast 账户

Overcast 默认无需登录即可使用。安装应用时，它会在后台创建一个匿名账户，因此许多用户可能从未设置过密码。 
Music Assistant 需要可选的 Overcast 网页版登录才能读取您的订阅，因此您需要先添加一个。

<details>
<summary>如何添加电子邮箱和密码</summary>

1. 在您的 iPhone 或 iPad 上打开 Overcast 应用
2. 前往设置（齿轮图标）并选择 `Sync Profile` 选项，为您的账户添加电子邮箱地址和密码
3. 选择一个电子邮箱和密码。您现有的订阅和收听进度将保持原样，这只是为您已有的账户添加一个登录方式
4. 要确认是否成功，请在浏览器中访问 overcast.fm 并登录。如果您能在那里看到您的播客，就说明一切就绪

</details>

添加音乐提供器时选择 Overcast，并使用以下信息登录：

- <b>电子邮箱。</b>您的 Overcast 账户的电子邮箱地址
- <b>密码。</b>您的 Overcast 账户的密码

Music Assistant 只登录一次并保留由此产生的会话，因此您的密码仅在该会话过期且需要重新登录时才会使用。通过“使用 Apple 登录”（Sign in with Apple）登录 Overcast 的账户，以及启用了双重验证（two factor authentication）的账户，无法在此使用。

### 多个账户

Overcast 提供器可以设置多次，每个账户设置一次，并且每个实例都保留自己的登录信息。要让各个媒体条目的进度与正确的 Music Assistant 用户同步，请参阅[用户管理](/settings/user-management/#filter-progress-multi-user)。

### 设置

- <b>最大单集数量。</b>每个源（feed）同步的单集数量上限。使用 0 表示不限制

## 已知问题 / 注意事项

- Overcast 限制导出内容的下载频率，大约每天十次，因此无论同步多频繁，Music Assistant 每四小时最多请求一份新副本。在等待新副本期间，它会继续使用已有的那份，因此您在 Overcast 中产生的进度通常会在大约四小时内显示出来，如果您有一段时间没有使用 Music Assistant，则可能需要更长时间。
- 在 Music Assistant 中订阅或取消订阅播客不会发送到 Overcast。请在 Overcast 中进行此操作，更改将在下次同步时生效。
- 您在 Music Assistant 中播放的任何内容都不会被发送回 Overcast，因此两者的数据会逐渐不同步，直到您再次在 Overcast 中收听。
- 当双方都知道某一单集时，将使用两者中较新的进度。来自 Overcast 的进度绝不会让您在 Music Assistant 中已听得更远的单集上后退，而在 Music Assistant 中产生的进度会被保留，直到 Overcast 报告了更新的进度。
