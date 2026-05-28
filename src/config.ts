export const siteConfig = {
  name: "Juan Garcia",
  title: "Full Stack Developer",
  description: "Portfolio website of Juan Garcia",
  accentColor: "#b31dd8",
  social: {
    email: "jg200470@gmail.com",
    linkedin: "https://www.linkedin.com/in/juan-garcia-garcia-37464a408/",
    github: "https://github.com/juangg11",
  },
  aboutMe:
    "Desarrollador Full Stack en formación constante, con una sólida base técnica en JavaScript, Java y C#. Me apasiona transformar problemas complejos en soluciones en forma de aplicaciones web.",
  skills: ["Javascript", "React", "Node.js", "Express", "Java", "AWS", "Docker", "Next.js", "TypeScript", "Spring Boot", "C#"],
  projects: [
    {
      name: "Walter",
      description:
        "Red social basada en comunidades y foros con interacción en tiempo real mediante WebSockets. Permite la creación de posts, comentarios anidados y un sistema de chat dinámico entre usuarios. Desarrollada con MERN (React, Express, Node.js) y una arquitectura escalable para la gestión de contenido multimedia.",
      link: "https://walter-weld-one.vercel.app",
      github: "https://github.com/juangg11/Walter",
      skills: ["React", "Node.js", "Express.js", "SQL", "WebSocket", "Motion" ],
    },
    {
      name: "AI Automation Layer for Magento 2",
      description:
        "Backend de automatizacion para ecommerce Magento 2 basado en agentes de IA, colas de trabajo, workers y auditoria persistente. El objetivo del proyecto no es demostrar un prompt aislado, sino simular una capa operativa que una empresa podria desplegar para reducir trabajo manual de catalogo, SEO e inventario.",
      github: "https://github.com/juangg11/AI-Automation-Layer-for-Magento-2",
      skills: ["Python", "Node.js", "PostgreSQL", "FastApi", "Redis", "Docker"],
    },
    {
      name: "CRM Modular",
      description:
        "Sistema CRM completo para la gestión de negocios como peluquerías, enfocado en la automatización de citas y gestión de clientes. Incluye calendario interactivo, control de disponibilidad en tiempo real y panel de métricas. Implementé una arquitectura multi-tenant con persistencia en base de datos relacional, optimizando la consistencia de reservas y evitando conflictos de horario.",
      link: "https://crm-react-bay.vercel.app",
      github: "https://github.com/juangg11/CRM-React",
      skills: ["React", "Node.js", "Supabase"],
    },
    {
      name: "Gamebox",
      description:
        "Plataforma de gestión de catálogos inspirada en Letterboxd, integrada con la API de RAWG para el descubrimiento de videojuegos. Incluye sistemas de puntuación personalizada y reseñas persistentes mediante Supabase. Resolví la sincronización de datos externos con bases de datos relacionales optimizando la integridad de cada entrada.",
      link: "https://gamebox-sigma.vercel.app",
      github: "https://github.com/juangg11/Gamebox",
      skills: ["React", "Node.js", "Supabase", "API"],
    },
  ],
  experience: [
    {
      company: "Viewnext",
      title: "AI ANALYTICS & AUTOMATION",
      dateRange: "Feb 2026 - Jun 2026",
      bullets: [
        "Formación oficial en Camunda 7, obteniendo certificación en modelado de procesos BPMN",
        "Resolución de incidencias de Camunda.",
        "Creación de un sistema de automatizacion de resolucion de incidencias con IA, reduciendo el tiempo de resolución.",
      ],
    },
    {
      company: "Marin & Moya Abogados",
      title: "Full Stack Developer",
      dateRange: "May 2025 - Jun 2025",
      bullets: [
        "Desarrollo del ciclo de vida completo de una aplicación web para la gestión de casos legales, utilizando React para el frontend y Node.js con Express para el backend.",
        "Implementación de una base de datos relacional con PostgreSQL para almacenar información de clientes, casos y documentos legales, optimizando consultas para mejorar el rendimiento.",
        "Integración de autenticación segura con JWT, garantizando la protección de datos sensibles y el acceso controlado a la plataforma.",
      ],
    },
  ],
  education: [
    {
      school: "IES Celia Viñas",
      degree: "Desarrollo de Aplicaciones Web",
      dateRange: "2024 - 2026",
      achievements: [
        "Graduado con buenas calificaciones, destacando en asignaturas clave como Programación, Bases de Datos y Desarrollo de Aplicaciones.",
        "Aprendizaje de multiples lenguajes de programación, incluyendo JavaScript, Java y Python, con proyectos prácticos que abarcan desde aplicaciones web hasta sistemas de gestión de bases de datos.",
        "Frameworks y herramientas: React, FastApi, SpringBoot, Angular, Nest.js, Express, Spring Boot, Docker, AWS, GitHub, aplicados en proyectos académicos y personales.",
      ],
    }
  ],
};
