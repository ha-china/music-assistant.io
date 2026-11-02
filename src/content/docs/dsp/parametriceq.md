---
title: DSP 参数均衡器
description: 解释 DSP 参数均衡器滤波器的用途和效果
---

# 参数均衡器

参数均衡器（Parametric Equalizer，简称 PEQ）是一种用于微调音频的<a href="https://www.masteringbox.com/learn/parametric-eq" target="_blank" rel="noopener noreferrer">强大工具</a>。与更简单的音调控制不同，参数均衡器可以精确调整特定的频率范围。

参数均衡器可用于使声音适配房间的声学特性、补偿扬声器或耳机的特性，或根据个人喜好微调频率平衡。MA 支持对两个声道（左声道和右声道）以相同方式或分别应用校正。

如果需要，可以在 MA 信号路径中添加多个参数均衡器滤波器。

此滤波器在[播放器的 DSP 设置](/settings/individual-player/#dsp-settings)中添加和配置。有关完整的滤波器路径，请参阅[数字信号处理概述](/dsp/)。

## 用法

显示屏顶部有一个按钮，用于启用多声道选项。启用后会显示额外的声道选择框，并允许按声道应用校正。

### 频段调整

可以向参数均衡器添加数量不限的频段，这些频段可以影响所有声道，也可以单独影响左声道或右声道。对于每个频段，可以控制：

- **频率（Frequency）：** 要调整的中心频率（例如，100Hz 用于低音，1kHz 用于中音，10kHz 用于高音）。

- **增益（Gain）：** 对该频率施加的提升（增大音量）或削减（减小音量）的量，以分贝（dB）为单位。

- **Q（品质因数，Quality Factor）：** 决定受影响频率范围的宽度。Q 值越高，调整范围越窄、越集中；Q 值越低，变化范围越宽、越平缓。

- **滤波器类型（Filter Type）：** 决定<a href="https://www.musicguymixing.com/eq-filters/" target="_blank" rel="noopener noreferrer">调整的形状</a>。可用选项包括 Peak（又称 Bell）、High Shelf、Low Shelf、High Pass、Low Pass 和 Notch。

### 前置放大（Preamp）

参数均衡器还允许进行前置放大增益调整。虽然这会产生与输入级增益调整相同的效果，但将其放在这里意味着该值可以被导入和导出。此外，如果参数均衡器的设置整体上使信号变小，那么在这里调整增益意味着在启用/禁用均衡器时，音量将保持不变。

### 预设

如果您测量过扬声器，或者想使用 <a href="https://autoeq.app/" target="_blank" rel="noopener noreferrer">AutoEQ</a> 校正耳机，则可以自动将预设导入到此滤波器中。

Music Assistant 接受<a href="https://equalizerapo.com" target="_blank" rel="noopener noreferrer">Equalizer APO 的参数均衡器</a>文件格式，该格式在各种应用程序中被广泛采用，并且此导入功能还可以与<a href="https://www.roomeqwizard.com" target="_blank" rel="noopener noreferrer">Room EQ Wizard</a>（REW）的 `Export filter settings as text file format` 无缝配合使用。
虽然并非支持所有滤波器类型（Modal、BP、LSC x dB、HS x dB、AP、带 dB 斜率的 LS、带 dB 斜率的 HS），但最重要的类型均可正常使用。

可以从多种来源导入均衡器预设，包括 <a href="https://wwmm.github.io/easyeffects/" target="_blank" rel="noopener noreferrer">EasyEffects</a>（作为 APO 预设）以及来自 <a href="https://housecurve.com/" target="_blank" rel="noopener noreferrer">HouseCurve</a> 的兼容 REW 的预设

均衡器也可以导出以供其他应用程序使用。例如，这些数据可用于：APO、另一个 Music Assistant 实例或 EasyEffects。

#### 多声道

当分别定义左声道和右声道时，参数均衡器预设文件有多种格式。导入多声道预设文件时，请按以下步骤操作：

- 如果只有一个包含两个声道设置的预设，只需使用 `Import APO/REW Preset` 按钮导入该文件即可
- 如果每个声道都有单独的预设文件：
    1. 启用多声道控制
    2. 选择左声道
    3. 使用 `Import APO/REW Preset` 按钮导入左声道的预设
    4. 选择右声道
    5. 使用 `Import APO/REW Preset` 按钮导入右声道的预设

如果激活了任何多声道特定选项，`Export APO Preset` 按钮将生成一个包含两个声道信息的单个预设文件。
