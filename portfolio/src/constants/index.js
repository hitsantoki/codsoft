import project1 from "../assets/projects/images.jfif";
import project2 from "../assets/projects/download.jfif";
import project3 from "../assets/projects/download (1).jfif";
import project4 from "../assets/projects/download (2).jfif";

export const HERO_CONTENT = `I am a passionate Software Developer Engineer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technology like React , as well as back-end technologies like Node.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Software Developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React , Node.js and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May-2023--Jun-2023 ",
    role: "Web Developer Intern",
    company: "BitsTechnolabs",
    description: `During my internship, I not only excelled in frontend development tasks but also demonstrated proficiency in utilizing HTML, CSS, JavaScript, and ReactJS to create dynamic and engaging web applications.`,
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    
  },
];

export const PROJECTS = [
  {
    title: "Blogo-Pedia",
    image: project1,
    description:
    "A web application providing users with a platform to create, publish, and interact with blog posts. Alongside user-facing features, an intuitive admin-side panel was designed and implemented to empower administrators in efficiently managing blog content, user accounts, and site settings",
    technologies: ["HTML", "Tailwind-CSS", "React", "Node.js","Express.js", "MongoDB"],
    githubLink: "https://github.com/hitsantoki/Blogo-Pedia",
  },
  {
    title: "Re-Build",
    image: project2,
    description:
    "Re-Build is a frontend-based application designed for creating resumes in a variety of themes. Users can customize their resumes according to their preferences and needs. Once the resume is completed, users have the option to conveniently download it",
    technologies: ["HTML", "CSS", "React","Node.js"],
    githubLink: "https://github.com/hitsantoki/Resume-builder",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind-CSS", "React"],
    githubLink: "https://github.com/hitsantoki/portfolio",
  },
  {
    title: "Picture Quest",
    image: project4,
    description:
      "Facial recognition software that uses a single photo to find all the photos of an individual from a collection.",
    technologies: ["Python", "Open-cv","Face-Recognition"],
    githubLink: "https://github.com/hitsantoki/picture-quest",
  },
];

export const CONTACT = {
  address: "Surat,Gujarat,India",
  email: "hitsantokii@gmail.com",
};
