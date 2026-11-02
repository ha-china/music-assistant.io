---
title: "安装 Home Assistant 集成"
---

# 安装 Home Assistant 集成 <img src="/assets/icons/installation-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Home Assistant 集成（integration）是让 Music Assistant 播放器出现在 Home Assistant 中的关键组件，使其准备好在仪表盘（dashboard）、自动化（automation）和脚本中使用，并支持语音控制。

如果您不确定这是否是您需要的组件，或者它是否与 Home Assistant 插件或 Home Assistant 媒体播放器有所不同，请先阅读[各组件如何协同工作](/integration/#how-the-pieces-fit-together)，然后再回到这里。

> [!NOTE]
> 在尝试通过集成将其链接到 Home Assistant 之前，请确保 MA 服务器已正常启动并运行，且已添加音乐和播放器提供商。

## 添加集成

用于将 Music Assistant 连接到 Home Assistant 的集成已作为官方组件内置于 HA 核心中。

- HA 通常会自动发现 MA 服务器，点击“配置”（CONFIGURE）即可安装。
- 如果由于某种原因需要手动添加集成，请前往 HA 设置 >> 设备与服务 >> 集成，然后点击巨大的 `+ ADD INTEGRATION` 按钮。搜索 Music Assistant 并点击添加。您需要添加服务器的 IP 和端口（通常为 8095）。这是运行 Music Assistant 的机器的局域网地址，例如 `192.168.1.27`。如果不确定，请在服务器日志中搜索 `Starting server on ...` 这一行。注意：如果 MA 作为 Home Assistant 附加组件运行，日志可能会显示内部地址，如 `172.30.32.1`。在这种情况下，请改用 Home Assistant 机器的常规网络 IP 地址。
- 点击“提交”（SUBMIT），Music Assistant 集成即可投入使用。

> [!IMPORTANT]
> 当集成要求您登录 Music Assistant 时（当 MA 未作为 Home Assistant 附加组件运行时会出现此情况），请使用**管理员**账户登录。集成在执行所有操作时都会继续使用该账户，并且某些操作（例如 `music_assistant.play_media` 解析哪个用户启动了播放）仅对管理员可用。使用普通用户账户登录会导致后续出现权限错误。

> [!NOTE]
> HA 集成将为 MA 原生支持的那些播放器类型创建新的媒体播放器实体。要查看这些播放器的名称，请前往 `HA SETTINGS >>  DEVICES & SERVICES >> INTEGRATIONS >> MUSIC ASSISTANT` 并查看实体。在自动化和脚本中需要针对的正是这些播放器。

## 操作

Music Assistant 播放器响应 Home Assistant 标准的<a href="https://www.home-assistant.io/integrations/media_player/#list-of-actions" target="_blank" rel="noopener noreferrer">媒体播放器操作</a>。除此之外，该集成还添加了几个专属操作，以便对播放器和播放队列进行更精细的控制。

所有这些操作都列在 <a href="https://www.home-assistant.io/integrations/music_assistant/#additional-actions" target="_blank" rel="noopener noreferrer">Home Assistant 文档</a>中，该文档是其参数的参考。以下页面将进一步深入探讨，提供实际示例以及 HA 文档中未涵盖的细节。

- [music_assistant.play_media](/faq/massplaymedia/) — 播放特定内容，可随意选择详细程度
- [music_assistant.play_announcement](/faq/massannounce/) — 通过 URL 向播放器发送音频公告
- [music_assistant.transfer_queue](/faq/masstransfer/) — 将播放队列从一个播放器转移到另一个播放器
- [music_assistant.search](/faq/masssearch/) — 同时搜索所有音乐来源
- [music_assistant.get_library](/faq/get_library/) — 获取媒体库中项目的完整详细信息
- [music_assistant.get_queue](/faq/get_queue/) — 获取播放队列的详细信息
