---
title: FastMCP Server 插件
description: 通过模型上下文协议（Model Context Protocol）提供您的资料库、队列和播放器，让 AI 助手可以搜索并控制它们。
pluginGroup: other-systems
---

# FastMCP Server <img src="/assets/icons/fastmcp-server-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 能够将其资料库、队列、播放和播放器控制以 <a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer">模型上下文协议（Model Context Protocol，MCP）</a> 服务器的形式对外提供，这样 Claude、ChatGPT、Cursor、Codex、OpenClaw 和 Hermes 等 AI 助手和智能体框架就可以使用自然语言代表您搜索资料库、控制播放并管理队列。

> [!NOTE]
> 该插件仍处于开发的早期阶段，可能会出现 Bug。

## 功能特性

- 任何支持 MCP 的 AI 客户端都可以通过一个 URL 连接到您的 Music Assistant 资料库
- 一键式连接向导（Connect Wizard），为 Claude Desktop、Claude Code、Cursor、Windsurf、VSCode、ChatGPT Connectors、Codex CLI、Gemini CLI、Cline、Zed、OpenClaw 和 Hermes 提供即拷即用的配置
- 每个已连接的客户端都会获得自己的访问令牌，可在“个人资料 → 长期访问令牌”下单独吊销
- 详细的权限开关让您可以决定每个已连接的 AI 客户端可以做什么——浏览资料库、控制播放、管理队列、编辑播放列表、移除收藏，以及它总共可以看到您资料库中的多少内容
- 两个可选且默认关闭的功能命名空间，面向高级用户：**debug** 命名空间（用于故障排查的内省功能）和 **config** 命名空间（通过 MCP 查看和编辑 Music Assistant 设置）
- 在清空队列或从资料库中移除曲目等破坏性操作之前提供可选的确认提示
- 复用 Music Assistant 网页服务器——无需额外开放端口，开箱即用地支持反向代理和 Home Assistant ingress
- 权限更改立即生效，无需重启 Music Assistant

## 配置

通过 **设置 → 插件 → 添加插件** 添加该插件。无论您连接多少个 AI 客户端，都只需要一份该插件。

### 连接 AI 客户端

插件添加完成后，连接向导即可在插件的配置面板中使用。要连接新的客户端：

1. 打开插件设置，并点击 **打开连接向导**。
2. 从列表中选择您的 AI 客户端。
3. 向导会创建一个访问令牌，并以客户端名称为其命名（例如 `MCP — Claude Desktop`），然后显示一段可直接复制的配置。
4. 将其粘贴到您客户端的 MCP 配置中；对于 Cursor，请点击 **Add to Cursor** 链接。

为同一客户端重新生成配置块会使其之前的令牌失效，因此旧的凭据不会被遗留在外。

对于 OpenClaw 和 Hermes，向导会提供它们各自期望的形式——一条 `openclaw mcp set …` 命令和一个 `~/.hermes/config.yaml` 配置块。两者的连接方式与其他客户端相同。

### 设置

- <b>要求身份验证。</b> 拒绝未出示有效 Music Assistant 令牌的 MCP 客户端。强烈建议保持启用。
- <b>确认破坏性操作。</b> 在清空队列、移除资料库条目或删除播放列表之前，要求客户端进行确认。在尚不支持确认提示的客户端上，将转由相应的权限开关进行控制。
- <b>权限。</b> 默认仅启用只读的资料库和资源访问；所有会更改状态的操作以及所有 Debug 和 Config 功能默认均为关闭，因此只启用您需要的功能。总共有二十九个开关——十六个操作开关，分为查询权限（Query Permissions）、控制权限（Control Permissions）、编辑权限（Edit Permissions）和删除权限（Delete Permissions）；三个 MCP Resources 开关，用于控制向客户端公开哪些资料库、播放器/队列和提示（prompt）资源；五个 Debug 开关；以及五个 Config 开关。

#### 可选功能命名空间（高级）

这两个命名空间默认完全关闭——标准安装不会暴露任何 debug 或 config 工具。只为您需要的功能启用开关，并建议在生产环境中保持关闭。

- <b>Debug。</b> 五个开关（`Debug: inspect`、`Debug: logs`、`Debug: events`、`Debug: providers`、`Debug: reload`）可让客户端帮助您排查正在运行的 Music Assistant：播放器、队列和提供程序（provider）的当前状态，密码等信息已被隐去的日志文件末尾内容，近期发生事件的列表，提供程序健康状况摘要，以及——需单独开启——重启提供程序。保留多少近期活动可以在 ADVANCED 部分中设置。
- <b>Config。</b> 五个开关（`Config: read settings`、`Config: edit provider settings`、`Config: edit core settings`、`Config: edit player settings` 和 `Config: allow writing secret values`）可让客户端查看并更改您的 Music Assistant 设置。读取时密码和令牌会被隐藏，而更改其中之一还需要单独开启机密值开关，以及该组设置对应的开关。更改会通过与您亲自操作时相同的检查，如果出现问题则会被撤销。

在 ADVANCED 部分中：

- <b>挂载路径。</b> MCP 服务器在 Music Assistant 网页服务器上挂载的 URL 路径。默认为 `/mcp/v1`。仅当与其他路由冲突时才需更改。
- <b>强制令牌受众（RFC 8707）。</b> 拒绝未绑定到此 MCP 服务器 URL 的令牌。在 Music Assistant 默认颁发绑定受众的令牌之前，请保持关闭。
- <b>额外允许的来源（CSV）。</b> 在自动检测到的 Music Assistant 主机之外，额外接受的 Origin 标头的逗号分隔列表。
- <b>连接向导外部 URL（后备）。</b> 连接向导在生成的配置片段中应使用的显式基础 URL。仅当向导无法从当前客户端的请求标头中检测到公开 URL 时才需要。
- <b>Debug：事件缓冲区容量。</b> 当 `Debug: events` 开启时保留的近期事件数量。达到上限后，最旧的事件将被丢弃。事件功能关闭时此设置无效。

## 已知问题 / 注意事项

- 该插件是实验性的，且模型上下文协议（Model Context Protocol）本身仍在不断演进，因此其行为可能会在 Music Assistant 的不同版本之间发生变化。
- 各 AI 客户端实现 MCP 的严格程度不一。不支持确认提示的客户端将改为完全由相应的权限开关进行控制。
- 所有写入权限默认均为禁用，Debug 和 Config 命名空间也是如此。只启用您希望每个已连接的 AI 客户端能够执行的操作。
- 由连接向导生成的令牌为长期有效。请在“个人资料 → 长期访问令牌”中吊销任何您不再信任的客户端。
