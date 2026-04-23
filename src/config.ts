export const siteConfig = {
  name: "Juan Garcia",
  title: "Full Stack Developer",
  description: "Portfolio website of Juan Garcia",
  accentColor: "#b31dd8",
  social: {
    email: "jg200470@gmail.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/juangg11",
  },
  aboutMe:
    "Desarrollador Full Stack en formación constante, con una sólida base técnica en JavaScript, Java y C#. Me apasiona transformar problemas complejos en soluciones en forma de aplicaciones web.",
  skills: ["Javascript", "React", "Node.js", "Java", "AWS", "Docker", "Next.js", "TypeScript", "Spring Boot", "C#"],
  projects: [
    {
      name: "Walter",
      description:
        "Red social basada en comunidades y foros con interacción en tiempo real mediante WebSockets. Permite la creación de hilos, comentarios anidados y un sistema de chat dinámico entre usuarios. Desarrollada con React y una arquitectura escalable para la gestión de contenido multimedia.",
      link: "https://walter-weld-one.vercel.app",
      github: "https://github.com/juangg11/Walter",
      skills: ["React", "Node.js", "Next.js"],
    },
    {
      name: "Gamebox",
      description:
        "Plataforma de gestión de catálogos inspirada en Letterboxd, integrada con la API de RAWG para el descubrimiento de videojuegos. Incluye sistemas de puntuación personalizada y reseñas persistentes mediante Supabase. Resolví la sincronización de datos externos con bases de datos relacionales optimizando la integridad de cada entrada.",
      link: "https://gamebox-sigma.vercel.app",
      github: "https://github.com/juangg11/Gamebox",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "CRM-app",
      description:
        "Sistema CRM completo para la gestión de negocios locales (peluquerías y servicios), enfocado en la automatización de citas, gestión de clientes y facturación. Incluye calendario interactivo, control de disponibilidad en tiempo real, generación de tickets/facturas y panel de métricas. Implementé una arquitectura multi-tenant con persistencia en base de datos relacional, optimizando la consistencia de reservas y evitando conflictos de horario. Además, integré flujos automatizados de notificación y una base preparada para interacción vía WhatsApp.",
      link: "https://crm-react-bay.vercel.app/clientes",
      github: "https://github.com/juangg11/CRM-React",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "IES Celia Viñas",
      degree: "Desarrollo de Aplicaciones Web",
      dateRange: "2024 - 2026",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    }
  ],
};
