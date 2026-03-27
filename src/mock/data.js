import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Railton Santos', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Full Stack Developer Freelancer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  logo: 'favicon.png',
  title: `sup! `,
  name: 'Railton Santos',
  subtitle: 'Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `From São Paulo, Brazil to <span class="nowrap">Brisbane - Australia</span>`,
  paragraphTwo: `I am a Creative Full Stack Developer, with 6+ years experience working with web/app solutions, who has passion for making users life easier!`,
  paragraphThree: `<b>PHP</b> and <b>JS</b> are my two main weapons as my knowledge pool includes <b>React Native</b>, <b>Gatsby</b>, <b>VueJs</b>, <b>MySQL</b>, <b>NodeJs</b> and some cool tools such as <b>WebPack</b>, <b>Gulp</b>, <b>Grunt</b>...`,
  paragraphFour: `I also have extensive experience with UI/UX design... I’m able to perform great tasks, create pretty layouts and prototypes using <b>Photoshop</b>, <b>Illustrator</b>, <b>InVision</b>...`,
  paragraphFive: `I like to kill bugs while drinking strong coffee ☕`,
  resume: 'RailtonSantos.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'propertymash.gif',
    title: 'Propertymash ',
    info: 'Web portal',
    info2:
      'Real estate website with a large-scale search engine which presents data of 500+ new and off the plan apartments accross the biggest cities in Australia.',
    info3:
      'Entirely built using Wordpress integrated with the FoxEnterprise CRM providing the best reliability for the client to update their data and for the end user to access it in top speed... Also built some special WP plugins to please the client needs...',
    url: 'https://propertymash.com',
    repo: '',
    involvement: ['Design Layout', 'Front End', 'Back End'],
  },
  {
    id: nanoid(),
    img: 'pennyplace.gif',
    title: 'Penny Place',
    info: 'iOS App',
    info2:
      'Interactive iPad application vuejs+cordova built to provide the fastest access to off the plan apartments information and a powerful presentation to help the client showcase the project to their potential buyers.',
    info3:
      'All the data is syncronized with a powerful sales crm running in the back and providing real time prospects status to every single salesperson.',
    url: 'https://apps.apple.com/ro/app/penny-place/id1477788500',
    repo: '',
    involvement: ['Design Layout', 'Front End'],
  },
  {
    id: nanoid(),
    img: 'iris-bridgestone.png',
    title: 'IRIS Auto - Bridgestone',
    info: 'Transparency App & Analytics Portal',
    involvement: ['Front End', 'Back End'],
    info2:
      'The app enables technicians to record personalized video explanations of vehicle conditions, repairs needed, and parts required directly on their mobile device. Videos are instantly shared with customers via text message or email. Built with React Native for both iOS and Android, featuring QR code authentication and seamless video upload.',
    info3:
      'Location and store managers access a comprehensive  Laravel admin portal to track video analytics, monitor technician performance and manage accounts.',
    url: 'https://www.youtube.com/watch?v=edpHzI4BGwM',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'wms.gif',
    title: 'WMS',
    info: 'Website',
    info2:
      'Clean Wordpress theme built to provide the Water Modeling Solutions team the best experience on presenting, organizing and updating amazing case studies accross many cities in Australia and the islands.',
    info3: '',
    url: 'https://wmseng.com.au/',
    repo: '',
    involvement: ['Design Layout', 'Front End', 'Back End'],
  },
  {
    id: nanoid(),
    img: 'panorama.gif',
    title: 'Panorama',
    info: 'iOS App',
    info2:
      'An interactive sales book application which provides everything a salesperson needs to showcase a project to pontential buyers with the fastest access to documents and syncronized data.',
    info3: '',
    url: 'https://apps.apple.com/us/app/panorama-top-of-the-town/id1479155980',
    repo: '',
    involvement: ['Design Layout', 'Front End'],
  },
  {
    id: nanoid(),
    img: 'moda.gif',
    title: 'Moda',
    info: 'iOS/Kiosk App',
    info2:
      'A powerful interactive cross-platform sales book application made to attend everything a sales person needs to run an amazing presentation and captivate the attention of potential buyers from start to finish of the prospect...',
    info3: '',
    url: 'https://modathehills.com.au/',
    repo: '',
    involvement: ['Design Layout', 'Front End'],
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'railtondsanto@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/rai.lton/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/rai_lton',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/RailtonSt/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/railton-santos-37bb6a106/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/RailtonSantos',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false,
};
