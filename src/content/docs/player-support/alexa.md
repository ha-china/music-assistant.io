---
title: "Alexa"
---

# Alexa 设备 <img src="/assets/icons/alexa-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

<img src="/assets/label-expert.png" alt="Expert icon" style="width: 128px;"  loading="lazy" /> <img src="/assets/label-experimental.png" alt="Experimental icon" style="width: 133px;"  loading="lazy" />

Music Assistant 支持 Alexa 设备。此组件由 <a href="https://github.com/alams154" target="_blank" rel="noopener noreferrer">Sameer Alam</a> 贡献并维护。

Amazon 不允许像向 Chromecast 或 Sonos 播放那样随意向 Echo 播放内容。唯一的途径是构建你自己的 Alexa 技能（skill），这正是本组件所做的事情——你的 Echo 设备会作为播放器（player）出现在 Music Assistant 中，你可以像对其他任何音箱一样向它们发送音乐。

要做到这一点，远不是添加一个提供方（provider）然后点击保存那么简单。你需要有一个能运行另一套软件的地方、一个带有有效证书的专属网络地址，以及一个用于创建技能的 Amazon 开发者账户。请留出一个晚上的时间，并在开始之前通读本页的全部内容。

> [!IMPORTANT]
> 与此提供方相关的所有问题都需要在[维护者的仓库](https://github.com/alams154/music-assistant-alexa-skill-prototype/issues)中提出

## 功能

- 自动检测与你的 Amazon 账户关联的所有 Alexa 设备，并将其注册为播放器
- 控制 Alexa 设备上的播放（播放、暂停）
-	设置 Alexa 设备的音量并静音

## 配置

### 1. 设置 Music Assistant Alexa 技能原型
使用 Docker Compose 运行（推荐）：

- 从原型仓库（`https://github.com/alams154/music-assistant-alexa-skill-prototype`）复制 `docker-compose.yml`，并确保已安装 Docker 和 Docker Compose。
- 在 `docker-compose.yml` 旁边创建一个 `secrets/` 目录，并添加以下文件（相对于 compose 文件）：

  - `./secrets/app_username.txt` — 你自行选择的用户名，用于保护设置页面
  - `./secrets/app_password.txt` — 与之对应的密码

- 在 `docker-compose.yml` 中设置环境变量。其中有两个至关重要：`SKILL_HOSTNAME`，即 Amazon 访问此服务所用的公开地址；以及 `MA_HOSTNAME`，即你的 Music Assistant 服务器。对于任何不带屏幕的 Echo，`MA_HOSTNAME` 都是必需的。
- 启动服务：

  ```sh
  docker compose up -d
  ```

- 默认情况下，该服务可通过 `http://localhost:5000`（或你配置的 IP/端口）访问。
- 在浏览器中打开设置页面 `http://localhost:5000/setup`。如果你尚未登录，它会让你登录 Amazon 开发者账户，然后创建技能并为测试做好准备。这需要几分钟时间，在此期间页面会等待 Amazon 完成处理。
- 你可以随时打开 `http://localhost:5000/status` 查看技能的进展情况

### 2. 设置带 SSL 证书的代理
- 在技能原型服务（默认端口：5000）和 Music Assistant 流媒体端口（默认端口：8097）前面配置反向代理（如 Nginx 或 Caddy）[如果仅使用 APL 设备，则可选]
- 为你的域名获取并安装有效的 SSL 证书（例如使用 Let's Encrypt）
- 确保原型服务和 Music Assistant 流媒体 [如果仅使用 APL 设备，则可选] 端点均可通过 HTTPS（端口：443）访问，因为 Alexa 要求使用安全的端点

### 3. 在 Alexa 开发者控制台中设置 Alexa 技能

1. 前往 <a href="https://developer.amazon.com/alexa/console/ask" target="_blank" rel="noopener noreferrer">Alexa 开发者控制台</a>，并点击**创建技能（Create Skill）**。
2. 选择一个技能名称（例如：**Music Assistant**），并选择你的默认语言/区域。
3. 选择 **Music & Audio（音乐和音频）** 作为体验类型，并选择 **Custom（自定义）** 作为模型。
4. 在托管方式中，选择 **Provision your own（自行配置）**（而非 Alexa 托管），以便将技能指向原型服务。
5. 选择 **Start from Scratch（从零开始）** 模板并创建技能。
6. 在技能设置中：
  - 打开 **Invocation Name（调用名称）**，将调用词设置为 `music assistant`，然后保存。
  - 打开 **Endpoint（端点）** 并将其设置为 **HTTPS**。在 Default Region（默认区域）中填入你的公开 HTTPS 端点（即原型服务的反向代理地址），并在适当情况下选择通配符证书选项。
7. 在 **Interaction Model（交互模型）→ Intents（意图）** 下，添加一个名为 `PlayAudio` 的意图，并添加 `play audio`、`start`、`play` 之类的示例话语，然后构建模型。
8. 在 **Interfaces（接口）** 下，启用 **Audio Player（音频播放器）** 和 **Alexa Presentation Language** 接口，并保存更改。
9. 前往 **Test（测试）** 选项卡，切换到 **Development（开发）** 以启用测试。

**简而言之：**你自行运行技能服务，将其置于一个带有有效证书的网络地址之后，创建 Alexa 技能并将其指向该地址。之后，你的 Echo 设备就会作为播放器出现在 Music Assistant 中。

### 登录流程

-  需要 Amazon 账户的凭据（电子邮件和密码）
-  需要为 Amazon 账户生成双因素认证验证码
    - 在配置页面填写所需信息（电子邮件和密码）
    - 按下 `Authenticate with Amazon` 按钮
    - 填写凭据后，点击 `Sign In` 单选按钮，然后再点击大蓝色的 `Sign In` 按钮（这一步会失败）
    - 关闭该标签页，然后点击 "Click here if the popup didn't open"（如果弹出窗口没有打开，请点击此处）
    - 在 Amazon 登录页面上继续完成登录

## 设置

在设置此提供方时，除了[播放器提供方设置](/settings/player-provider/)之外，还可以使用以下设置：

- <b>URL。</b>Amazon 子域名（因地区而异）（例如 amazon.com、amazon.co.uk）
- <b>电子邮件（E-mail）。</b>与 Echo 设备关联的 Amazon 账户
- <b>密码。</b>Amazon 账户的密码
- <b>OTP 密钥。</b>Amazon 账户的 OTP 密钥
- <b>API URL。</b>你在上文设置的技能服务的地址（例如 http://localhost:5000）
- <b>API Basic Auth 用户名。</b>你写入 `app_username.txt` 的用户名
- <b>API Basic Auth 密码。</b>你写入 `app_password.txt` 的密码
- <b>Alexa 语言。</b>Alexa 使用的区域设置（例如 en-US）

Alexa 播放器使用标准的[单个播放器设置](/settings/individual-player/)，包括[大多数协议共享的设置](/settings/individual-player/#settings-shared-by-most-protocols)。

## 已知问题 / 注意事项

-	如果命令使用得过于频繁，控制设备时有时会失败（这是 Alexa API 的限制）
-	状态上报存在问题，因此 MA 界面中显示的播放状态和音量可能与实际情况不符
-	公告和自定义命令的支持可能因设备和地区而受限

## 尚不支持

-	多房间同步播放（真正的 Alexa 多房间音乐）
-	高级播放功能（例如随机播放、重复播放、交叉淡入淡出）
