import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Simón Escobar - A Frontend Developer', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: 'Frontend Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hola, mi nombre es',
  name: 'Simón Escobar',
  subtitle: 'y soy Frontend Developer',
  cta: 'Más sobre mí',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'Hola otra vez, como sabes soy Simón Escobar y me dedico a crear el Frontend para sitios y apps web.',
  paragraphTwo:
    'En mis redes sociales, trato de crear contenido educativo y de calidad para que los demás entiendan un poco más sobre el mundo de la web.',
  paragraphThree: ' ',
  resume: 'https://drive.google.com/file/d/1GaltdHTsI4EklyNO8pEMF7fkjO6Sgxc0/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'supertask.png',
    src: 'https://i.imgur.com/jTNjzbH.png',
    title: 'SuperTasks',
    info: 'Una web app para crear tareas usando ReactJS',
    info2: 'Aquí podrás crear tareas agregar las a la lista, borrar o marcar como hechas',
    tag: 'ReactJS',
    url: 'http://supertasks.surge.sh/',
    repo: 'https://github.com/simonescob/SuperTasks', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fast-whatsapp.png',
    title: 'Fast Whastapp',
    info: 'Una web app para enviar mensajes de whatsapp a contactos no agregados.',
    info2: '',
    tag: 'ReactJS',
    url: 'https://fast-whatsapp.vercel.app/',
    repo: 'https://github.com/simonescob/Fast-Whatsapp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '404.png',
    title: '404 page not found',
    info: 'Un simple 404 para una página no encontrada.',
    info2: '',
    tag: 'ReactJS',
    url: 'https://simo-404-page.vercel.app/',
    repo: 'https://github.com/simonescob/404-Page', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: ' ',
    title: 'Ve a mi Github',
    info: 'Puedes ver mi github y ver más proyectos',
    info2: '',
    url: 'https://github.com/simonescob/',
    // repo: 'https://github.com/simonescob/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'snsimonescobar@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCGA4ZITss-7g132QCYbsS5w',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/simonescob',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/simonescob/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/simonescob/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/simonescob',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
