---
title: "API"
---

# API <img src="/assets/icons/api-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 提供了强大的 API，可用于控制您的音乐库、管理播放器（player）以及串流音频。无论您是在构建自定义界面、与家庭自动化集成，还是开发音乐应用，该 API 都能让您完全掌控一切。

API 文档会自动生成，可在 http://YOUR_MA_SERVER_IP:8095/api-docs 访问

## 开始之前

- 每个请求都需要身份验证令牌（token）。请在 MA 用户界面中通过 [**设置 → 个人资料**](/settings/profile/#long-lived-access-tokens) 创建一个长期访问令牌（long lived access token），并将其放在 `Authorization: Bearer <token>` 请求头中发送（下方示例中显示的是截断后的令牌）
- `message_id` 可以是您自行选择的任意字符串；它会在响应中被原样返回，以便您将响应与请求一一对应
- 下方每个示例均以两种形式展示：一种是可在任意终端中运行的 `curl` 命令，另一种是可在自动化中使用的等效 Home Assistant <a href="https://www.home-assistant.io/integrations/rest_command/" target="_blank" rel="noopener noreferrer">rest_command</a> YAML

## 示例

<a href="https://github.com/orgs/music-assistant/discussions/4438" target="_blank" rel="noopener noreferrer">从播放列表中随机播放一首曲目</a>

<a href="https://github.com/orgs/music-assistant/discussions/1240#discussioncomment-12396494" target="_blank" rel="noopener noreferrer">将当前队列保存为播放列表</a>

<details><summary>获取所有可用的播放器设置</summary>

```bash
curl --location 'http://192.168.1.1:8095/api' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR......I' \
--data '{
  "message_id": "1",
  "command": "config/players/get",
  "args": {
    "player_id": "RINCON_48A6B820191201400"
  }
}'
```
```yaml
rest_command:
  ma_get_player_settings:
    url: http://192.168.1.1:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR......I"
    payload: >
      {
        "message_id": "1",
        "command": "config/players/get",
        "args": {
          "player_id": "{{ player_id }}"
        }
      }
    content_type:  'application/json; charset=utf-8'
```

</details>

<details><summary>设置一项或多项播放器设置</summary>

```bash
curl --location 'http://192.168.1.1:8095/api' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR......I' \
--data '{
  "message_id": "1",
  "command": "config/players/save",
  "args": {
    "player_id": "RINCON_48A6B820191201400",
    "values": {
        "airplay_mode": true
    }
  }
}'
```
```yaml
rest_command:
  ma_set_player_settings:
    url: http://192.168.1.1:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR......I"
    payload: >
      {
        "message_id": "1",
        "command": "config/players/save",
        "args": {
          "player_id": "b8:27:eb:8a:b8:8e",
          "values": {
            "crossfade": true
          }
        }
      }
    content_type:  'application/json; charset=utf-8'
```

</details>

<details><summary>将条目添加到收藏夹</summary>

item 需要是 URI 或分享 URL

```bash
curl --location 'http://192.168.1.1:8095/api' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR......I' \
--data '{
  "message_id": "1",
  "command": "music/favorites/add_item",
  "args": {
    "item": "spotify://track/1234567"
  }
}'
```
</details>

<details><summary>获取专辑曲目</summary>

```bash
curl --location 'http://192.168.1.1:8095/api' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR......I' \
--data '{
  "message_id": "1",
  "command": "music/albums/album_tracks",
  "args": {
    "item_id": "1",
    "provider_instance_id_or_domain": "library",
    "in_library_only": true
  }
}'
```
```yaml
rest_command:
  ma_album_tracks:
    url: http://192.168.1.1:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR......I"
    payload: >
      {
        "message_id": "1",
        "command": "music/albums/album_tracks",
        "args": {
          "item_id": "{{ item_id }}",
          "provider_instance_id_or_domain": "{{ provider_instance_id_or_domain }}",
          "in_library_only": "{{ in_library_only }}"
        }
      }
    content_type:  'application/json; charset=utf-8'
```
</details>

<details><summary>获取条目的完整详情（通过提供 URI）</summary>

```bash
curl --location 'http://192.168.1.1:8095/api' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR......I' \
--data '{
  "message_id": "1",
  "command": "music/item_by_uri",
  "args": {
    "uri": "spotify://track/1234"
  }
}'
```
</details>

<details><summary>获取最近播放的条目</summary>

limit 和 media_types 为可选参数
```bash
curl --location 'http://192.168.1.1:8095/api' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR......I' \
--data '{
  "message_id": "1",
  "command": "music/recently_played_items",
  "args": {
    "limit": 10,
    "media_types": ["track", "album"]
  }
}'
```
</details>

<details><summary>获取进行中的条目（有声书、播客单集）</summary>

返回正在进行中的有声书（Audiobook）和播客单集（PodcastEpisode）的列表。
limit 为可选参数
```bash
curl --location 'http://192.168.1.1:8095/api' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR......I' \
--data '{
  "message_id": "1",
  "command": "music/in_progress_items",
  "args": {
    "limit": 10
  }
}'
```
</details>

<details><summary>启动同步</summary>

开始运行（全部或选定的）音乐提供方（musicprovider）的同步。
  media_types：仅同步这些媒体类型。为 None 时表示同步全部。
  providers：仅同步这些提供方实例。为 None 时表示同步全部。
```bash
curl --location 'http://192.168.1.1:8095/api' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR......I' \
--data '{
  "message_id": "1",
  "command": "music/sync",
  "args": {
    "media_types": ["track", "album"],
    "providers": ["filesystem--1234"]
  }
}'
```
</details>

<details><summary>刷新播放列表</summary>

```yaml
rest_command:
  ma_refresh_playlist:
    url: http://192.168.1.1:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR......I"
    payload: >
      {
        "message_id": "1",
        "command": "music/playlists/playlist_tracks",
        "args": {
          "item_id": "1234",
          "provider_instance_or_domain": "builtin",
          "force_refresh": true
        }
      }
    content_type:  'application/json; charset=utf-8'
```
</details>


<details><summary>更改播放器的淡入淡出（crossfade）状态</summary>

player_id 可以在单个播放器设置的顶部找到

```yaml
rest_command:
  ma_set_player_settings:
    url: http://192.168.1.1:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR......I"
    payload: >
      {
        "message_id": "1",
        "command": "config/players/save",
        "args": {
          "player_id": "b8:27:eb:8a:b8:8e",
          "values": {
            "crossfade": true
          }
        }
      }
    content_type:  'application/json; charset=utf-8'
```
</details>

<details><summary>获取队列中的所有条目</summary>

`queue_id` 与 `player_id` 相同，除非该播放器已被分组。若要确认，可以创建一个调用 `player_queues/all` 的 `rest_command`，并查看返回的信息。如果省略 `limit`，其默认值为 500。请注意不要设置大于 500 的值，以免破坏您的系统。实际上限取决于您主机上可用的资源。`offset` 也可以省略。

```yaml
rest_command:
  ma_get_full_queue:
    url: http://192.168.1.1:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR......I"
    payload: >
      {
        "message_id": "1",
        "command": "player_queues/items",
        "args": {
          "queue_id": "b8:27:eb:8a:b8:8e",
          "limit": 500,
          "offset": 0
        }
      }
    content_type:  'application/json; charset=utf-8'
```
</details>

<details><summary>播放最新的播客单集</summary>

将 `latest` 或 `newest` 作为 `start_item` 参数传入。

```yaml
rest_command:
  ma_podcast_latest:
    url: http://192.168.1.58:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR......I"
    payload: >
      {
        "message_id": "1",
        "command": "player_queues/play_media",
        "args": {
          "queue_id": "115ee854-3ac5-38c1-277d-7bdb4f3c126d",
          "media": "library://podcast/2",
          "start_item": "latest"
        }
      }
    content_type:  'application/json; charset=utf-8' 
```
</details>

<details><summary>从特定的播放列表条目或播客单集开始播放</summary>

传入一个长度不少于 3 个字符的字符串作为 `start_item`。例如，传入 `Mirrors` 将会在播放列表中查找第一个包含该单词（不区分大小写）的条目，然后从该位置开始播放播放列表。

```yaml
rest_command:
  ma_playlist_specific:
    url: http://192.168.1.58:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR......I"
    payload: >
      {
        "message_id": "1",
        "command": "player_queues/play_media",
        "args": {
          "queue_id": "115ee854-3ac5-38c1-277d-7bdb4f3c126d",
          "media": "library://playlist/13",
          "start_item": "Mirrors"
        }
      }
    content_type:  'application/json; charset=utf-8' 
```
</details>

<details><summary>刷新播客并播放最新单集</summary>

首先请注意，此功能仅适用于基于 RSS 的订阅源，例如 podcastfeed（RSS）、iTunes Podcasts、gPodder 和 Overcast。对于其他服务，它们可能在收到请求时本来就总是返回最新单集；而对于另一些服务，由于单集列表存在缓存，可能无法更频繁地更新列表（例如 Deezer、iHeartradio、Spotify、Storytel）

注意事项：

- 令牌必须属于管理员用户。
- `provider_instance_id` 显示在该提供方的设置中。
- 如果该提供方的播客同步已关闭，则不会发生任何操作。
- 如果订阅的播客很多，10 秒的时间可能不足以让同步进行到您想要的那一个。

```yaml
rest_command:
  ma_sync_podcast:
    url: http://192.168.1.1:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR......I"
    payload: >
      {
        "message_id": "1",
        "command": "music/sync",
        "args": {
          "media_types": ["podcast"],
          "providers": ["{{ provider_instance_id }}"]
        }
      }
    content_type: 'application/json; charset=utf-8'

  ma_play_podcast_latest:
    url: http://192.168.1.1:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR......I"
    payload: >
      {
        "message_id": "1",
        "command": "player_queues/play_media",
        "args": {
          "queue_id": "{{ queue_id }}",
          "media": "{{ media }}",
          "start_item": "latest"
        }
      }
    content_type: 'application/json; charset=utf-8'

script:
  ma_play_latest_podcast_fresh:
    alias: Sync podcast and play latest episode
    fields:
      queue_id:
        description: MA queue id (same as the player_id unless the player is grouped)
        required: true
      provider_instance_id:
        description: Provider instance to sync, e.g. podcastfeed--abc123
        required: true
      podcast_uri:
        description: MA URI of the podcast, e.g. library://podcast/2
        required: true
    sequence:
      - action: rest_command.ma_sync_podcast
        data:
          provider_instance_id: "{{ provider_instance_id }}"
      - delay: "00:00:10"
      - action: rest_command.ma_play_podcast_latest
        data:
          queue_id: "{{ queue_id }}"
          media: "{{ podcast_uri }}"
```
示例调用：

```yaml
action: script.ma_play_latest_podcast_fresh
data:
  queue_id: 115ee854-3ac5-38c1-277d-7bdb4f3c126d
  provider_instance_id: podcastfeed--abc123
  podcast_uri: library://podcast/2
```
</details>
