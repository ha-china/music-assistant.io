---
title: 常见问题 - 我该如何……？
description: Music Assistant 的常见用法
---
# 我该如何……？

本页的第一部分介绍使用 Music Assistant 时的日常问题。[第二部分](#home-assistant-scripts-and-automations)介绍脚本和自动化，它们需要 [Home Assistant 集成](/integration/)以及一定的 Home Assistant 知识。

## 如何使用音量标准化？它的工作原理是什么？

当一首曲目被 MA 播放过一次后，系统会保留相关数据，以便对所有正在播放的曲目进行音量标准化。MA 中的这项设置就是音量标准化的目标电平。MA 不会压缩动态范围（因为那样会损害音质），而只是根据 EBU R128 标准测得的整首曲目整体响度来调整其增益。负值的绝对值越大，曲目通常听起来越轻，但也会留下很大的动态余量。不过，就每首单独的曲目而言，增益可能会升高或降低，以确保所有已播放曲目的整体响度都处于所选电平。建议使用 -23 到 -12 LUFS 之间的值，默认值为 -14 LUFS。**不要**将其设置得过高（接近零），因为削波会导致你的音乐听起来失真。

方法、目标电平和固定增益值可在 [**设置 → 系统 → 流媒体 → 队列播放**](/settings/core/#queue-playback) 中设置。标准化的开关位于 [**设置 → 系统 → 播放器队列**](/settings/core/#player-queues) 下，并且可以为[单个队列](/usage/#the-queue)单独覆盖。

更多详情见[这里](/faq/tech-info/#volume-normalization)

## 更换房间时让音乐继续播放

有三种方法。

1. 开始向包含你将要来回移动的所有房间在内的任意类型组进行流媒体播放。将除当前所在房间以外的所有房间静音。更换房间时，只需对所需的播放器执行静音和取消静音操作即可。

2. 使用开启了动态成员选项的同步组（Sync Group），或手动同步组。当你更换房间时，将新房间的播放器加入现有组。对组内其他播放器的处理方式取决于组的类型，以及该播放器是组长（Sync Group）还是持有队列（Manual Sync）。可选的做法是将该播放器从组中移除，或者将其静音。更多信息请阅读[分组](/faq/groups/)

3. 使用[转移队列](/faq/masstransfer/)动作。

## 随机播放 Spotify/播放列表/YouTube 等

你并不随机播放音乐源本身；你需要为播放器的[队列启用随机播放](/usage/#shuffle)，之后添加到队列的任何内容都会随机播放。可以在 MA 中点击[播放器栏](/ui/#player-bar)上的随机播放图标来启用随机播放。

对于 Home Assistant 自动化，你也可以使用 YAML 来实现：
``` yaml
action: media_player.shuffle_set
target:
  entity_id: media_player.mass_bath
data:
  shuffle: true
```

## 向 MA 添加电台

如果你使用 [TuneIn 提供商](/music-providers/tunein/)，那么在你账户中收藏的电台将会显示。任何拥有自己媒体库（或收藏夹）的电台源都可以这样使用。

如果你使用 [RadioBrowser 提供商](/music-providers/radio-browser/)，请浏览该提供商，并为所需的电台选择“添加到媒体库”。所有电台源都可以这样使用。

你可以通过导航到 Radio 视图并在右上角菜单中选择“从 URL 添加项目”来直接添加电台。
这也适用于本地托管的流，例如来自 Icecast 的流。

> [!NOTE]
> 在从右上角菜单手动刷新 Radio 视图列表之前，新添加的电台不会显示。

## 创建播放列表或使用 M3U 文件

你可以在 MA 的 UI 中创建播放列表。也可以通过 UI 添加项目。

如果你想手动创建播放列表，可接受的格式为：
```
(file in same folder as playlist):
05 Blue Christmas.flac

and this (file is in subfolder relative to the playlist file):
Elvis Presley/Blue Christmas/05 Blue Christmas.flac

and this (file has an absolute path):
/Users/marcel/media/music/b05 Blue Christmas.flac

and this (full uri):
spotify://track/12345
or
filesystem_smb://track/blah
```

播放列表的相对路径（例如` ../Mariah Carey/Merry Christmas/02 All I Want for Christmas Is You.flac` ）也可以使用。

支持 M3U、M3U8 和 PLS 播放列表。<a href="https://www.iptvx.info/?p=1002" target="_blank" rel="noopener noreferrer">可以使用 VLC 轻松创建播放列表</a>，MA 可以使用这些播放列表。

## 让音乐在一段时间后停止，又称睡眠定时器

MA 内置了睡眠定时器：打开[正在播放视图](/ui/#now-playing-view)，然后从右上角的菜单中选择睡眠定时器选项。

对于 Home Assistant 用户，可以通过自动化实现类似效果，例如在当前曲目播放结束后停止：

``` yaml
sequence:
  - wait_for_trigger:
      - platform: state
        entity_id:
          - media_player.mass_all_rooms
        attribute: media_title
    continue_on_timeout: false
  - action: media_player.turn_off
    data: {}
    target:
      entity_id:
        - media_player.mass_all_rooms
mode: single
alias: Stop after current track
```

感谢 <a href="https://github.com/Aasikki" target="_blank" rel="noopener noreferrer">AAsikki</a> 在<a href="https://github.com/orgs/music-assistant/discussions/830#discussioncomment-3355921" target="_blank" rel="noopener noreferrer">这里</a>向我们展示了这一方法

## 创建立体声对

如果[播放器提供商](/player-support/)原生支持立体声对，并且可以在其原生应用中进行设置，而且 MA 能够检测到这些独特的“播放器”，那么这应该可以正常工作。否则，对于支持完美同步并在单个播放器的协议设置中显示 `Output Channel Mode` 的播放器提供商，可以为立体声对中的每个播放器分配一个单独的声道，然后将这两个播放器组成一个[同步组](/faq/groups/#sync-groups)。

## 访问我在 Nextcloud 上的音乐？

<a href="https://apps.nextcloud.com/apps/music" target="_blank" rel="noopener noreferrer">Nextcloud Music App</a> 支持 [Subsonic](/music-providers/subsonic/)，因此你可以在 MA 中使用该源进行连接。

## 在 HA 侧边栏中显示 MA 图标？

如果你是在 HA 主机中运行 MA 应用，请前往 HA 的 `SETTINGS >> APPS >> MUSIC ASSISTANT`，然后选择“在侧边栏中显示”。

如果你使用 docker，则可以使用<a href="https://www.home-assistant.io/dashboards/iframe/" target="_blank" rel="noopener noreferrer">iframe 面板</a>，或者使用另一个名为 <a href="https://github.com/lovelylain/hass_ingress" target="_blank" rel="noopener noreferrer">hass_ingress</a> 的自定义集成，它允许你向 Home Assistant 前端添加额外的 ingress 面板。如果使用直接 URL，则需要[长期访问令牌](#access-the-ma-views-directly-via-url)。

## 直接通过 URL 访问 MA 视图

如果身份验证对某些设备造成了阻碍，可以通过 [**设置 → 个人资料**](/settings/profile/#long-lived-access-tokens) 创建一个长期访问令牌（long lived access token），并使用以下格式作为 URL
https://192.168.1.1:8095/?code=xxx#/home/?player=kitchen%20speaker&showFullscreenPlayer=true，其中 xxx 即为令牌

## 打开 UI 时选中特定播放器

在主页 URL 中添加 `player=`，即可在打开视图时选中特定的播放器（或上次使用的播放器）。你可以使用 MA 播放器名称，或使用 `true` 来打开上次的播放器。播放器名称不区分大小写。

示例

- http://192.168.1.1:8095/#/home?player=true
- http://192.168.1.1:8095/#/home?player=Livingroom

## 打开不带菜单或播放器栏的 UI

显示相关视图，但不显示<a href="https://music-assistant.io/ui/#player-bar" target="_blank" rel="noopener noreferrer">播放器栏</a>或<a href="https://music-assistant.io/ui/#main-menu" target="_blank" rel="noopener noreferrer">主菜单</a>

示例

- http://192.168.1.1:8095/#/albums?frameless=true
- http://192.168.1.1:8095/#/playlists?player=kitchen%20speaker&frameless=true

## 打开 UI 时显示正在播放视图

显示正在播放视图

示例

- http://192.168.1.1:8095/#/home?player=true&showFullscreenPlayer=true
- http://192.168.1.1:8095/#?player=true&showFullscreenPlayer=true
- http://192.168.1.1:8095/#/home?player=Livingroom&showFullscreenPlayer=true

## 为 piCorePlayer 添加带按压按钮的旋转编码器

请参见<a href="https://github.com/orgs/music-assistant/discussions/1123#discussioncomment-7945369" target="_blank" rel="noopener noreferrer">这里</a>

## 在同一主机上创建多个 ShairportSync 实例

可在<a href="https://github.com/orgs/music-assistant/discussions/3562" target="_blank" rel="noopener noreferrer">这里</a>找到相关教程

## 将 MA 与 Mopidy 配合使用

请参见 https://github.com/orgs/music-assistant/discussions/439

## 内网已配置 SSL 时如何运行 MA？

不建议尝试在 SSL 下运行 MA。话虽如此，虽然流媒体服务无法运行在 SSL 之后，但你完全可以根据自己的需求来配置前端。默认情况下，HAOS 中的前端受 Ingress 保护。对于使用 docker 的用户，可以将 Web 服务器托管在所需的端口上，然后运行（Ingress）反向代理。我们不会为这些配置提供支持，建议你使用 HAOS。

## Home Assistant 脚本和自动化

以下内容适用于 Home Assistant 脚本和自动化。它们假定你已经安装了 [Home Assistant 集成](/integration/)，并且能够熟练地编辑 YAML。在日常使用 Music Assistant 时，你并不需要这些内容。

### 如何获取 URI？

URI 是 Music Assistant 用来标识特定项目（曲目、专辑、播放列表等）的地址。只有在构建自动化时才需要用到 URI；在应用本身中你完全不需要它。

对于播放列表、艺术家、专辑和电台，直接使用名称即可。

对于曲目，你也可以使用名称，但这可能会导致有歧义的结果，因此可以使用 `Billy Joel - A Matter of Trust` 这样的格式通过艺术家名称加以限定。如果这样仍然有歧义，该动作还提供了其他选项，可用于进一步缩小搜索范围。例如：

``` yaml
data:
  media_type: track
  media_id: Running on Ice
  artist: Billy Joel
  album: The Bridge
```

同样，如果专辑名称有歧义，你可以先指定艺术家名称（`Queen - Greatest Hits`）

你也可以使用 `music_assistant.search` 或 `music_assistant.get_library` 动作，URI 会显示在结果中。URI 也显示在项目视图底部的[提供商详情区域](/ui/#provider-details)中，可以使用链条状的链接图标将其复制到剪贴板。

> [!NOTE]
> 以 `media-source://` 开头的 URI 是 HA 的 URI，不应在定位 MA 播放器实体（entity）时使用。否则会导致行为不一致。

文件夹的 URI 需要按照 `filesystem_id://folder/relative/path/to/folder` 的形式构造（例如 `filesystem_smb--5iJ4npRi://folder/ABBA`）。filesystem_id 可以通过查看 `get_library` 动作的输出来获得。查找键 `tracks.provider_mappings.provider_instance`，并找到一个显示了 filesystem_id 的条目。话虽如此，如果 MA 中只添加了一个文件系统源，则可以使用 `filesystem_smb`。

一般来说，每个 MA 项目都有一个形如 `provider://media_type/item_id` 的 URI。更多示例：

- `ambient_sounds://sound_effect/ocean_waves`

### 通过脚本或自动化向队列添加项目

``` yaml
action: media_player.play_media
target:
  entity_id: media_player.mass_player_entity_goes_here
data:
  media_content_id: NameOfTheAlbumArtistOrPlaylistHere
  media_content_type: music
```

有关<a href="https://www.home-assistant.io/integrations/media_player/" target="_blank" rel="noopener noreferrer">入队选项</a>，请参见这里

另请参见 [music_assistant.play_media 动作](/faq/massplaymedia/)

### 使用脚本播放播放列表

使用上面展示的 `media_player.play_media` 动作，或按[这里](/faq/massplaymedia/)所述使用 `music_assistant.play_media` 动作。

### 随机播放一个项目

使用 get_library 以及如下所示的脚本/自动化：

``` yaml
sequence:
  - action: music_assistant.get_library
    data:
      media_type: track
      search: ARTISTNAME
      limit: 1
      order_by: random
    response_variable: random_track
  - action: music_assistant.play_media
    data:
      media_id: "{{ random_track['items'][0].uri }}"
      media_type: track
      enqueue: play
      radio_mode: true
    target:
      entity_id: media_player.ma_kitchen_speaker
```

如果你想要一个由曲目组成的队列，则可以使用：

``` yaml
sequence:
  - action: music_assistant.get_library
    data:
      media_type: track
      search: ARTISTNAME
      limit: 10
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

可以对此进行修改，使其适用于其他项目类型（例如电台或播放列表）。

### 使用脚本或自动化清空队列

使用 HA 的 `media_player.clear_playlist` 动作，或者新的 `music_assistant.play_media` 动作；如果想在清空队列后播放其他内容，请选择合适的入队选项。

### 通过自动化播放电台流

使用 `music_assistant.play_media` 动作，并将 `media_id` 设置为电台名称。

### 通过脚本切换到下一个/上一个电台

创建一个 `input_select`，将各个电台作为其选项。现在你就可以使用 next 和 previous 动作在各电台之间切换。

要动态生成电台列表，请使用合适的自动化触发器和如下脚本：
``` yaml
script:
  generate_station_list:  
    mode: queued
    alias: "Generate Station List"
    sequence:
      - action: music_assistant.get_library
        data:
          limit: 40
          config_entry_id: 01JMYCMQJ55CR9E7YZW3VKEA4F
          media_type: radio
          favorite: true
          order_by: name  
        response_variable: radio_stations
      - action: input_select.set_options
        target:
          entity_id: input_select.radio_station_list
        data:
          options: "{{ radio_stations['items'] | map(attribute='name') | list }}"    
```

> [!NOTE]
> 请将 `config_entry_id` 的值替换为你自己的 MA 集成所对应的值；上面的示例原样使用是行不通的。获取该值最简单的方法是：在 Home Assistant 的开发者工具 > 动作 中使用 UI 编辑器构建一次该动作，然后切换到 YAML 视图。

### 随机播放专辑

当选择 `play` 或 `replace` 并且项目为专辑（或其他有顺序的项目）时，[随机播放会自动关闭](/usage/#shuffle)，因此需要改用 `add`。例如：

```
actions:
  - action: media_player.shuffle_set
    target:
      entity_id: media_player.home_assistant_voice
    data:
      shuffle: true
  - data:
      enqueue: add
      media_type: album
      media_id: Dark Side of the Moon
    target:
      entity_id: media_player.home_assistant_voice
    action: music_assistant.play_media
  - action: media_player.media_play
    target:
      entity_id: media_player.home_assistant_voice
```
