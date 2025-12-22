import {
  vesterbjerg,
  candylicious,
  handyrent,
  handwriting,
  web,
  backend,
  mobile,
  creator,
  html,
  java,
  csharp,
  python,
  sql,
  reactjs,
  nodejs,
  css,
  javascript,
  dotnet,
  git,
  threejs,
} from "../assets";

// Navigation links - will be translated in components
export const navLinks = [
  { id: "about" },
  { id: "experience" },
  { id: "projects" },
  { id: "contact" },
];

// Services/Skills
export const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "C# og .NET Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning Enthusiast",
    icon: creator,
  },
];

// Technologies
export const technologies = [
  { name: "HTML", icon: html },
  { name: "Java", icon: java },
  { name: "C#", icon: csharp },
  { name: "Python", icon: python },
  { name: "SQL", icon: sql },
  { name: "React", icon: reactjs },
  { name: "Node.js", icon: nodejs },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: ".NET", icon: dotnet },
  { name: "Git", icon: git },
  { name: "Three.js", icon: threejs },
];

// Experiences
export const experiences = [
  {
    title: "Software Development Studerende",
    titleEn: "Software Development Student",
    company_name: "UCN - Top-up Uddannelse",
    company_nameEn: "UCN - Top-up Degree",
    icon: "🎓",
    iconBg: "#383E56",
    date: "September 2025 - Nu",
    dateEn: "September 2025 - Now",
    points: [
      "Påbegyndt bachelor top-up i Software Development på UCN.",
      "Fortsætter min uddannelse efter datamatiker uddannelsen.",
      "Fokuserer på avancerede softwareudviklingskoncepter og praksis.",
    ],
    pointsEn: [
      "Started bachelor top-up in Software Development at UCN.",
      "Continuing my education after the Computer Scientist (AP) degree.",
      "Focusing on advanced software development concepts and practices.",
    ],
  },
  {
    title: "Datamatiker",
    titleEn: "Computer Scientist (AP)",
    company_name: "UCN",
    icon: "🎓",
    iconBg: "#383E56",
    date: "2022 - Sommer 2025",
    dateEn: "2022 - Summer 2025",
    points: [
      "Færdiguddannet datamatiker fra UCN.",
      "Specialiseret i softwareudvikling, databaser og systemdesign.",
      "Praktisk erfaring med Java, C#, Python og webteknologier.",
    ],
    pointsEn: [
      "Graduated as Computer Scientist (AP) from UCN.",
      "Specialized in software development, databases, and system design.",
      "Practical experience with Java, C#, Python, and web technologies.",
    ],
  },
];

// Projects
export const projects = [
  {
    name: "Vesterbjerg Byggecenter",
    description:
      "Opdatering af lager-, salgs- og udlejningssystem for at optimere ledelse og medarbejderes overblik. Udviklet med Java Swing GUI, Eclipse og Git ved hjælp af 3-lags arkitektur og vandfaldsmodellen.",
    descriptionEn:
      "Update of warehouse, sales, and rental system to optimize management and employee overview. Developed with Java Swing GUI, Eclipse, and Git using 3-tier architecture and waterfall model.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "swing", color: "green-text-gradient" },
      { name: "git", color: "pink-text-gradient" },
    ],
    image: vesterbjerg,
    source_code_link: "https://github.com/viktor-bd/SemesterProjekt_1",
  },
  {
    name: "Candylicious",
    description:
      "Digitaliseret vagtplanlægning, som gjorde det muligt for medarbejdere at acceptere vagter direkte. Brugt Java, Swing, SQL og MSSQL til et intuitivt GUI-system udviklet i en 3-lags arkitektur.",
    descriptionEn:
      "Digitalized shift scheduling that enabled employees to accept shifts directly. Used Java, Swing, SQL, and MSSQL for an intuitive GUI system developed in a 3-tier architecture.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "sql", color: "green-text-gradient" },
      { name: "gui", color: "pink-text-gradient" },
    ],
    image: candylicious,
    source_code_link: "https://github.com/Melihoz98/VagtplanProjectGr4",
  },
  {
    name: "Handy Rent",
    description:
      "Distribueret værktøjsudlejningssystem med samtidighedshåndtering, bygget i ASP.NET og inkluderende web API, desktop- og webapp-klient. Inkluderede transaktionsstyring, identifikation og autentifikation.",
    descriptionEn:
      "Distributed tool rental system with concurrency handling, built in ASP.NET and including web API, desktop, and web app client. Included transaction management, identification, and authentication.",
    tags: [
      { name: "asp.net", color: "blue-text-gradient" },
      { name: "c#", color: "green-text-gradient" },
      { name: "sql", color: "pink-text-gradient" },
    ],
    image: handyrent,
    source_code_link: "https://github.com/MarwanAlmzayek/SemesterProjectGr4",
  },
  {
    name: "Handwriting Recognition",
    description:
      "Tekstgenkendelse af håndskrift fra billeder konverteret til PDF, udviklet med Python og deep learning-teknikker i samarbejde med Solita A/S.",
    descriptionEn:
      "Text recognition of handwriting from images converted to PDF, developed with Python and deep learning techniques in collaboration with Solita A/S.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "deep learning", color: "green-text-gradient" },
      { name: "image recognition", color: "pink-text-gradient" },
    ],
    image: handwriting,
    source_code_link: {
      api: "https://github.com/has99an/handwriting-recognition-angular-ui",
      ui: "https://github.com/has99an/handwriting-recognition-api",
    },
  },
];

// Social links
export const socialLinks = {
  github: "https://github.com/has99an",
  linkedin: "https://linkedin.com",
  email: "mailto:aalmousa563@gmail.com",
};
