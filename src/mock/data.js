import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Simón Escobar - A Frontend Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Frontend Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Simón Escobar',
  subtitle: 'and Im Frontend Developer',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    // 'Hola otra vez, como sabes soy Simón Escobar y me dedico a crear el Frontend para sitios y apps web.',
    'I dedicate to create the frontend part for website and web apps and apply a little of logic. Constantly, I like to learn and make personal projects',
  paragraphTwo:
    // 'En mis redes sociales, trato de crear contenido educativo y de calidad para que los demás entiendan un poco más sobre el mundo de la web.',
    'In my social networks I share content about technologies, tips and tutorials in Spanish for people want to get a job or start an idea.',
  paragraphThree: ' ',
  resume: 'https://drive.google.com/file/d/1GaltdHTsI4EklyNO8pEMF7fkjO6Sgxc0/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'job-filtering.png',
    src: 'https://i.imgur.com/jTNjzbH.png',
    title: 'Jobs listings',
    info: 'A list jobs',
    info2:
      'In this list you can filter job by tag selected. This example is a challenge from frontendmentor.',
    tag: 'React (Typescript)',
    url: 'https://jobs-listings.netlify.app/',
    repo: 'https://github.com/simonescob/job-listings', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'product-page.png',
    src: 'https://i.imgur.com/jTNjzbH.png',
    title: 'Product page',
    info: 'A product page example',
    info2:
      'In this example you can add an amount of product to the cart. This example is a challenge from frontendmentor.',
    tag: 'HTML, CSS, JS',
    url: 'https://product-page-simon.netlify.app/',
    repo: 'https://github.com/simonescob/ecommerce-product-page', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo-emoji.png',
    src: 'https://i.imgur.com/jTNjzbH.png',
    title: 'TODO Emoji',
    info: 'A web app based on ReactJS and Typescript',
    info2: 'You can create task (activities), relate them with a emoji and find it',
    tag: 'ReactJS (Typescript)',
    url: 'https://todo-emojis.netlify.app/',
    repo: 'https://github.com/simonescob/todo-emoji', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'search-gifs.png',
    src: 'https://i.imgur.com/jTNjzbH.png',
    title: 'Search GIFs',
    info: 'A web app based on ReactJS and Typescript',
    info2: 'You can look for a gif writting more than 3 lyrics',
    tag: 'ReactJS (Typescript)',
    url: 'https://search-gif.netlify.app/',
    repo: 'https://github.com/simonescob/search-gifs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'supertask.png',
    src: 'https://i.imgur.com/jTNjzbH.png',
    title: 'SuperTasks',
    info: 'A web app for create task',
    // info2: 'Aquí podrás crear tareas agregar las a la lista, borrar o marcar como hechas',
    info2: 'Here you can add a task to the list, delete it and marked like done.',
    tag: 'ReactJS',
    url: 'http://supertasks.surge.sh/',
    repo: 'https://github.com/simonescob/SuperTasks', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'fast-whatsapp.png',
  //   title: 'Fast Whastapp',
  //   info: 'Una web app para enviar mensajes de whatsapp a contactos no agregados.',
  //   info2: '',
  //   tag: 'ReactJS',
  //   url: 'https://fast-whatsapp.vercel.app/',
  //   repo: 'https://github.com/simonescob/Fast-Whatsapp', // if no repo, the button will not show up
  // },
  {
    id: nanoid(),
    img: '404.png',
    title: '404 page not found',
    info: 'A simple 404 page.',
    info2: '',
    tag: 'ReactJS',
    url: 'https://simo-404-page.vercel.app/',
    repo: 'https://github.com/simonescob/404-Page', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: ' ',
    title: 'Go to my Github',
    info: 'You can see these project and other.',
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
