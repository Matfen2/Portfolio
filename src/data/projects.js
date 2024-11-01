import architectImage from "../assets/architecte/architectes.jpg";
import architectOne from "../assets/architecte/architecteOne.png";
import architectTwo from "../assets/architecte/architecteTwo.png";
import arkaneImage from "../assets/arkane/logoArkane.png";
import arkaneOne from "../assets/arkane/arkaneOne.png";
import arkaneTwo from "../assets/arkane/arkaneTwo.png";
import kasaImage from "../assets/logements/logements.jpg";
import kasaOne from "../assets/logements/logementsOne.png";
import kasaTwo from "../assets/logements/logementsTwo.png";
import toolFirst from "../assets/frameworks/cssLogo.png";
import toolSecond from "../assets/frameworks/JavascriptLogo.png";
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
    hrefSite: "https://portfolio-architecte-qw4zx0lnn-matfens-projects.vercel.app/index.html",
    hrefGithub: "https://github.com/Matfen2/Portfolio-architecte?tab=readme-ov-file#portfolio-architecte-sophie-bluel",
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
    firstTools: toolFive,
    secondTools: toolSix
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
