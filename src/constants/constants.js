import screenshot from '../assets/screenshot.png';
import spencerccarlson from '../assets/spencerccarlson.png';
import wowconnect from '../assets/wowconnect.png'


export const projects = [
  {
    title: 'Spencer Carlson\'s Music Website',
    description: "I made a website for my music using create-react-app. Comes with links to my entire discrography and people i've worked with, as well as a contact form.",
    image: 'https://i.imgur.com/9heFAHl.jpg',
    // image: '../assets/spencerccarlson.png',
    imagealt: 'Spencer Carlson Music',
    tags: ['React', 'TailwindCss', 'EmailJS'],
    source: 'https://github.com/anomic84/musicportfolio',
    visit: 'https://spencercarlsonmusic.com/',
    id: 0,
  },
  {
    title: 'WoW Connect',
    description: "Wow connect was built around the idea of community. We wanted to build a platform where you could interact with other players of World of Warcraft. What makes this application stand out is the ability to have a profile where you can design characters, see other players' characters, interact with others' content, and finally to meet up and play with others on a server.",
    // image: '../assets/wowconnect.png',
    image: 'https://i.imgur.com/2ilx7B9.png',
    imagealt: 'Wow Connect',
    tags: ['MySQL', 'Sequelize', 'Express', 'Handlebars', 'Node'],
    source: 'https://github.com/anomic84/WoW-Connect',
    visit: 'https://ancient-dusk-17399.herokuapp.com/',
    id: 1,
  },
  {
    title: 'TasteBuds',
    description: "A social media app that allows users to never dine alone again! This app allows the user to create a profile, see other users posts, create posts, and join other events!",
    // image: '../assets/employeetracker.png',
    image: { screenshot },
    imagealt: 'TasteBuds',
    tags: ['React', 'Express', 'Node', 'MongoDB', 'TailwindCSS'],
    source: 'https://github.com/anomic84/TasteBuds',
    visit: 'https://safe-everglades-81975.herokuapp.com/',
    id: 2,
  },
  {
    title: 'US Brewery Finder',
    description: "When the user searches a US city, this app will respond with a list of breweries in that city as well as their address and phone number. It will also show locations on the map.",
    // image: '../assets/usbreweryfinder.png',
    image: 'https://i.imgur.com/YFzpr4L.png',
    imagealt: 'US Brewery Finder',
    tags: ['JavaScript', 'API', 'HTML', 'CSS'],
    source: 'https://github.com/anomic84/US-Brewery-Finder',
    visit: 'https://anomic84.github.io/US-Brewery-Finder/',
    id: 3,
  },
  {
    title: 'Code Quiz',
    description: "A JavaScript Quiz with multiple choice questions, a timer, and high scores! To use, simply click the visit below and press start!",
    // image: '../assets/fakebank.png',
    image: 'https://i.imgur.com/VAtOehK.png',

    imagealt: 'Code Quiz',
    tags: ['HTML', 'CSS', 'Vite'],
    source: 'https://github.com/anomic84/CodeQuiz',
    visit: 'https://anomic84.github.io/CodeQuiz/',
    id: 4,
  },
  {
    title: 'Fake Bank Web App (React)',
    description: "This is a code along from a Youtube video, I'm sharing to show my basic understanding of React alongside TailwindCss and Vite",
    // image: '../assets/fakebank.png',
    image: 'https://i.imgur.com/hWpYJpo.png',
    imagealt: 'Fake Bank Web App (React)',
    tags: ['React', 'TailwindCss', 'Vite'],
    source: 'https://github.com/anomic84/bank-modern-app',
    visit: 'https://main--dancing-speculoos-bdc7b0.netlify.app/',
    id: 5,
  },
];
