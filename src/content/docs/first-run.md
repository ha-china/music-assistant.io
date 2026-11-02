---
title: "首次运行（身份验证）"
---

# 初始身份验证设置

访问 Music Assistant 用户界面（UI）需要登录名和密码。

首次启动时看到的内容取决于您安装 MA 的方式以及访问它的方式。如果您将 Music Assistant 服务器作为应用安装在 Home Assistant 中，并通过 HA Ingress（侧边栏）打开 MA UI，系统会自动设置一个管理员账户，并直接带您进入设置页面。在所有其他情况下，您将看到初始身份验证设置对话框。管理员用户名和密码是首先需要设置的：请不要忘记它们，因为以后无法恢复。如果忘记了，MA 服务器将需要重建（Docker 用户可以删除 auth.db）。

> [!NOTE]
> 使用 Home Assistant 登录需要打开一个弹出的浏览器标签页，因此请确保您的浏览器允许此操作（尤其是 iOS 上的 Safari）

初始身份验证设置对话框将如下所示

<a href="/assets/screenshots/auth-flow.png"><img src="/assets/screenshots/auth-flow.png" alt="Preview image" style="width: 256px;"  loading="lazy" /></a>

成功登录后，您作为管理员的首要操作是添加[音乐源](/music-providers/)和任何必要的[播放器](/player-support/)。系统会显示此横幅以协助您完成此操作

![Preview image](/assets/screenshots/setup-banner.png)
