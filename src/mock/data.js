import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Railton Santos',
  lang: 'en',
  description: 'Full Stack Developer | UI/UX & Motion',
};

// HERO DATA
export const heroData = {
  logo: 'rai-logo.png',
  title: `Hi, `,
  name: 'Railton Santos',
  subtitles: [
    'Full Stack Dev',
    'UI/UX & Motion Dev',
    'Bug Hunter <img src="static/a82f5dae6ce7c0035ee61355c845f407/bug.png" height="50" style="margin-left: 10px;"/>',
  ],
  cta: 'Open to opportunities',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `<b>Brazilian Full Stack Developer based in Brisbane-AU, focused on UI/UX, motion, and interactive digital experiences.</b>`,
  paragraphTwo: `10+ years in software development, building scalable and performance-focused solutions for a wide range of business needs.`,
  paragraphThree: `Strong background in <b>WordPress</b> and <b>Shopify</b> development, building custom plugins, integrations, and scalable <span style="white-space: nowrap;">e-commerce</span> solutions with a focus on user experience, conversion, and performance.`,
  paragraphFour: `<b>Experienced in building web and mobile applications using Laravel, React Native, Vue.js, and Node.js.</b>`,
  paragraphFive: `<b>Core stack includes PHP, JS/TypeScript, Vue.js, Node.js, MySQL, and MongoDB.</b>`,
  paragraphSix: `Additional work with <b>Python</b> and <b>C#</b> for backend services, APIs, and automation tasks, including integration with modern development workflows.`,
  paragraphSeven: `Comfortable working with LLM-based tools for debugging, refactoring, and rapid prototyping, with focus on performance, clean architecture, and user experience.`,
  paragraphEight: `<b>I enjoy building cool stuff over a strong coffee <img height="20" src="/static/164fa633b66e3dad5f8f2159adfe9f5b/coffee.png"/></b>`,
  resume: 'RailtonSantos.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'propertymash.gif',
    title: 'Propertymash',
    info: 'Web Portal',
    info2:
      'Real estate platform handling 500+ properties across major Australian cities with optimized search performance.',
    info3:
      'Built with Wordpress + FoxEnterprise CRM, including custom plugins and performance-focused architecture for scalability and fast data access.',
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
      'Interactive iPad app built with Vue.js + Cordova for fast access to property data and high-impact sales presentations.',
    info3:
      'Real-time synchronization with CRM, enabling live tracking of prospects across the sales team.',
    url: 'https://apps.apple.com/ro/app/penny-place/id1477788500',
    repo: '',
    involvement: ['Design Layout', 'Front End'],
  },
  {
    id: nanoid(),
    img: 'iris-bridgestone.png',
    title: 'IRIS Auto - Bridgestone',
    info: 'Transparency App & Analytics Portal',
    involvement: ['Front End', 'Back End', 'UI/UX'],
    info2:
      'Mobile app enabling technicians to record and send personalized vehicle inspection videos via SMS/email. Built with React Native for iOS and Android, featuring QR code authentication and streamlined video upload workflow.',
    info3:
      'Includes a comprehensive Laravel-based admin portal for analytics, performance tracking, and account management.',
    url: 'https://www.youtube.com/watch?v=edpHzI4BGwM',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'wfc.png',
    title: 'WFC eCommerce',
    info: 'Shopify platform',
    info2:
      'High-performance Shopify store built with a strong focus on conversion optimization, UX clarity, and seamless shopping experience.',
    info3:
      'Full theme customization, performance tuning, and integration with third-party apps and APIs to support a scalable and flexible e-commerce ecosystem.',
    url: 'https://wfc.com.au/',
    repo: '',
    involvement: ['Front End', 'UI/UX', 'Shopify'],
  },
  {
    id: nanoid(),
    img: 'wp.png',
    title: 'Custom Websites',
    info: 'WordPress solutions',
    info2:
      'Custom WordPress platforms with modern architecture, focused on scalability and performance.',
    info3:
      'Built using Laravel and React integrations, going beyond standard themes with custom functionality and optimized performance.',
    info4: 'Projects include Logan Leisure Centres and Digital Child.',
    url: 'https://loganleisurecentres.com.au/',
    repo: '',
    involvement: ['Design Layout', 'Front End', 'Back End'],
  },
  {
    id: nanoid(),
    img: 'wms.gif',
    title: 'WMS',
    info: 'Website',
    info2:
      'Custom WordPress platform for managing and showcasing engineering case studies across multiple regions.',
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
      'Interactive sales app delivering fast access to project data and documents for real estate presentations.',
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
      'Cross-platform interactive sales tool designed to deliver high-impact presentations for property buyers.',
    info3: '',
    url: 'https://modathehills.com.au/',
    repo: '',
    involvement: ['Design Layout', 'Front End'],
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Ready to build something together? Great!',
  btn: 'Let’s Chat',
  email: 'railtondsanto@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    { id: nanoid(), name: 'instagram', url: 'https://www.instagram.com/rai.lton/' },
    { id: nanoid(), name: 'twitter', url: 'https://twitter.com/rai_lton' },
    { id: nanoid(), name: 'facebook', url: 'https://www.facebook.com/RailtonSt/' },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/railton-santos-37bb6a106/',
    },
    { id: nanoid(), name: 'github', url: 'https://github.com/RailtonSantos' },
  ],
};

// Github buttons
export const githubButtons = {
  isEnabled: false,
};
