import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Candra",
  initials: "CN",
  url: "https://dillion.io",
  location: "Surakarta, ID",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer passionate about Web3 and blockchain. I love building useful and innovative products.",
  summary:
    "I'm a full-stack developer focused on both frontend and backend using Next.js and modern JavaScript/TypeScript. I enjoy building fast, scalable web apps with great user experiences and solid backend systems. I'm also passionate about Web3 and blockchain, and I’m always exploring how new tech can shape the future of the web. I love learning, solving problems, and working with teams to build useful and innovative products.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Rust",
    "Docker",
    "Kubernetes",
    "C++",
    "Motoko"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Candra0x6",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kurniawan-candra-mahardika-637313372/",
        icon: Icons.linkedin,

        navbar: true,
      },

   
    },
  },

  work: [
    {
      company: "Komdigi",
      href: "https://www.komdigi.go.id/",
      badges: [],
      location: "Hybrid",
      title: "Intern IT Support",
      logoUrl: "/komdigi.png",
      start: "June 2023",
      end: "Dec 2023",
      description:
        "Assisted in IT support tasks, including troubleshooting hardware and software issues, providing technical assistance to staff, and maintaining IT infrastructure.",
    }
  ],
  education: [
    {
      school: "Muhammadiyah University of Surakarta",
      href: "https://www.ums.ac.id/",
      degree: "Bachelor of Computer Science",
      logoUrl: "/ums.png",
      start: "2024",
      end: "2028",
    },
  
  ],
  projects: [
    {
      title: "Tepay",
      href: "https://y5hnf-uqaaa-aaaai-q3yza-cai.icp0.io/",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Tepay is a simple, fast, and fun way to create payment links using Internet Identity on the Internet Computer. Whether you’re receiving tips, collecting donations, or setting up quick transfers, Tepay makes it effortless and secure.",
      technologies: [
        "Motoko",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://y5hnf-uqaaa-aaaai-q3yza-cai.icp0.io/",
          icon: <Icons.globe className="size-3" />,
        },
         {
          type: "Source",
          href: "https://github.com/Candra0x6/Tepay.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tepay.png",
    },
    {
      title: "Nesify",
      href: "https://nesify.vercel.app/",
      dates: "March 2025 - April 2025",
      active: true,
      description:
        "NFT ticketing platform leverages cutting-edge blockchain technology to provide a secure, transparent, and efficient solution for event organizers and attendees.",
      technologies: [
        "Solidity",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://nesify.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Candra0x6/Nesify.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nesify.png",
    },
    {
      title: "Healty",
      href: "https://healty-five.vercel.app/",
      dates: "November 2024 - December 2024",
      active: true,
      description:
        "Healty is a health and fitness gamify web application with Ai-powered features that help users track their health, set fitness goals, and receive personalized recommendations.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Gemini AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://healty-five.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Candra0x6/Healty.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/healty.png",
    },
    {
      title: "Livify",
      href: "https://livify.netlify.app/",
      dates: "Dec 2023 - February 2024",
      active: true,
      description:
        "Livify is an open-source e-commerce platform specifically designed for furniture retailers. Built with modern web technologies, it offers a scalable, customizable, and user-friendly. ",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://livify.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Candra0x6/Livify.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/livify.png",
    },
  ],
 
} as const;
