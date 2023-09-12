<div align="center">
  <h1><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Writing%20Hand.png" alt="Writing Hand" width="25" height="25" />Directrices de Contribución<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Bookmark%20Tabs.png" alt="Bookmark Tabs" width="25" height="25" /></h1>
  Esta documentación contiene un conjunto de directrices para ayudarte durante el proceso de contribución a este proyecto. Este proyecto de código abierto<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Globe%20with%20Meridians.png" alt="Globe with Meridians" width="25" height="25" />fue construido utilizando el marco de trabajo React y el servidor de desarrollo debe ser iniciado para poder ver el proyecto en tu máquina local.
</div>

---

## Paso 1. Hacer un Fork de este repositorio <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Fork%20and%20Knife%20with%20Plate.png" alt="Fork and Knife with Plate" width="25" height="25" />

Visita el [repositorio](https://github.com/BeforeIDieCode/BeforeIDieAchievements) en Github y haz clic en el botón de Fork. Esto creará una copia en tu cuenta.

https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/a8425d90-5f3e-4ee6-8499-2cf50643573c

## Paso 2. Clonar, abrir, instalar e iniciar <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/OK%20Hand.png" alt="OK Hand" width="25" height="25" />

Abre una terminal y ejecuta el siguiente comando git:

`git clone url-que-acabas-de-copiar`
donde url-que-acabas-de-copiar debe ser reemplazado con la URL de este repositorio (tu fork de este proyecto). Mira los pasos anteriores para obtener la URL.

![Git Clone](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/4545703b-5803-4f60-96d1-b00b8f3f18a1)
Luego ve al directorio donde se guarda el proyecto y ejecuta<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Man%20Running%20Medium-Dark%20Skin%20Tone.png" alt="Man Running Medium-Dark Skin Tone" width="25" height="25" />el siguiente comando:

`npm i` para instalar las dependencias y poder ejecutar el Servidor de Desarrollo de React.

![npm i](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/645f3bad-701d-42ff-ba8d-c0753d272687)

Luego ejecuta el siguiente comando para iniciar y ejecutar el Servidor de Desarrollo de React ⚛️:

`npm start`

![npm start](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/4cb46b1c-8a37-4359-ab60-54bce1c44c92)

Cuando se esté ejecutando correctamente, tu terminal se verá así <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png" alt="Backhand Index Pointing Down" width="25" height="25" />

![Compilado Exitosamente](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/20378a7b-9da0-4373-aeeb-f4affa4a6615)

Ahora abre un navegador web e ingresa a localhost:3000 si no fuiste dirigido allí al ejecutar el comando `npm start`.

![localhost3000](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/b4d739ce-d89d-4383-8faf-883625951182)

## Paso 3. Crear una nueva rama <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Christmas%20Tree.png" alt="Christmas Tree" width="25" height="25" />

Abre el repositorio clonado en un editor de código como Visual Studio Code, o cualquier otro editor de tu elección. Los siguientes pasos demuestran el proceso usando Visual Studio Code, pero el mismo flujo de trabajo se aplica a otros editores de código o utilizando GitHub Codespaces.

Cambia al directorio del repositorio en tu computadora (si aún no estás allí):

```
cd BeforeIDieAchievements
```

Ahora crea una rama usando el comando:

```
git checkout -b nombre-de-tu-rama
```

Por ejemplo:

```
git checkout -b add-Xander-Clemens
```

## Paso 4. PEGA tu archivo JSON <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Roller%20Coaster.png" alt="Roller Coaster" width="25" height="25" />

- Pega el siguiente código JSON en src/Jsons/Contributors.json
- Desplázate hacia la parte inferior de la lista y agrega una "," al último contribuyente en formato JSON antes de pegar tu código JSON.

```
{
  "id": "TU_NOMBRE",
  "image": "img/bid_image/TU_NOMBRE.jpg",
  "avatar": "img/avatar/TU_NOMBRE.jpg",
  "name": "TU_NOMBRE",
  "location": "TU_CIUDAD_PAÍS_Y_BANDERA",
  "GitHub": "URL_PERFIL_GITHUB",
  "text": "PEGA_LO_QUE_QUIERES_HACER_ANTES_DE_MORIR"
}
```

<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" />PEGA TU CÓDIGO ARRIBA Y ASEGÚRATE DE AGREGAR "," ANTES DEL CÓDIGO JSON DE LOS COLABORADORES ANTERIORES.<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" />

![Adding the JSON Template](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/65557bcb-a46e-4d1b-b458-2d6efd6743ad)

## Paso 5. LLENA tu información en el JSON <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Ringed%20Planet.png" alt="Ringed Planet" width="25" height="25" />

Para completar el código JSON proporcionado, sigue estas instrucciones:

1. Reemplaza "TU_NOMBRE" con tu nombre real en todas las apariciones.
2. Reemplaza "TU_CIUDAD_PAÍS_Y_BANDERA" con tu ciudad, país y bandera. <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/White%20Flag.png" alt="White Flag" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Chequered%20Flag.png" alt="Chequered Flag" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Black%20Flag.png" alt="Black Flag" width="25" height="25" />emoji.
3. Reemplaza "URL_PERFIL_GITHUB" con la URL de tu perfil en GitHub.
4. Reemplaza "PEGA_LO_QUE_QUIERES_HACER_ANTES_DE_MORIR" con un texto que describa lo que deseas hacer antes de morir.

- Este es el momento de pensar <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thinking%20Face.png" alt="Thinking Face" width="25" height="25" /> y reflexionar sobre lo que TÚ deseas hacer antes de morir y compartirlo aquí. Este texto describirá la imagen que subas a la carpeta bid_image. Por favor, limita tu texto a 130 palabras.

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

## Paso 6. AGREGA la imagen de tu perfil de GitHub <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Camera%20with%20Flash.png" alt="Camera with Flash" width="25" height="25" />

- Ve a tu perfil de GitHub y luego guarda la imagen de tu avatar con el formato <TU_NOMBRE>.jpg. Por favor, reemplaza <TU_NOMBRE> con tu nombre.

- Puedes añadir una imagen diferente si lo prefieres, pero asegúrate de que sea una imagen jpeg y que tenga un tamaño de 450\*450 píxeles, siguiendo la estructura de nombres mencionada anteriormente.

![Saving Your GitHub Avatar](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/03b1c574-9dc9-452c-97c6-0987e0440697)

- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png" alt="High Voltage" width="25" height="25" /> Una vez guardada, arrastra tu imagen a la carpeta public/img/avatar. <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png" alt="High Voltage" width="25" height="25" />

![Uploading Your Avatar img](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/a0c08dcd-3a8b-4e87-96d0-06b277308499)

## Paso 7. AGREGA la imagen de tu BID (Antes de Morir) <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Hourglass%20Done.png" alt="Hourglass Done" width="25" height="25" />

- Encuentra o crea una imagen que represente lo que deseas hacer antes de morir. Puede ser un collage o un elemento único. Tómate tiempo para reflexionar y haz que tenga un significado personal, ya que estás invirtiendo en ti mismo al contribuir a este proyecto de código abierto y definir lo que es significativo e importante para ti.
- La imagen debe tener un tamaño de al menos 500\*500 píxeles.
- Agrega tu imagen a la carpeta `public/img/bid_image`.
- Puedes experimentar con cómo el tamaño de tu imagen afecta la galería de fotos y ajustarlo en consecuencia.
  Puede ser útil encontrar imágenes de alta calidad en sitios web como [UnSplash](https://unsplash.com/) o utilizar herramientas de generación de imágenes con IA. Además, editar tus imágenes en herramientas como [Canva](https://www.canva.com/) puede hacer que tu imaginería sea excelente y significativa para ti.

![Adding the BID Image](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/aaa18f26-cd3a-41f3-92c0-a90d7c5dd274)

## Paso 8. AGREGA al archivo CONTRIBUTORS.md

Copia el código de abajo y pégalo en el <a href="https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/CONTRIBUTORS.md">CONTRIBUTORS</a> archivo de este repositorio. Asegúrate de pegarlo debajo de la columna final de otro colaborador. Luego procede a editar con tu propia información.

```html
<!-- Start of column -->
<td align="center">
  <a href="https://github.com/GITHUB_ACCOUNT">
    <img src="YOUR_GITHUB_AVATAR_LINK" width="100px" />
    <br />
    <sub>YOUR_NAME</sub>
  </a>
</td>
<!-- End of column -->
```

<br>

### Algunas cosas para cambiar:

- Reemplaza el enlace con tu propio enlace de perfil
  `<a href="tu enlace de perfil de GitHub aquí"></a>`

- Haz clic derecho en la imagen de tu perfil de GitHub, copia el enlace de la imagen y pégalo dentro de la etiqueta `img`. Deja la propiedad `width="100px"`.

```html
<img src="TU_ENLACE_AVATAR_GITHUB" width="100px" />
```

Solo ve a tu página de perfil de GitHub para obtener tu imagen y enlace de perfil.

<img src="https://user-images.githubusercontent.com/62628408/147896530-f94c17f7-f064-4e8d-8bc1-af2c1f63559d.png" width="100%" alt="profile_page">

- Reemplaza la etiqueta `sub` con tu propio nombre.

```html
<sub>Tu Nombre</sub>
```

Luego guarda los cambios.

<br>

## Paso 9. Git Add, Commit y Push <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Hot%20Beverage.png" alt="Hot Beverage" width="25" height="25" />

Agrega tus nuevos cambios a la rama que creaste usando el comando `git add`:

```javascript
git add .
```

Ahora, confirma esos cambios usando el comando `git commit`:

```javascript
git commit -m "Add tu-nombre to Before I Die"
```

Reemplaza `tu-nombre` con tu nombre.

Empuja tus cambios usando el comando `git push`:

```javascript
git push origin nombre-de-tu-rama
```

Reemplaza `nombre-de-tu-rama` con el nombre de la rama que creaste anteriormente.

<ol>
   <li>Antes de continuar con estos pasos, asegúrate de que tus cambios cumplan con los requisitos de los pasos anteriores<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Man%20Walking%20Light%20Skin%20Tone.png" alt="Man Walking Light Skin Tone" width="25" height="25" /></a></li>
   <li>Asegúrate de haber agregado la imagen de avatar, la imagen del BID (Antes de Morir) y de que todo tu texto JSON se haya ingresado correctamente y se muestre correctamente en tu servidor de desarrollo React <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Sunglasses.png" alt="Smiling Face with Sunglasses" width="25" height="25" /></li>
   <li>Confirma tus cambios con el mensaje "añadir tu mensaje aquí" <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Check%20Mark%20Button.png" alt="Check Mark Button" width="25" height="25" /></li>
   <li>Empuja tus cambios a la rama que creaste anteriormente al hacer el comando `git checkout` <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Check%20Box%20with%20Check.png" alt="Check Box with Check" width="25" height="25" /></li>
   <li>Mira el ejemplo a continuación<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png" alt="Backhand Index Pointing Down" width="25" height="25" /></li>
</ol>

### Ejemplo de flujo de trabajo de add/commit/push:

Si estás en el directorio BeforeIDieAchievements en tu terminal:

```javascript
  git add .
  git commit -m "Add Xander Clemens to Before I Die"
  git push -u origin add-Xander-Clemens
```

## Paso 10. Envía tus cambios para revisión <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Detective.png" alt="Detective" width="25" height="25" />

Si vas a tu repositorio en GitHub, verás un botón `Compare & pull request` . Haz clic en ese botón.

![Create A Pull Request](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/060a039b-8710-47e4-b875-2aad2091516b)

Ahora envía la solicitud de extracción haciendo clic en el botón `Create pull request`. Asegúrate de agregar detalles sobre lo que estás añadiendo a la solicitud de extracción.

![Submit A Pull Request](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/e1cbee74-e2e2-4904-948f-77e6b0c73a8e)

Si la implementación es exitosa, habrá una opción en la pantalla de abajo para ver una "vista previa" de tu contribución antes de que se publique.<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Desktop%20Computer.png" alt="Desktop Computer" width="25" height="25" />

![Uploading After Creating Pull Request](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/271bda42-25d8-416d-ad81-9b4fbd9fa545)
Al ver esta pantalla, tu contribución será aceptada y fusionada en la rama principal o se te brindará retroalimentación y se solicitarán cambios.
Estare fusionando todos tus cambios en la rama principal de este proyecto. Recibirás un correo electrónico de notificación una vez que los cambios se hayan fusionado.<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Alarm%20Clock.png" alt="Alarm Clock" width="25" height="25" />

<ol>
  <li> En caso de que se soliciten cambios, sigue el mismo flujo de trabajo para solicitar y actualizar tu solicitud de extracción.</li>
  <li> Si no se han solicitado cambios, se fusionará en la rama de producción.<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Clinking%20Glasses.png" alt="Clinking Glasses" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png" alt="Party Popper" width="25" height="25" /></li>
</ol>

## ¿Necesitas más ayuda? <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Raising%20Hand.png" alt="Man Raising Hand" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Person%20Facepalming.png" alt="Person Facepalming" width="25" height="25" />

Si necesitas ayuda adicional con cualquier problema, no dudes en contactarme en [LinkedIn](https://www.linkedin.com/in/alexanderclemens/) o encuentra mis detalles de contacto en mi [sitio web](https://www.xanderclemens.com/).

## ¡Gracias por contribuir! <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Raising%20Hands.png" alt="Raising Hands" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Right-Facing%20Fist.png" alt="Right-Facing Fist" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Left-Facing%20Fist.png" alt="Left-Facing Fist" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Clapping%20Hands.png" alt="Clapping Hands" width="25" height="25" />

- ¡Felicitaciones! <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Bottle%20with%20Popping%20Cork.png" alt="Bottle with Popping Cork" width="25" height="25" /> Acabas de completar el flujo de trabajo estándar de fork -> clone -> edit -> pull request que a menudo encontrarás como colaborador!

- Por favor, agrega una estrella <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="25" height="25" /> a este repositorio y compártelo con alguien que pueda disfrutar contribuyendo.

Espero que te diviertas mucho mientras contribuyes a este proyecto. Si te inspiraste en tu propia investigación sobre lo que deseas hacer antes de morir, por favor agrega una estrella <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Milky%20Way.png" alt="Milky Way" width="25" height="25" /><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="25" height="25" /> a este repositorio y compártelo con otros para animarlos a contribuir e identificar lo que quieren hacer antes de morir.

# Contribuciones <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Factory%20Worker.png" alt="Woman Factory Worker" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Factory%20Worker.png" alt="Factory Worker" width="25" height="25" />

Nos encantan <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Heart%20Suit.png" alt="Heart Suit" width="25" height="25" /> las solicitudes de extracción de todos. Al participar en este proyecto, aceptas cumplir con el [Codigo de Conducta](https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/translations/Spanish/CODE_OF_CONDUCT.md). Por favor, continúa agregando a este proyecto al observar el [Road Map](https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/ROADMAP.md) <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/World%20Map.png" alt="World Map" width="25" height="25" /> de este proyecto, además de crear o contribuir a [problemas](https://github.com/BeforeIDieCode/BeforeIDieAchievements/issues) para mejorar aún más este proyecto con funciones.
