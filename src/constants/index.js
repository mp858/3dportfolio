export const myProjects = [
  {
    id: 1,
    title: "CP-Tracker Chrome Extension",
    description:
    "Tracks and displays competitive programming profiles across multiple platforms like LeetCode, CodeChef, and Codeforces, providing real-time ratings, titles, and problem-solving statistics.",
    subDescription: [
      "CP Tracker is a Chrome extension that helps competitive programmers track their progress across popular coding platforms, such as LeetCode, Codeforces, and CodeChef. With CP Tracker, users can conveniently add their usernames, view their current ratings, titles, and live rankings, and toggle details for easy monitoring—all from one unified interface.",
    ],
    href: "https://github.com/mp858/cp-tracker",
    logo: "",
    image: "/assets/projects/cp.jpg",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "ExpressJs",
        path: "/assets/logos/express.svg",
      },
    ],
  },
  {
    id: 2,
    title: "RAG BASED CHATBOT",
    description:
      "Answers questions from uploaded PDFs using a Retrieval-Augmented Generation (RAG) approach, leveraging LLMs and vector databases for accurate, context-aware responses.",
    subDescription: [
      "Developed an AI-powered chatbot using Retrieval-Augmented Generation (RAG) with Large Language Models (LLMs) from Hugging Face, enabling users to query large PDF documents and receive precise, contextually accurate answers. Implemented a vector database (FAISS) for efficient embedding management, ensuring fast and scalable document retrieval, making it ideal for study companions, user manual assistance, knowledge retrieval, and research support.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/chatbot.png",
    tags: [
      {
        id: 1,
        name: "Streamlit",
        path: "/assets/logos/streamlit.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 3,
        name: "Langchain",
        path: "/assets/logos/langchain.svg",
      },
      {
        id: 4,
        name: "HuggingFace",
        path: "/assets/logos/huggingFace.svg",
      },
    ],
  },
  {
    id: 3,
    title: "ALGOLIVE",
    description:
      "Visualizes popular algorithms like sorting, searching, and graph algorithms in real-time, providing an interactive learning experience for students and developers.",
    subDescription: [
      "Algolive is an interactive educational tool designed to simplify complex algorithmic concepts for students and beginners. By offering step-by-step visual demonstrations of sorting, searching, and pathfinding algorithms, it enhances comprehension, aids in debugging, and supports coding interview preparation.",
    ],
    href: "https://algolive.vercel.app",
    logo: "",
    image: "/assets/projects/algolive.png",
    tags: [
      {
        id: 1,
        name: "REACT",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "BOOTSTRAP",
        path: "/assets/logos/Bootstrap.svg",
      },
      {
        id: 3,
        name: "MUI",
        path: "/assets/logos/mui.svg",
      },
    ],
  },
  {
    id: 4,
    title: "PIXLR",
    description:
      "An online image editor with features like contrast adjustment, greyscaling, saturation control, image rotation, and mirroring, enabling quick and easy photo enhancements.",
    subDescription: [
      "An online image editor app developed using pure HTML, CSS, and JavaScript. Pixlr offers a variety of powerful editing features including 6 filters, image rotation, and mirroring.",
    ],
    href: "https://mp858.github.io/pixlr/",
    logo: "",
    image: "/assets/projects/pixlr.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Javascript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/mudassir-parvez-323101256",
    icon: "/assets/socials/linkedIn.svg",
  },
   {
    name: "Github",
    href: "https://github.com/mp858",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "X",
    href: "https://x.com/mp_858",
    icon: "/assets/socials/twitter.svg",
  },
];

export const experiences = [
  {
    Company: "Samsung Research(SRIB)",
    job: "Software Developer intern",
    date: "Jan-Jul 2025",
    contents: [
      "Accomplished real-time 3D signal-strength visualization by implementing the Friis transmission equation across every point of a house model, resulting in intuitive heatmaps that guided users to optimal device-placement zones.",
      "Achieved a 4× speed-up in heatmap generation by designing a custom GPU-based fragment shader material—offloading per-point color calculations to the GPU and eliminating CPU bottlenecks.",
      "Reduced wall-intersection computation time by 60% by precomputing and indexing wall-intersection data instead of checking each point against every wall at runtime, enabling seamless, on-the-fly heatmap updates.",
      "Integrated the optimized heatmap feature into the SmartThings app by collaborating with frontend and UX teams,ehancing user experience and facilitating data-driven home network planning.",
    ],
  },
  
];
export const reviews = [
  {
    name: "SWATI GUHA",
    username: "@SWATI",
    body: "mudassir made a really beautifull and interactive  portfolio which shows my work in phd reaseach", 
    img: "https://robohash.org/jack",
  },
  {
    name: "Akib",
    username: "@ak",
    body: "very satisied done excelent job",
    img: "https://robohash.org/jill",
  },
  {
    name: "Joseph",
    username: "@joseph",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Aqsa",
    username: "@alice",
    body: "Highly recommend!, mudassir buit my entire project in two days with absolute work",
    img: "https://robohash.org/alice",
  },
];
