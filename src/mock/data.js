import { nanoid } from 'nanoid';
import bug from '../images/bug.png';

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
  subtitles: ['Full Stack Dev', 'UI/UX & Motion', `Bug Hunter <img src="${bug}"/>`],
  cta: 'Open to opportunities',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `<b>Brazilian Full Stack Developer based in Greater Brisbane, Australia, specialized in UI/UX, motion, and interactive digital experiences.</b>`,
  paragraphTwo: `10+ years of experience building scalable web and mobile applications across diverse businesses.`,
  paragraphThree: `Strong background in <b>WordPress</b> and <b>Shopify</b>, developing custom plugins, integrations, and e-commerce platforms centered on user experience and conversion.`,
  paragraphFour: `Experienced across frontend and backend using <b>React</b>, <b>Vue.js</b>, <b>Node.js</b>, <b>Laravel</b>, and <b>React Native</b>, delivering modern and interactive digital products.`,
  paragraphFive: `Core stack includes <b>PHP</b>, <b>JavaScript/TypeScript</b>, <b>MySQL</b>, and <b>MongoDB</b>, with a strong focus on clean architecture and maintainable code.`,
  paragraphSix: `Additional experience with <b>Python</b> and <b>C#</b> for APIs, automation, and backend services, integrated into modern workflows.`,
  paragraphSeven: `Comfortable working with AI-assisted dev tools for debugging, refactoring, and rapid prototyping, with emphasis on UX, performance, and product quality.`,
  paragraphEight: `<b>I enjoy building cool stuff over a strong coffee <img height="20" src="/static/164fa633b66e3dad5f8f2159adfe9f5b/coffee.png"/></b>`,
  resume: 'RailtonSantos-resume-cv',
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
