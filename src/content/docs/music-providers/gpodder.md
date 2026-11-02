---
title: "gPodder"
description: "使用兼容 gPodder 的服务器，在 Music Assistant 与其他播客应用（如 AntennaPod）之间同步播客订阅和收听进度。"
---

# gPodder <img src="/assets/icons/gpodder-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持 <a href="https://gpodder.github.io" target="_blank" rel="noopener noreferrer">gPodder</a>。由 <a href="https://github.com/fmunkes" target="_blank" rel="noopener noreferrer">Fabian Munkes</a> 贡献并维护

gPodder 是面向播客应用的同步服务，而不是一个发现播客的地方。它会保存一份共享记录，记录你订阅了哪些播客以及每一集你收听到了哪里，从而使多个应用之间能够保持同步。

该提供方（provider）将 Music Assistant 连接到这份共享记录。你现有的订阅会以可播放播客的形式出现，你的收听进度也会随时写回，因此在别处开始收听的一集可以在音箱上继续听完，反之亦然。

Music Assistant 本身并不托管这份共享记录。你需要自行运行一台兼容 gPodder 的服务器，并将该提供方指向它，具体参见[配置](#configuration)。

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
| Login Method | Password or Nextcloud Login |

### Other
- Progress reporting and acquiring
- Populates libraries with podcasts
- Updates playlog on regular provider syncs

### Other
- Progress reporting and acquiring
- Populates libraries with podcasts
- Updates playlog on regular provider syncs

### 其他
- 进度的上报与获取
- 用播客填充媒体库
- 在提供方定期同步时更新播放日志（playlog）

## 配置
### 兼容 gpodder.net 的网络服务
支持兼容 <a href="https://github.com/gpodder/mygpo" target="_blank" rel="noopener noreferrer">mygpo</a> 的网络服务，并且该提供方已针对
<a href="https://github.com/kd2org/opodsync" target="_blank" rel="noopener noreferrer">opodsync</a> 进行过测试
要设置此功能，你需要：

- <b>gPodder 服务 URL。</b> 例如，`http://192.168.1.20:14000` 或 `https://sync.yourdomain.com`
- <b>用户名。</b>
- <b>密码。</b>
- <b>设备 ID。</b>

> [!NOTE]
> 设备 ID 可以是任何你喜欢的名称，只要由纯字母和数字组成即可。关键在于，所有需要保持同步的应用都必须使用完全相同的 ID。

> [!NOTE]
> `gpodder.net` 被有意_排除在外_，不受支持。该来源会频繁与服务器通信，而托管在那里的服务以缓慢或完全无响应著称，这会拖慢 Music Assistant。请改为自行运行上述替代方案之一。

### nextcloud-gpodder
该提供方支持 <a href="https://apps.nextcloud.com/apps/gpoddersync" target="_blank" rel="noopener noreferrer">nextcloud-gpodder/gpoddersync</a>。

要设置此功能，你需要提供 `Nextcloud URL`，然后点击 AUTHENTICATE WITH NEXTCLOUD 按钮以开始身份验证流程。完成后点击保存

### 多用户环境

gpodder 提供方可以为各个用户分别设置多次。
要让单个媒体条目的进度与某个 MA 用户正确同步，请参考[用户管理](/settings/user-management/#filter-progress-multi-user)。

### 设置

- <b>单集数量上限。</b> 每个源（feed）同步的最大单集（episode）数量。设为 0 表示不限制
- <b>高级 - 验证 SSL。</b> 启用后将验证 SSL/TLS 连接的证书。默认开启

## 已知问题 / 备注

- 无

## 与其他播客应用同步

Music Assistant 不与其他播客应用直接通信。每个应用都从同一台兼容 gPodder 的服务器读取和写入数据，并获取其他应用留在那里的内容，因此任何支持 gPodder 同步的应用都可以与 Music Assistant 共享同一组订阅和收听位置。

各方向上传输的内容：

|           |                     |
|:-----------------------|:---------------------:|
| 订阅 | 仅传向 Music Assistant |
| 播放进度和续播位置 | 双向 |
| 标记为未播放 | 双向 |
| 在其他应用中删除单集 | 仅传向 Music Assistant |

> [!IMPORTANT]
> 订阅仅从服务器读取。在 Music Assistant 中添加或移除播客不会被回传，因此请从其他应用或直接在服务器上进行订阅和取消订阅。

播客音频不经过同步服务器。Music Assistant 会读取播客的 RSS 源（feed），并直接从源自身的地址流式播放单集，因此服务器只保存源地址和收听进度。

如果你通过 [gPodder 或 opodsync 服务器](#gpoddernet-compatible-webservice)连接，请选定一个设备 ID，并在每个应用（包括 Music Assistant）中输入相同的值。选什么并不重要，重要的是处处保持一致。

设备 ID 不一致是同步看似毫无作用的最常见原因：你的播客仍然会出现，但单集从不会在其他应用中断的地方续播，因为每个应用只能看到它自己记录的进度。如果你遇到的就是这种情况，请先比较各应用中的设备 ID，再作其他排查。

通过 [Nextcloud](#nextcloud-gpodder) 连接则没有设备 ID，因此无需设置。

支持 gPodder 同步的应用包括：

- <a href="https://antennapod.org" target="_blank" rel="noopener noreferrer">AntennaPod</a>（Android）
- <a href="https://gpodder.github.io" target="_blank" rel="noopener noreferrer">gPodder</a>（桌面端）
- <a href="https://apps.kde.org/kasts/" target="_blank" rel="noopener noreferrer">Kasts</a>（Linux、Android 和 Windows）
- <a href="https://github.com/madeofpendletonwool/PinePods" target="_blank" rel="noopener noreferrer">PinePods</a>（自托管）
