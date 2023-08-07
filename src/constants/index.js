import {
  EnvHomestead,
  backend,
  blender,
  blowTorch,
  bop,
  frontend,
  mpc,
  ux,
  wastelandSheriff,
  xeco
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: '3D Modeling and Texturing',
    icon: frontend,
  },
  {
    title: 'Lokdev',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'Blender',
    icon: blender,
  },
];

const experiences = [
  {
    title: '3D Artist',
    company_name: 'XECO · Full-time',
    icon: xeco,
    iconBg: '#333333',
    date: 'Jun 2019 - Oct 2019',
  },
  {
    title: '3D Artist',
    company_name: 'BOP Consultancy and Services · Full-time',
    icon: bop,
    iconBg: '#333333',
    date: 'Jan 2020 - Mar 2022',
  },
  {
    title: 'Artist - Asset',
    company_name: 'MPC · Full-time',
    icon: mpc,
    iconBg: '#333333',
    date: 'May 2022 - May 2023',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'EnvHomestead',
    description: 'Ant-Man and the Wasp: Quantumania at MPC, where me and team modeled the environment props',
    image: EnvHomestead,
    demo: 'https://www.artstation.com/artwork/KezAzB',
  },
  {
    id: 'project-2',
    name: 'Vintage BlowTorch',
    description: 'I modeled the prop in Maya and Blender, textured and detailed it in Photoshop and Substance Painter, and rendered it in Marmoset',
    image: blowTorch,
    demo: 'https://www.artstation.com/artwork/eJyG9D',
  },{
    id: 'project-3',
    name: 'wasteland sheriff',
    description: 'Hey Guys I want to share my fan art of the wasteland sheriff, a revolver-style pistol from the game Valorant. I used Blender for modeling and Photoshop for texturing and detailing.',
    image: wastelandSheriff,
    demo: 'https://www.artstation.com/artwork/NGzx0b',
  },
];

export { experiences, projects, services, technologies };

