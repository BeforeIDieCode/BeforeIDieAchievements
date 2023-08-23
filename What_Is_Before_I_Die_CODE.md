# Discover Your Life Goals and Make Your First Open Source Contribution with Before I Die Code

![6](https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/100642d0-7f08-4d10-ad7d-70d128506f5e)

Sitting with hospice patients in Altamonte Springs, Florida, in their final moments profoundly changed my perspective on life when I was 23. During my training, we did an exercise where we wrote our bucket lists and shared them aloud. As we went around the room, I realized that whether you’re 25 or 95, we all have dreams we long to fulfill before our time is up.

<img width="963" alt="Alexander Clemens Bucketlist back in 2017" src="https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/1d7100ba-ef80-493e-8a4f-1fbce67a949c">

My bucket list from 2017 and when I was a volunteer at Hospice of the Comforter in Altamonte Springs, Florida.

In those quiet spaces holding the hands of the dying, I witnessed the stirring of long-forgotten hopes and regrets over paths not taken. It became clear just how precious each moment is and how crucial it is to live deliberately.

////////Add Image of hospice care hands
![Comforting hands at a hospice care unit](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pzn79g9kzt9ntiamrno6.png align="left")

Comforting hands at a hospice care unit.

After asking friends and strangers what they want to do before they die, I was amazed by the diversity and depth of their answers. Some wanted to fall in love❤️, others to witness a glacier🧊. Many wished to reconnect with their estranged family, visit an exotic place, or participate in an extreme sport. Their responses were full of meaning and passion.

I traveled across all continents, my phone in hand, [collecting these stories](https://www.xanderclemens.com/what-do-you-want-to-do-before-you-die). From the shores of Alaska to New Zealand and in between. I documented people thoughtfully sharing their ultimate life goals. Young and old, rich and poor — we all have dreams we carry.

This experience showed me the power of reflecting deeply on the question: What matters most? It binds our shared humanity. We all want to love, create, connect, explore, and leave a positive mark on this world.


Photo by Megan Bucknall on Unsplash

I created the open-source project [Before I Die Code](https://github.com/BeforeIDieCode/BeforeIDieAchievements) to inspire others to identify their purpose. It’s a place to share your dreams alongside your first contribution to open source. Because life is not meant to be lived passively — it is meant to be lived with intention. Let’s discover our most meaningful goals…before we die.

I’m thrilled to share Before I Die Code — an open-source project that helps developers contribute to open source while reflecting on their life goals and dreams.

➡️ [BEFORE I DIE GitHub Repo](https://github.com/BeforeIDieCode/BeforeIDieAchievements)

#### Video Explaining Before I Die Code ⬇️
[![Alt text](https://img.youtube.com/vi/xiszqfD_W6U/0.jpg)](https://www.youtube.com/watch?v=xiszqfD_W6U)

### Share Your Aspirations Through Open Source

The idea behind Before I Die Code is simple but powerful: developers share an image and text describing what they want to accomplish in life before they die.

/////// Add image
![My sharing of what I want to accomplish before I die from the open source project Before I Die Code💻](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5rcdcx9ucorxz8g967nk.png align="left")

My sharing of what I want to accomplish before I die from the open source project Before I Die Code💻

This allows you to:

* Deeply reflect on your goals, dreams, and bucket list items

* Identify what matters most to you and the legacy you want to leave

* Openly share your aspirations with the world

* Connect more profoundly with other developers over shared dreams

* Make your first open-source contribution in a personal, meaningful way!


### An Open Source Project Created for Beginners

Before I Die, Code is intentionally designed to be beginner-friendly. I built it to provide an easy on-ramp for those looking to get started in open source.

#### The project offers:

* Step-by-step contribution guidelines to walk you through making your first pull request

* Clear, detailed code comments explaining the React developer server setup, editing the the Contributors.json, adding images and editing the [CONTRIBUTORS.md](http://CONTRIBUTORS.md) file

* A welcoming, supportive community of open source enthusiasts


It’s the perfect space to learn the pull request workflow, build your coding skills, connect with others, and define your life purpose.

### How to Get Involved with Before I Die Code

Contributing is simple:

1. [Fork the GitHub repository](https://github.com/BeforeIDieCode/BeforeIDieAchievements/fork)

2. Follow the [contribution guidelines](https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/CONTRIBUTION-GUIDELINES.md) to add your “Before I Die” goal, including an image and description text

3. Open a pull request to submit your contribution

4. Additional feedback, bug 🪲 reports, and new ideas 💡are welcome


The Before I Die Code project’s front end is built with [React](https://reactjs.org/), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5), and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), and it’s currently deployed on [Vercel](https://vercel.com/). However, the technology will change with the deployment as I am planning on applying for this open-source project to be featured on the [GitHub explore page](https://github.com/explore). For this, the project will need to be using GitHub pages.

### A little bit about how this project has been built

I came up with this idea while learning how to independently contribute to open source projects. The main repositories advertised for beginners to update the markdown file with their GitHub information, which is suitable for understanding the workflow of how to contribute and complete a pull request. However, I wanted to see a project that demonstrated where new contributors have to think for themselves about what is important to them and share that aspect. Sharing this publicly will make individuals feel more meaning and attachment to continue growing the code base, technology stack, and reach of how this project can evolve and grow with time.

The beginning of this project I can credit the GitHub user [Arash](https://github.com/Banana021s) with sharing and building a [React themed Gallery](https://github.com/Banana021s/Gallery-Media) that I used as my starting point for building the Before I Die Code first version. I did this as I wasn’t able to find the exact photo gallery I wanted to have for this project without installing additional React libraries, and in the early phase of this project, I tried to limit using libraries for size purposes as well as to understand better the CSS and React JSX capabilities by themselves. Arash did a great job of building a Media Gallery that I could figure out how to operate and customize to this project.

Most of my research and additions of specific code blocks came from using [Perplexity.ai](http://Perplexity.ai), an AI-powered search engine and information discovery tool. For example, this led me to configure and utilize the code block in my MasonryLayout.jsx component (located in the src/Components/MasonryLayout/MasonryLayout.jsx of the project) for randomizing the contributor’s images every time a user views or refreshes the webpage.

#### Video of the image shuffling ⬇️
[![Alt text](https://img.youtube.com/vi/XbAL3ajad3c/0.jpg)](https://www.youtube.com/watch?v=XbAL3ajad3c)

### The React.jsx code that I used for this component

```javascript
// import styles of this component
import styles from "./MasonryLayout.module.css"

// import other react pkg to use
import Masonry from "react-masonry-css"

// import other component to use
import MasonryBox from './MasonryBox/MasonryBox';

// MasonryLayout Component
const MasonryLayout = ({ images }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  // Shuffle the images array
  const shuffledImages = images.sort(() => Math.random() - 0.5);

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles["my-masonry-grid"]}
      columnClassName={styles["my-masonry-grid_column"]}
    >
      {shuffledImages.map(item => (
        <MasonryBox
          key={item.id}
          wallSrc={item.image}
          userProf={item.avatar}
          userName={item.name}
          userJob={item.location}
          githubUrl={item.GitHub}
          userText={item.text}
        />
      ))}
    </Masonry>
  )
}

export default MasonryLayout
```

* I imported the styles, React Masonry library, and MasonryBox component that I needed for my MasonryLayout component. I also defined the MasonryLayout component function.

* Inside my component, I specify column layout breakpoints for different screen sizes in a breakpointColumnsObj. I shuffle the images array randomly so the items display in a mixed order.

* I map over the shuffled images array to render individual MasonryBox components for each image item being passed in. The MasonryLayout component returns the Masonry grid layout itself.

* When returning the layout, I passed in the breakpoint columns I defined, styling classes, and the mapped MasonryBox components. This renders the responsive image mosaic grid displaying the shuffled image items in Masonry Box components.


Additional assistance and recourse came from studying other open source projects and developers repositories. For example, while searching GitHub, I found the frontend developer, open source developer & technical writer [Victor Eke](https://github.com/Evavic44). Of the many open source projects that he has assisted with and created, I used his repository [Portfolio Ideas](https://github.com/Evavic44/portfolio-ideas) to get ideas on the structure of documentation and, in additionally, reading his blog article [“How my open source project got 1000 stars on GitHub in 4 months”](https://eke.hashnode.dev/how-my-open-source-project-got-1000-stars-on-github-in-4-months) on what he did to surpass the 1,000 stars on his open source project. I also studied one of the most popular stared [first-contributions repositories](https://github.com/firstcontributions/first-contributions) (which has over 37,000 stars) for the excellent structure of the documentation. And lastly, to add more visual interest to the documentation found throughout the Before I Die Code, I used the [Animated Fluent Emojis](https://github.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis) open source project by [Tarikul Islam Anik](https://github.com/Tarikul-Islam-Anik).

The project is built with the React framework structured with a public and src directory. The folder structure from this project opened in my Visual Studio Code.

<img width="341" alt="Before I Die Code file structure" src="https://github.com/BeforeIDieCode/BeforeIDieAchievements/assets/120526253/546e0722-e2c8-4f19-995f-8269b6d35bc4">

Before I Die Code file structure

### Areas where most of my work and edits took place are in the following:

* [public/img/avatar](https://github.com/BeforeIDieCode/BeforeIDieAchievements/tree/main/public/img/avatar) — created image file to store contributor’s GitHub photos.

* [public/img/bid\_image](https://github.com/BeforeIDieCode/BeforeIDieAchievements/tree/main/public/img/bid_image) — created image file to store contributors bid\_image(Before I Die image). The image represents what a contributor wants to do before they die.

* [public/img/dummy-image](https://github.com/BeforeIDieCode/BeforeIDieAchievements/tree/main/public/img/dummy_image) — created an image file to store nine main images shown at the website’s top section for all users to see.

* [src/Components](https://github.com/BeforeIDieCode/BeforeIDieAchievements/tree/main/src/Components) — I customized the CSS and JSX for each component you see listed: BrickLayout, ContainerCard, Elements, Header, MasoaryLayout, and Nav. I used React, a JavaScript library, to build user interfaces. It lets me break the UI into small, reusable components. React utilizes a virtual DOM and an efficient update algorithm to make updates faster and more efficient. I like that React follows a declarative programming approach. As the developer, this allows me to focus on what the UI should look like rather than the step-by-step instructions for achieving that look.

* [src/Jsons/Contributors.json](https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/src/Jsons/Contributors.json) — I needed to create an easy way for contributors to add their information into a preset JSON template. This JSON data represents an array of objects, where each object contains information about a person’s identifier, image URLs, name, location, GitHub profile, and text describing what they want to do before they die. The data provides the necessary information to display each person’s profile, images, and goals on the Before I Die Code webpage.

* The remaining files inside the React project inside the scr directory had only minor changes that I had made.

* [CODE\_OF\_CONDUCT.md](https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/CODE_OF_CONDUCT.md) — I needed to create the first version of the code of conduct that all successful open-source projects have. In this case, my code of conduct is based on Mozilla’s code of conduct enforcement ladder.

* [CONTRIBUTION-GUIDELINES.md](http://CONTRIBUTION-GUIDELINES.md) — I needed to create instructions to explain to new contributors how to perform the correct steps and workflow to add your information to this open-source project. For this, I had to learn quick solutions further to include video into my markdown file to assist with my explanation of steps and make sure contributors feel empowered to continue to contribute after their first pull request.

* [CONTRIBUTORS.md](http://CONTRIBUTORS.md) — All successful open-source projects promote and show appreciation to all the individuals that have assisted in their projects. That is the purpose of this file. It displays the contributor’s images and GitHub profile links.

* [README.md](http://README.md) — I needed to make sure my README was well organized in stating the purpose of this project, who it is for to provide value, and helping to introduce new contributors in an organized manner and how to contribute to the project. As mentioned before, my Markdown files used animated movies to assist with creative documentation for this project.

* [ROADMAP.md](http://ROADMAP.md) — Lastly, I added a roadmap of the potential directions for this project. This is the first version of a list of ideas that came to my mind, and I’m looking forward to the open-source community expanding upon it, refining it, and refining to create open issues and work on new features, and continue the growth of this project.


### Where does Before I Die Code go from here?

This segues perfectly into the current ideas that I have described in the [ROADMAP.md](http://ROADMAP.md) of this project and how this project can continue to grow with the community. Individuals can add their existing skills and apply new skills to enhance this project further. Technology will constantly change, but the human desire to accomplish meaningful life moments before we die will always exist. My first goal is to have 100 people contribute to the project by sharing their Before I Die contributions. From reading the roadmap, you will find many ideas to get an idea of how the project can be improved upon with new tech stacks, incorporating AI or additionally incorporating an API, adapting the project for responsiveness depending on screen size, enhancing the UI, using Python to analyze what individuals want to do before they die, and continually making this project the main open-source project that new developers can contribute to learn and develop the workflow to contribute to open-source projects.


///// Add image
![Current ROADMAP.MD for Before I Die Code as of August 17, 2023](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/csptpv5nrsg2dxw4kk9b.png align="left")

Current [ROADMAP.MD](http://ROADMAP.MD) for Before I Die Code as of August 17, 2023

*Your contributions provide diverse perspectives that make the project genuinely spectacular. I’d love for you to share your wildest dreams!*

### Help build the Before I Die Open Source Community

Beyond the project, contributing to Before I Die Code connects you with the passionate open source community. Let’s learn together, collaborate on code, and make meaningful open-source contributions — both to software and our lives.

Please share your thoughts and feedback! Check out the project, star ⭐️ the GitHub repository, and make your first pull request today. Thank you for taking the time to read my article.

### I built this project to empower us to achieve our goals and dreams. Let’s get started!

1. [BeforeIDieAchievements 🌟](https://github.com/BeforeIDieCode/BeforeIDieAchievements)

2. [README.md](http://README.md) [📚](https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/README.md)

3. [CONTRIBUTION-GUIDELINES.md](http://CONTRIBUTION-GUIDELINES.md) [🤝](https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/CONTRIBUTION-GUIDELINES.md)

4. [ROADMAP.md](http://ROADMAP.md) [🗺️](https://github.com/BeforeIDieCode/BeforeIDieAchievements/blob/main/ROADMAP.md)


#### Connect with me!

* [MEDIUM 📝](https://xanderclemens.medium.com/)

* [LINKEDIN 💼](https://www.linkedin.com/in/alexanderclemens/)

* [GITHUB 🐙](https://github.com/XanderRubio)

* [YOUTUBE 🎥](https://www.youtube.com/channel/UCocfFCNHRhCT27RnHLPRcSw)

* [WEBSITE 🌐](https://www.xanderclemens.com/)
