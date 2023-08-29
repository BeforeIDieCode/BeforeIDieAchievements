# Road Map <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Automobile.png" alt="Automobile" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Auto%20Rickshaw.png" alt="Auto Rickshaw" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Bus.png" alt="Bus" width="25" height="25" /> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/World%20Map.png" alt="World Map" width="25" height="25" />

The goals <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Star-Struck.png" alt="Star-Struck" width="25" height="25" /> and focus of this project are:
1. To teach developers how to contribute to an open source project.
2. To encourage contributors to take time to reflect on what is important to them in their life and define that.
3. To use knowledge, skills, and teamwork to continue to build and evolve this project into a repository project from an organization that assists with creating an open source project to facilitate learning during the development and building phase of an open source project to help with keeping developers skills sharpe<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Kitchen%20Knife.png" alt="Kitchen Knife" width="25" height="25" />.

The following are a list of ideas to get started and thinking <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Owl.png" alt="Owl" width="25" height="25" /> about how to continue to grow and build upon this project.


- Ensure responsive screen adaptation to make the Before I Die Code show up well on mobile and other screen sizes.
- Add React Native code to this project so that it can be used on mobile.
- Add a Maps page that pinpoints users to the location they identified in the JSON file.
- ~~Add a clickable contribution page that displays all members who have contributed to the project.~~
- Add the ability for contributors to list other social media platforms for contact information and have that displayed when you click on the Before I Die Image.
- Before clicking on a contributor's avatar to direct the viewer to the user's profile, add a small GitHub image that will be displayed over the avatar image to let the user know where they will be taken when clicked.
- Once enough user data has been received, add Python code and libraries to extract data to display the most common or unique activities individuals want to do before they die.
- Enhance the user interface by changing the font of the Before I Die text that displays when clicking on a contributor's Before I Die image.
- Enhance the dummy images that show up when first visiting the website and have them change every time from a large library of images (could be from other previous contributors) to select from that represent unique and meaningful activities to complete before dying.
- Translate the README file and additional documentation for this repository in other languages. A model of similar work can be seen from the [first-contributions repository](https://github.com/firstcontributions/first-contributions)
- Add a clickable page on the website that documents how to create a pull request and contribute to open source projects. This can be documented and YouTube links added to communicate well how to do this process.
- Add AI and other new technologies into this project from our community of contributors to test and also enhance the project with creative ideas.
- Create a feature that allows users to set reminders or notifications for their goals. This could help users stay on track and motivated to achieve their goals.
- Develop a system for tracking user progress and providing feedback or encouragement. This could involve gamification elements, such as badges or rewards for completing tasks.
- Create a feature that allows users to share their BEfore I Die on social media.
- Develop a system for tracking and displaying user contributions to the platform, such as code contributions or bug reports.
- Create a feature that allows users to connect with mentors or advisors who can provide guidance and support for achieving their goals.
- Develop a mobile app version with offline capability so users can access content on the go.
- Allow users to mark goals as "achieved" and share success stories.
Integrate with wearable devices like smart watches to track progress on fitness/health goals.
- Add data visualizations to showcase aggregate data on user goals and achievements.
- Build a bucket list generator that suggests goals based on user input like age, interests, location etc.
- Implement a badging/reward system for contributing and completing goals.
- Add a goal deadline and reminder feature so users can keep track.
- Build browser extension to capture goals/ideas and share quickly with BeforeIDie.
- Add multimedia options - videos, audio, images to augment text goals.
- Analyze data to identify trends and correlations between demographics, interests etc. and goals.
- using the Python for analyzing the data of contributors' locations in your open-source project and creating a high-quality UI design map to display their locations, you can use the Python library called ["Leafmap"](https://leafmap.org/).
- Adding users ability to contribute by verifying identity using the OAuth token to authenticate to Google, LinkedIn, Github. OAuth is an open standard for authorization that allows third-party applications to access user data from various services such as Google, LinkedIn, and GitHub without requiring the user to share their login credentials. OAuth provides a secure and standardized way for users to grant access to their data to third-party applications.

### Machine Learning and AI Ideas 
- Build a machine learning model that analyzes people's "before I die" goals and categorizes them into different themes (e.g. travel, career, relationships, thrills, etc.). You could visualize the results in interesting ways.
- Use natural language processing to generate word clouds from the text of people's submissions, highlighting the most common dreams and aspirations.
- Create a chatbot that engages visitors in a conversation about their dreams and bucket list goals. The bot could provide encouraging responses and thought-provoking questions to spur reflection.
- Implement image recognition on the uploaded photos to auto-tag them with relevant keywords and categories. This makes the images more findable and shareable.
- Build a recommendation engine that suggests related or commonly paired goals to users as they submit theirs. This could help spark new ideas.
- Analyze the location data attached to submissions to identify geographical trends and hotspots for certain goals. Create data visualizations on a map.
<br>


### Backend ideas
- Build a REST API that handles CRUD operations on the goals/dreams data. This would allow creating, reading, updating and deleting goals via API instead of directly editing JSON.
- Add user authentication so people can create accounts. Associate goals with user accounts rather than just having a collective pool of anonymous goals.
- Allow uploading images to cloud storage like S3 instead of storing locally. The API could handle uploading images on goal creation.
- Implement upvoting/reactions on goals. The API would need to handle storing reaction counts and which goals a user has reacted to.
- Build more advanced search/filtering of goals, like by keywords, location, popularity, etc. The API can handle search logic.
- Add ability to "favorite" or "save" goals you like. The API would store these associations per user.
- Suggest similar or commonly associated goals through the API via machine learning models analyzing the data.
- Create admin dashboard to moderate goals, block/ban users, pull analytics through the API.
- Implement email/notification features, commenting, social connections between users via the API.
- Use API to auto-generate the CONTRIBUTORS.md file listing contributors.
- The key is to offload data management and complex logic to a serverless backend API. This improves extensibility, efficiency and sets the stage for more advanced features.
#### Review the CONTRIBUTION_GUIDELINE to make sure that it covers and answers the following:
- Technologies used
- How to report bugs
- How to propose new features
- How to open a pull request
- How to claim an issue or task
 Environment set up
- Style guide/code conventions
- Link to a discussion forum or how people can ask for help
- Project architecture (nice to have)
- Known issues
