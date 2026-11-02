---
title: "Audible"
---

# Audible <img src="/assets/icons/audible-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 支持从 Audible 进行流媒体播放。由 <a href="https://github.com/ztripez" target="_blank" rel="noopener noreferrer">ztripez</a> 贡献并维护

Audible 是 Amazon 的有声读物服务。每月额度或直接购买即可获得一本书目，你拥有的所有内容都会保存在账户资料库中。

连接你的账户后，该资料库就会出现在 Music Assistant 中。你在书中听到的地方会从 Audible 官方应用同步过来，因此你可以从同一位置继续收听。

> [!NOTE]
> 此提供商需要付费订阅

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media   | No |
| Media Types Supported | Audiobooks, Podcasts |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
| Maximum Stream Quality | AAC variable bitrate |
| Login Method | OAuth |

### Whispersync Progress Sync

Music Assistant syncs your listening position with Audible's Whispersync service automatically. This means:

- Resume anywhere: If you've been listening on your phone, Echo, or any other Audible device, MA will pick up from exactly where you left off when you press play.
- Keep your phone in sync: When you stop or pause in MA, your position is reported back to Audible so you can continue on any other device.

No configuration is needed — this works automatically once the Audible provider is set up.

### Other

- The Audible library can be listed
- Metadata for audiobooks will be populated
- Chapter navigation
- Multiple Audible accounts can be added.

### Whispersync Progress Sync

Music Assistant syncs your listening position with Audible's Whispersync service automatically. This means:

- Resume anywhere: If you've been listening on your phone, Echo, or any other Audible device, MA will pick up from exactly where you left off when you press play.
- Keep your phone in sync: When you stop or pause in MA, your position is reported back to Audible so you can continue on any other device.

No configuration is needed — this works automatically once the Audible provider is set up.

### Other

- The Audible library can be listed
- Metadata for audiobooks will be populated
- Chapter navigation
- Multiple Audible accounts can be added.

### Whispersync 进度同步

Music Assistant 会自动将你的收听进度与 Audible 的 Whispersync 服务同步。这意味着：

- 随处继续播放：如果你一直在手机、Echo 或其他任何 Audible 设备上收听，当你按下播放时，MA 会从你上次中断的地方准确继续。
- 保持手机同步：当你在 MA 中停止或暂停时，你的进度会汇报给 Audible，以便你在其他任何设备上继续收听。

无需任何配置——Audible 提供商设置完成后，此功能便会自动生效。

### 其他

- 可以列出 Audible 资料库
- 有声读物的元数据将被填充
- 章节导航
- 可以添加多个 Audible 账户。

## 配置

要设置 Audible 提供商，请按照以下步骤操作：

1. 从可用选项中为你的 Audible 账户选择相应的市场（marketplace）。
2. 点击“通过 Audible 进行身份验证”按钮以开始身份验证流程。这将打开一个新窗口，将你重定向到 Audible 进行身份验证。请确保禁用任何弹窗拦截程序。
3. 登录成功后，你会看到“页面未找到”的消息。这是正常现象。复制地址栏中的 URL，并将其粘贴到“Post Login Url”文本框中。
4. 点击“验证 Audible URL”按钮以检查该 URL 并注册此提供商。

注意：如果你需要重新进行身份验证或更改市场，则必须再次完成整个身份验证流程。

## 已知问题 / 说明

- 最后播放位置目前不会汇报给 Audible
- 切换市场需要重新进行身份验证
- 该提供商将在 Audible 上注册为一台设备。如果你移除该提供商，它将注销该设备
- 尽管在开发过程中设备注册数量没有出现过任何问题，但值得注意的是，Audible 有各种内容许可要求。如果用户的内容带有设备许可限制，那么注册过多设备可能会导致问题

## 尚不支持

- 按作者、朗读者、系列等进行浏览的功能
- 搜索功能
- 附件文件以及其他与有声读物或播客没有直接关联的服务
