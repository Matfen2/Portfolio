import architectImage from "../assets/architecte/architectes.jpg";
import architectOne from "../assets/architecte/architecteOne.png";
import architectTwo from "../assets/architecte/architecteTwo.png";
import grimoireImage from "../assets/grimoires/grimoires.jpg";
import grimoireOne from "../assets/grimoires/grimoiresOne.png";
import grimoireTwo from "../assets/grimoires/grimoiresTwo.png";
import kasaImage from "../assets/logements/logements.jpg";
import kasaOne from "../assets/logements/logementsOne.png";
import kasaTwo from "../assets/logements/logementsTwo.png";
import toolFirst from "../assets/frameworks/cssLogo.png";
import toolSecond from "../assets/frameworks/JavascriptLogo.png";
import toolThird from "../assets/frameworks/nodeJsLogo.png";
import toolFour from "../assets/frameworks/mongoDbLogo.png";
import toolFive from "../assets/frameworks/reactJsLogo.png";
import toolSix from "../assets/frameworks/sassLogo.png";

const projects = [
  {
    id: 1,
    title: "Portfolio-Architecte",
    imgShow: architectImage,
    pictures: [
      architectOne,
      architectTwo
    ],
    description: "Site basé sur la possibilité de choisir son plan d'architecte",
    problem: "Difficulté : window.location.href",
    hrefSite: "https://portfolio-architecte-qw4zx0lnn-matfens-projects.vercel.app/index.html",
    hrefGithub: "https://github.com/Matfen2/Portfolio-architecte?tab=readme-ov-file#portfolio-architecte-sophie-bluel",
    firstTools: toolFirst,
    secondTools: toolSecond
  },
  {
    id: 2,
    title: "Mon Vieux Grimoire",
    imgShow: grimoireImage,
    pictures: [
      grimoireOne,
      grimoireTwo
    ],
    description: "Site basé sur le référencement des livres et de leurs notations",
    problem: "Difficulté : Dépendances fs et sharp",
    hrefSite: "https://mon-vieux-grimoire-eight.vercel.app",
    hrefGithub: "https://github.com/Matfen2/Mon-Vieux-Grimoire",
    firstTools: toolThird,
    secondTools: toolFour
  },
  {
    id: 3,
    title: "Kasa",
    imgShow: kasaImage,
    pictures: [
      kasaOne,
      kasaTwo
    ],
    description: "Site Kasa sur la location immobilière",
    problem: "Difficulté : Concaténation et useState",
    hrefSite: "https://kasa-pi-nine.vercel.app",
    hrefGithub: "https://github.com/Matfen2/Kasa",
    firstTools: toolFive,
    secondTools: toolSix
  }
];

export default projects;
