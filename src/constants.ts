import { Heart, Users, Shield, Zap, Globe, BookOpen, MessageSquare, HandHeart, FileText, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes Somos', href: '#nosotros' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Cómo Ayudar', href: '#ayudar' },
  { label: 'Transparencia', href: '#transparencia' },
  { label: 'Contacto', href: '#contacto' },
];

export const IMPACT_STATS = [
  { label: 'Jóvenes Impactados', value: '+5,000', icon: Users },
  { label: 'Proyectos Comunitarios', value: '45', icon: Zap },
  { label: 'Municipios Alcanzados', value: '12', icon: MapPin },
  { label: 'Voluntarios Activos', value: '120', icon: HandHeart },
];

export const PROJECTS = [
  {
    title: 'Liderazgo Juvenil Oaxaqueño',
    description: 'Capacitación integral para jóvenes líderes en comunidades rurales, fomentando la participación ciudadana.',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=800',
    category: 'Educación',
  },
  {
    title: 'Brigadas de Salud Comunitaria',
    description: 'Acciones de prevención y atención básica en zonas de alta marginación del estado de Oaxaca.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    category: 'Salud',
  },
  {
    title: 'Eco-Juventud Oaxaca',
    description: 'Iniciativas de reforestación y gestión de residuos lideradas por jóvenes para proteger nuestra biodiversidad.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
    category: 'Medio Ambiente',
  },
];

export const VALUES = [
  {
    title: 'Participación',
    description: 'Creemos en el poder de la voz juvenil para transformar realidades.',
    icon: MessageSquare,
  },
  {
    title: 'Equidad',
    description: 'Trabajamos por un Oaxaca donde todas y todos tengan las mismas oportunidades.',
    icon: Globe,
  },
  {
    title: 'Derechos Humanos',
    description: 'Nuestra base es el respeto y la promoción de la dignidad humana.',
    icon: Shield,
  },
];

export const TESTIMONIALS = [
  {
    name: 'María Hernández',
    role: 'Líder Comunitaria, Tlacolula',
    text: 'AJO me dio las herramientas para organizar a los jóvenes de mi pueblo. Hoy tenemos un centro cultural autogestivo.',
    avatar: 'https://i.pravatar.cc/150?u=maria',
  },
  {
    name: 'Juan Pablo Ruiz',
    role: 'Voluntario',
    text: 'Ser parte de la Alianza me ha enseñado que no somos el futuro, somos el presente activo de Oaxaca.',
    avatar: 'https://i.pravatar.cc/150?u=juan',
  },
];

export const TRANSPARENCY_DOCS = [
  { title: 'Reporte Anual de Impacto 2024', date: 'Enero 2025', size: '2.4 MB' },
  { title: 'Estados Financieros Auditados', date: 'Diciembre 2024', size: '1.1 MB' },
  { title: 'Plan Estratégico 2023-2026', date: 'Marzo 2023', size: '3.5 MB' },
];
