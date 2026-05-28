export type Lang = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      available: 'Available for work',
      greeting: 'Hello there',
      cta: 'View my work',
      scroll: 'Scroll to explore',
    },
    about: {
      title: 'About Me',
      skills: 'Technologies & Skills',
    },
    projects: {
      title: 'Projects',
      live: 'Live demo',
      source: 'Source code',
    },
    experience: {
      title: 'Experience',
    },
    education: {
      title: 'Education',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: "Let's build something great together.",
      email: 'Send an email',
      linkedin: 'Connect on LinkedIn',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      education: 'Educación',
      contact: 'Contacto',
    },
    hero: {
      available: 'Disponible para trabajar',
      greeting: 'Hola 👋',
      cta: 'Ver mi trabajo',
      scroll: 'Desplázate para explorar',
    },
    about: {
      title: 'Sobre mí',
      skills: 'Tecnologías y Habilidades',
    },
    projects: {
      title: 'Proyectos',
      live: 'Demo en vivo',
      source: 'Código fuente',
    },
    experience: {
      title: 'Experiencia',
    },
    education: {
      title: 'Educación',
    },
    contact: {
      title: 'Hablemos',
      subtitle: 'Construyamos algo grande juntos.',
      email: 'Enviar un email',
      linkedin: 'Conectar en LinkedIn',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
  },
} as const;

export function t(lang: Lang, key: string): string {
  const keys = key.split('.');
  let result: unknown = translations[lang];
  for (const k of keys) {
    result = (result as Record<string, unknown>)[k];
    if (result === undefined) return key;
  }
  return result as string;
}
