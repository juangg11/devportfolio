// ============================================================
// PORTFOLIO CONFIGURATION
// Edit this file to personalize your portfolio.
// ============================================================

export const siteConfig = {
  // ── Identity ───────────────────────────────────────────────
  name: "Alex Rivera",
  title: "Full-Stack Engineer · Building scalable products that matter.",
  accentColor: "#fbbf24",   // kept for legacy compat; design uses CSS vars

  // ── About ─────────────────────────────────────────────────
  aboutMe:
    "I'm a software engineer with 4+ years of experience shipping products " +
    "from idea to production. I thrive at the intersection of clean architecture " +
    "and great user experience — writing the kind of code that teams are happy to " +
    "maintain and users love to use.",

  // ── Skills ────────────────────────────────────────────────
  skills: [
    "TypeScript", "React", "Next.js", "Node.js",
    "PostgreSQL", "Redis", "Docker", "Kubernetes",
    "AWS", "GraphQL", "Tailwind CSS", "Astro",
    "Python", "CI/CD", "System Design",
  ],

  // ── Social ────────────────────────────────────────────────
  social: {
    email:    "alex@example.com",
    github:   "https://github.com/alexrivera",
    linkedin: "https://linkedin.com/in/alexrivera",
    twitter:  "https://twitter.com/alexrivera",
  },

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      name:        "Orbit — Real-time Analytics",
      description: "End-to-end analytics platform processing 50M+ events/day. Built event ingestion pipeline, live dashboard with WebSockets, and query engine with sub-100ms p99 latency.",
      skills:      ["TypeScript", "ClickHouse", "Kafka", "React", "Redis"],
      github:      "https://github.com",
      link:        "https://example.com",
    },
    {
      name:        "Forge — AI Code Review",
      description: "GitHub App that uses LLMs to perform automated code review, detects anti-patterns, and suggests refactors with explainability. Used by 500+ developers.",
      skills:      ["Python", "FastAPI", "OpenAI", "GitHub API", "PostgreSQL"],
      github:      "https://github.com",
    },
    {
      name:        "Atlas — Distributed Task Queue",
      description: "Open-source job scheduling library for Node.js with priority queues, retries, cron support, and a self-hosted monitoring UI. 1.2k GitHub stars.",
      skills:      ["Node.js", "Redis", "TypeScript", "Docker"],
      github:      "https://github.com",
      link:        "https://example.com",
    },
  ],

  // ── Experience ────────────────────────────────────────────
  experience: [
    {
      title:     "Senior Software Engineer",
      company:   "Acme Corp",
      dateRange: "2022 – Present",
      bullets: [
        "Led migration of monolith to microservices, reducing deployment time by 60%.",
        "Architected real-time notification system handling 200k concurrent connections.",
        "Mentored a team of 4 junior engineers and established code review practices.",
      ],
    },
    {
      title:     "Software Engineer",
      company:   "Startup XYZ",
      dateRange: "2020 – 2022",
      bullets: [
        "Built core B2B SaaS features used by 3,000+ paying customers.",
        "Reduced API response times by 40% through query optimization and caching.",
        "Integrated Stripe billing, achieving PCI-DSS compliance.",
      ],
    },
  ],

  // ── Education ─────────────────────────────────────────────
  education: [
    {
      degree:    "B.Sc. Computer Science",
      school:    "Universidad Politécnica de Madrid",
      dateRange: "2016 – 2020",
      achievements: [
        "Graduated with honours — GPA 3.9/4.0",
        "Final thesis on distributed consensus algorithms (Raft implementation).",
        "Teaching assistant for Data Structures & Algorithms.",
      ],
    },
  ],
};
