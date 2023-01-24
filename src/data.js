// iconos de links
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

// images portafolio
import image1 from './assets/portfolio/arrayDestruct.jpg'
import image2 from './assets/portfolio/installNode.jpg'
import image3 from './assets/portfolio/navbar.jpg'
import image4 from './assets/portfolio/PERN.png'
import image5 from './assets/portfolio/reactParallax.jpg'
import image6 from './assets/portfolio/reactPortfolio2.jpg'
import image7 from './assets/portfolio/reactSmooth.jpg'
import image8 from './assets/portfolio/reactWeather.jpg'
import image9 from './assets/portfolio/usestate.jpg'

// tecnologias
import html from './assets/experience/html.png'
import css from './assets/experience/css.png'
import github from './assets/experience/github.png'
import postgres from './assets/experience/postgres.png'
import javascript from './assets/experience/javascript.png'
import nextjs from './assets/experience/nextjs.png'
import node from './assets/experience/node.png'
import reactImg from './assets/experience/react.png'
import tailwind from './assets/experience/tailwind.png'
import graphql from './assets/experience/graphql.png'
import docker from './assets/experience/docker.png'
import sass from './assets/experience/sass.png'



export const linksNav = [
  {
    id: 1,
    link: 'home'
  },
  {
    id: 2,
    link: 'about'
  },
  {
    id: 3,
    link: 'portafolio'
  },
  {
    id: 4,
    link: 'skills'
  },
  {
    id: 5,
    link: 'contact'
  }
];

export const links = [
  {
    id: 1,
    child:(
      <>
        LinkedIn <FaLinkedin size={30}/>
      </>
    ),
    href: "https://www.linkedin.com/in/javier-pe%C3%B1aranda/",
    style: 'rounded-tr-md'
  },
  {
    id: 2,
    child:(
      <>
        GitHub <FaGithub size={30}/>
      </>
    ),
    href: "https://github.com/JP85118",
  },
  {
    id: 3,
    child:(
      <>
        Mail <HiOutlineMail size={30}/>
      </>
    ),
    href: "mailto:sam.alejo98@gmail.com",
  },
  {
    id: 4,
    child:(
      <>
        Resume <BsFillPersonLinesFill size={30}/>
      </>
    ),
    href: "./assets/C.V Fullstack.pdf",
    style: 'rounded-br-md',
    download:true,
  },
]

export const portafolio = [
  {
    id: 1,
    src: image1
  },
  {
    id: 2,
    src: image2
  },
  {
    id: 3,
    src: image3
  },
  {
    id: 4,
    src: image4
  },
  {
    id: 5,
    src: image5
  },
  {
    id: 6,
    src: image6
  },
  {
    id: 7,
    src: image7
  },
  {
    id: 8,
    src: image8
  },
  {
    id: 9,
    src: image9
  },
]


export const techs = [
  {
    id: 1,
    src: html,
    title: 'HTML',
    style: 'shadow-orange-500'
  },
  {
    id: 2,
    src: css,
    title: 'CSS',
    style: 'shadow-blue-500'
  },
  {
    id: 3,
    src: github,
    title: 'Github',
    style: 'shadow-gray-400'
  },
  {
    id: 4,
    src: postgres,
    title: 'PostgresSQL',
    style: 'shadow-blue-300'
  },
  {
    id: 5,
    src: javascript,
    title: 'Javascript',
    style: 'shadow-yellow-500'
  },
  {
    id: 6,
    src: nextjs,
    title: 'Next.js',
    style: 'shadow-gray-800'
  },
  {
    id: 7,
    src: node,
    title: 'Node.js',
    style: 'shadow-green-500'
  },
  {
    id: 8,
    src: reactImg,
    title: 'React.js',
    style: 'shadow-blue-400'
  },
  {
    id: 9,
    src: tailwind,
    title: 'Tailwind',
    style: 'shadow-blue-300'
  },
  {
    id: 10,
    src: graphql,
    title: 'GraphQL',
    style: 'shadow-pink-400'
  },
  {
    id: 11,
    src: docker,
    title: 'Docker',
    style: 'shadow-blue-300'
  },
  {
    id: 12,
    src: sass,
    title: 'Sass',
    style: 'shadow-pink-300'
  },
]