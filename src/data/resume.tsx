import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ibtissem Ben Ali Salah",
  initials: "IB",
  url: "https://ibtissem.io",
  location: "Monastir",
  locationLink: "https://www.google.com/maps/place/monastir",
  description:
    "Student in Data Science with a Software Engineering background, experienced in data analysis, machine learning, and modern web development technologies.",
  summary:
    "Master’s student in Data Science at ISIMM, with an academic background in Software Engineering. I possess a multidisciplinary profile combining data analysis, artificial intelligence, and software development. Highly motivated and organized, I seek to engage in high-impact technological projects while pursuing continuous professional and technical development.",
  avatarUrl: "/me.jpg",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "UML/SQL",
    "Node JS ",
    "Express JS",
    "MongoDB",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Docker",
    "DevOps",
    "Git",
    "GitHub",
    "Java",
    "C++",
    "Batch",
    "Machine Learning",
    "IA",
    "Data Analysis",
    "Data Visualization",
    "Data Mining",
    "Statistical Analysis",
    "Data Cleaning",
    "Agile methodologies",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ibtisssembenalisalah@gmail.com",
    tel: "96522870",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/benalisalah-ibtissem",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ibtissem-benalisalah",
        icon: Icons.linkedin,

        navbar: true,
      },
   
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SW-Consulting",
      href: "https://www.consulting-sw.com",
      badges: [],
      location: "Bouhjar Monastir",
      title: "Intern",
      logoUrl: "/sw.jfif",
      start: "Febrary 2024",
      end: "June 2024",
      description:
"Development of an application to estimate the cost and duration of architectural projects. Requirements analysis and functional design. Frontend: Vue.js — interactive user interface. Backend: Node.js & Express.js — handling calculations and data management. " },
    {
      company: "HUTCHINSON",
      badges: [],
      href: "https://www.hutchinson.com",
      location: "Sousse",
      title: "Intern",
      logoUrl: "/logo-hutch.jpg",
      start: "May 2022",
      end: "July 2022",
      description:
"Hutchinson Sousse manufactures technical parts for the automotive and aerospace industries. Learning the Batch scripting language during my summer internship to automate tasks. Implementation of secure file and folder transfer between remote servers using Batch scripts."   },
  ],
  education: [
    {
      school: "Higher Institute of Computer Science and Mathematics of Monastir",
      href: "https://isimm.rnu.tn",
      degree: "Professional Master’s Degree in Data Science",
      logoUrl: "/isimm.png",
      start: "2024",
      end: "Present",
    },
    {
      school: "Higher Institute of Computer Science and Mathematics of Monastir",
      href: "https://isimm.rnu.tn",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/isimm.png",
      start: "2021",
      end: "2024",
    },
    {
      school: "Ibn Khaldoun High School, Gafsa",
      href: "https://lyceeibnkhaldoun.tn",
      degree: "Baccalaureate in Mathematics",
      logoUrl: "/lycee.png",
      start: "2021",
      end: "",
    },
  ],
  projects: [
    {
      title: "Medical Recommendation",
      dates: "April 2025",
      active: true,
      description:
        "medical recommendation system designed to assist in the selection of appropriate treatments and medications based on patient characteristics. The system leverages machine learning techniques to analyze historical medical data and generate personalized recommendations that support medical decision-making.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Implicit (ALS)",
        "K-Nearest Neighbors (KNN)",
        "Rule-based system",
        "Matplotlib",
        "Seaborn",
        "SciPy (csr_matrix)",
      ],
      links: [
         {
          type: "Source",
          href: "https://github.com/benalisalah-ibtissem/Mes-projets-ML/blob/1616cdac5a0ac0a5ded646415b70faadcd31cc02/medical_recommendation_code.py",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/MR.png",
    },
    {
      title: "Model Keras for image classification",
      dates: "April 2025",
      active: true,
      description:
        "This project implements a convolutional neural network (CNN) using Keras and TensorFlow for image classification tasks. The model is designed to accurately classify images into multiple categories, demonstrating practical applications of deep learning in computer vision.",
      technologies: [
        "Python",
        "Keras",
        "TensorFlow",
        "NumPy",
        "Pandas",
        "TailwindCSS",
        "Matplotlib",
        "ImageDataGenerator",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/benalisalah-ibtissem/Mes-projets-ML/blob/1616cdac5a0ac0a5ded646415b70faadcd31cc02/modelKeras.ipynb",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/modelKeras.png",
    },
    {
      title: "EstimaPro",
      dates: "February 2024 - June 2024",
      active: true,
      description:
        "A web application that allows estimating the cost and construction time of buildings based on architectural plans.",
      technologies: [
        "Node.js",
        "JavaScript",
        "Vue.js",
        "Express.js",
        "MongoDB",
        "tailwind",
        "TailwindCSS",
        "Magic UI",
        "Chart.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/benalisalah-ibtissem/EstimaPro.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/EstimaPro.png",
    },
    {
      title: "Food delivery",
      dates: "January 2023 - March 2023",
      active: true,
      description:
        "A clean and responsive food delivery website designed to help users easily browse menus, place orders, and enjoy a smooth online ordering experience",
      technologies: [
        "node.js",
        "JavaScript",
        "React",
        "MongoDB",
        "TailwindCSS",
        "Axios",
        "Express.js",
        "JWT", 
      ],
         links: [
        {
          type: "Source",
          href: "https://github.com/benalisalah-ibtissem/FasftFoodDelivery.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/FoodDelivery.png",
    },
  ],
  Certifications: [
    {
      title: "Formation DevOps",
      dates: "2024",
      location: "Monastir",
      description:
        "An intensive DevOps program focused on modern software delivery practices, including CI/CD pipelines, containerization, cloud environments, and infrastructure automation. The training highlighted system reliability, scalability, and efficient collaboration across teams.",
      icon: "public",
      image: "/devops.png",
    },
    {
      title: "Formation MERN",
      dates: "2024",
      location: "Monastir",
      description:
        "A full-stack web development training centered on designing and building dynamic applications using the MERN ecosystem (MongoDB, Express.js, React, and Node.js). The program emphasized API development, frontend performance, and scalable application architecture.",
      icon: "public",
      image: "/mern.png",
    },
    {
      title: "Formation Python",
      dates: "2023",
      location: "Gabes",
      description:
        "This training provided a strong foundation in Python programming, emphasizing problem-solving, object-oriented principles, and automation. It included hands-on projects focused on real-world use cases and best coding practices.",
      icon: "public",
      image: "/python.png",
    },
    
  ],
} as const;
