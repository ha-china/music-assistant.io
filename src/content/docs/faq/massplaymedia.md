---
title: "播放媒体动作"
---

# MA play_media 动作

> [!NOTE]
> 此动作用于 Home Assistant 脚本和自动化（automation）中，并且需要 [Home Assistant 集成](/integration/installation/)。相关示例请参见 [Home Assistant 脚本和自动化](/faq/how-to/#home-assistant-scripts-and-automations)。


此动作可让您精确选择要播放的媒体。您可以通过 HA 图形界面或 YAML 创建服务调用（service call）或自动化。

您可以将名称与媒体类型配合使用

![image](/assets/screenshots/service-call/play1.png)

或者只使用一个 URI

![image](/assets/screenshots/service-call/play2.png)

或者将媒体库 id 与媒体 id 配合使用

![image](/assets/screenshots/service-call/play3.png)

或者使用由艺术家名称定义的曲目，建议填写媒体类型，但该项是可选的

![image](/assets/screenshots/service-call/play4.png)

您也可以使用项目列表

![image](/assets/screenshots/service-call/play5.png)

或者使用 URI 列表，其中的 URI 甚至可以来自不同的音乐源

![image](/assets/screenshots/service-call/play6.png)

> [!NOTE]
> 常规的 `media_player.play_media` 服务调用同样接受上述所有方式，但它无法同时接受多个项目

> [!NOTE]
> 添加多个项目时，必须在每个项目前面加上连字符（-），如上图所示

此外还有其他附加选项。当选择了支持该功能的实体（entity）时，会出现“排队播放”（Enqueue）选项。

![image](/assets/screenshots/service-call/play7.png)

> [!CAUTION]
> **无限混音（Endless Mix）**
>
> 只有在启用“无限混音”（Endless Mix）时，才能使用专辑、艺术家、曲目或播放列表这几种媒体类型。只有当存在支持相似曲目的内容源时（例如 Apple、Deezer、Spotify、Subsonic、Tidal 和 YTM），才能使用“无限混音”。
