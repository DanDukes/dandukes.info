import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dan DeGeare | WebDev, Poet, Storyteller', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Bio Page', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi! Nice to meet you, I'm",
  name: 'Dan DeGeare',
  subtitle: 'I write Poems and Websites.',
  cta: 'Come say Hi!',
};

// ABOUT DATA
export const aboutData = {
  img: '6155645.jpg',
  paragraphOne: "I'm a Full Stack Web Development Student with a strong background in Web Application Security and Team Management, educated at the University of California, Los Angeles and with a professional certificate in Full Stack Development from the University of Utah.",
  paragraphTwo: 'My strengths lie in project/people management, creativity, and problem solving. I have developed internal security tools, policies, and training courses. Opened, staffed, trained, and general managed multi-million dollar businesses, and developed several public facing web applications both solo and with a small team.',
  paragraphThree: 'Challenging problems excite me, and I am passionate about approaching solutions from differing viewpoints.',
  resume: 'https://gitconnected.com/dandukes/resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'gov.jpg',
    title: "Utah Governor's Office Employee Tracker",
    info: 'Employee Directory and Compensation Tracker',
    info2: 'Simple React app demonstrating how to populate, view, sort, and search chart data using three different methods.',
    url: 'https://dandukes.github.io/GovOfficeEmployees/',
    repo: 'https://github.com/DanDukes/GovOfficeEmployees', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fasthikes.png',
    title: 'Fast Hikes',
    info: 'Hiking Trail Location App',
    info2: 'Web App to locate hiking trails that are reachable and able to be completed within a specified time limit. Integrates the Open Hiking Project API with the Google Travel Matrix API to filter based on real time traffic conditions from the users location to the trail heads.',
    url: 'https://ericcwong.github.io/FastHikes/',
    repo: 'https://github.com/Ericcwong/FastHikes', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wooden.PNG',
    title: 'Wooden Avenues Candle Company',
    info: 'Gatsby based Shopify storefront',
    info2: 'Shopify storefront website built in gatsby for a local small business',
    url: 'https://www.woodenavescandles.com/',
    repo: 'https://github.com/DanDukes/woodenavescandles.com', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'password.jpg',
    title: 'Password Generator',
    info: 'Javascript Password Generator',
    info2: 'This is a simple one page web app built to generate a random password. It has been built to be fully responsive, and has a few bells and whistles that make it fully featured.',
    url: 'https://dandukes.github.io/Password-Generator/',
    repo: 'https://github.com/DanDukes/Password-Generator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Come say hi!',
  btn: 'Click Me',
  email: 'dan@degeare.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/danieldegeare/',
    },
    {
      id: nanoid(),
      name: 'stackoverflow',
      url: 'https://stackoverflow.com/users/12223220/daniel-d',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dandukes',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
