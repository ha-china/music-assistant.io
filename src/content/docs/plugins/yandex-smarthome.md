---
title: "Yandex Smart Home 插件"
description: 将你的播放器添加到 Yandex Smart Home，让 Alice 能够通过语音控制它们。
pluginGroup: other-systems
---

# Yandex Smart Home

该插件会将你的 Music Assistant 播放器（player）添加到 <a href="https://alice.yandex.ru/smart-home" target="_blank" rel="noopener noreferrer">Yandex Smart Home</a>，这样你就可以像控制台灯或插座一样，通过 Alice 用语音控制它们。由 <a href="https://github.com/trudenboy" target="_blank" rel="noopener noreferrer">Mikhail Nevskiy</a> 贡献并维护

设置完成后，你可以说出类似 «Alice，暂停厨房里的播放器» 或 «Alice，把厨房里的音量设为 50» 这样的指令，Music Assistant 就会照做。音频不会经过 Yandex——它只负责传输指令。

> [!CAUTION]
> 这是一个非官方的实现，与 Yandex 无任何关联，也未获得 Yandex 的认可。

> [!NOTE]
> **Alice 无法为你点播歌曲**
>
> Yandex 不允许让外部设备播放指定的歌曲或专辑，因此 «Alice，播放音乐» 只会继续播放 Music Assistant 中已经在队列里的内容。
>
> 对于播放列表（playlist）有一个变通办法：在插件设置中最多选择十个播放列表，Alice 就能按编号启动其中任意一个——«Alice，将 \<player\> 的音源切换到 **五**»。参见 [通过语音启动播放列表](#starting-a-playlist-by-voice)。

## 功能特性

- 任何 Music Assistant 播放器都可以通过 Alice 用语音进行控制
- 对于 Cloud Plus 和 Direct（直连）模式，插件会自动为你创建专属的 Yandex 技能（skill），因此无需在 Yandex 开发者网站上手动执行任何操作
- 最多可以将十个播放列表通过语音按编号启动
- 如果技能的设置在中途失败，再次点击按钮会从中断处继续，而不是从头开始

### 支持的语音指令

| 语音指令 | 操作 |
|---|---|
| «Alice，在 \<name\> 上播放音乐» | 播放 / 恢复当前队列 |
| «Alice，关闭 \<name\>» | 停止播放 |
| «Alice，在 \<name\> 上调高 / 调低音量» | 音量增大 / 减小（±10） |
| «Alice，在 \<name\> 上把音量设为 50» | 将音量设置为 50% |
| «Alice，暂停 \<name\>» | 暂停 |
| «Alice，静音 \<name\>» | 静音（仅限支持该功能的播放器） |
| «Alice，在 \<name\> 上下一首 / 上一首» | 下一首 / 上一首曲目 |
| «Alice，将 \<name\> 的音源切换到 \<一到十\>» | 按编号切换到某个音源。这包括播放器自带的音源以及你设置的所有播放列表（参见 [通过语音启动播放列表](#starting-a-playlist-by-voice)） |

## 配置

前往 **设置 → 插件 → 添加插件**，然后添加 **Yandex Smart Home**。其余的设置都在插件自身的设置对话框中完成，如下文所述。

这一切背后的 Yandex 服务是 <a href="https://yandex.ru/dev/dialogs/smart-home/" target="_blank" rel="noopener noreferrer">Yandex Dialogs Smart Home</a>，你创建的任何技能都存放在那里。

插件有三种连接方式。请选择适合你自己情况的一种：

- **Cloud（云端）** ——最简单的方式。所有流量都经由共享的 <a href="https://yaha-cloud.ru/" target="_blank" rel="noopener noreferrer">Yaha Cloud</a> 服务，因此你的 Music Assistant 无需能够从互联网访问。每个 Yandex 账户只能有一个设备使用它，所以如果你已经把 Yaha Cloud 关联到了其他东西（例如 Home Assistant），请改用 Cloud Plus。参见 [Cloud 设置](#cloud-setup)。
- **Cloud Plus** ——同样的服务，但使用的是你自己的私有技能，而不是共享技能。如果你的账户上 Yaha Cloud 已被占用，就使用这种方式。参见 [设置你的技能](#setting-up-your-skill)，然后参阅 [Cloud Plus 设置](#cloud-plus-setup)。
- **Direct** ——Yandex 直接与你的 Music Assistant 服务器通信，中间没有任何环节。不共享任何内容，但你的服务器必须能够通过 HTTPS 从互联网访问。参见 [设置你的技能](#setting-up-your-skill)，然后参阅 [Direct 设置](#direct-setup)。

### 设置你的技能

Cloud Plus 和 Direct 都需要在 Yandex 上有一个私有技能。插件会为你创建它，因此你完全不必接触 Yandex 开发者网站：

1. 插件会要求你在 `ya.ru/device` 上登录。此时会弹出一个带有确认代码的小窗口。
2. 然后它会在 Yandex 上创建技能并完成所有设置。
3. **技能 ID（Skill ID）** 字段会自动填写。但**技能 OAuth 令牌（Skill OAuth Token）**仍需要你自己获取，这是下文所述的一个单独步骤。

如果其中任何一步在中途失败，只需再次点击按钮——它会从停止的地方继续，而不是从头开始，而且你只需要确认一次登录代码。

> [!NOTE]
> 这依赖于 Yandex 的某一部分，而他们既未公开该部分，也不承诺保持其稳定。如果它某天失效了，设置中的技能 ID、技能 OAuth 令牌和后端 URL（Backend URL）字段仍然存在，你可以自行填写，并且旁边会显示一个指向 Yandex 开发者网站的链接。

### Cloud 设置

无需创建任何东西，也无需向互联网暴露任何内容。你只需将你的 Music Assistant 注册到共享的 Yaha Cloud 服务，然后在 Yandex 应用中使用一次性代码将其关联：

1. 在 Music Assistant 设置中添加 **Yandex Smart Home** 插件，并将连接类型（Connection Type）设置为 `cloud`。
2. 点击**注册到云端（Register with cloud）**。
3. 点击**获取 OTP 代码（Get OTP code）**以获取一次性关联码。
4. 在手机的 Yandex 应用中前往 **设备 → 添加设备 → 智能家居**，找到 **Yaha Cloud** 并输入该代码。

### Cloud Plus 设置

如果你的 Yandex 账户上 Yaha Cloud 已经关联到了其他东西，或者你更希望拥有自己的私有技能，请使用这种方式。设置表单会引导你完成三个步骤，每一步只有在上一步完成后才会出现：

1. **注册到云端** ——将你的 Music Assistant 注册到该服务。
2. **自动创建智能家居技能** ——按上文所述创建你的私有技能。**技能 ID** 会自动填写。随后表单会显示一个 Yandex 链接——打开它，批准访问，然后把返回的长值复制到**技能 OAuth 令牌**中。
3. **获取 OTP 代码并在 Yandex 应用中关联** ——点击**获取 OTP 代码**，然后在 Yandex 应用中前往 **设备 → 添加设备 → 智能家居**，找到你自己的技能并输入该代码。

### Direct 设置

Yandex 会直接与你的 Music Assistant 服务器通信，因此你的服务器必须能够通过 HTTPS 从互联网访问。插件仍然会为你创建技能：

1. 添加 **Yandex Smart Home** 插件，并将连接类型设置为 `direct`。你的**基础 URL（Base URL）**（[**设置 → 系统 → Webserver**](/settings/core/#webserver) → 基础 URL）必须是一个可以通过 HTTPS 从互联网访问的地址。如果你希望它继续指向你的本地地址，可以改为将公网地址填入插件自身的**外部基础 URL（External Base URL）**设置——只有 Yandex 会使用它。
2. 点击**自动创建智能家居技能**。完成后，表单会显示一个 Yandex 链接——打开它，批准访问，把返回的长值复制到**技能 OAuth 令牌**中并保存。
3. 在 Yandex 应用中前往 **设备 → 添加设备 → 智能家居**，然后选择你的技能。

### 设置

- **实例名称（Instance Name）** ——这个 Music Assistant 在 Yandex Smart Home 应用中所显示的名称。
- **连接类型** —— `cloud`、`cloud_plus` 或 `direct`（见上文）。
- **外部基础 URL** ——仅用于 `direct` 模式。一个供 Yandex 使用的公网 HTTPS 地址，这样你的常规基础 URL 就可以继续指向本地地址，你的 Home Assistant 和本地网页界面也能照常工作。
- **暴露的播放器（Exposed Players）** ——Alice 可以控制哪些播放器。留空表示全部播放器。
- **暴露的播放列表（Exposed Playlists）** ——最多十个来自你的媒体库、可来自任何音乐来源的播放列表，Alice 可以按编号启动它们。如果列表为空，请在你的音乐来源完成同步之后，保存并重新打开设置。参见 [通过语音启动播放列表](#starting-a-playlist-by-voice)。
- **技能 ID** 和**技能 OAuth 令牌** ——`cloud_plus` 和 `direct` 模式需要用到。技能创建完成后，技能 ID 会自动填写。至于令牌，打开表单中显示的 Yandex 链接，批准访问，然后把返回的长值粘贴到此处。

### 通过语音启动播放列表

你无法要求 Alice 按名称播放播放列表，因为 Yandex 只允许外部设备提供固定的一组音源，编号为 `one` 到 `ten`。无论是在 Yandex 应用还是其他任何地方，都无法为这些编号指定自定义名称。因此你需要提前挑选好播放列表，并记住哪个编号对应哪个列表。

1. 在插件设置中，在**暴露的播放列表**下最多选择十个播放列表。如果播放器有自己的音源，这些音源会排在前面，你的播放列表则填充剩余名额（最多到十个）。你挑选它们的顺序就是 Alice 认识它们的顺序。
2. 说出 «Alice，将 \<player\> 的音源切换到 **五**»，并使用该播放列表最终对应的那个编号。播放器会在需要时自动开启，然后播放列表开始播放。

> [!TIP]
> 保持列表简短，一旦确定就尽量不要再改动。把你最常用的播放列表放在第一位，次常用的放在第二位，依此类推。重新排序列表会改变所有编号。

## 已知问题 / 注意事项

- 无法让 Alice 播放特定的歌曲或专辑，只能按编号点播播放列表。如果你想按名称点播音乐，请改用 <a href="https://github.com/trudenboy/ma-provider-yandex-alice" target="_blank" rel="noopener noreferrer">Yandex Alice 插件</a>。
- Alice 无法跳转到曲目中的某个位置。
- 曲目名称、艺术家和封面图片不会传递给 Yandex，因此它们不会在那里显示。
- Direct 模式要求你的 Music Assistant 服务器能够通过 HTTPS 从互联网访问。如果不能，请使用云端方案中的一种。
- 创建技能依赖于 Yandex 中他们未公开的部分。如果它失效了，你仍然可以在设置中自行填写所有内容。
