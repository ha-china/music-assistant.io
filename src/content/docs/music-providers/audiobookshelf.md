---
title: "Audiobookshelf"
---

# audiobookshelf <img src="/assets/icons/audiobookshelf-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 <a href="https://www.audiobookshelf.org/" target="_blank" rel="noopener noreferrer">audiobookshelf</a>。由 <a href="https://github.com/fmunkes" target="_blank" rel="noopener noreferrer">Fabian Munkes</a> 贡献并维护

Audiobookshelf 是一款免费的自托管（self-hosted）服务器，用于管理您自己的有声读物和播客。您可以在自己的硬件上运行它，它会整理文件并记住您在每个文件中的收听进度，其应用程序让您可以随时随地收听。

此音乐源（source）将 Music Assistant 指向该服务器，使同一收藏可供播放。进度会双向同步，这意味着在 Audiobookshelf 应用中开始收听的一本书可以在 Music Assistant 中继续收听，反之亦然。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media   | Yes |
| Media Types Supported | Audiobooks, Podcasts, Playlists |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
| Maximum Stream Quality | 192kHz 24 bit |
| Login Method | Password or Token |

### Other

- Populates Audiobooks from all libraries accessible by the supplied user
- Populates Podcasts from all libraries accessible by the supplied user
- Populates Playlists from all libraries accessible by the supplied user
- Has support for dedicated author and narrator tabs in the audiobooks view
- Syncs audiobooks series enabling "collapse collections" in the audiobooks view. Note that the provider *does not sync* native audiobookshelf collections, only book series. These are then mapped to Music Assistant's collections.
- Browse Feature has the following structure:

```
        Library_Name_A (Audiobooks)
            Authors
                Author_1
                    Series_1
                    Audiobook_1
                    Audiobook_2
                Author_2
                    Audiobook_3
            Narrators
                Narrator_1
                    Audiobook_1
                    Audiobook_2
            Series
                Series_1
                    Audiobook_1
                    Audiobook_2
                Series_2
                    Audiobook_3
                    Audiobook_4
            Collections
                Collection_1
                    Audiobook_1
                    Audiobook_2
                Collection_2
                    Audiobook_3
                    Audiobook_4
            Playlists
                Playlist_1
                Playlist_2
            Audiobooks
                Audiobook_1
                Audiobook_2
        Library_Name_B (Podcasts)
            Playlists
                Playlist_1
                Playlist_2
            Podcasts
                Podcast_1
                Podcast_2
```

- The Audiobook search function supports searching for Authors and Narrators
- Progress is synced both ways and obtained just ahead of playing
- Changes you make in Audiobookshelf show up in Music Assistant straight away, including anything you add or delete. If Music Assistant was switched off at the time, run a sync to pick those changes up
- Single and multi-file audiobooks are supported
- Supports recommendations on the [Discover view](/ui/#view---discover)
- Playlists can only be created and edited if Audiobookshelf has just one audiobook library and one podcast library. With more than one, Music Assistant has no way of knowing which library a new playlist belongs in

### Other

- Populates Audiobooks from all libraries accessible by the supplied user
- Populates Podcasts from all libraries accessible by the supplied user
- Populates Playlists from all libraries accessible by the supplied user
- Has support for dedicated author and narrator tabs in the audiobooks view
- Syncs audiobooks series enabling "collapse collections" in the audiobooks view. Note that the provider *does not sync* native audiobookshelf collections, only book series. These are then mapped to Music Assistant's collections.
- Browse Feature has the following structure:

```
        Library_Name_A (Audiobooks)
            Authors
                Author_1
                    Series_1
                    Audiobook_1
                    Audiobook_2
                Author_2
                    Audiobook_3
            Narrators
                Narrator_1
                    Audiobook_1
                    Audiobook_2
            Series
                Series_1
                    Audiobook_1
                    Audiobook_2
                Series_2
                    Audiobook_3
                    Audiobook_4
            Collections
                Collection_1
                    Audiobook_1
                    Audiobook_2
                Collection_2
                    Audiobook_3
                    Audiobook_4
            Playlists
                Playlist_1
                Playlist_2
            Audiobooks
                Audiobook_1
                Audiobook_2
        Library_Name_B (Podcasts)
            Playlists
                Playlist_1
                Playlist_2
            Podcasts
                Podcast_1
                Podcast_2
```

- The Audiobook search function supports searching for Authors and Narrators
- Progress is synced both ways and obtained just ahead of playing
- Changes you make in Audiobookshelf show up in Music Assistant straight away, including anything you add or delete. If Music Assistant was switched off at the time, run a sync to pick those changes up
- Single and multi-file audiobooks are supported
- Supports recommendations on the [Discover view](/ui/#view---discover)
- Playlists can only be created and edited if Audiobookshelf has just one audiobook library and one podcast library. With more than one, Music Assistant has no way of knowing which library a new playlist belongs in

### 其他

- 从所提供用户可访问的所有媒体库中填充有声读物
- 从所提供用户可访问的所有媒体库中填充播客
- 从所提供用户可访问的所有媒体库中填充播放列表
- 在有声读物视图中支持专属的作者和朗读者标签页
- 同步有声读物系列（series），从而在有声读物视图中启用“折叠收藏”功能。请注意，该提供程序（provider）*不同步* audiobookshelf 原生的收藏（collections），只同步图书系列。这些系列随后会被映射到 Music Assistant 的收藏
- 浏览功能具有以下结构：

```
        Library_Name_A (Audiobooks)
            Authors
                Author_1
                    Series_1
                    Audiobook_1
                    Audiobook_2
                Author_2
                    Audiobook_3
            Narrators
                Narrator_1
                    Audiobook_1
                    Audiobook_2
            Series
                Series_1
                    Audiobook_1
                    Audiobook_2
                Series_2
                    Audiobook_3
                    Audiobook_4
            Collections
                Collection_1
                    Audiobook_1
                    Audiobook_2
                Collection_2
                    Audiobook_3
                    Audiobook_4
            Playlists
                Playlist_1
                Playlist_2
            Audiobooks
                Audiobook_1
                Audiobook_2
        Library_Name_B (Podcasts)
            Playlists
                Playlist_1
                Playlist_2
            Podcasts
                Podcast_1
                Podcast_2
```

- 有声读物搜索功能支持搜索作者和朗读者
- 进度双向同步，并在即将播放前获取
- 您在 Audiobookshelf 中所做的更改会立即显示在 Music Assistant 中，包括您添加或删除的任何内容。如果当时 Music Assistant 处于关闭状态，请运行一次同步以获取这些更改
- 支持单文件和多文件有声读物
- 支持在[发现视图](/ui/#view---discover)上显示推荐内容
- 只有当 Audiobookshelf 仅有一个有声读物媒体库和一个播客媒体库时，才能创建和编辑播放列表。如果媒体库多于一个，Music Assistant 将无法得知新播放列表应属于哪个媒体库

## 配置

设置此提供程序需要以下内容：

- <b>服务器（Server）。</b>Audiobookshelf 实例的服务器 URL（例如 `https://abs.domain.tld/` 或本地服务器的 `http://192.168.1.4:13378/`）。
- 不使用 <a href="https://www.audiobookshelf.org/guides/oidc_authentication/" target="_blank" rel="noopener noreferrer">OIDC</a> 进行身份验证时：
    - <b>用户名（Username）。</b>Audiobookshelf 用户的用户名
    - <b>密码（Password）。</b>该用户的密码

> [!NOTE]
> 用户必须是 user、admin 或 root 类型。访客（Guest）用户未经测试，也不受支持

- 如果已配置 <a href="https://www.audiobookshelf.org/guides/oidc_authentication/" target="_blank" rel="noopener noreferrer">OIDC</a>，请使用令牌（token）代替用户名和密码：
    - 在 Audiobookshelf 2.26 或更新版本上，按照 <a href="https://www.audiobookshelf.org/guides/api-keys/" target="_blank" rel="noopener noreferrer">Audiobookshelf 指南</a>创建 API 密钥，并将其填入令牌字段
    - 在较旧的版本上，管理员可以在 Audiobookshelf 设置的 Users（用户）部分为任意用户获取令牌

> [!NOTE]
> 如果您使用的是 2.26 或更新版本，请不要使用旧式令牌。它们目前仍然可用，但 Audiobookshelf 最终会弃用它们，届时此音乐源将停止工作。

### 多用户环境

audiobookshelf 提供程序可以为单个用户分别设置多次。
要实现将各媒体条目的进度与某个 MA 用户正确同步，请参阅[用户管理](/settings/user-management/#filter-progress-multi-user)。

### 高级设置

- <b>验证 SSL（Verify SSL）。</b>启用后将验证 SSL/TLS 连接的证书。默认开启
- <b>隐藏空播客（Hide empty podcasts）。</b>尚未下载任何单集的播客在同步时可能会被跳过

## 已知问题 / 备注

- 对于由多个文件组成的有声读物，Music Assistant 显示的格式为 PCM，而不是文件实际采用的格式。音频本身不受影响
- 目前已针对 ABS >= 2.19.0 完成测试
- 遇到任何问题时，首先请确保服务器运行的是 <a href="https://github.com/advplyr/audiobookshelf/releases" target="_blank" rel="noopener noreferrer">最新版本的 audiobookshelf 软件</a>

## 尚不支持

- 在 Music Assistant 中进行编辑仅适用于播放列表，且仅在前文所述的限制条件下可用
- 在 Audiobookshelf 中添加或移除整个媒体库不会自行显示。之后运行一次同步，它就会出现。对您已有媒体库内容的更改会立即获取
