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

您的新报告显示，适当调整图像大小是另一个重要的优化建议。

减小图像文件的大小可以加快加载时间。如果用户在屏幕宽度为 500 像素的移动设备上查看图像，那么发送一个宽度为 1500 像素的图像实际上是没有意义的。理想情况下，您应该发送一个最多为 500 像素宽的图像。

1. 在您的报告中，点击 **Properly size images** 适当调整图片大小 查看哪些图片应该被重新设置。看起来这四张图像都比必要的尺寸要大。
2. 回到编辑器标签页，打开 `src/model.js`。
3. 修改 `const dir = 'big'` 成 `const dir = 'small'`。此目录包含已调整大小的相同图像的副本。
4. 再次审核页面，观察上述修改对加载性能的影响。


看起来上述修改对整体性能评分只有轻微影响。然而，评分并没有清楚地显示您为用户节省了多少网络流量。原有图片的总大小约为 6.1 MB，而现在只有约 633 kB。您可以在 **Network** 网络面板底部的状态栏中查看这一点。


##### 实际生产中的调整图片大小
对于一个小型应用程序来说，进行这样一次性的调整大小可能已经足够了。但对于一个大型应用程序来说，这显然不可扩展。以下是在大型应用程序中管理图像的一些策略：
- 在构建过程中调整图片大小
- 在构建过程中为每个图像创建多个尺寸，然后在代码中使用 `srcset`。在运行时，浏览器会根据运行设备选择最佳尺寸。请参考“[Relative-sized images 相对大小的图像](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images#relative_sized_images)”以了解更多信息。
- 使用图片 CDN，在用户请求时动态调整图片大小。
- 至少，优化每一张图片。这也能节省巨大的开销。优化是指将图像通过特殊的程序进行处理，以减小图像文件的大小。请参考“[Essential Image Optimization 必不可少的图片优化](https://images.guide/)”获取更多的提示。


#### Eliminate render-blocking resources 移除阻塞渲染的资源
最新的报告显示，移除阻塞渲染的资源是目前最要紧的优化建议。

阻塞渲染的资源是指在浏览器能够显示页面之前，必须下载、解析和执行的外部 JavaScript 或 CSS 文件。目标是只运行页面能正常显示所必需的核心 CSS 和 JavaScript 代码。

首要的任务，找出那些在页面加载时并不需要执行的代码。
1. 点击 **Eliminate render-blocking resources 移除阻塞渲染的资源** 查看哪些资源在阻塞渲染：是 `lodash.js` 和 `jquery.js`。
2. 根据您的操作系统，执行以下操作 [open the Command Menu 打开命令菜单](https://developer.chrome.com/docs/devtools/command-menu/#ope)
    - Mac, `Command + Shift + P`
    - Windows, Linux 或 ChromeOS, `Control + Shift + P`
3. 在输入框中输入 `Coverage`(中文 `覆盖`) 并选择 **Show Coverage 显示覆盖范围**
    在 `Drawer` 抽屉式导航栏中会打开 [The Coverage tab 覆盖率面板](https://developer.chrome.com/docs/devtools/coverage/)
4. 点击 **Reload 开始检测覆盖率，并重新加载网页**。覆盖率选项卡提供了 `bundle.js`、`jquery.js` 和 `lodash.js` 中有多少代码在页面加载过程中执行的概览信息。
    可以看到 jQuery 和 Lodash 分别有 74% 和 30% 的代码未执行。
5. 点击 **jquery.js** 行。开发者工具会在 **Sources 资源**面板中打开该文件。一行代码左侧行标如果有绿色标识，表明该行代码执行过了。如果是红色标识，则没有被被执行，表明页面加载时决不需要
6. 浏览 jQuery 的代码可以发现，部分执行的代码实际上只是注释，用去除注释的代码压缩工具可以进一步减小该文件的体积。

简而言之，当你处理自己的代码时，覆盖率选项卡可以帮助你逐行分析代码，并仅加载页面加载所需的代码。

`jquery.js` 和 `lodash.js` 对加载页面而言也是必需的吗？**Request Blocking 网络请求屏蔽**可以显示当资源不可用时会发生什么。
1. 点击 **Network 网络**面板，并 [open the Command Menu](https://developer.chrome.com/docs/devtools/command-menu/#open).
2. 输入 **blocking 屏蔽** 选择 **Show Request Blocking 显示“网络请求屏蔽”**，打开 **Request Blocking 网络请求屏蔽** 选项卡。
3. 点击 **+ Add Pattern 添加模式**，在文本框中输入 `/libs/*` 回车确认。
4. 刷新页面，获取 jQuery 和 Lodash 的请求标红，意味着它们被屏蔽了。页面仍然加载并且是交互式的，所以看起来这些资源是不需要的！
5. 点击 **Remove all patterns 移除所有模式**，删除 `/libs/*` 屏蔽模式

通常，**Request Blocking** 选项卡对于模拟在任何给定资源不可用时页面的行为非常有用。

现在，从代码中移除这些资源的引用，再审核页面：
1. 回到编辑器标签页，打开 `template.html`
2. 删除对应的 `<script>` 标签
    ```html
    <script src="/libs/lodash.js"></script>
    <script src="/libs/jquery.js"></script>
    ```
3. 等待网站重新构建和部署
4. 在 **Lighthouse** 面板中再次审核页面。综合性能评分应该会再次提高。


##### 实际生产中的优化关键渲染路径
[Critical Rendering Path 关键渲染路径](https://developers.google.com/web/fundamentals/performance/critical-rendering-path) 是浏览器将 HTML，CSS 和 JavaScript 转换为屏幕上的像素所经历的步骤序列。通常，可以通过在页面加载期间只发送关键代码，然后延迟加载其他所有代码来加速页面加载。

- 您不太可能找到可以直接删除的脚本，但是您通常会发现，许多脚本在页面加载过程中不需要被请求，而是可以异步请求。请参考 [Using async or defer](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript#use_async_or_defer)。
- 如果您正在使用框架，检查该框架是否有生产模式。这种模式可以使用一个特性，如 [tree shaking](https://webpack.js.org/guides/tree-shaking/)，用于移除那些阻塞关键渲染的不必要代码。


#### Do less main thread work 减少主线程工作
最新的报告里，优化建议部分只有一些次要的潜在的节约加载时间的建议，但如果向下滚动到 **Diagnostics 诊断结果** 部分就会发现，似乎最大的瓶颈是太多的主线程工作

主线程是浏览器执行显示页面所需的大部分工作的地方，这些工作包括解析和执行 HTML、CSS 和 JavaScript。

> 注意：本小节对 **Performance 性能** 面板作了相当简短的介绍。有关如何使用性能面板来分析页面性能，请参考 [Performance features reference](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/)


目标是使用 **Performance 性能** 面板分析页面加载时主线程在处理什么工作，并找到方法延迟或移除不必要的工作。

1. 打开 **Performance 性能** > **Capture Settings 录制设置**，设置 **Network 网络** 为 **低速 3G**，**CPU** 为 **6x slowdown 6 倍降速**
    移动设备通常比笔记本电脑或台式电脑有更多的硬件约束，因此这些设置能让您体验网页在这些功能较弱的设备上的加载过程。
2. 点击 **Reload 开始分析并重新加载网页**，开发者工具重载页面然后生成记录加载页面所需的所有操作的可视化报告，这种可视化报告被称为 *trace*
    *trace* 按时间次序从左到右显示活动。顶部的 FPS、CPU 和 NET 图提供了帧率、CPU 活动和网络活动的概览。
    在概览部分看到的黄色区域意味着 CPU 完全忙于脚本活动，这提示你可以通过减少 JavaScript 工作来加快页面加载速度。


分析 *trace* 找到减少 JavaScript 工作的方法：
1. 点击 **Timings 时间** 展开
    有一串来自 React 的 [User Timing](https://developer.mozilla.org/docs/Web/API/User_Timing_API) 统计，似乎表明 Tony 的应用正在使用 React 的开发模式。切换到生产模式会获得简单的性能提升。
2. 再次点击 **Timings 时间** 收起
3. 浏览 **Main 主要** 部分，该部分从左到右显示了主线程活动的时序日志。纵轴（从上到下）显示了事件触发的原因。
    示例中，`Evaluate Script` 事件导致 `(anonymous)` 函数执行，引发 `__webpack__require__` 执行，继而引发 `./src/index.jsx` 执行，等等。
4. 滚动到 **Main 主要** 部分底部。当您使用框架时，大部分的活动都是由框架本身引起的，而这通常是您无法控制的。您的应用程序引起的活动通常位于底部。
    在当前应用中，似乎一个名为 `App` 的函数会频繁调用 `mineBitcoin` 函数。似乎表明 Tony 可能在用粉丝的设备进行加密货币挖矿。
    > 注意：虽然框架调用通常是无法控制的，但有时你可能会以一种导致框架运行效率低下的方式构建你的应用程序。重构你的应用以有效地使用框架可以减少主线程工作量。然而，这需要对框架的工作原理有深入的理解，并且需要了解如何在你自己的代码中进行更改以更高效地使用框架。
5. 打开底部的 **Bottom-Up 自上而下** 选项卡。这个选项卡详细列出了哪些活动占用了最多的时间。如果 **Bottom-Up 自上而下** 中没有显示任何内容，单击 **Main 主要** 部分的标签。
    **Bottom-Up 自上而下** 部分只会显示你当前选中的活动或活动组的信息。例如，如果你点击了众多 `mineBitcoin` 活动中的一个，**Bottom-Up 自上而下** 部分只会显示这一个活动的信息。
    **Self Time 自身耗时** 显示每个活动直接消耗的时间。在这个案例中，大约 82% 的主线程时间被花在了 `mineBitcoin` 函数里。

是时候了，看看使用生产模式和减少 JavaScript 活动是否能够加快页面加载。从生产模式开始：
1. 在编辑器标签页里，打开 `webpack.config.js`。
2. 修改 `"mode": "development"` 为 `"mode": "production"`。
3. 等待新的构建部署。
4. 再次审核页面。

移除 `mineBitcoin` 的调用，减少 JavaScript 活动：
1. 在编辑器标签页中打开 `src/App.jsx`。
2. 在 `constructor` 中注释 `this.mineBitcoin(1500)`。
3. 等待新的构建部署。
4. 再次审核页面。

一如既往，总有事要去做，例如，减少 [Largest Contentful Paint 最大内容绘制](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/) 和 [Cumulative Layout Shift 累计布局偏移](https://web.dev/cls/)

> 成功
> 但看起来之前的修改导致性能的大幅提升！

##### 实际生产中的减少主线程工作
一般来说，**Performance 性能** 面板是了解站点在加载时执行什么活动以及找到删除不必要活动的方法的最常用方法。

如果您更喜欢一种类似 `console.log()` 的方法，[User Timing](https://developer.mozilla.org/docs/Web/API/User_Timing_API) API 允许您任意标记应用程序生命周期的某些阶段，以便跟踪每个阶段所需的时间。


## Summary 总结
- 每当你着手优化网站的加载性能时，始终要从进行 **Audit**/**Lighthouse** 开始。**Audit**/**Lighthouse** 会建立一个基准，并为你提供了改进的建议。
- 一次只进行一个变更，并在每个变更后进行审核，以了解该独立变更对性能的影响。
