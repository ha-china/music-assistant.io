---
title: "ORF Radiothek"
---

# ORF Radiothek <img src="/assets/icons/orf_radiothek-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant 支持 [ORF Radiothek](https://sound.orf.at)，可轻松将其广播电台添加到 Music Assistant。由 [DButter](https://github.com/) 贡献并维护。

ORF 是奥地利的公共广播机构，而 Radiothek 是其音频平台。它提供全国性和地区性 ORF 电台的直播，以及可供播后回听的节目和官方播客。收听完全免费，且无需 ORF 账户，但某些内容可能仅对奥地利的听众可用。

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes (some content may be region-locked) |
| Self-Hosted Local Media | No |
| Media Types Supported | Radio, Podcasts |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      |
| Maximum Stream Quality | AAC 320kbps |
| Login Method | None |

### Other

- ORF radio stations are available as well as additional private stations which are included in the ORF Radiothek lineup
- Official ORF podcasts are supported and this includes recently aired radio shows where available

### Other

- ORF radio stations are available as well as additional private stations which are included in the ORF Radiothek lineup
- Official ORF podcasts are supported and this includes recently aired radio shows where available

### Other

- ORF radio stations are available as well as additional private stations which are included in the ORF Radiothek lineup
- Official ORF podcasts are supported and this includes recently aired radio shows where available

### 其他

- 除了 ORF 广播电台外，还可使用 ORF Radiothek 阵容中包含的其他私人电台
- 支持官方 ORF 播客，其中包括最近播出的广播节目（如有提供）

## 配置

对于大多数用户而言无需进行配置，因为默认设置已符合典型需求。只有在网络连接较差时才可能需要更改协议或音质。

### 设置

- <b>首选 ORF 协议。</b>默认为 `hls`。可选值为 `hls` 或 `shoutcast`
- <b>ORF 音质。</b>默认为 `qxa`。可选值：hls 为 `q1a/q2a/q3a/q4a/qxa`；shoutcast 为 `q1a/q2a`，其中 q1a 最低，q4a 最高，qxa 为动态音质。
- <b>包含隐藏电台。</b>默认为 `false`。关闭此项可减少较少使用的电台在界面中造成的杂乱
- <b>回听（catch-up）流类型。</b>默认为 `progressive`。可选值为 `progressive` 或 `hls`
- <b>回听电台（可选）。</b>以逗号分隔的列表，可选值为 `bgl fm4 ktn noe oe1 oe3 ooe sbg stm tir vbg wie`。

## 已知问题 / 说明

- 在可用时会显示电台标志
- 在可能的情况下通过 API 获取元数据
