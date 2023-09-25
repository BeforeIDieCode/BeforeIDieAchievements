<div align="center">
  <h1>
    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Writing%20Hand.png" alt="Writing Hand" width="25" height="25" />إرشادات التساهم<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Bookmark%20Tabs.png" alt="Bookmark Tabs" width="25" height="25" />
  </h1>
  تحتوي هذه الوثائق على مجموعة من الإرشادات لمساعدتك أثناء عملية المساهمة في هذا المشروع. هذا مفتوح <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Globe%20with%20Meridians.png" alt="Globe with Meridians" width="25" height="25" /> تم إنشاء المشروع المصدر باستخدام إطار عمل React وسيلزم تشغيل خادم التطوير لعرض المشروع على جهازك المحلي.
</div>

---

## الخطوة 1. تفرع هذا المستودع <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Fork%20and%20Knife%20with%20Plate.png" alt="Fork and Knife with Plate" width="25" height="25" />
قم بزيارة [repository](https://github.com/BeforeIDieCode/BeforeIDieAchievements) على Github وانقر على زر Fork. سيؤدي هذا إلى إنشاء نسخة في حسابك.

https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/a8425d90-5f3e-4ee6-8499-2cf50643573c

## الخطوة 2. استنساخ، فتح، تثبيت وبدء التشغيل <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/OK%20Hand.png" alt="OK Hand" width="25" height="25" />

افتح محطة وقم بتشغيل أمر git التالي:

`git clone عنوان URL الذي تم نسخه للتو`
حيث يتم استبدال عنوان url الذي نسخته للتو بعنوان url الخاص بهذا المستودع (فرع هذا المشروع). راجع الخطوات السابقة للحصول على عنوان url.

![Git Clone](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/4545703b-5803-4f60-96d1-b00b8f3f18a1)
ثم انتقل إلى الدليل حيث تم حفظ المشروع وتشغيله <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Man%20Running%20Medium-Dark%20Skin%20Tone.png" alt="Man Running Medium-Dark Skin Tone" width="25" height="25" /> الأمر التالي:

`npm i` لتثبيت التبعيات لتتمكن من تشغيل React Development Server.

![npm i](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/645f3bad-701d-42ff-ba8d-c0753d272687)

قم بعد ذلك بتشغيل الأمر التالي لبدء تشغيل React ⚛️ Development Server ثم تشغيله:

`npm start`

![npm start](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/4cb46b1c-8a37-4359-ab60-54bce1c44c92)

عند التشغيل بنجاح، ستبدو المحطة الطرفية الخاصة بك بالشكل التالي <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png" alt="Backhand Index Pointing Down" width="25" height="25" />

![Complied Successfully](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/20378a7b-9da0-4373-aeeb-f4affa4a6615)

افتح الآن متصفح الويب وانتقل إلى localhost: 3000 إذا لم يتم توجيهك إلى هناك من خلال تشغيل الأمر `npm start`.

![localhost3000](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/b4d739ce-d89d-4383-8faf-883625951182)

## الخطوة 3. إنشاء فرع جديد

افتح المستودع المستنسخ في أداة محرر التعليمات البرمجية مثل Visual Studio Code، أو أي محرر تعليمات برمجية آخر من اختيارك. توضح الخطوات التالية العملية باستخدام Visual Studio Code، ولكن نفس سير العمل ينطبق على برامج تحرير التعليمات البرمجية الأخرى أو باستخدام GitHub Codespaces.

قم بالتغيير إلى دليل المستودع على جهاز الكمبيوتر الخاص بك (إذا لم تكن موجودًا هناك بالفعل):

```
cd BeforeIDieAchievements
```

الآن قم بإنشاء فرع باستخدام الأمر:

```
git checkout -b اسم فرعك
```

على سبيل المثال:

```
git checkout -b add-Xander-Clemens
```

## الخطوة 4. الصق ملف JSON الخاص بك <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Roller%20Coaster.png" alt="Roller Coaster" width="25" height="25" />

* الصق كود JSON التالي في src/Jsons/Contributors.json
* قم بالتمرير إلى أسفل القائمة وأضف "" إلى آخر مساهم JSON قبل لصق رمز JSON الخاص بك

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

<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" /> الصق الكود الخاص بك أعلاه وتأكد من إضافته "، قبل كود JSON للمساهمين السابقين <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" />

![Adding the JSON Template](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/65557bcb-a46e-4d1b-b458-2d6efd6743ad)

## الخطوة 5. املأ معلومات JSON الخاصة بك <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Ringed%20Planet.png" alt="Ringed Planet" width="25" height="25" />

لملء رمز JSON المحدد، اتبع التعليمات التالية:
1. استبدل "YOUR_NAME" باسمك الفعلي في جميع الحالات.
2. استبدل "YOUR_CITY_COUNTRY_AND_FLAG" بمدينتك وبلدك وعلم البلد <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/White%20Flag.png" alt="White Flag" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Chequered%20Flag.png" alt="Chequered Flag" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Black%20Flag.png" alt="Black Flag" width="25" height="25" /> emoji.
3. استبدل "GITHUB_PROFILE_URL" بعنوان URL لملف تعريف GitHub الخاص بك.
4. استبدل "PASTE_WHAT_YOU_WANT_TO_DO_BEFORE_YOU_DIE" بنص يصف ما تريد القيام به قبل أن تموت.
* هذا هو وقتك للتفكير <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thinking%20Face.png" alt="التفكير وجه" width="25" height="25" /> وفكر فيما تريد أن تفعله قبل أن تموت. ربما ترغب في المشاركة في ماراثون لمسافة 2 كيلومتر، أو السفر حول العالم، أو القيام بتحدي طعام غريب في مطعم في مسقط رأسك أو بلدك. والآن، إليك بعض الأشياء التي يجب وضعها في الاعتبار عند كتابة هدفك:
- **طول الحرف**: يرجى تحديد النص الخاص بك بحيث لا يتجاوز 500 حرفًا
- **كن مدروسًا**: قم بصياغة رسالتك لتوصيل أهمية وقيمة تطلعاتك.
- **ضع في اعتبارك جمهورك**: ضع في اعتبارك أنه ستتم مشاركة النصوص والصور الخاصة بك بشكل عام، لذا كن محترمًا مع صورك وكلماتك. أيضًا، تجنب فرض أهدافك. نريد أن يكون هذا المشروع مكانًا يشعر فيه الناس بالأمان والراحة لكونهم أصيلين.
- **تأمّل بانتظام**: مثل الحياة، تتغير الأهداف باستمرار، لذا قم بمراجعة تقدمك بانتظام وإجراء التعديلات حسب الحاجة. شارك أيضًا واحتفل بالمعالم التي وصلت إليها. لن تعرف أبدًا من الذي يمكنك إلهامه من خلال مشاركتها.

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

## الخطوة 6. أضف صورة ملفك الشخصي على GitHub <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Camera%20with%20Flash.png" alt="Camera with Flash" width="25" height="25" />

- انتقل إلى ملفك الشخصي على GitHub ثم احفظ صورة الصورة الرمزية الخاصة بك عن طريق تنسيقها <YOUR_NAME>.jpg. الرجاء استبدال `<YOUR_NAME>` باسمك.

- يمكنك إضافة صورة مختلفة إذا أردت ولكن تأكد من أنها صورة jpeg وأن حجمها 450*450 بكسل وباتباع بنية الاسم أعلاه.

![Saving Your GitHub Avatar](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/03b1c574-9dc9-452c-97c6-0987e0440697)

- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png" alt="الجهد العالي" width="25" height="25" /> بمجرد حفظها، اسحب صورتك إلى المجلد العام/img/avatar. <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png" alt="الجهد العالي" width="25" height="25" />

![Uploading Your Avatar img](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/a0c08dcd-3a8b-4e87-96d0-06b277308499)

## الخطوة 7. أضف BID (Before I Die) صورة <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Hourglass%20Done.png" alt="Hourglass Done" width="25" height="25" />

- ابحث عن أو قم بإنشاء صورة تمثل ما تريد القيام به قبل أن تموت. يمكن أن يكون مجمعة أو عنصر واحد. خذ وقتًا للتفكير وجعل الأمر ذا معنى بالنسبة لك وأنت تستثمر في نفسك من خلال المساهمة في هذا المشروع مفتوح المصدر وتحديد ما هو مفيد ومهم بالنسبة لك.
- يجب أن يكون تنسيق الصورة `500*500` بكسل على الأقل.
- أضف صورتك إلى المجلد "public/img/bid_image".
- يمكنك التعرف على مدى تأثير حجم الصورة على معرض الصور وضبطه وفقًا لذلك.

قد يكون من المفيد العثور على صور عالية الجودة على مواقع الويب مثل [UnSplash](https://unsplash.com/) أو استخدام أدوات AI Geneative Images. بالإضافة إلى ذلك، فإن تعديل صورك باستخدام أدوات مثل [Canva](https://www.canva.com/) يمكن أن يجعل صورك رائعة وذات معنى بالنسبة لك.

![إضافة صورة BID](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/aaa18f26-cd3a-41f3-92c0-a90d7c5dd274)

## الخطوة 8. أضف إلى ملف CONTRIBUTORS.md

انسخ الكود أدناه، ثم الصقه في ملف <a href="https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/CONTRIBUTORS.md">CONTRIBUTORS</a> في ملف الريبو هذا. تأكد من لصقه أسفل عمود نهاية المساهمين الآخرين. ثم انتقل إلى التعديل باستخدام معلوماتك الخاصة.

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

### بعض الأشياء التي يجب تغييرها:

- استبدل الرابط برابط ملفك الشخصي
   `<a href="رابط ملفك الشخصي على GitHub هنا"></a>`

- انقر بزر الماوس الأيمن على صورة ملفك الشخصي على github وانسخ رابط الصورة والصقه داخل علامة `img`. اترك الخاصية `العرض = "100 بكسل"`

```html
<img src="YOUR_GITHUB_AVATAR_LINK" width="100px" />
```

ما عليك سوى الانتقال إلى صفحة ملفك الشخصي على GitHub للحصول على صورة ملفك الشخصي والرابط.

<img src="https://user-images.githubusercontent.com/62628408/147896530-f94c17f7-f064-4e8d-8bc1-af2c1f63559d.png" width="100%" alt="profile_page">

- استبدل العلامة الفرعية باسمك.

```html
<sub>اسمك</sub>
```

ثم احفظ تغييراتك.

<br>

## الخطوة 9. بوابة الإضافة والالتزام والدفع <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Hot%20Beverage.png" alt="Hot Beverage" width="25" height="25" />

أضف تغييراتك الجديدة إلى الفرع الذي قمت بإنشائه باستخدام الأمر `git add`:

```javascript
git add .
```

الآن قم بتنفيذ هذه التغييرات باستخدام الأمر `git Commit`:

```javascript
git commit -m "Add your-name to Before I Die"
```

استبدال "your-name" باسمك.

ادفع تغييراتك باستخدام الأمر `git Push`:

```javascript
git push origin your-branch-name
```

استبدال `your-branch-name` باسم الفرع الذي قمت بإنشائه سابقًا.

<ol>
   <li>قبل متابعة هذه الخطوات، تأكد من أن التغييرات التي أجريتها تلبي متطلبات الخطوات السابقة<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Man%20Walking%20Light%20Skin%20Tone.png" alt="Man Walking Light Skin Tone" width="25" height="25" /></a></li>
   <li>تأكد من إضافة الصورة الرمزية وصورة BID (Before I Die) وإدخال كل نص JSON الخاص بك بشكل صحيح ويتم عرضه بشكل صحيح على خادم تطوير React الخاص بك <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Sunglasses.png" alt="Smiling Face with Sunglasses" width="25" height="25" /></li>
   <li>قم بإجراء تغييراتك باستخدام الرسالة "أضف المطالبة الخاصة بك هنا" <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Check%20Mark%20Button.png" alt="Check Mark Button" width="25" height="25" /></li>
   <li>ادفع تغييراتك إلى الفرع الذي قمت بإنشائه مسبقًا عند تنفيذ الأمر `git checkout` <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Check%20Box%20with%20Check.png" alt="Check Box with Check" width="25" height="25" /></li>
   <li>إنظر في الأسفل للمثال<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png" alt="Backhand Index Pointing Down" width="25" height="25" /></li>
</ol>

### مثال add/commit/push سير العمل:
  إذا كنت في دليل BeforeIDieAchievements في جهازك الطرفي:
  ```javascript
    git add .
    git commit -m "Add Xander Clemens to Before I Die"
    git push -u origin add-Xander-Clemens
  ```

## الخطوة 10. أرسل تغييراتك للمراجعة <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Detective.png" alt="Detective" width="25" height="25" />

إذا ذهبت إلى مستودعك على GitHub، فسترى زر "مقارنة وسحب الطلب". انقر على هذا الزر.

![Create A Pull Request](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/060a039b-8710-47e4-b875-2aad2091516b)

أرسل الآن طلب السحب بالضغط على زر "إنشاء طلب سحب". تأكد من إضافة تفاصيل ما تقوم بإضافته إلى طلب السحب.

![Submit A Pull Request](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/e1cbee74-e2e2-4904-948f-77e6b0c73a8e)

إذا تم النشر بنجاح، فسيكون هناك خيار على الشاشة أدناه لعرض "معاينة" لمساهمتك قبل أن تنتقل إلى الإنتاج! <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Desktop%20Computer.png" alt="Desktop Computer" width="25" height="25" />

![Uploading After Creating Pull Request](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/271bda42-25d8-416d-ad81-9b4fbd9fa545)

عند رؤية هذه الشاشة، إما سيتم قبول مساهمتك ودمجها في الفرع الرئيسي، أو ستتلقى مساهمتك ملاحظات وسيتم طلب التغييرات.
سأقوم بدمج جميع تغييراتك في الفرع الرئيسي لهذا المشروع. ستتلقى إشعارًا بالبريد الإلكتروني بمجرد دمج التغييرات. <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Alarm%20Clock.png" alt="Alarm Clock" width="25" height="25" />

<ol>
  <li>في حالة طلب التغييرات، اتبع نفس سير العمل لطلب طلب السحب الخاص بك وتحديثه.</li>
  <li>إذا لم يتم طلب أي تغييرات، فسيتم دمجها في فرع الإنتاج. <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Clinking%20Glasses.png" alt="Clinking Glasses" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png" alt="Party Popper" width="25" height="25" /></li>
</ol>

## هل تريد المزيد من المساعدة؟ <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Raising%20Hand.png" alt="Man Raising Hand" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Person%20Facepalming.png" alt="Person Facepalming" width="25" height="25" />

إذا كنت بحاجة إلى أي مساعدة إضافية بخصوص أية مشكلات، فلا تتردد في الاتصال بي على [LinkedIn](https://www.linkedin.com/in/alexanderclemens/) or find my contact details on my [website](https://www.xanderclemens.com/).

## شكرا لك على المساهمة! <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Raising%20Hands.png" alt="Raising Hands" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Right-Facing%20Fist.png" alt="Right-Facing Fist" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Left-Facing%20Fist.png" alt="Left-Facing Fist" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Clapping%20Hands.png" alt="Clapping Hands" width="25" height="25" />

- تهاني! <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Bottle%20with%20Popping%20Cork.png" alt="Bottle with Popping Cork" width="25" height="25" /> لقد أكملت للتو عملية الشوكة القياسية -> الاستنساخ -> التحرير -> سير عمل طلب السحب الذي ستواجهه غالبًا كمساهم!

- يرجى وضع نجمة <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="25" height="25" /> على هذا المستودع ومشاركته مع شخص تعرفه وقد يستمتع بالمساهمة!

أتمنى أن يكون لديك الكثير من المرح أثناء المساهمة في هذا المشروع. إذا كنت قد استلهمت أفكارًا من بحثك الخاص حول ما تريد أن تفعله قبل أن تموت، فيرجى النجمة <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Milky%20Way.png" alt="Milky Way" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="25" height="25" /> هذا الريبو ومشاركته مع الآخرين لتشجيعهم على المساهمة وتحديد ما يريدون القيام به قبل أن يموتوا.

# المساهمة <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Factory%20Worker.png" alt="Woman Factory Worker" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Factory%20Worker.png" alt="Factory Worker" width="25" height="25" />

نحن نحب <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Heart%20Suit.png" alt="Heart Suit" width="25" height="25" /> سحب الطلبات من الجميع. بمشاركتك في هذا المشروع، فإنك
الموافقة على الالتزام بـ [قواعد السلوك](https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/CODE_OF_CONDUCT.md). يرجى الاستمرار في إضافة هذا المشروع بالنظر إلى [خريطة الطريق](https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/ROADMAP.md) <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/World%20Map.png" alt="World Map" width="25" height="25" /> لهذا المشروع في بالإضافة إلى إنشاء [المشاكل] أو المساهمة فيها (https://github.com/BeforeIDieCode/BeforeIDieAchievements/issues) لتعزيز هذا المشروع بشكل أكبر من خلال الميزات.