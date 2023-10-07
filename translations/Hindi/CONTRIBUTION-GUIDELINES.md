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

- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png" alt="High Voltage" width="25" height="25" /> एक बार जब सहेज लिया गया हो, तो अपनी छवि को `public/img/avatar folder` फ़ोल्डर' में खींचें।. <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png" alt="High Voltage" width="25" height="25" />

![Uploading Your Avatar img](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/a0c08dcd-3a8b-4e87-96d0-06b277308499)
