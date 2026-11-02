---
title: 常见问题 - 分组
description: Music Assistant 中的播放器分组功能
---

# 分组

> [!CAUTION]
> 请勿在分组正在播放时删除或禁用该分组中的播放器（player）

Music Assistant 使用四种类型的分组（group）（这些类型在[播放器分组](/ui/#grouping-players)部分中进行了概述，其中三种类型将在下文详细介绍），这提供了一种灵活地将播放器组合在一起的方式。当分组开机后，就无法再向分组中的各个成员单独播放。若要向单个成员播放，必须关闭分组电源，或将该播放器从分组中移除。如果分组仍处于开机状态，则只能从[临时同步分组](#temporary-sync-group)中移除播放器，或从启用了动态成员（dynamic member）选项的[同步分组](#sync-groups)和[通用分组](#universal-groups)中移除播放器。在允许的情况下，可以通过[播放器列表](/ui/#player-list)中的复选框移除播放器，或使用 <a href="https://www.home-assistant.io/integrations/media_player/#media-control-actions" target="_blank" rel="noopener noreferrer">HA 的 media_player.unjoin 动作</a>移除播放器。

另请参阅公告（Announcements）中关于[分组行为](/integration/announcements/#group-behaviour)的部分。

对于临时和永久同步分组，Music Assistant 提供的[协议链接](/usage/#streaming-protocols)功能和 Sendspin 桥接为创建分组提供了强大的选项。Sendspin 桥接在 Sendspin 协议与 AirPlay 和 Google Cast 协议之间建立了链接，从而可以创建由不同提供程序（provider）类型组成的分组，并且所有成员都能同步播放。对于拥有支持 [AirPlay 功能](/player-support/sonos/#airplay-functionality)的 Sonos 设备的用户来说，这进一步使得 Sonos 设备也能同步播放。更令人惊叹的是，不支持 AirPlay 功能的 Sonos 设备可以与支持该功能的播放器组成一组，然后再将该播放器加入 AirPlay 分组。下图展示了上述所有功能。左侧是传统模式，其中每种提供程序类型都是相互隔离的（对于 MA 中可用的许多提供程序来说，情况依然如此）；右侧则展示了跨 Sendspin、AirPlay、Google Cast 和 Sonos 生态系统可实现的不同类型之间的广泛链接潜力。

<a href="/assets/group-diagram.png"><img src="/assets/group-diagram.png" alt="Preview image" style="width: 800px;"  loading="lazy" /></a>

> [!NOTE]
> 仅部分设备会显示 Sendspin 桥接，而且即使显示，由于设备固件限制，也不保证能够正常工作。AirPlay - Sendspin 桥接应始终可用。在 Chromecast 设备上，Sendspin 处于实验阶段且默认关闭，因此必须先在每个音箱上单独开启，该音箱才能加入 Sendspin 分组，请参阅 [Cast 设备上的 Sendspin](/player-support/google-cast/#sendspin-on-cast-devices)

## 临时同步分组

临时同步分组播放器可通过[播放器列表](/ui/#player-list)或 HA 动作进行配置。这种类型的分组提供了一种非常灵活的创建和销毁同步分组的方式，因为播放器可以随时被添加或移除。

### 功能

- 可以在播放前或播放过程中动态添加或移除播放器
- 分组中的播放器将完美同步（perfect sync）播放
- 可以使用 <a href="https://www.home-assistant.io/integrations/media_player/#action-media_playerjoin" target="_blank" rel="noopener noreferrer">media_player.join</a> 和 <a href="https://www.home-assistant.io/integrations/media_player/#action-media_playerunjoin" target="_blank" rel="noopener noreferrer">media_player.unjoin</a> 这两个 HA 动作来管理此类型的分组

### 已知问题 / 注意事项

- 可以通过[播放器列表](/ui/#player-list)中的复选框来链接播放器
- 仅允许将支持同步播放的同类型播放器连接在一起
- 当播放器以这种方式分组时，只有主播放器保存队列（queue）。例如，播放器 A 有一个现有的队列，播放器 B 和 C 连接到播放器 A。如果播放器 A 被关闭，播放器 B 和 C 将停止播放
- 当新设备加入时，某些播放器类型可能会短暂暂停
- 可以使用 HA 自动化（automation）来快速创建常用的一组播放器

## 同步分组

这些是永久的分组播放器。你可以在设置中的播放器列表创建一个同步分组，创建完成后，其成员在[播放器自身的设置页面](/settings/individual-player/)的分组设置中进行设定。当分组的构成很少变动，且希望播放器通常都能持续播放音乐时，应使用此类分组。通常情况下，如果分组正在播放，播放器无法从分组中移除，尽管可以将其静音（或将音量降低到 0）。如果需要添加或移除额外的播放器，可以启用动态成员选项，或者改用手动同步分组。同步分组开机/关机时，将恢复最初的成员集合。

![image](/assets/screenshots/syncgroup.png)

如上图所示，选择 ADD GROUP PLAYER 后，将出现分组配置界面，必须在该界面中选择分组类型。你需要为分组播放器指定一个名称。创建分组时选择播放器的顺序，就是在[播放器列表](/ui/#player-list)中查看该分组时播放器的显示顺序。

> [!NOTE]
> 只有在已添加支持完美同步的播放器或通用分组播放器提供程序的情况下，ADD GROUP PLAYER 按钮才会显示

> [!TIP]
> 请记住，Chromecast 设备必须在 Google Home 应用中进行分组才能实现完美同步

### 功能

- 所显示的原生播放器类型（即通用分组选项以外的类型）均支持完美同步
- 除了同步播放之外，无论分组中的哪个（些）播放器被关闭，分组都会保存队列
- 可用于同步的播放器列表会根据所做的选择动态变化

### 已知问题 / 注意事项

- 如上所述，队列由分组播放器保存，而非任何单个播放器。但是，如果分组的主控播放器丢失，播放将会停止，不过队列可以重新启动
- 如果其中一个子播放器已同步到另一个分组，则该分组将无法开机
- 即使一个或多个子播放器不可用，该分组仍会开机
- 如果在分组设置中，播放器的友好名称被一个异常的 ID 取代，那么该播放器很可能已被 MA 逻辑判定为不可用。请检查单个播放器的状态
- 当向正在播放的分组中添加播放器时，AirPlay、Snapcast 和 Sonos 会继续播放，但其他所有类型都会短暂暂停以重新同步

## 通用分组

Music Assistant 支持将不同的播放设备组合在一起。其配置方式与同步分组部分所述相同，只需将分组类型选为 UNIVERSAL GROUP PLAYER 即可。这些分组同样支持动态成员选项。通用分组功能默认未启用，必须先将其作为提供程序添加。

### 功能

- 所有设备都可以被分组并播放相同的音频，但无法同步播放音频。仅对彼此相距较远的播放器使用此播放器类型
- 有关具体的限制，请参阅各个播放器提供程序页面

### 设置

- <b>通用分组播放的输出格式。</b>通用分组会向每个成员传输完全相同的编码流，而不考虑各成员的能力。请选择所有成员都能播放的格式。MP3 是最稳妥的默认选项。可选格式包括 `MP3 (320 kbps)`、`FLAC 44.1 kHz / 16-bit` 和 `FLAC 48 kHz / 24-bit`。仅当每个成员都支持 FLAC 播放时才使用 FLAC 选项

### 已知问题 / 注意事项

- 如果可以使用[同步分组或原生分组](/ui/#grouping-players)，则应避免使用此类型的分组
- 通用分组不能包含其他分组
- 当向正在播放的分组中添加播放器时，MA 会尝试无缝加入，但某些播放器类型可能会出现轻微停顿
- 如果其中一个子播放器已同步到另一个分组，则该分组将无法开机
- 即使一个或多个子播放器不可用，该分组仍会开机
- 如果在分组设置中，播放器的友好名称被一个异常的 ID 取代，那么该播放器很可能已被 MA 逻辑判定为不可用。请检查单个播放器的状态
- 通用分组采用尽力而为的方式，可能无法在所有播放器型号上正常工作，或产生意外的结果
- 目前无法添加一个能为大多数用户提供可接受体验的固定同步延迟选项
