export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I focus on collaborating closely with clients and ensure clear communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech dedicated with a focus for development ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Podcast Page",
    description: "Current project",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Called out of darkness - Podcast page",
    des: "Built 'Out of the Darkness' podcast website with Next.js, showcasing episode details, guest bios, and a prayer submission form for streamlined user engagement.",
    img: "/podcast.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.calledoutofdarkness.faith/",
  },
  {
    id: 2,
    title: "Apostolic Community - Religous organization website",
    des: "Developed 'Apostolic Community' website to unite believers. Features beliefs, churches/church information, and events for seamless community connection.",
    img: "/apostolic.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://apostolic-community.vercel.app/",
  },
  {
    id: 3,
    title: "Petlux - Pet care application",
    des: "Engineered 'Petlux,' a cutting-edge application utilizing optimistic UI and server actions, streamlining pet daycare management for owners.",
    img: "/petlux.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "/",
  },
  {
    id: 4,
    title: "Portfolio - My old Personal website",
    des: "Created 'My Portfolio,' a dynamic hub spotlighting my diverse range of full-stack development projects, seamlessly integrating communication features and social media connectivity.",
    img: "/portfo.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://mlguels-portfolio.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "I highly recommend Miguel. He's not only respectful and honest but also dedicated to his work. His consistent growth is truly impressive!",
    name: "Adrian Hajdin",
    title: "Founder & CEO at JS Mastery",
    img: "/Adrian.svg",
  },
  {
    quote:
      "I'm pleased to recommend Miguel. He's a strong presence and his commitment to learning is truly inspiring. His dedication to excellence shines through in his work, and he is a valuable asset to any team.",
    name: "Mateo Sindičić",
    title: "Software Engineering Lead / Mentor",
    img: "/mateo.jpeg",
  },
  {
    quote:
      "Miguel has demonstrated that there is no upper limit to his capacity for learning. I've witnessed his tremendous contributions to the team and his unwavering dedication. His positive attitude, eagerness for growth, and receptiveness to feedback make him an absolute pleasure to work with and an excellent addition to any team.",
    name: "Ben Pham",
    title: "Software Engineer",
    img: "/ben.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Developer - JSM Masterclass",
    desc: "Master modern web dev with a proven project-based curriculum backed by personalized mentorship program.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Front-End Developer",
    desc: "Designed and developed a landing page for religous organization Apostolic community.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    desc: "Drove the development of a cutting edge application, leveraging innovative tech for seamless user experience and continuous improvement.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    desc: "I executed the development of user-friendly web application based on client-provided designs, ensuring alignment with technical standards and meeting client needs throughout the process.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/mlguels",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/miguel-andres-rodriguez/",
  },
];
