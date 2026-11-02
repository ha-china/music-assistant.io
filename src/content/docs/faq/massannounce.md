---
title: "播放公告动作"
---

# MA play_announcement 动作

> [!NOTE]
> 此动作用于 Home Assistant 脚本和自动化（automation）中，并且需要 [Home Assistant 集成](/integration/installation/)。有关示例，请参见 [Home Assistant 脚本和自动化](/faq/how-to/#home-assistant-scripts-and-automations)。


此动作允许您通过 URL 向播放器发送音频公告。URL 可以通过多种方式进行访问，例如：

- 外部链接，例如 `https://www.soundjay.com/door/doorbell-5.mp3` 
- 使用 <a href="https://www.home-assistant.io/integrations/http/#hosting-files" target="_blank" rel="noopener noreferrer">Home Assistant</a>，您可以将声音文件添加到 `www` 文件夹下，并像这样访问 `http://192.168.1.165:8123/local/audio/Apartment-door-chime-melody.mp3`
- 您也可以 <a href="https://www.instructables.com/Set-up-your-very-own-Web-server/" target="_blank" rel="noopener noreferrer">运行自己的网络服务器</a>

![image](/assets/screenshots/service-call/play_announcement.png)

> [!NOTE]
> 如需发送文本消息，请使用 HA 的 TTS 服务调用，并将目标设为 MA 媒体播放器实体（entity）。在 MA 设置中，每个播放器都有多个可用于控制公告音量的选项。
```
service: tts.google_say
  data:
    entity_id: media_player.ma_kitchen_speaker
    message: This is a test
```
