---
title: "内置"
---

# 内置提供程序（Builtin Provider）  <img src="/assets/icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

内置（Builtin）提供程序支持手动将曲目和广播电台的 URL 添加到数据库中，并且还会生成各种[播放列表](/usage/#playlists)。

## 功能

- 您可以添加可通过 URL 访问的曲目或任何在线电台。您也可以添加本地创建的电台，例如使用 <a href="https://icecast.org/" target="_blank" rel="noopener noreferrer">Icecast</a>。

## 设置

对于每个内置播放列表，都有一个用于启用或禁用它们的开关。 

## 用法

此提供程序会自动添加，且无法被禁用或删除。

### 添加条目

要手动添加条目，请按照以下步骤操作：

1. 在主菜单中选择 'Tracks'（曲目）、'Radio'（电台）或 'Playlists'（播放列表）
2. 然后点击右上角的图标（播放列表导入图标的样式有所不同）

    ![screenshot](/assets/screenshots/url.png)

3. 添加完整的 URL（包括 http:// 或 https://），并可选择填写自定义名称和图片 URL。对于播放列表，请从对话框中选择播放列表文件。

完成第 3 步后，曲目、电台或播放列表将出现在相应的视图中（可能需要点击一下刷新图标 ![screenshot](/assets/icons//icon-refresh-plain.png)）。

### 编辑条目

自定义名称和图片 URL 可以通过导航到相应条目的详情页，然后打开右上角的 ⋮ 菜单并选择 EDIT \<ITEM\> 来修改，其中 \<ITEM\> 为 Track（曲目）、Playlist（播放列表）或 Radio Station（广播电台）。

URI 无法更改。如需更改，则必须从媒体库中移除现有条目，然后添加新条目。
