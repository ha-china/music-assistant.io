---
title: "获取媒体库操作"
---

# MA get_library 操作

> [!NOTE]
> 此操作（action）在 Home Assistant 脚本和自动化中使用，需要 [Home Assistant 集成](/integration/installation/)。示例请参见 [Home Assistant 脚本和自动化](/faq/how-to/#home-assistant-scripts-and-automations)。


此操作可用于获取媒体库中条目的完整详细信息

![image](/assets/screenshots/service-call/get_library.png)

如上图所示，可用的筛选选项有很多。

收藏（favorite）选项以三种方式工作：

- 如果左侧的选项未勾选，则将同时返回收藏和非收藏的条目
- 如果左侧的选项已勾选，但右侧的开关处于关闭状态，则只返回非收藏的条目
- 如果左侧的选项已勾选，且右侧的开关处于开启状态，则只返回收藏的条目

返回的 JSON 内容非常庞大。<a href="https://www.home-assistant.io/docs/scripts/perform-actions#use-templates-to-handle-response-data" target="_blank" rel="noopener noreferrer">返回的数据可以在模板中使用</a>。

## 示例

在此示例中，将创建一个包含 10 首随机曲目的播放队列。

```
script:
  create_random_queue:
    mode: single
    sequence:
      - service: music_assistant.get_library
        data:
          limit: 10
          media_type: track
          config_entry_id: 01JEXNDHT21V0BHJXM7A5SZANV
          order_by: random
        response_variable: random_tracks
      - repeat:
          count: "{{ random_tracks['items'] | length }}"
          sequence:
            - action: music_assistant.play_media
              data:
                media_id: "{{ random_tracks['items'][repeat.index - 1].uri }}"
                media_type: track
                enqueue: add
              target:
                entity_id: media_player.ma_kitchen_speaker
```

> [!NOTE]
> 请将 `config_entry_id` 的值替换为您自己的 MA 集成所对应的值；上面的示例无法原样使用。获取该值最简单的方法是：在 Home Assistant 的开发者工具 > 操作中使用 UI 编辑器构建一次该操作，然后切换到 YAML 视图。
