# Lighthouse: Optimize website speed


## Goal of tutorial

本教程将教您如何使用 Chrome DevTools 找到使您的网站加载更快的方法。

请继续阅读，或观看本教程的视频版本：

[Improving Load Performance](https://www.youtube.com/watch?v=5fLW5Q5ODiE)

> 重要提示：
> 本视频是使用 Chrome 68 制作的。大部分内容仍然适用，但某些功能已进行了更新。例如，**Audits** 面板现在称为 **Lighthouse**，并且外观有所不同，但所有相同的选项仍然存在。有关更多信息，请参阅 Lighthouse 的[新功能](https://developer.chrome.com/tags/new-in-lighthouse/)


## 前提

- 您应该具备基本的网页开发经验，类似于在这门 [Introduction to Web Development class](https://www.coursera.org/learn/web-development#syllabus) 课程中所教授的内容。
- 您无需事先了解有关加载性能的任何知识。您将在本教程中学习相关内容！


## 介绍

这是Tony。在猫界，Tony非常有名。他建立了一个[网站](https://tony.glitch.me/)，让他的粉丝们了解他最喜欢的食物。他的粉丝们都很喜欢这个网站，但是Tony一直听到一些抱怨说网站加载速度慢。Tony请您帮助他加快网站的加载速度。

### 第一步：对网站进行审核

每当您着手改善网站的加载性能时，请始终从进行 **audit** 审核开始。审核有两个重要的功能：
- 它为您创建了一个**基准**，用于衡量后续的更改
- 它为您提供了有关哪些更改将产生重大影响的**实用提示**

#### 创建

首先需要给 Tony 的[网站](https://glitch.com/edit/#!/tony) 创建一个新的工作环境，以后之后能对其进行修改：
1. [在 Glitch 上对网站的项目进行重新编辑](https://glitch.com/edit/#!/remix/tony)，您的新项目将在一个标签页中打开。此标签页将被称为编辑器标签页。
项目的名称从“tony”更改为随机生成的名字。现在，您拥有自己可编辑的代码副本。稍后，您可以对代码进行修改。

2. 在编辑器标签页的底部，点击“Preview > Preview in a new window”。将在一个新的标签页中打开演示。此标签页将被称为演示标签页。网站加载可能需要一些时间。

3. 在演示标签页旁边打开 DevTools

> 重要提示
> 本教程的其余截图中，DevTools 都是在[单独的窗口](https://developer.chrome.com/docs/devtools/customize/#placement)中显示


#### 建立基准

基准是在您对网站进行任何性能提升之前网站性能表现的记录
1. 打开 **Lighthouse** 面板。它可能隐藏在 >> More panels 中。
> 该面板由其同名工具 [Lighthouse](https://developer.chrome.com/docs/lighthouse/) 提供支持，Lighthouse 是一个用于改进您的 Web 应用程序质量的自动化工具。

2. 按截图所示对 Lighthouse report 配置进行设置。以下是不同选项的说明：
- **Clear Storage** 清除存储数据 
勾选该复选框会在每次审核之前清除与页面相关的所有存储。如果您想审核首次访问者在网站上的体验，请保持此设置。当您希望进行重复访问的体验时，请取消勾选。
- **Simulated throttling(default)** 模拟节流（默认） 
该选项模拟了在移动设备上浏览的典型场景。之所以称为“模拟”，是因为 Lighthouse 在审核过程中实际上并不进行限速。相反，它只是推算出在移动场景下页面加载所需的时间。另一方面，**DevTools throttling(advanced)** 开发者工具限速（高级）设置会实际限制您的 CPU 和网络，但审核过程会更长。
- **Mode > Navigation(Default)** 模式 > 导航（默认）
这种模式分析单个页面加载，这正是我们在本教程中所需要的。欲了解更多信息，请参阅“[三种模式](https://github.com/GoogleChrome/lighthouse/blob/HEAD/docs/user-flows.md#the-three-modes-navigation-timespan-snapshot)”。
- **Device > Mobile** 设备 > 移动设备
移动设备选项会更改 user agent 字段并模拟移动设备视口。桌面选项基本上只是禁用了移动设备的更改。
- **Categories > Performance** 类别 > 性能
只勾选一个类别将使 Lighthouse 仅生成与之相应的一组审核相关的报告。如果您想查看它们提供的建议类型，可以同时勾选其他类别。禁用不相关的类别会稍微加快审核过程

3. 点击 **Analyze page load** 分析网页加载情况
10 到 30 秒之后，**Lighthouse** 面板会显示当前网页性能的报告

##### 处理报告错误
如果您在 Lighthouse 报告中遇到错误，请尝试从无其他标签打开的[隐身窗口](https://support.google.com/chrome/answer/95464)中运行演示标签页。这样可以确保您从一个干净的状态下运行 Chrome。特别是 Chrome 扩展常常会干扰审核过程。


### 了解您的报告内容
报告顶部的数字是网站的综合性能评分。在你修改代码之后，应该可以看到评分上升。更高的评分意味着更好的性能。

#### Metrics 指标
向下滑动至 Metrics 指标部分，点击 Expand view 展开视图。点击 Learn more 阅读当前指标的相关文档

本节提供了网站性能的定量度量。每个指标都提供了对性能不同方面的洞察。例如，首次内容绘制（First Contentful Paint）告诉您内容首次绘制到屏幕上的时间，这是用户对页面加载感知的重要里程碑；而交互就绪时间（Time To Interactive）则标志着页面准备好处理用户交互的时间点。

#### Screenshots 截图
接下来是一系列屏幕截图，展示了页面在加载过程中的外观

#### Opportunities 优化建议
提供了关于如何改进该特定页面加载性能的具体建议

点击一条优化建议以了解更多相关内容

点击 Learn More... 可以了解该条优化建议的重要性以及如何修改该问题的具体建议

#### Diagnostics 诊断结果
提供有关导致页面加载时间增加的因素的更多信息

#### Passed audits 已通过的审核
展示了当前网站做得好的部分

### Experiment 实验
Lighthouse 报告的 **Opportunities** 优化建议部分提供了优化页面性能的建议。在本小节中，您需要对代码库根据建议进行修改，并在每次修改后对网站进行审核，以衡量它对网站速度的影响

#### Enable text compression 启用文本压缩
报告中提到，启用文本压缩是提升页面性能的首要优化建议之一

文本压缩是指在将文本文件通过网络发送之前，减小或压缩文件的大小。就像您在发送电子邮件之前可能会对文件夹进行压缩一样，以减小文件的大小。

在启用压缩之前，以下是您可以手动检查文本资源是否已经压缩的几种方式。

打开 **Network** 网络面板，点击蓝色齿轮 **Settings** 网络设置，勾选 **Use large request rows** 使用大量请求行

> 重要提示
> 如果网络请求表格中没有 **Size** 大小一栏，右键表头勾选大小

每个大小单元格显示两个值。顶部的值是下载资源的大小，底部的值是未压缩资源的大小。如果这两个值相同，那么资源在通过网络发送时没有进行压缩。在这个例子中，`bundle.js` 的顶部和底部值都是 `1.4 MB`。

您还可以通过检查资源的HTTP标头来检查压缩：

1. 点击 **bundle.js** 选择 Headers 标头面板
2. 在 **Response Headers** 响应标头中查找 `content-encoding`。找不到该字段，意味着 `bundle.js` 并没有被压缩。当一个资源被压缩，其 `content-encoding` 响应头通常为 `gzip`、`deflate` 或 `br`。请查看 [Directives](https://developer.mozilla.org/docs/Web/HTTP/Headers/Content-Encoding#Directives) 以了解这些值的含义


解释够了，是时候做出一些改变了！通过添加几行代码来启用文本压缩
1. 在编辑器标签页中，打开 **server.js** 添加下面两行高亮的代码
```js
...
const fs = require('fs');
const compression = require('compression');

app.use(compression());
app.use(express.static('build'));
...
```
2. 确保 `app.use(compression())` 在 `app.use(express.static('build'))` 前面

> 注意：通常你需要通过诸如 `npm i -S compression` 等命令安装 `compression` 依赖，但这个项目已经为你安装好了

3. 等待 Glitch 部署网站的新版本。在左下角显示一个开心的表情符号表示部署成功。


使用之前学到的工作流，手动检查压缩是否起作用

1. 回到演示标签页，重载页面
现在 `bundle.js` 等文本资源的大小列应该会显示两个不同的值。`bundle.js` 为例，顶部值 `269KB` 
表示文件在网络上发送时的大小，底部值 `1.4MB` 表示未压缩的文件大小
2. `bundle.js` 的响应标头中应该会显示 `content-encoding: gzip` 响应头


给当前页面再次生成 Lighthouse 报告来衡量文本压缩对页面加载性能的影响

1. 打开 **Lighthouse** 面板，点击 **+ Perform an audit** 执行审核... 按钮
2. 保持跟上一次一样的设置，点击 **Analyze page load** 分析网页加载情况

这样一来，综合性能评分应该已经提高了，意味着网站加载更快了


##### 实际生产中的文本压缩

大多数服务器确实有像这样简单的解决方案来启用压缩！只需搜索如何配置您使用的服务器以压缩文本即可。

#### Resize images 调整图片大小
