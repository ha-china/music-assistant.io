---
title: "Mamma Mi Radio"
---

# Mamma Mi Radio <img src="/assets/icons/mamma-mi-radio-icon.png" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant 支持 <a href="https://github.com/florianhorner/mammamiradio" target="_blank" rel="noopener noreferrer">Mamma Mi Radio</a>，这是一个自托管的电台，其主持人会察觉你家中发生的事情，并将其融入节目之中。由 <a href="https://github.com/florianhorner" target="_blank" rel="noopener noreferrer">Florian Horner</a> 贡献并维护。

两位意大利主持人，一个充满鲜明个性的智能家居。该应用运行在你自己的硬件上，播出一个不间断的电台：音乐、主持人闲谈、新闻快讯，以及妙趣横生的虚假广告。主持人是意大利风格的角色，广播主要使用英语，在问候、插话和偶尔的戏剧性时刻则会切换成意大利语。

开启家庭上下文（home context）后，你的家也会加入广播。在歌曲间隙，主持人可能会把咖啡机融进闲谈之中，或者用你真实的天气预报为原本纯属虚构的天气报道提供依据。你搭建了这些传感器；终于有人对它们评头论足了。

开箱即用时，主持人使用预设文案和备用语音。在应用中添加你自己的 AI 提供商密钥后，他们就会变成完全生成式的。

> [!NOTE]
> 自托管并辅以云端服务。没有 Mamma Mi Radio 账户，也没有中间服务，但撰写主持人的台词和合成他们的语音需要调用你所配置的提供商，因此该电台需要网络访问。家庭上下文是可选且只读的，只有过滤后的上下文会发送给你选择的提供商：应用会在任何内容使用该上下文之前将其展示给你，你可以静音任何实体（entity），也可以完全关闭家庭上下文。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Radio |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support | No |
| Similar Artists Support | No |
| Similar Tracks Support | No |
| Maximum Stream Quality | Lossy, MP3 (192kbps, 48 kHz) |
| Login Method | None |

### Live metadata

This source reads the station's live programme state, so Music Assistant can show what is actually on air:

- Music segments show title, artist, album, and artwork; host segments show the hosts by name
- The now-playing card alternates between the current segment and an "Up next" preview

### Live metadata

This source reads the station's live programme state, so Music Assistant can show what is actually on air:

- Music segments show title, artist, album, and artwork; host segments show the hosts by name
- The now-playing card alternates between the current segment and an "Up next" preview

### Live metadata

This source reads the station's live programme state, so Music Assistant can show what is actually on air:

- Music segments show title, artist, album, and artwork; host segments show the hosts by name
- The now-playing card alternates between the current segment and an "Up next" preview

### 实时元数据

此音源会读取电台的实时节目状态，因此 Music Assistant 可以显示当前实际正在播出的内容：

- 音乐片段显示标题、艺人、专辑和封面；主持人片段按姓名显示主持人
- 正在播放卡片会在当前片段与“接下来播放”预览之间交替切换

## 要求

- 需要一个正在运行的 <a href="https://github.com/florianhorner/mammamiradio" target="_blank" rel="noopener noreferrer">Mamma Mi Radio</a> 应用，**版本 2.13 或更新**，且可从 Music Assistant 主机访问。
- 在 Mamma Mi Radio 中配置好可用的音乐源。
- 无需 AI 密钥。没有密钥时，主持人会使用预设文案和备用语音。

## 配置

- **Mamma Mi Radio URL：**你的应用的基础 URL（默认：`http://localhost:8000`）。

使用哪个 URL 取决于 Music Assistant 相对于该应用的运行位置：

- **Music Assistant 应用与 Mamma Mi Radio 应用在同一 Home Assistant 主机上：**默认的 `http://localhost:8000` 即可使用，因为 Mamma Mi Radio 应用使用主机网络，并可通过主机自身的网络接口访问
- **Music Assistant 位于另一台机器上：**使用 Home Assistant 主机的 IP 地址或 DNS 名称，例如 `http://192.168.1.10:8000`
- **处于反向代理之后：**支持路径前缀，例如 `https://myhost.example/mammamiradio`（URL 中的查询字符串和凭据会被忽略）

## 使用

- 设置完成后，Mamma Mi Radio 会自动添加到你的资料库中
- 按下播放；实时正在播放元数据会在一个更新间隔（约 12 秒）内出现

## 已知问题 / 说明

- 该应用显示为单个电台。无法按曲目搜索或浏览节目内容，而且在广播中听到的曲目也不会单独添加到 Music Assistant 资料库中
- 与 Music Assistant 中的所有电台一样，曲目无法跳过或进行进度跳转
- 元数据大约每 12 秒刷新一次，因此正在播放卡片可能会略微滞后于音频
- 此音源只能配置一个实例
- 音乐源、主持人、语言搭配以及家庭上下文权限都在应用中配置，而不是在这里；参见<a href="https://github.com/florianhorner/mammamiradio" target="_blank" rel="noopener noreferrer">应用文档</a>
- Mamma Mi Radio 本身没有账户或订阅。完全生成式的主持人需要你所选 AI 提供商的 API 密钥，费用由该提供商收取
