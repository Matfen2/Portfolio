import logementImage from "../assets/logements/logements.jpg";
import logementOne from "../assets/logements/logementsOne.png";
import logementTwo from "../assets/logements/logementsTwo.png";
import arkaneImage from "../assets/arkane/logoArkane.png";
import arkaneOne from "../assets/arkane/arkaneOne.png";
import arkaneTwo from "../assets/arkane/arkaneTwo.png";
import dishonoredImage from '../assets/dishonored/dishonoredLogo.png';
import dishonoredOne from '../assets/dishonored/dishonoredOne.png';
import dishonoredTwo from '../assets/dishonored/dishonoredTwo.png';
import toolFirst from "../assets/frameworks/reactJsLogo.png";
import toolSecond from "../assets/frameworks/sassLogo.png";
import toolThird from "../assets/frameworks/nextjsLogo.png";
import toolFour from "../assets/frameworks/tailwindCSSLogo.png";

const projects = [
  {
    id: 1,
    title: "Kasa",
    imgShow: logementImage,
    pictures: [
      logementOne,
      logementTwo
    ],
    description: "Site basé sur le logement",
    hrefSite: "https://kasa-pi-nine.vercel.app",
    hrefGithub: "https://github.com/Matfen2/Kasa",
    firstTools: toolFirst,
    secondTools: toolSecond
  },
  {
    id: 2,
    title: "Arkane Studio",
    imgShow: arkaneImage,
    pictures: [
      arkaneOne,
      arkaneTwo
    ],
    description: "Clone du site Arkane Studio",
    hrefSite: "https://arkane-studios.vercel.app",
    hrefGithub: "https://github.com/Matfen2/arkane-studios",
    firstTools: toolFirst,
    secondTools: toolSecond
  },
  {
    id: 3,
    title: "Dishonored",
    imgShow: dishonoredImage,
    pictures: [
      dishonoredOne,
      dishonoredTwo
    ],
    description: "Site basé sur la saga Dishonored",
    hrefSite: "https://dishonored.vercel.app",
    hrefGithub: "https://github.com/Matfen2/dishonored",
    firstTools: toolThird,
    secondTools: toolFour
  }
];

export default projects;
