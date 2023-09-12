<div align="center">
  <h1><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Writing%20Hand.png" alt="Writing Hand" width="25" height="25" />Directives de contribution<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Bookmark%20Tabs.png" alt="Bookmark Tabs" width="25" height="25" /></h1>
  Cette documentation contient un ensemble de lignes directrices pour vous aider pendant le processus de contribution à ce projet. Cette ouverture<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Globe%20with%20Meridians.png" alt="Globe with Meridians" width="25" height="25" />Le projet source a été construit à l'aide du framework React et le serveur de développement devra être démarré afin de visualiser le projet sur votre ordinateur local.
</div>

---

## Étape 1. Forkez ce référentiel <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Fork%20and%20Knife%20with%20Plate.png" alt="Fork and Knife with Plate" width="25" height="25" />
Visiter le [repository](https://github.com/BeforeIDieCode/BeforeIDieAchievements) sur Github et cliquez sur le bouton Fork. Cela créera une copie dans votre compte.


https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/a8425d90-5f3e-4ee6-8499-2cf50643573c


## Étape 2. Cloner, ouvrir, installer et démarrer <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/OK%20Hand.png" alt="OK Hand" width="25" height="25" />

Ouvrez un terminal et exécutez la commande git suivante :

`git clone url-vous-venez-de-copier`
où url-you-just-copied est remplacé par l'url de ce référentiel (votre fork de ce projet). Voir les étapes précédentes pour obtenir l'url.

![Git Clone](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/4545703b-5803-4f60-96d1-b00b8f3f18a1)
Allez ensuite dans le répertoire où le projet est enregistré et exécutez<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Man %20Running%20Medium-Dark%20Skin%20Tone.png" alt="Man Running Medium-Dark Skin Tone" width="25" height="25" />la commande suivante :

`npm i` pour installer les dépendances pour pouvoir exécuter le React Development Server.

![npm i](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/645f3bad-701d-42ff-ba8d-c0753d272687)

Exécutez ensuite la commande suivante pour ensuite démarrer et exécuter le serveur de développement React ⚛️ :

`npm start`

![npm start](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/4cb46b1c-8a37-4359-ab60-54bce1c44c92)

Une fois exécuté avec succès, votre terminal ressemblera à ceci ci-dessous <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing %20Down.png" alt="Backhand Index Pointing Down" width="25" height="25" />

![Complied Successfully](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/20378a7b-9da0-4373-aeeb-f4affa4a6615)

Ouvrez maintenant un navigateur Web et accédez à localhost : 3000 si vous n'y êtes pas dirigé en exécutant la commande `npm start`.

![localhost3000](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/b4d739ce-d89d-4383-8faf-883625951182)


## Étape 3. Créez une nouvelle branche <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Christmas%20Tree.png" alt= "Christmas Tree" width="25" height="25" />

Ouvrez le référentiel cloné dans un outil d'édition de code tel que Visual Studio Code ou tout autre éditeur de code de votre choix. Les étapes suivantes illustrent le processus à l'aide de Visual Studio Code, mais le même flux de travail s'applique à d'autres éditeurs de code ou à l'aide des espaces de codes GitHub.

Accédez au répertoire du référentiel sur votre ordinateur (si vous n'y êtes pas déjà):

```
cd BeforeIDieAchievements
```

Now create a branch using the command:

```
git checkout -b your-branch-name
```

For example:

```
git checkout -b add-Xander-Clemens
```
## Étape 4. COLLEZ votre fichier JSON <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Roller%20Coaster. png" alt="Roller Coaster" width="25" height="25" />

* Collez le code JSON suivant dans src/Jsons/Contributors.json
* Faites défiler vers le bas de la liste et ajoutez un "," au dernier contributeur JSON avant de coller votre code JSON

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
<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" />COLLEZ VOTRE CODE CI-DESSUS ET ASSUREZ-VOUS D'AJOUTER "," AVANT LE PRÉCÉDENT<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" />

![Ajout du modèle JSON](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/65557bcb-a46e-4d1b-b458-2d6efd6743ad)

## Étape 5. REMPLISSEZ vos informations JSON <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Ringed%20Planet.png" alt="Ringed Planet" width="25" height="25" />
Pour remplir le code JSON donné, suivez ces instructions :
1. Remplacez "VOTRE_NOM" par votre nom réel dans toutes les occurrences.
2. Remplacez "VOTRE_CITY_COUNTRY_AND_FLAG" par votre ville, votre pays et le drapeau de votre pays. <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/White%20Flag.png" alt="White Flag" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Chequered%20Flag.png" alt="Chequered Flag" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Black%20Flag.png" alt="Black Flag" width="25" height="25" /> émoji.
3. Remplacez "GITHUB_PROFIL_URL" par l'URL de votre profil GitHub.
4. Remplacez "COLLEZ_CE_QUE_VOUS_VOULEZ_FAIRE_AVANT_DE_MOURIR" par un texte décrivant ce que vous voulez faire avant de mourir.
* C'est le moment de réfléchir <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thinking%20Face.png" alt="Thinking Face" width="25" height="25" /> et réfléchissez à ce que VOUS voulez faire avant de mourir et partagez-le ici. Ce texte décrira l'image que vous téléchargez dans le dossier bid_image. Veuillez limiter votre texte à 130 mots.
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

## Étape 6. AJOUTEZ VOTRE image de profil GitHub <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Camera%20with%20Flash.png" alt="Camera with Flash" width="25" height="25" />
- Accédez à votre profil GitHub puis enregistrez l'image de votre avatar en le formatant <VOTRE_NOM>.jpg. Veuillez remplacer `<VOTRE_NOM>` avec votre nom.

- Vous pouvez ajouter une image différente si vous le souhaitez, mais assurez-vous qu'il s'agit d'une image jpeg, qu'elle mesure `450*450` pixels et qu'elle suit la structure de nom ci-dessus.

![Enregistrer votre avatar GitHub](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/03b1c574-9dc9-452c-97c6-0987e0440697)

- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png" alt="High Voltage" width="25" height="25" /> Une fois enregistrée, faites glisser votre image dans le `dossier public/img/avatar`. <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png" alt="High Voltage" width="25" height="25" />

![Télécharger votre avatar img](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/a0c08dcd-3a8b-4e87-96d0-06b277308499)


## Étape 7. AJOUTEZ VOTRE ENCHÈRE (avant de mourir) Image <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Hourglass%20Done.png" alt="Hourglass Done" width="25" height="25" />
- Trouvez ou créez une image qui représente ce que vous voulez faire avant de mourir. Il peut s'agir d'un collage ou d'un seul élément. Prenez le temps de réfléchir et de lui donner du sens pendant que vous investissez en vous-même en contribuant à ce projet open source et en définissant ce qui est significatif et important pour vous.
- L'image doit être formatée au moins « 500*500 » pixels.
- Ajoutez votre image dans le dossier `public/img/bid_image`.
- Vous pouvez jouer avec la façon dont la taille de votre image affecte la galerie de photos et l'ajuster en conséquence.
Il peut être utile de trouver des images de haute qualité sur des sites Web comme [UnSplash](https://unsplash.com/) ou d'utiliser les outils AI Generative Images. De plus, la modification de vos images sur des outils tels que [Canva](https://www.canva.com/) peut rendre vos images superbes et significatives pour vous.

![Ajout de l'image BID](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/aaa18f26-cd3a-41f3-92c0-a90d7c5dd274)

## Étape 8. AJOUTER au fichier CONTRIBUTORS.md

Copiez le code ci-dessous, puis collez-le dans le fichier<a href="https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/CONTRIBUTORS.md">CONTRIBUTORS</a> de ce dépôt. Assurez-vous de le coller sous une autre colonne de fin de contributeurs. Et puis procédez à la modification avec vos propres informations.

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

### Quelques choses à changer:

- Remplacez le lien par votre propre lien de profil
   `<a href="lien vers votre profil GitHub ici"></a>`

- Faites un clic droit sur votre image de profil github et copiez le lien de l'image et collez-le dans la balise `img`. Laissez la propriété `width="100px"`

```html
<img src="VOTRE_LIEN_AVATAR_GITHUB" width="100px" />
```

Accédez simplement à votre page de profil GitHub pour obtenir votre image de profil et votre lien.

<img src="https://user-images.githubusercontent.com/62628408/147896530-f94c17f7-f064-4e8d-8bc1-af2c1f63559d.png" width="100%" alt="profile_page">

- Remplacez la sous-balise par votre propre nom.

```html
<sub>Votre nom</sub>
```

Enregistrez ensuite vos modifications.

<br>

## Étape 9. Git Add, Commit et Push <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Hot%20Beverage.png" alt="Hot Beverage" width="25" height="25" />
Ajoutez vos nouvelles modifications à la branche que vous avez créée à l'aide de la commande `git add` :

```javascript
git ajouter .
```

Validez maintenant ces modifications à l'aide de la commande `git commit` :

```javascript
git commit -m "Ajoutez votre nom à Before I Die"
```

Remplacer « votre-nom » par votre nom.


Push vos modifications à l'aide de la commande `git push` :

```javascript
git push origin votre-nom-de-branche
```

Remplacer `votre-nom-de-branche` par le nom de la branche que vous avez créée précédemment.

<ol>
    <li>Avant de poursuivre ces étapes, assurez-vous que vos modifications répondent aux exigences des étapes précédentes<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Man%20Walking%20Light%20Skin%20Tone.png" alt="Man Walking Light Skin Tone" width="25" height="25" /></a></li>
   <li>Assurez-vous d'avoir ajouté l'image de l'avatar, l'image d'enchère (avant de mourir) et que tout votre texte JSON a été correctement saisi et s'affiche correctement sur votre serveur de développement React <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Sunglasses.png" alt="Smiling Face with Sunglasses" width="25" height="25" /></li>
   <li>Validez vos modifications avec le message "Ajoutez une invite ici" <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Check%20Mark%20Button.png" alt="Check Mark Button" width="25" height="25" /></li>
   <li>Envoyez vos modifications à la branche que vous avez créée précédemment lors de l'exécution de la commande `git checkout` <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Check%20Box%20with%20Check.png" alt="Check Box with Check" width="25" height="25" /></li>
   <li>Voir ci-dessous pour un exemple<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png" alt="Backhand Index Pointing Down" width="25" height="25" /></li>
</ol>

### Exemple de workflow d'ajout/commit/push:

Si vous êtes dans le répertoire BeforeIDieAchievements de votre terminal:
  ```javascript
    git add .
    git commit -m "Ajouter Xander Clemens à Avant de mourir"
    git push -u origin add-Xander-Clemens
  ```


## Étape 10. Soumettez vos modifications pour examen <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Detective.png" alt="Detective" width="25" height="25" />

Si vous accédez à votre référentiel sur GitHub, vous verrez un bouton `Compare & pull request`. Cliquez sur ce bouton.

![Create A Pull Request](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/060a039b-8710-47e4-b875-2aad2091516b)

Soumettez maintenant la pull request en cliquant sur le bouton `Create pull request`. Assurez-vous d'ajouter des détails sur ce que vous ajoutez à la demande d'extraction.

![Submit A Pull Request](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/e1cbee74-e2e2-4904-948f-77e6b0c73a8e)


Si le déploiement réussit, il y aura une option sur l'écran ci-dessous pour afficher un « aperçu » de votre contribution avant qu'elle ne passe en production!<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Desktop%20Computer.png" alt="Desktop Computer" width="25" height="25" />

![Uploading After Creating Pull Request](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/271bda42-25d8-416d-ad81-9b4fbd9fa545)
En voyant cet écran, soit votre contribution sera acceptée et fusionnée dans la branche principale, soit votre contribution recevra un retour et des modifications seront demandées.
Je vais fusionner toutes vos modifications dans la branche principale de ce projet. Vous recevrez un e-mail de notification une fois les modifications fusionnées.<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Alarm%20Clock.png" alt="Alarm Clock" width="25" height="25" />

<ol>
  <li> Dans le cas où des modifications sont demandées, suivez le même workflow pour demander et mettre à jour votre pull request.</li>
   <li> Si aucune modification n'a été demandée, elle sera fusionnée dans la branche de production.<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Clinking%20Glasses.png" alt="Clinking Glasses" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png" alt="Party Popper" width="25" height="25" /></li>
</ol>

## Besoin d'aide? <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Raising%20Hand.png" alt="Man Raising Hand" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Person%20Facepalming.png" alt="Person Facepalming" width="25" height="25" />
Si vous avez besoin d'aide supplémentaire pour résoudre un problème, n'hésitez pas à me contacter au [LinkedIn](https://www.linkedin.com/in/alexanderclemens/) ou retrouvez mes coordonnées sur mon [website](https://www.xanderclemens.com/).

## Merci d'avoir contribué!<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Raising%20Hands.png" alt="Raising Hands" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Right-Facing%20Fist.png" alt="Right-Facing Fist" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Left-Facing%20Fist.png" alt="Left-Facing Fist" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Clapping%20Hands.png" alt="Clapping Hands" width="25" height="25" />
- Bravo! <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Bottle%20with%20Popping%20Cork.png" alt="Bottle with Popping Cork" width="25" height="25" /> Vous venez de terminer le workflow standard fork -> clone -> edit -> pull request que vous rencontrerez souvent en tant que contributeur!

- S'il te plaît, étoile <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="25" height="25" /> ce référentiel et partagez-le avec quelqu'un que vous connaissez qui pourrait aimer contribuer !

J'espère que vous aurez beaucoup de plaisir en contribuant à ce projet. Si vous vous êtes inspiré de vos propres recherches sur ce que vous voulez faire avant de mourir, veuillez mettre en vedette <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Milky%20Way.png" alt="Milky Way" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="25" height="25" /> ce dépôt et partagez-le avec d'autres pour les encourager à contribuer et identifier ce qu'ils veulent faire avant de mourir.


# Contribuant <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Factory%20Worker.png" alt="Woman Factory Worker" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Factory%20Worker.png" alt="Factory Worker" width="25" height="25" />

Nous aimons <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Heart%20Suit.png" alt="Heart Suit" width="25" height="25" /> tirer des demandes de tout le monde. En participant à ce projet, vous
accepter de respecter les [Code de conduite](https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/CODE_OF_CONDUCT.md). Veuillez continuer à ajouter ce projet en consultant la [Feuille de route](https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/ROADMAP.md) <img src="https://raw.githubusercontent.com/ Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/World%20Map.png" alt="World Map" width="25" height="25" /> de ce projet en plus de créer ou de contribuer à [issues](https://github.com/BeforeIDieCode/BeforeIDieAchievements/issues) pour améliorer davantage ce projet avec des fonctionnalités.
