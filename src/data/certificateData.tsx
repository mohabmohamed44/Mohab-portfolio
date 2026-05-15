import { Certificate } from "@/types/certificate";
import CertificatePy from "@/assets/Screenshot.png";
import responsive from  "@/assets/responsive.png";
import FrontEnd from "@/assets/route.jpg";
import Certificate_2 from  "@/assets/million.jpg";
import django from "@/assets/django.jpg";
import Web from "@/assets/image.png";
import AI_Certificate from "@/assets/AI_certificate.png";


export const certificateData: Certificate[] = [
  {
    id: 1,
    title: "Web Development Challenger Track",
    issuer: "EG FWD | Udacity",
    date: "2021-08",
    description:
      "Completed a comprehensive web development program covering front-end and back-end technologies.",
    image_: Web, // stored in public/certificates/
    link: "",
  },
  {
    id: 2,
    title: "Front-End Engineering | React",
    issuer: "Route Academy",
    description:
      "Completed a course on modern web development practices and frameworks.",
    date: "2024-12",
    image_: FrontEnd,
    link: "https://drive.google.com/file/d/1nNwKexudtLqQiElqf41Ec1HJZXzBvQFB/view?usp=sharing",
  },
  {
    id: 3,
    title: "Scientific Computing with Python",
    issuer: "FreeCodeCamp",
    description:
      "Finished a course on scientific computing using Python, covering libraries such as NumPy, Pandas, and Matplotlib.",
    date: "2021-10-04",
    image_: CertificatePy, // local import
    link: "https://freecodecamp.org/certification/mohab-mohammed-23/scientific-computing-with-python-v7",
  },
  {
    id: 4,
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    description:
      "Completed a course on responsive web design principles and techniques, including HTML, CSS, and modern design practices.",
    date: "2023-10-31",
    image_: responsive,
    link: "https://www.freecodecamp.org/certification/mohab-mohammed-23/responsive-web-design",
  },
  {
    id: 5,
    title: "Front-End Development",
    issuer: "Udacity | 1 Million Arab Coders Initiative",
    description: "Participated in the 1 Million Arab Coders initiative by completing the Front-End Development Nanodegree program offered by Udacity.",
    date: "2020-07",
    image_: Certificate_2,
    link: "www.udacity.com/certificate/e/30596002-a721-11ea-8c26-5320c843c8fb",
  },
  {
    id: 6,
    title: "Python & Django | The Complete Django Web Development Course",
    issuer: "Udemy",
    description:
      "Completed a comprehensive course on Python and Django web development, covering both front-end and back-end technologies.",
    date: "2022-03",
    image_: django,
    link: "https://www.udemy.com/certificate/UC-a3026f06-bb0e-44aa-899c-c82e05ef2102/",
  },
  {
    id: 7,
    title: "AI and ML AWS Practitioner",
    issuer: "Udacity",
    description: "AWS AI Practitioner Challenge Course Collaboration between AWS and Udacity",
    date: "2026-05",
    image_: AI_Certificate,
    link: "https://www.udacity.com/certificate/e/f1f811aa-3360-11f1-a7ca-a7ca852c4738",
  }
];
