import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import AvatarImage from '@/assets/Mohab.jpg'
import CIS from  "@/assets/cis1.png";
import Dashboard from "@/assets/screen.png"
import Listing from "@/assets/View Listing.png";
import Wallpaper from "@/assets/FreshCart.webp";
import Delma from "@/assets/Group-48.png"

export const DATA = {
  name: "Mohab Mohammed",
  initials: "MM",
  url: "https://dillion.io",
  location: "Cairo, Egypt",
  description:
    "I am a Software Engineer focused on building full-stack web apps and exploring Artificial Intelligence. Competitive programming helps me think smarter and write better code. I’m passionate about continuous learning — reading about programming, self-discipline, and personal growth to improve every day.",
  summary:
    "Computer Science graduate and Software Engineer passionate about full-stack web development and Artificial Intelligence. I love solving problems through competitive programming and constantly improving my skills.",
  avatarUrl: AvatarImage,
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres SQL",
    "MySQL",
    "SQLite 3",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "JavaScript",
    "C",
    "HTML",
    "HTML 5",
    "CSS",
    "CSS 3",
    "TailwindCSS",
    "Bootstrap",
    "SASS",
    "Django",
    "FAST API",
    "Flask",
    "GIT",
    "GitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    //{ href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mohammedmohab078@gmail.com",
    tel: "01144178905",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mohabmohamed44",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mohab-mahmoud-402060224",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/MohabMo55",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "EG FWD",
      href: "https://egfwd.com/",
      badges: [],
      location: "Cairo, Egypt",
      title: "Software Engineer, Node.js BackEnd Engineer",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1c5djZEKJXU2zTMyfunI1igRlI_jKpVeJxw&s",
      start: "june 2020",
      end: "August 2020",
      description:
        `Participated in a fully funded digital upskilling scholarship in Web Development.
        Developed backend applications using Node.js and frontend interfaces with React. 
        Built foundational knowledge in full-stack web technologies.
        Optimized API response times, reducing load time by 30%.
        Improved database query efficiency, reducing response time by 40%.`,
    },
  ],
  education: [
    {
      school: "Higher Institute of Computer Science and Information Technology",
      href: "https://cis.edu.eg",
      degree: "Computer Science, Software Engineering",
      logoUrl: CIS,
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Automax Full Stack Car Rental System" ,
      href: "https://github.com/mohabmohamed44/Automax-Car-Rental-Sytem-using-Django",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "AutoMax is a comprehensive car rental system built with Django. It provides functionalities for managing car rentals, including user authentication, car listings, booking management, and more.",
      technologies: [
        "Django",
        "MySQL",
        "Python",
        "Bootstrap",
        "HTML 5",
        "CSS 3",
        "JavaScript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mohabmohamed44/Automax-Car-Rental-Sytem-using-Django.",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: Listing,
      video:
        "",
    },
    {
      title: "Delma Dashboard",
      href: "",
      dates: "Feb 2025 - Present",
      active: true,
      description:
        " a powerful and modern dashboard interface built using Next.js, TypeScript, Tailwind CSS, and shadcn/ui. This dashboard is designed to monitor and manage the clinical management system (CMS), giving healthcare administrators a clean and efficient way to track operations, patients, appointments, and more. 🏥📊",
      technologies: [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "ShandCN ui",
        "Supabase",
        "Firebase",
        "Shadcn UI",
        "Radix UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://delma-dashboard-using-next-js-types.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mohabmohamed44/Delma-Dashboard-using-Next.js-Typescript-Tailwind",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: Dashboard,
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "FreshCart - FullStack E-Commerce",
      href: "fresh-cart-ecru-chi.vercel.app",
      dates: "Jan 2024 - September 2024",
      active: true,
      description:
        "Fresh-Cart is an e-commerce web application designed to provide users with a seamless shopping experience. It includes product browsing, a cart system, and secure payment options like Cash on Delivery (COD) and Stripe.",
      technologies: [
        "React.js",
        "JavaScript",
        "Restful API's",
        "React-Router",
        "TailwindCSS",
        "Tanstack-Query",
        "SASS",
      ],
      links: [
        {
          type: "Website",
          href: "https://fresh-cart-ecru-chi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mohabmohamed44/fresh-cart",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: Wallpaper,
      video: "",
    },
    {
      title: "Clinical Management System | Delma",
      href: "https://clinical-management-system.vercel.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A modern full-stack clinical management platform for patients, doctors, and laboratories. The system allows patients to Book appointments with doctors or hospitals Schedule laboratory tests and receive results Use AI Chatbot (powered by Gemini API) for symptom diagnosis and doctor recommendations",
      technologies: [
        "React.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Headless UI",
        "Firebase",
        "Supabase",
        "Sentry",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://clinical-management-system.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: Delma,
      //video:"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Google DevFest 2023",
      dates: "December 16th - 16th, 2023",
      location: "Cairo, Egypt",
      description:
        "Participated in Google devfest 2023. which talked about AI, machine learning, and cloud computing. Attended workshops and sessions led by industry experts, gaining insights into the latest trends and technologies in the tech world.",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/DF23-Bevy-EventThumb-Blue_uQDDMeW.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Google DevFest 2024",
      dates: "December 21th - 21th, 2024",
      location: "Cairo, Egypt",
      description:
        "Participated in Google devfest 2024. which talked about AI, machine learning, and cloud computing. Attended workshops and sessions led by industry experts, gaining insights into the latest trends and technologies in the tech world.",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/DP_07gqezA.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "ECPC 2022 Contest",
      dates: "July 31th - 10th, 2022",
      location: "Egypt, Alexandria",
      description:
        "Participated in Egyptian Colligate Programming Contest (ECPC) 2022 as a competitor representing the Higher Institute of Computer Science and Information Technology. Solved challenging algorithmic problems under time constraints, demonstrating strong problem-solving skills and teamwork. and qualified to Egypt Finals",
      icon: "public",
      image:
        "https://media.licdn.com/dms/image/v2/D4E0BAQH7sBZQwLE4ZQ/company-logo_200_200/company-logo_200_200/0/1696945150873/ecpc_egyptian_collegiate_programming_contest1_logo?e=2147483647&v=beta&t=wHVwy9wgCtg7XA9jNVDJbCCH6PLvUfEzwP3jx7CTF1E",
      links: [],
    },
    {
      title: "ECPC 2025 Contest",
      dates: "July 31th - 10th, 2025",
      location: "Egypt, Alexandria",
      description:
        "Participated in Egyptian Colligate Programming Contest (ECPC) 2025 as a competitor representing the Higher Institute of Computer Science and Information Technology. Solved challenging algorithmic problems under time constraints, demonstrating strong problem-solving skills and teamwork.",
      icon: "public",
      image:
        "https://media.licdn.com/dms/image/v2/D4E0BAQH7sBZQwLE4ZQ/company-logo_200_200/company-logo_200_200/0/1696945150873/ecpc_egyptian_collegiate_programming_contest1_logo?e=2147483647&v=beta&t=wHVwy9wgCtg7XA9jNVDJbCCH6PLvUfEzwP3jx7CTF1E",
      links: [],
    },
  ],
} as const;
