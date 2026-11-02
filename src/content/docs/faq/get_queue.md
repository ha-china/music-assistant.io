---
title: "获取队列动作"
---

# MA get_queue 动作

> [!NOTE]
> 此动作（action）在 Home Assistant 脚本和自动化中使用，并且需要 [Home Assistant 集成](/integration/installation/)。相关示例请参阅 [Home Assistant 脚本和自动化](/faq/how-to/#home-assistant-scripts-and-automations)。


此动作可用于获取队列的详细信息

![image](/assets/screenshots/service-call/get_queue.png)

返回的 JSON 内容十分详尽，其中包含了队列中当前项目和下一个项目的相关信息。<a href="https://www.home-assistant.io/docs/scripts/perform-actions#use-templates-to-handle-response-data" target="_blank" rel="noopener noreferrer">返回的数据可以在模板中使用</a>。

## 示例

```
script:
  get_now_playing:
    mode: queued
    alias: "Get Now Playing Track Name"
    sequence:
      - action: music_assistant.get_queue
        data:
          entity_id: media_player.ma_kitchen_speaker
        response_variable: queue_info
      - service: input_text.set_value
        data:
          entity_id: input_text.now_playing
          value: '{{ queue_info['media_player.ma_kitchen_speaker'].current_item.name[:50] }}'
```
