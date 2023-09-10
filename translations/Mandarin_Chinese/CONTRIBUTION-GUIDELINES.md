<div align="center">
  <h1><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Writing%20Hand.png" alt="Writing Hand" width="25" height="25" />贡献指南<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Bookmark%20Tabs.png" alt="Bookmark Tabs" width="25" height="25" /></h1>
  这份文档包含了一系列指南，以帮助你在贡献过程中参与这个项目。这个开源项目。<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Globe%20with%20Meridians.png" alt="Globe with Meridians" width="25" height="25" />使用React框架构建，你需要在本地启动开发服务后才能查看该项目。
</div>

---

## Step 1. Fork 仓库 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Fork%20and%20Knife%20with%20Plate.png" alt="Fork and Knife with Plate" width="25" height="25" />
在GitHub访问 [仓库地址](https://github.com/BeforeIDieCode/BeforeIDieAchievements)并且点击Fork按钮. 这会在你账号上创建一个仓库的副本


https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/a8425d90-5f3e-4ee6-8499-2cf50643573c


## Step 2. 克隆，打开，安装，然后开始开发 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/OK%20Hand.png" alt="OK Hand" width="25" height="25" />

打开终端然后在其中运行以下的git命令:

`git clone url-you-just-copied`
将“url-you-just-copied”替换为指向该存储库（你fork的这个项目）的URL。请参考前面的步骤获取URL。

![Git Clone](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/4545703b-5803-4f60-96d1-b00b8f3f18a1)
然后跳转到项目的目录并且运行<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Man%20Running%20Medium-Dark%20Skin%20Tone.png" alt="Man Running Medium-Dark Skin Tone" width="25" height="25" />以下的命令:

`npm i` 安装运行React服务开发所必要的依赖。

![npm i](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/645f3bad-701d-42ff-ba8d-c0753d272687)

然后运行下面的命令，运行React 开发服务⚛️:

`npm start`

![npm start](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/4cb46b1c-8a37-4359-ab60-54bce1c44c92)

当启动成功时，你的终端应该看起来像下图差不多 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png" alt="Backhand Index Pointing Down" width="25" height="25" />

![编译成功](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/20378a7b-9da0-4373-aeeb-f4affa4a6615)

在运行`npm start` 命令后如果没有自动跳转，那就打开浏览器，跳转到 localhost: 3000 .

![localhost3000](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/b4d739ce-d89d-4383-8faf-883625951182)


## Step 3. 创建新的分支 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Christmas%20Tree.png" alt="Christmas Tree" width="25" height="25" />

在代码编辑工具（如Visual Studio Code）或你选择的其他代码编辑器中打开克隆的存储库。以下步骤演示了使用Visual Studio Code的过程，但同样的流程也适用于其他代码编辑器或使用GitHub Codespaces。

切换到你电脑上的仓库的目录（如果你当前不在那个目录下的话）。

```
cd BeforeIDieAchievements
```

然后使用下面的命令创建一个新的分支:

```
git checkout -b your-branch-name
```

例如:

```
git checkout -b add-Xander-Clemens
```
## Step 4. 粘贴 JSON 文件 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Roller%20Coaster.png" alt="Roller Coaster" width="25" height="25" />

* 在src/Jsons/Contributors.json 中粘贴下面的JSON 代码
* 在你粘贴Json代码之前，请将滚轮滑倒列表的最后，增加一个逗号“，”

```
{
    "id": "YOUR_NAME",
    "image": "img/bid_image/YOUR_NAME.jpg",
    "avatar": "img/avatar/YOUR_NAME.jpg",
    "name": "YOUR_NAME",
    "location": "YOUR_CITY_COUNTRY_AND_FLAG",
    "GitHub": "GITHUB_PROFILE_URL",
    "text": "PASTE_WHAT_YOU_WANT_TO_DO_BEFORE_YOU_DIE"
}
```
<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" />请将你的代码粘贴在上面，并确保在之前的贡献者JSON代码之前添加“,”<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" />

![Adding the JSON Template](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/65557bcb-a46e-4d1b-b458-2d6efd6743ad)

## Step 5. 填充你的信息到JSON当中 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Ringed%20Planet.png" alt="Ringed Planet" width="25" height="25" />
想要将个人信息填充给到的json代码当中，请遵循以下指令:
1. 请在所有出现的地方将“YOUR_NAME”替换为你的真实姓名。
2. 请将“YOUR_CITY_COUNTRY_AND_FLAG”替换为你的城市、国家和国旗。 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/White%20Flag.png" alt="White Flag" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Chequered%20Flag.png" alt="Chequered Flag" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Black%20Flag.png" alt="Black Flag" width="25" height="25" />图表.
3. 请将“GITHUB_PROFILE_URL”替换为你的GitHub个人资料的URL。
4. 请将“PASTE_WHAT_YOU_WANT_TO_DO_BEFORE_YOU_DIE”替换为描述你在死前想做的事情的文字。
* 这是你思考 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thinking%20Face.png" alt="Thinking Face" width="25" height="25" /> 和反思你在死前想做的事情，并在这里分享。这段文字将描述你在bid_image文件夹中上传的图片。请将你的文字限制在130字以内。
```
{
  "id": "Juan Perez",
  "image": "img/bid_image/Juan_Perez.jpg",
  "avatar": "img/avatar/Juan_Perez.jpg",
  "name": "Juan Perez",
  "location": "Santiago, Chile 🇨🇱",
  "GitHub": "https://github.com/juanperez",
  "text": "I want to climb the Villarrica volcano before I die"
}
```

## Step 6. 增加你Github Profile 的图片 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Camera%20with%20Flash.png" alt="Camera with Flash" width="25" height="25" />
- 去你的GitHub个人资料页面，然后保存你的头像图片，格式为<YOUR_NAME>.jpg。请将<YOUR_NAME>替换为你的名字。

- 如果你喜欢，你也可以添加一张不同的图片，但请确保它是一张jpeg格式的图片，并且尺寸为`450*450` 像素，并按照上述的命名结构来命名。

![保存你github头像文件](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/03b1c574-9dc9-452c-97c6-0987e0440697)

- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png" alt="High Voltage" width="25" height="25" /> 一旦你保存了，把图像拖到 `public/img/avatar 文件夹中`. <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png" alt="High Voltage" width="25" height="25" />

![上传头像图片](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/a0c08dcd-3a8b-4e87-96d0-06b277308499)


## Step 7. 增加你 BID (Before I Die) 图片 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Hourglass%20Done.png" alt="Hourglass Done" width="25" height="25" />
- 找到或创建一张代表你希望在死前完成的事情的图片。它可以是一张拼贴图或者单个物品的图片。花些时间反思，并让其对你有意义，因为你通过为这个开源项目做出贡献来投资于自己，定义了对你来说什么是有意义和重要的。
- 这张图片的尺寸至少应为 `500*500` 像素.
- 在 `public/img/bid_image`文件夹中增加图片.
- 你可以尝试一下图片尺寸对图片库的影响，并进行相应的调整。
在网站上（如 [UnSplash](https://unsplash.com/)）找到高质量的图片或使用AI生成图片工具可能会有所帮助。此外，使用[Canva](https://www.canva.com/)等工具编辑你的图片可以使你的视觉效果更加出色，对你来说更有意义。

![Adding the BID Image](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/aaa18f26-cd3a-41f3-92c0-a90d7c5dd274)

## Step 8. 在 CONTRIBUTORS.md 增加内容

复制下面的代码，然后将其粘贴到此仓库的 <a href="https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/CONTRIBUTORS.md">CONTRIBUTORS</a> 文件中.确保将其粘贴在其他贡献者的末尾列下面。然后继续编辑并填写你自己的信息。记得将<your-username>替换为你的GitHub用户名，将<your-name>替换为你的名字，将<your-country>替换为你的国家，将<your-contribution-description>替换为你的贡献描述。

```html
<!-- Start of column -->
<td align="center">
  <a href="https://github.com/GITHUB_ACCOUNT">
    <img
      src="YOUR_GITHUB_AVATAR_LINK"
      width="100px"
    />
    <br />
    <sub>YOUR_NAME</sub>
  </a>
</td>
<!-- End of column -->
```

<br>

### 需要改动的有:

- 请将链接替换为你自己的个人资料链接
  `<a href="你的GitHub profile 链接"></a>`

- 键点击你的GitHub个人资料图片，复制图片链接，然后将其粘贴到 `img` 标签内. 请保留 `width="100px"` 属性

```html
<img src="YOUR_GITHUB_AVATAR_LINK" width="100px" />
```

只需进入你的GitHub个人资料页面获取你的个人资料图片和链接。

<img src="https://user-images.githubusercontent.com/62628408/147896530-f94c17f7-f064-4e8d-8bc1-af2c1f63559d.png" width="100%" alt="profile_page">

- 将子标签替换为你自己的名字。

```html
<sub>Your Name</sub>
```

保存更改。

<br>

## Step 9. Git Add, Commit and Push <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Hot%20Beverage.png" alt="Hot Beverage" width="25" height="25" />
使用 `git add` 命令将你的新更改添加到你创建的分支中：

```javascript
git add .
```

然后通过 `git commit` 命令提交更改:

```javascript
git commit -m "Add your-name to Before I Die"
```

使用你的名字替换 `your-name` .


是用命令 `git push` 推送你的更改:

```javascript
git push origin your-branch-name
```

使用你之前创建的分支名称来替换 `your-branch-name` 。

<ol>
   <li>在继续下面的步骤之前，请确保你的更改满足之前步骤中的要求<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Man%20Walking%20Light%20Skin%20Tone.png" alt="Man Walking Light Skin Tone" width="25" height="25" /></a></li>
   <li>确保你已经添加了头像图片，Before I Die的图片，并且你的所有JSON文本已经正确输入，并在React开发服务器上正确显示 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Sunglasses.png" alt="Smiling Face with Sunglasses" width="25" height="25" /></li>
   <li>使用消息"add prompt your prompt here"提交你的更改" <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Check%20Mark%20Button.png" alt="Check Mark Button" width="25" height="25" /></li>
   <li>将你的更改推送到之前创建的分支 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Check%20Box%20with%20Check.png" alt="Check Box with Check" width="25" height="25" /></li>
   <li>请看下面的示例<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png" alt="Backhand Index Pointing Down" width="25" height="25" /></li>
</ol>

### Example add/commit/push workflow:

  如果你在终端中已经进入了Before I Die 的目录:
  ```javascript
    git add .
    git commit -m "Add Xander Clemens to Before I Die"
    git push -u origin add-Xander-Clemens
  ```


## Step 10. 提交更改以供审查 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Detective.png" alt="Detective" width="25" height="25" />

如果你打开 GitHub 上的仓库，你会看到一个 `Compare & pull request` 按钮。点击这个按钮。

![Create A Pull Request](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/060a039b-8710-47e4-b875-2aad2091516b)

现在点击`Create pull request` 按钮提交拉取请求。确保添加你要添加的详细信息。

![Submit A Pull Request](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/e1cbee74-e2e2-4904-948f-77e6b0c73a8e)


如果部署成功，下面的屏幕上会有一个选项，在进入生产环境之前，可以预览你的贡献！<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Desktop%20Computer.png" alt="Desktop Computer" width="25" height="25" />

![Uploading After Creating Pull Request](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/271bda42-25d8-416d-ad81-9b4fbd9fa545)
在看到这个截图后，你的贡献要么会被接受并合并到主分支中，要么会收到反馈并要求进行更改。
我将把你的所有更改合并到这个项目的主分支中。更改合并后，你将收到通知邮件。<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Alarm%20Clock.png" alt="Alarm Clock" width="25" height="25" />

<ol>
  <li> 如果要求更改，请按照相同的步骤请求并更新你的拉取请求。</li>
  <li> 如果没有要求更改，它将被合并到生产分支中。<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Clinking%20Glasses.png" alt="Clinking Glasses" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png" alt="Party Popper" width="25" height="25" /></li>
</ol>

## 需要更多帮助? <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Raising%20Hand.png" alt="Man Raising Hand" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Person%20Facepalming.png" alt="Person Facepalming" width="25" height="25" />
如果你在任何问题上需要额外的帮助，请随时在LinkedIn[LinkedIn](https://www.linkedin.com/in/alexanderclemens/)上与我联系，或在我的 [网站](https://www.xanderclemens.com/)上找到我的联系方式。

## 感谢您的贡献! <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Raising%20Hands.png" alt="Raising Hands" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Right-Facing%20Fist.png" alt="Right-Facing Fist" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Left-Facing%20Fist.png" alt="Left-Facing Fist" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Clapping%20Hands.png" alt="Clapping Hands" width="25" height="25" />
- 恭喜! <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Bottle%20with%20Popping%20Cork.png" alt="Bottle with Popping Cork" width="25" height="25" /> 你刚刚完成了标准的fork -> clone -> 编辑 -> PR的工作流程，作为贡献者，你经常会遇到这样的流程！

- 请给这个仓库 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="25" height="25" /> 一个小星星，并且分享给你认为对其感兴趣的人。

我希望你在为这个项目做贡献的过程中能玩得很开心！如果你从自己的研究中得到了灵感，想要在去世之前完成一些事情，请给这个仓库加星星并与他人分享，鼓励他们做出贡献并确定自己在去世之前想要做的事情。<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Milky%20Way.png" alt="Milky Way" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="25" height="25" /> 


# 贡献 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Factory%20Worker.png" alt="Woman Factory Worker" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Factory%20Worker.png" alt="Factory Worker" width="25" height="25" />

我们<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Heart%20Suit.png" alt="Heart Suit" width="25" height="25" />非常欢迎大家提出拉取请求。参与这个项目，你需要遵守 [代码规范](https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/CODE_OF_CONDUCT.md). 请继续通过查看这个项目的[Road Map](https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/ROADMAP.md) <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/World%20Map.png" alt="World Map" width="25" height="25" /> 来发展这个项目 并通过创建或为[issues](https://github.com/BeforeIDieCode/BeforeIDieAchievements/issues) 贡献来进一步的完善这个项目。