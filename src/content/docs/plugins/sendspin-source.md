---
title: Sendspin 音源
description: 将 Sendspin 设备上的黑胶唱机、麦克风或线路输入接入 Music Assistant 作为实时输入（Live Input）。
pluginGroup: incoming
---

# Sendspin 音源 <img src="/assets/icons/sendspin-icon.svg" alt="Sendspin logo" style="width: 70px; float: right;" loading="lazy" />

Sendspin 音源插件将兼容设备的音频作为实时输入（Live Input）引入 Music Assistant。线路输入（line-in）或 AUX 连接、黑胶唱机前级放大器或麦克风随后即可在任何可用的 Music Assistant 播放器、立体声配对或分组上播放。

Sendspin calls incoming audio the `source` role. The built-in [Sendspin player provider](/player-support/sendspin/) handles audio sent from Music Assistant to devices, while the companion Sendspin Source plugin handles audio coming into Music Assistant. Both use the same client connection.

> [!NOTE]
> A device only sends its audio to Music Assistant once you allow it, by pairing it or by connecting it unpaired with its audio input.

## 功能

- Discovers connected Sendspin clients that support `source@v1`
- Adds every source you allowed as a Live Input
- Plays an input on any Music Assistant player, stereo pair, or group
- Supports several different source devices streaming at the same time
- Can start and stop a line-in automatically on devices that report signal detection

## 设置与发现

Sendspin 音源为内置功能，会自动启动。

Connect a compatible Sendspin source client to Music Assistant. Set it up from its player settings with **Start setup**. Pair it, or choose **Connect unpaired with audio input** if the device allows connecting without pairing. Once set up, it appears as one Live Input. See [Setting up a device](/player-support/sendspin/#setting-up-a-device) for the steps.

For a device connected unpaired, you can turn its audio input on or off later with **Turn on audio input** and **Turn off audio input** in its player settings.

## 播放实时输入

选择您想收听该输入的播放器、立体声配对或分组，然后打开**浏览**。如果只有一个可用的 Sendspin 输入，它会直接显示在浏览中；如果有多个可用，则打开 **Sendspin 音源**并选择一个。按**播放**即可在所选播放目标上开始播放。

A device that is both a player and a source also lists its own line-in among that player's sources.

Each source can play on only one target at a time. Selecting the same source on another target moves it there. Different source clients can play on different targets concurrently.

实时输入以 48 kHz、16 位立体声音频播放。Music Assistant 会针对微小的时序和网络波动进行调整，以保持播放稳定。

## 线路输入激活时自动开始播放

如果您的音源设备能够检测输入信号，Music Assistant 可以在输入激活时立即在所选播放器上开始播放。例如，将唱针放到黑胶唱机上即可在您选择的房间中开始播放。

通过音源设备的**自动播放线路输入到**（Automatically play line-in on）播放器设置来选择目标位置。您可以选择任何可用的播放器、立体声配对或分组。目标位置无需使用 Sendspin。既是音源又是播放器的设备默认为**此设备**；仅用于采集的设备默认为**关闭**。

播放会在短暂延迟后开始，以防止短暂的信号变化意外触发播放。信号消失一分钟后播放会停止。

重启 Music Assistant 或重新连接设备并不会启动之前已处于活动状态的输入。自动播放也不会移动已经在其他地方播放的音源。

没有信号检测功能的设备仍可用于手动播放，且不会显示此设置。所选目标位置按其通常方式播放；自动播放不会使其切换到 Sendspin。

## 延迟

高级提供程序设置**目标延迟**（Target latency）控制 Music Assistant 为保持播放稳定而缓冲的音频量。较大的值有助于应对不稳定的网络，但会增加输入与扬声器之间的延迟。该设置适用于所有 Sendspin 音源。各个音源无法单独设置延迟值。

## 中断与重新连接

音频中的短暂间隙不会立即停止播放。手动启动的输入会等待音频恢复，只有在其音源超时后才会停止。自动启动的输入会在无信号一分钟后停止，如上文所述。

如果客户端在播放时断开连接，Music Assistant 会以静音保持播放状态。当客户端在超时前重新连接时，实时音频会在其缓冲区重建后恢复。客户端断开连接期间采集的音频无法恢复。

如果客户端只是变为不可用且未重新连接，其音源流不会自动重启。
