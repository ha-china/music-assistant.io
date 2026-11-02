---
title: "我想提供帮助"
---

# 我想提供帮助 <img src="/assets/icons/help-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant 是由使用它的人共同构建的。大多数提供帮助的方式都不需要编写代码，因此它们在本页中排在最前面。

你的第一次贡献不需要很大。修复一个错别字、翻译十个字符串、在 Discord 上回答一个问题：每一次都是真正的贡献，每一次都能让你了解项目是如何运作的。从小事做起，下一次就会更容易。

如果你更希望通过资金支持项目，请参阅本页底部的[捐赠](#donations)。

> [!TIP]
> **不确定从哪里开始？**
>
> 你不需要获得许可就可以开始，但知道该去哪里提问会有所帮助。加入 <a href="https://discord.gg/kaVm8hGpne" target="_blank" rel="noopener noreferrer">Music Assistant Discord</a> 并说明你想帮忙做什么。“我想帮忙做 X，我该从哪里开始？”这是一个非常好的开场白。
>
> 下面的许多途径都需要使用 GitHub。你只需要一个免费的 <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer">GitHub 账户</a>，而且大多数更改都可以直接在浏览器中完成。

## 无需编写代码

### 测试测试版

几乎每个周五都会发布新的测试版，每个稳定版发布前都会先经历一个测试版周期。运行测试版并报告出现的问题，可以避免这些 bug 影响其他人的家庭环境。测试版、每夜版和稳定版应用各自保留独立的数据，因此你可以将测试版与稳定版并行运行，并随时切换回稳定版。

- **你需要：** 一个即使出现问题也只是带来麻烦而不会造成灾难的安装环境，以及一个用于报告发现的 GitHub 账户。
- **从这里开始：** [发布周期](/release/#beta-releases)，然后是[并行运行版本](/release/#running-parallel-server-versions)。测试版在 <a href="https://beta.music-assistant.io/" target="_blank" rel="noopener noreferrer">beta.music-assistant.io</a> 有自己独立的文档。

> [!CAUTION]
> 较新通道的数据无法被较旧的通道使用，因此测试版的数据无法回退到稳定版。移除应用也会删除其数据。请先进行备份。

### 提交高质量的 Bug 报告

一份包含复现步骤的清晰报告能为开发者节省大量时间，这往往比修复本身花费的时间还要多。

- **你需要：** 一个 GitHub 账户。
- **从这里开始：** 阅读[故障排除](/faq/troubleshooting/)，搜索<a href="https://github.com/music-assistant/support/issues?q=is%3Aissue" target="_blank" rel="noopener noreferrer">已开启和已关闭的 issue</a>，然后在 <a href="https://github.com/music-assistant/support/issues" target="_blank" rel="noopener noreferrer">issue 跟踪器</a>中开启一个新的 issue。说明你运行的版本和通道、涉及的音乐源和播放器、你执行了什么操作、你的预期是什么，并附上日志。[支持](/support/)页面提供了更多关于在哪里提问的指南。

已经有人报告过了？在现有的 issue 中添加“我也是这样，版本 X，播放器 Y”，或者确认某个修复有效，同样非常有用。不过不要过度：一旦有几个人确认了某个问题，更多的 +1 只会增加噪音。

使用 AI 帮助撰写报告是可以的，但在发布前请务必阅读和检查，并使用 issue 模板而不是绕过它。看起来像是未经审查的 AI 输出，或者由自动化代理发布的报告，将会被关闭。请参阅 <a href="https://github.com/music-assistant/.github/blob/main/AI_POLICY.md" target="_blank" rel="noopener noreferrer">AI 政策</a>。

### 报告安全问题

发现了可能危及他人家庭环境或账户安全的问题？请不要开启公开的 issue。请私下报告，以便在细节公开之前进行修复。

- **从这里开始：** 在<a href="https://github.com/music-assistant/server/security" target="_blank" rel="noopener noreferrer">服务器仓库的 Security 选项卡</a>中使用 **Report a vulnerability**。

### 翻译

Music Assistant 界面由使用它的人在浏览器中通过 Lokalise 进行翻译。如果你是母语使用者，几分钟内就可以开始。

- **你需要：** 一个免费的 Lokalise 账户，在加入项目时创建。
- **从这里开始：** [翻译](/help/lokalise/)。

### 完善音乐数据

Music Assistant 使用 MusicBrainz 来跨源匹配艺术家、专辑和曲目。你在那里添加或修正的每一个发行版，都能改善所有人的匹配和封面效果，而不仅仅是 Music Assistant 用户。

- **你需要：** 一个免费的 MusicBrainz 账户。
- **从这里开始：** [完善 MusicBrainz 数据](/help/musicbrainz/)。

### 帮助他人

在 Discord 或 <a href="https://github.com/orgs/music-assistant/discussions/categories/q-a" target="_blank" rel="noopener noreferrer">GitHub Q&A 讨论区</a>回答问题，指引他人找到正确的页面，或者帮助整理收到的 issue 和功能请求。告诉某人“这个问题已经在 issue #123 中跟踪了”，就能为开发者省去重复工作。

- **你需要：** 一个 Discord 或 GitHub 账户。
- **想做得更多？** 版主们总是欢迎有人帮忙分担报告、请求和问题的处理工作。在 Discord 上联系 <a href="https://github.com/OzGav" target="_blank" rel="noopener noreferrer">OzGav</a>。

### 编写和修复文档

本站点由社区编写。修复一个错别字，更正不再符合你实际看到的操作说明，或者编写你希望在自己刚入门时就存在的操作指南。

- **你需要：** 一个 GitHub 账户。你不需要安装或构建任何东西：每个 pull request 都会生成包含你更改内容的整个站点的预览。
- **从这里开始：** <a href="https://github.com/music-assistant/music-assistant.io/blob/beta/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">文档贡献指南</a>。对线上站点的修复提交到 `main`，任何新内容提交到 `beta`。

### 分享你的作品

制作了一个仪表盘卡片、脚本、语音设置或其他围绕 Music Assistant 构建且对你很有用的工具？它也能帮助其他人。

- **从这里开始：** 查看[社区扩展](/community-extensions/)了解已有的内容，并在 Discord 或 <a href="https://github.com/orgs/music-assistant/discussions/categories/show-and-tell" target="_blank" rel="noopener noreferrer">GitHub 讨论区的 Show and Tell 分类</a>中分享你的作品。

### 广为宣传

在 GitHub 上为 <a href="https://github.com/music-assistant/server" target="_blank" rel="noopener noreferrer">music-assistant 服务器仓库</a>点亮星标（⭐），告诉他人你是如何使用 Music Assistant 的，并提交<a href="https://github.com/orgs/music-assistant/discussions/categories/feature-requests-and-ideas?discussions_q=is%3Aopen+category%3A%22Feature+requests+and+ideas%22+sort%3Atop" target="_blank" rel="noopener noreferrer">功能请求</a>，提出你希望添加或改进的功能。

## 编写代码

服务器使用 Python 编写，并大量依赖 asyncio。新的音乐源、播放器提供商和插件在服务器仓库中各自是一个独立的文件夹，因此你无需理解整个代码库即可开始。

AI 工具是受欢迎的，但必须有人类参与。你需要理解 pull request 中的每一处更改，并能够用自己的话在描述中以及回答审查问题时进行解释。看起来像是未经审查的 AI 输出，或者来自自主代理的 pull request，将不经审查直接关闭。开始前请阅读 <a href="https://github.com/music-assistant/.github/blob/main/AI_POLICY.md" target="_blank" rel="noopener noreferrer">AI 政策</a>。

### 添加音乐源、播放器或插件

- **你需要：** 一个 GitHub 账户，以及在 macOS 或 Linux 上安装 Python（在 Windows 上，请在 <a href="https://www.virtualbox.org/" target="_blank" rel="noopener noreferrer">VirtualBox</a> 等虚拟机中运行 Linux）
- **从这里开始：** <a href="https://developers.music-assistant.io/" target="_blank" rel="noopener noreferrer">开发者文档</a>会指导你搭建环境并解释每种提供商类型。<a href="https://github.com/music-assistant/server/tree/dev/music_assistant/providers" target="_blank" rel="noopener noreferrer">现有的提供商</a>，包括演示音乐和播放器提供商，是最好的参考。
- **然后：** 为其添加一个文档页面。<a href="https://github.com/music-assistant/music-assistant.io/blob/beta/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">文档贡献指南</a>详细介绍了新的音乐源或提供商所需的内容。

### 修复或改进现有功能

想找点事情做？试试 <a href="https://github.com/music-assistant/support/issues" target="_blank" rel="noopener noreferrer">issues</a>、<a href="https://github.com/orgs/music-assistant/projects/2/views/1" target="_blank" rel="noopener noreferrer">待办事项</a>或得票最多的<a href="https://github.com/orgs/music-assistant/discussions/categories/feature-requests-and-ideas?discussions_q=is%3Aopen+category%3A%22Feature+requests+and+ideas%22+sort%3Atop" target="_blank" rel="noopener noreferrer">功能请求</a>。你自己拥有的播放器或音乐源中的 bug 通常是最好的起点，因为你可以测试修复效果。

> [!NOTE]
> 计划做更大的改动？在编写大量代码之前，先在 Discord 上提一下。五分钟的交流可以避免你提交一个与项目发展方向不一致的 pull request。

## 后续流程

Music Assistant 由一个小团队维护，他们中的大多数人都是在业余时间进行审查。审查可能需要一些时间，因为 pull request 的数量多于审查者。专注于单一更改的小型 pull request 审查速度最快，因此如果你有多个不相关的更改，请分别提交。请保持耐心，在同一个 pull request 中回复审查意见，并继续推进。

## 捐赠

如果你希望通过资金支持项目，最好的方式是订阅 [Home Assistant Link](https://www.nabucasa.com/link/)。这是 Nabu Casa 提供的一项可选服务，Nabu Casa 是 [Open Home Foundation (OHF)](https://www.openhomefoundation.org/) 的商业合作伙伴，订阅费用将资助 OHF 及其所有项目，包括 Music Assistant。

你也可以通过购买 <a href="https://store.openhomefoundation.org/" target="_blank" rel="noopener noreferrer">Open Home Foundation 官方商店的周边产品</a>和官方品牌的 <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer">Home Assistant 硬件</a>来支持项目。

特别感谢某个音乐源、播放器或插件的贡献者？这些文档中的对应页面会列出贡献该功能的开发者，许多人在他们的 GitHub 个人资料中都有赞助或捐赠链接。核心团队名单可在[首页](/#the-core-team)查看。

整个团队在此提前表示最诚挚的感谢！
