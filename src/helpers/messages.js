const project1 = {
  title: "What to Eat",
  description:
    "A simple web app that allows users to create their own list of restaurants, give them ratings and sort them into custom categories. Used Vue to build the front end and implemented the back end with Firebase Realtime Database",
};

const project2 = {
  title: "Custom Spotify",
  description:
    "A stripped down, responsive, modern Spotify tool with playback controls that shows you your top 20 artists and tracks. Built from scratch using React + Styled Components. Leverages Spotify Web API to display data as well as provide the playback functionality.",
};

const project3 = {
  title: "Varpedia",
  description:
    "Developed a learning tool application targeted towards secondary language learners that creates a video with images, audio and text based on the user search term. Designed the GUI using JavaFX and Java + Bash for the backend using MVC design pattern.",
};

const aboutMe = [
  {
    title: "About Me",
    description:
      "Hi! I'm Francis and I am currently a fourth year Software Engineering student studying at the Univiersity of Auckland, New Zealand. \nI am an aspiring Front End Developer with a passion for building awesome wesbites with a beautiful UI and a intuitive UX. \nI am always looking for ways to improve my skills to build even better software in the future.",
  },
  {
    title: "Education",
    subTitle: "University of Auckland ( Mar. 2018 to Nov. 2021 )",
    list: [
      "SOFTENG 351 Fundamentals of Database Systems (First in Course)",
      "SOFTENG 350 Human Computer Interaction (A+)",
      "COMPSCI 316 Cyber Security (A+)",
      "SOFTENG 325 Software Architecture (A)",
      "SOFTENG 254 Quality Assurance (A+)",
    ],
  },

];

const workExperience = [
  {
    title: "Quantiful",
    subHeading: "Front End Intern (Nov. 2020 - Feb. 2021)",
    description: [
      "Worked on building new functionality for the QU application using React/Redux and Styled Components",
      "Drastically improved User Experience by building a Search Functionality which increased efficiency by 80%",
      "Built unit tests and managed integration tests for front end components using React Testing Library, Katalon and Jest",
      "Gained experience in Scrum Agile Methodologies",
    ],
  },
  {
    title: "Woork",
    subHeading: "Software Developer Intern (Dec. 2019 - Feb. 2020)",
    description: [
      "Worked on developing a Smart CRM web app targeted towards real estate agents",
      "Implemented a note taking feature using ReactJS for the front-end and GraphQL + Amazon DynamoDB for back-end. Shipped into production",
      "Built and deployed a time-management feature for users using Apollo-cache and custom React hooks",
    ],
  },
  {
    title: "Fluid Connectors",
    subHeading: "Inventory Analyst (Dec. 2017 to Feb. 2018)",
    description: [
      "Worked in a team alongside other Inventory Analysts and Mechanical Engineers",
      "Have had first-hand experience using crimping machines and press machines to assemble hydraulic parts",
      "Managed and sorted inventory to ensure efficient work in the warehouse",
    ],
  },
];
export { project1, project2, project3, aboutMe, workExperience };
