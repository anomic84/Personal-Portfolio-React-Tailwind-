import screenshot from '../assets/screenshot.png';
import spencermusic from '../assets/spencermusic.png'
import wowconnect from '../assets/wowconnect.png';
import fakebank from '../assets/fakebank.png';
import employeetracker from '../assets/employeetracker.png';
import usbrewfinder from '../assets/usbreweryfinder.png';

export const projects = [
  {
    title: 'TasteBuds',
    description: "A social media app that allows users to never dine alone again! This app allows the user to create a profile, see other users posts, create posts, and join other events!",
    image: screenshot,
    imagealt: 'TasteBuds',
    tags: ['React', 'Express', 'Node', 'MongoDB', 'TailwindCSS'],
    source: 'https://github.com/anomic84/TasteBuds',
    visit: 'https://safe-everglades-81975.herokuapp.com/',
    id: 0,
  },
  {
    title: 'Spencer Carlson\'s Music Website',
    description: "I made a website for my music using create-react-app. Comes with links to my entire discrography and people i've worked with, as well as a contact form.",
    image: spencermusic,
    imagealt: 'Spencer Carlson Music',
    tags: ['React', 'TailwindCss', 'EmailJS'],
    source: 'https://github.com/anomic84/musicportfolio',
    visit: 'https://spencercarlsonmusic.com/',
    id: 1,
  },
  {
    title: 'WoW Connect',
    description: "Wow connect was built around the idea of community. We wanted to build a platform where you could interact with other players of World of Warcraft. What makes this application stand out is the ability to have a profile where you can design characters, see other players' characters, interact with others' content, and finally to meet up and play with others on a server.",
    image: wowconnect,
    imagealt: 'Wow Connect',
    tags: ['MySQL', 'Sequelize', 'Express', 'Handlebars', 'Node'],
    source: 'https://github.com/anomic84/WoW-Connect',
    visit: 'https://ancient-dusk-17399.herokuapp.com/',
    id: 2,
  },
  {
    title: 'US Brewery Finder',
    description: "When the user searches a US city, this app will respond with a list of breweries in that city as well as their address and phone number. It will also show locations on the map.",
    image: usbrewfinder,
    imagealt: 'US Brewery Finder',
    tags: ['JavaScript', 'API', 'HTML', 'CSS'],
    source: 'https://github.com/anomic84/US-Brewery-Finder',
    visit: 'https://anomic84.github.io/US-Brewery-Finder/',
    id: 3,
  },
  {
    title: 'Employee Tracker',
    description: "An interface to allow user to manage their database of employees, as to which role (or job) they fit into, their pay, and who's their manager. This application gives the user the ability to add and view departments of their company, view and add roles to their company, and view or add employees, as well as update their information.​",
    image: employeetracker,
    imagealt: 'Employee Tracker',
    tags: ['MySQL', 'Node', 'Express', 'Inquirer'],
    source: 'https://github.com/anomic84/Employee-Tracker',
    visit: 'https://github.com/anomic84/Employee-Tracker',
    id: 4,
  },
  {
    title: 'Fake Bank Web App (React)',
    description: "This is a code along from a Youtube video, I'm sharing to show my basic understanding of React alongside TailwindCss and Vite",
    image: fakebank,
    imagealt: 'Fake Bank Web App (React)',
    tags: ['React', 'TailwindCss', 'Vite'],
    source: 'https://github.com/anomic84/bank-modern-app',
    visit: 'https://main--dancing-speculoos-bdc7b0.netlify.app/',
    id: 5,
  },
];
