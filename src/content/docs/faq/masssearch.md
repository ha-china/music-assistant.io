---
title: "搜索操作"
---

# MA 搜索操作

> [!NOTE]
> 此操作用于 Home Assistant 脚本和自动化（automation）中，需要 [Home Assistant 集成](/integration/installation/)。有关示例，请参阅 [Home Assistant 脚本和自动化](/faq/how-to/#home-assistant-scripts-and-automations)。


此操作会对所有提供方执行全局搜索

![image](/assets/screenshots/service-call/search1.png)

这将返回类似以下的结果

![image](/assets/screenshots/service-call/search2.png)

然后您可以使用模板提取所需的内容，再使用 `play_media` 服务调用。例如：

```
script:
  search_ma:
    mode: queued
    alias: "Jukebox MA search"
    sequence:
      - action: music_assistant.search
        data:
          limit: 8
          name: "{{ states.input_text.jukebox_search.state}}"
        response_variable: results
      - action: input_text.set_value
        data:
          entity_id: input_text.jukebox_track_1
          value: '{{ results.tracks[0].name }}'
      - action: input_text.set_value
        data:
          entity_id: input_text.jukebox_artist_1
          value: '{{ results.tracks[0].artists[0].name }}'
```
