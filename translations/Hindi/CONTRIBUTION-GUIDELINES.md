<div align="center">
  <h1><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Writing%20Hand.png" alt="Writing Hand" width="25" height="25" />योगदान मार्गदर्शिकाएँ<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Bookmark%20Tabs.png" alt="Bookmark Tabs" width="25" height="25" /></h1>
  यह दस्तावेज़ इस परियोजना के योगदान प्रक्रिया के दौरान आपकी सहायता के लिए एक निर्देशिका सेट शामिल करता है। यह ओपन <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Globe%20with%20Meridians.png" alt="Globe with Meridians" width="25" height="25" />सोर्स परियोजना React फ़्रेमवर्क का उपयोग करके निर्मित की गई थी और परियोजना को अपने स्थानीय मशीन पर देखने के लिए विकास सर्वर को प्रारंभ करने की आवश्यकता होगी।
</div>

---

## चरण 1. इस रिपॉजिटरी को फ़ॉर्क करें <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Fork%20and%20Knife%20with%20Plate.png" alt="Fork and Knife with Plate" width="25" height="25" />
गिटहब पर [रिपॉजिटरी](https://github.com/BeforeIDieCode/BeforeIDieAchievements) पर जाएं और फ़ॉर्क बटन पर क्लिक करें। यह आपके खाते में एक प्रति बनाएगा।


https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/a8425d90-5f3e-4ee6-8499-2cf50643573c

## चरण 2. क्लोन, खोलें, स्थापित करें और प्रारंभ करें <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/OK%20Hand.png" alt="OK Hand" width="25" height="25" />

एक टर्मिनल खोलें और निम्नलिखित git कमांड चलाएं:

`git clone url-you-just-copied`
जहाँ 'url-you-just-copied' है, उसे इस रिपॉजिटरी के URL से बदलें (जिसे आपने पिछले कदमों में प्राप्त किया है)। पिछले कदमों को देखें ताकि आप URL प्राप्त कर सकें।

![Git Clone](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/4545703b-5803-4f60-96d1-b00b8f3f18a1)
फिर प्रोजेक्ट सहेजे गए स्थान पर जाएं और निम्नलिखित कमांड चलाएं:<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Man%20Running%20Medium-Dark%20Skin%20Tone.png" alt="Man Running Medium-Dark Skin Tone" width="25" height="25" />

`npm i` चलाएं ताकि React विकास सर्वर को चलाने के लिए आवश्यकताएँ स्थापित हों।

![npm i](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/645f3bad-701d-42ff-ba8d-c0753d272687)

आगे बढ़ने के लिए निम्नलिखित कमांड चलाएं और फिर React ⚛️ विकास सर्वर को प्रारंभ और चलाएं:

`npm start`

![npm start](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/4cb46b1c-8a37-4359-ab60-54bce1c44c92)

यदि सफलतापूर्वक चलाया गया है, तो आपकी टर्मिनल निम्नलिखित रूप में दिखेगी: <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png" alt="Backhand Index Pointing Down" width="25" height="25" />

![Complied Successfully](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/20378a7b-9da0-4373-aeeb-f4affa4a6615)

अब एक वेब ब्राउज़र खोलें और npm start कमांड चलाने से नहीं पहुंचे होते हुए localhost:3000 पर जाएं।

![localhost3000](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/b4d739ce-d89d-4383-8faf-883625951182)


## चरण 3. एक नई शाखा बनाएं <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Christmas%20Tree.png" alt="Christmas Tree" width="25" height="25" />

कोड संपादक टूल में क्लोन की गई रिपॉजिटरी खोलें, जैसे कि विज़ुअल स्टूडियो कोड, या आपकी पसंदीदा कोड संपादक में। निम्नलिखित कदम विज़ुअल स्टूडियो कोड का उपयोग करके दिखाते हैं, लेकिन यही वर्गीकरण अन्य कोड संपादकों या GitHub Codespaces का उपयोग करने के लिए भी लागू है।

अपने कंप्यूटर पर रिपॉजिटरी निर्दिष्टक से बदलें (यदि आप पहले से वहीं नहीं हैं):

```
cd BeforeIDieAchievements
```

अब निम्नलिखित कमांड का उपयोग करके एक शाखा बनाएं:

```
git checkout -b your-branch-name
```

उदाहरण के लिए:

```
git checkout -b add-Xander-Clemens
```
## चरण 4. अपना JSON फ़ाइल पेस्ट करें <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Roller%20Coaster.png" alt="Roller Coaster" width="25" height="25" />

* निम्नलिखित JSON कोड को पेस्ट करें src/Jsons/Contributors.json
* सूची के नीचे स्क्रॉल करें और अपने JSON कोड को पेस्ट करने से पहले आखिरी JSON योगदान में ',' जोड़ें

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
<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" />अपना कोड ऊपर पेस्ट करें और सुनिश्चित करें कि आपने पिछले योगदानकर्ताओं के JSON कोड के पहले ',' जोड़ दिया है<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" />

![Adding the JSON Template](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/65557bcb-a46e-4d1b-b458-2d6efd6743ad)

## चरण 5. अपनी JSON जानकारी भरें <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Ringed%20Planet.png" alt="Ringed Planet" width="25" height="25" />
दिए गए JSON कोड को भरने के लिए, निम्नलिखित निर्देशों का पालन करें:

1. सभी स्थानों में "YOUR_NAME" को अपने वास्तविक नाम से बदलें।
2. "YOUR_CITY_COUNTRY_AND_FLAG" को अपने नगर, देश और देश के झंडे के <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/White%20Flag.png" alt="White Flag" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Chequered%20Flag.png" alt="Chequered Flag" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Black%20Flag.png" alt="Black Flag" width="25" height="25" />इमोजी से बदलें |
3. 'GITHUB_PROFILE_URL' को अपने GitHub प्रोफ़ाइल के URL से बदलें।
4. 'PASTE_WHAT_YOU_WANT_TO_DO_BEFORE_YOU_DIE' को उस पाठ से बदलें जिसमें आप अपनी मृत्यु से पहले क्या करना चाहते हैं।
* यह आपका समय है सोचने<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thinking%20Face.png" alt="Thinking Face" width="25" height="25" /> और विचार करने का कि आप अपनी मृत्यु से पहले क्या करना चाहते हैं। शायद आप एक 2K मैराथन दौड़ना चाहते हैं, दुनिया भर में घूमना चाहते हैं, या अपने शहर या देश के किसी रेस्तरां में विविध भोजन की चुनौती लेना चाहते हैं। अब, यहां कुछ बातें हैं जिन्हें ध्यान में रखने के लिए जब आप अपना लक्ष्य लिख रहे हैं:
- **वर्ण संख्या**: कृपया अपने पाठ की लंबाई को अधिकतम 500 वर्णों में संयंत्रित रखें
- **विचारशीलता**: अपने संदेश को महत्वपूर्णता और मूल्य को संबोधित करने के लिए ध्यानपूर्वक तैयार करें।
- **अपने दर्शक को ध्यान में रखें**: ध्यान दें कि आपका पाठ और छवियाँ सार्वजनिक रूप से साझा की जाएंगी, इसलिए अपनी छवियों और शब्दों के साथ सम्मानपूर्वक रहें। इसके साथ ही, अपने लक्ष्यों के साथ थोपने से बचें। हम चाहते हैं कि यह परियोजना एक ऐसी जगह हो जहाँ लोग सच्चे होने में आत्मविश्वास महसूस करें।
- **नियमित रूप से विचार करें**: जीवन की तरह, लक्ष्य हमेशा बदलते रहते हैं, इसलिए नियमित रूप से अपनी प्रगति की समीक्षा करें और आवश्यकतानुसार समायोजन करें। इसके साथ ही, आपके पहुंचे माइलस्टोन्स को साझा करें और मनाएं। आप कभी नहीं जानेंगे कि आप किसे प्रेरित कर सकते हैं जब आप इन्हें साझा करेंगे।
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
## चरण 6. अपनी GitHub प्रोफ़ाइल इमेज जोड़ें <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Camera%20with%20Flash.png" alt="Camera with Flash" width="25" height="25" />
- अपने GitHub प्रोफ़ाइल पर जाएं और फिर अपने अवतार की छवि को '<YOUR_NAME>.jpg' रूप में फॉर्मेट करके सहेजें। कृपया <YOUR_NAME> को अपने नाम से बदलें।

- आप चाहें तो एक विभिन्न छवि भी जोड़ सकते हैं, लेकिन सुनिश्चित करें कि यह एक jpeg छवि है और यह '450*450' पिक्सल्स है, और उपरोक्त नाम संरचना का पालन करें।

![Saving Your GitHub Avatar](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/03b1c574-9dc9-452c-97c6-0987e0440697)

## चरण 7. अपनी 'Before I Die' छवि जोड़ें <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Hourglass%20Done.png" alt="Hourglass Done" width="25" height="25" />
- वह छवि खोजें या बनाएं जो आप अपनी मृत्यु से पहले क्या करना चाहते हैं का प्रतिष्ठान रखती है। यह एक कोलाज या एकल वस्तु हो सकती है। विचार करने का समय लें और इसे स्वयं के लिए महत्वपूर्ण और अर्थपूर्ण बनाएं, क्योंकि आप इस ओपन-सोर्स परियोजना में योगदान कर रहे हैं और यह निश्चित कर रहे हैं कि आपके लिए क्या महत्वपूर्ण और महत्वपूर्ण है।
- यह छवि कम से कम `500*500` पिक्सल्स के फ़ॉर्मेट में होनी चाहिए।
- अपनी छवि को `public/img/bid_image`फ़ोल्डर' में जोड़ें।
- आप अपनी छवि का आकार फोटो गैलरी पर कैसे प्रभावित करते हैं, इसमें थोड़ी सी खेलना मददगार हो सकता है और उसे अनुसार समायोजित करना सही हो सकता है।
वेबसाइटों पर उच्च गुणवत्ता की छवियां खोजने के लिए यह सहायक हो सकता है: [UnSplash](https://unsplash.com/) या AI सार्गात्मिक छवि उपकरण का उपयोग करें। इसके अलावा, आप इस प्रकार के उपकरणों पर छवियों का संपादन कर सकते हैं, जैसे कि [Canva](https://www.canva.com/) आपकी छवियों को महान और आपके लिए महत्वपूर्ण बना सकता है।

![Adding the BID Image](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/aaa18f26-cd3a-41f3-92c0-a90d7c5dd274)

- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png" alt="High Voltage" width="25" height="25" /> एक बार जब सहेज लिया गया हो, तो अपनी छवि को `public/img/avatar folder` फ़ोल्डर' में खींचें।. <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png" alt="High Voltage" width="25" height="25" />

![Uploading Your Avatar img](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/a0c08dcd-3a8b-4e87-96d0-06b277308499)

## चरण 8. CONTRIBUTORS.md फ़ाइल में जोड़ें

जब आप `CONTRIBUTORS.md` फ़ाइल में एक नए योगदानकर्ता को जोड़ते हैं, तो कृपया ध्यान दें कि प्रति स्तंभ में अधिकतम सात योगदानकर्ताओं का होना चाहिए। यदि आप देखते हैं कि स्तंभ पहले से पूरा है, तो आपको उस स्तंभ को बंद करना चाहिए और एक नया स्तंभ बनाना चाहिए। इस मामले का निम्नलिखित उदाहरण छवि देखें: <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png" alt="Backhand Index Pointing Down" width="25" height="25" />  यदि स्तंभ में सात से कम योगदानकर्ताएँ हैं, तो आगे बढ़ें और नया स्तंभ नहीं बनाने के लिए जाएं [यहाँ](#If_it_is_less_than_seven_contributors).

<img width="415" alt="Screenshot 2023-09-22 at 23 31 18" src="https://github.com/Nawarajkarki/BeforeIDieAchievements/assets/120526253/05a0f723-12d3-40c6-82c7-11b28acfcede">

### पहले स्तंभ शुरू करने के लिए क्या प्रतिलिपि बनाएं:

```html
</tr>
  <tr>
<!-- Start of column-1 -->
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
<!-- End of column-1 -->
</tr>
</table>
```
### फिर [कुछ बदलने के लिए] (#step8_thing_to_change)

## <a id="If_it_is_less_than_seven_contributors"></a> यदि आप देखते हैं कि स्तंभ पूरा नहीं है, तो निम्नलिखित चरणों का पालन करें:

कृपया निम्नलिखित कोड की प्रतिलिपि बनाएं और फिर इसे <a href="https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/CONTRIBUTORS.md">CONTRIBUTORS</a>फ़ाइल में पेस्ट करें। सुनिश्चित करें कि आप इसे किसी अन्य योगदानकर्ता के आखिरी स्तंभ के नीचे पेस्ट करते हैं। फिर अपनी जानकारी के साथ संपादित करें:

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

## <a id="step8_thing_to_change"></a> कुछ बदलने के लिए:

- अपने खुद के प्रोफ़ाइल लिंक से लिंक बदलें
  `<a href="your GitHub profile link here"></a>`

- अपनी GitHub प्रोफ़ाइल छवि पर दाएं क्लिक करें और छवि लिंक कॉपी करें और इसे `img` टैग के अंदर पेस्ट करें। `width="100px"` गुण छोड़ दें

```html
<img src="YOUR_GITHUB_AVATAR_LINK" width="100px" />
```

अपनी GitHub प्रोफ़ाइल पृष्ठ पर जाएं और अपनी प्रोफ़ाइल छवि और लिंक प्राप्त करने के लिए वहाँ जाएं।

<img src="https://user-images.githubusercontent.com/62628408/147896530-f94c17f7-f064-4e8d-8bc1-af2c1f63559d.png" width="100%" alt="profile_page">

- अपने नाम से sub टैग को बदलें

```html
<sub>Your Name</sub>
```

फिर अपने परिवर्तनों को सहेजें।

<br>

## चरण 9. Git Add, Commit और Push <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Hot%20Beverage.png" alt="Hot Beverage" width="25" height="25" />
नई परिवर्तनों को उस शाखा में जो आपने बनाई है उसे `git add` command:

```javascript
git add .
```

Now commit those changes using the `git commit`  कमांड का उपयोग करके जोड़ें:

```javascript
git commit -m "Add your-name to Before I Die"
```

`your-name`  को अपने नाम से बदलें।


अपने परिवर्तनों को `git push` कमांड का उपयोग करके पुश करें:

```javascript
git push origin your-branch-name
```

`your-branch-name` को आपने पहले बनाई गई शाखा के नाम से बदलें।

<ol>
   <li>इन कदमों को आगे बढ़ने से पहले, सुनिश्चित करें कि आपके परिवर्तन पिछले कदमों के आवश्यकताओं को पूरा करते हैं।<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Man%20Walking%20Light%20Skin%20Tone.png" alt="Man Walking Light Skin Tone" width="25" height="25" /></a></li>
   <li>सुनिश्चित करें कि आपने अवतार छवि, 'Before I Die' छवि और अपने JSON पाठ को सही रूप से जोड़ा है और यह सही ढंग से आपके React विकास सर्वर पर प्रदर्शित हो रहा है। <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Sunglasses.png" alt="Smiling Face with Sunglasses" width="25" height="25" /></li>
   <li>अपने परिवर्तनों को "add prompt your prompt here" संदेश के साथ कमिट करें। <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Check%20Mark%20Button.png" alt="Check Mark Button" width="25" height="25" /></li>
   <li>अपने परिवर्तनों को उस शाखा पर पुश करें जिसे आपने पहले बनाया था जब आपने `git checkout` कमांड का उपयोग किया था।<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Check%20Box%20with%20Check.png" alt="Check Box with Check" width="25" height="25" /></li>
   <li>एक उदाहरण के लिए नीचे देखें:<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png" alt="Backhand Index Pointing Down" width="25" height="25" /></li>
</ol>

### उदाहारण जोड़ने/कमिट/पुश वर्कफ़्लो:

  यदि आप टर्मिनल में BeforeIDieAchievements निर्देशिका में हैं:
  ```javascript
    git add .
    git commit -m "Add Xander Clemens to Before I Die"
    git push -u origin add-Xander-Clemens
  ```


चरण 10. अपने परिवर्तनों को समीक्षा के लिए प्रस्तुत करें <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Detective.png" alt="Detective" width="25" height="25" />

यदि आप GitHub पर अपने रिपोजिटरी पर जाते हैं, तो आपको एक `Compare & pull request` बटन दिखाई देगा। उस बटन पर क्लिक करें।

![Create A Pull Request](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/060a039b-8710-47e4-b875-2aad2091516b)

अब `Create pull request` बटन पर क्लिक करके पुल अनुरोध सबमिट करें। सुनिश्चित करें कि आप पुल अनुरोध में जो भी जोड़ रहे हैं, उसका विवरण जोड़ रहे हैं।

![Submit A Pull Request](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/e1cbee74-e2e2-4904-948f-77e6b0c73a8e)


यदि डिप्लॉयमेंट सफल है, तो नीचे दी गई स्क्रीन पर आपको देखने का विकल्प मिलेगा "preview" का। यह आपके योगदान को प्रोडक्शन जाने से पहले देखने का विकल्प होगा!<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Desktop%20Computer.png" alt="Desktop Computer" width="25" height="25" />

![Uploading After Creating Pull Request](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/271bda42-25d8-416d-ad81-9b4fbd9fa545)
इस स्क्रीन को देखने के बाद, या तो आपका योगदान स्वीकार और मुख्य शाखा में मर्ज हो जाएगा, या आपका योगदान प्रतिपुष्टि प्राप्त करेगा और परिवर्तन के लिए अनुरोध किया जाएगा।
मैं इस प्रोजेक्ट की मुख्य शाखा में आपके सभी परिवर्तनों को मर्ज कर रहा हूँ। जब परिवर्तन मर्ज हो जाएंगे, तो आपको एक सूचना ईमेल प्राप्त होगी।<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Alarm%20Clock.png" alt="Alarm Clock" width="25" height="25" />

<ol>
  <li> यदि परिवर्तन के लिए अनुरोध किया जाता है, तो पुनः पुल अनुरोध करने और अपडेट करने के लिए एक ही वर्कफ़्लो का पालन करें।</li>
  <li> यदि कोई परिवर्तन का अनुरोध नहीं किया गया है, तो यह प्रोडक्शन शाखा में मर्ज कर दी जाएगी।<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Clinking%20Glasses.png" alt="Clinking Glasses" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png" alt="Party Popper" width="25" height="25" /></li>
</ol>

## और मदद चाहिए? <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Raising%20Hand.png" alt="Man Raising Hand" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Person%20Facepalming.png" alt="Person Facepalming" width="25" height="25" />
आपको किसी भी समस्या के लिए अतिरिक्त मदद की आवश्यकता हो तो, [LinkedIn](https://www.linkedin.com/in/alexanderclemens/) पर मुझसे संपर्क करें या मेरी [website](https://www.xanderclemens.com/) पर मेरा संपर्क विवरण देखें।

## योगदान के लिए धन्यवाद! <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Raising%20Hands.png" alt="Raising Hands" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Right-Facing%20Fist.png" alt="Right-Facing Fist" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Left-Facing%20Fist.png" alt="Left-Facing Fist" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Clapping%20Hands.png" alt="Clapping Hands" width="25" height="25" />
- बधाई हो! <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Bottle%20with%20Popping%20Cork.png" alt="Bottle with Popping Cork" width="25" height="25" /> आपने अभियानकर्ता के रूप में आपके अक्सर संपर्क करने वाले मानक फोर्क -> क्लोन -> संपादित -> पुल अनुरोध वर्कफ़्लो को पूरा किया है!

- कृपया इस रिपोजिटरी को स्टार <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="25" height="25" />  करें और इसे किसी ऐसे व्यक्ति के साथ साझा करें जिसे आप जानते हैं जो योगदान करना पसंद कर सकता है!

मैं आशा करता हूँ कि आप इस परियोजना में योगदान करते समय बहुत मज़ा करेंगे। यदि आपने अपने जीवन में जो कुछ करना चाहते हैं उसमें अपने अनुसंधान से प्रेरणा ली, तो कृपया इस रिपो नों को स्टार <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Milky%20Way.png" alt="Milky Way" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="25" height="25" /> करें और इसे दूसरों के साथ साझा करें ताकि वे योगदान करने के लिए प्रोत्साहित हों और यह निश्चित करें कि वे अपने जीवन में क्या करना चाहते हैं जोने में भागीदारी करें।


# योगदान<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Factory%20Worker.png" alt="Woman Factory Worker" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Factory%20Worker.png" alt="Factory Worker" width="25" height="25" />

हम सभी से पुल अनुरोध प्रेम <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Heart%20Suit.png" alt="Heart Suit" width="25" height="25" /> करते हैं। इस परियोजना में भाग लेकर, आप [संबंधित नियमों](https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/CODE_OF_CONDUCT.md) का पालन करने के लिए सहमति दे रहे हैं। कृपया इस परियोजना को बढ़ाने के लिए [रोडमैप](https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/ROADMAP.md) <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/World%20Map.png" alt="World Map" width="25" height="25" />देखते हुए इसमें योगदान करना जारी रखें, साथ ही इसे विशेषताओं के साथ और भी बेहतर बनाने के लिए [मुद्दों](https://github.com/BeforeIDieCode/BeforeIDieAchievements/issues) को बनाने या योगदान करने में जुटें।
