/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone,
  Menu,
  X,
  ChevronRight,
  FileText,
  Zap,
  Globe,
  Shield,
  HandHeart
} from 'lucide-react';
import { 
  NAV_LINKS, 
  IMPACT_STATS, 
  PROJECTS, 
  VALUES, 
  TESTIMONIALS, 
  TRANSPARENCY_DOCS 
} from './constants';
import PlaceholderPage from './pages/PlaceholderPage';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDonateClick = () => {
    handleNavClick('#ayudar');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('#inicio')}>
          <img 
            src="/public/images/logo_alianza.png" 
            alt="Alianza Logo" 
            className="w-12 h-12 object-contain"
          />
          <span className="font-display font-black text-2xl tracking-tighter text-white uppercase">
            Alianza <span className="text-ajo-primary">Oaxaca</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-xs font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={handleDonateClick}
            className="bg-white text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-ajo-primary hover:text-white transition-all transform hover:scale-105 cursor-pointer"
          >
            Donar
          </button>
        </div>

        <button 
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black z-[101] p-10 flex flex-col justify-center gap-8"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-10 right-10 text-white cursor-pointer">
              <X size={40} />
            </button>
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-5xl font-black uppercase tracking-tighter text-white hover:text-ajo-primary transition-colors text-left bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const scrollToJoin = () => {
    document.getElementById('ayudar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" ref={containerRef} className="relative h-[150vh] bg-black overflow-hidden">
      <motion.div style={{ y, scale, opacity }} className="sticky top-0 h-screen w-full">
        <img 
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=2000" 
          alt="Jóvenes en Oaxaca" 
          className="w-full h-full object-cover brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="campaign-title mb-4">
              <span className="block">Oaxaca</span>
              <span className="block text-stroke">Es Nuestra</span>
            </h1>
            <p className="text-xl md:text-2xl font-mono text-ajo-primary uppercase tracking-[0.2em] mb-12">
              Juventud • Acción • Transformación
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={scrollToJoin}
                className="bg-ajo-primary text-white px-12 py-6 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl shadow-ajo-primary/40 cursor-pointer"
              >
                Únete al Movimiento
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const NarrativeSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section id="nosotros" ref={containerRef} className="py-40 bg-black overflow-hidden border-y border-white/5">
      <motion.div style={{ x: x1 }} className="flex whitespace-nowrap mb-12">
        {[1, 2, 3, 4].map(i => (
          <h2 key={i} className="text-[10vw] font-black uppercase tracking-tighter mr-20 opacity-20">
            Participación • Equidad • Derechos • 
          </h2>
        ))}
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-ajo-primary font-mono text-sm uppercase tracking-widest mb-6 block">01 / Nuestra Misión</span>
          <h2 className="text-6xl md:text-8xl mb-8 leading-none">No somos el futuro. <span className="text-ajo-accent">Somos el ahora.</span></h2>
          <p className="text-xl text-white/60 leading-relaxed font-light">
            En Alianza Oaxaca, creemos que la transformación social no puede esperar. Estamos construyendo puentes entre comunidades, empoderando a líderes jóvenes y defendiendo los derechos de quienes han sido silenciados.
          </p>
        </motion.div>
        
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square bg-ajo-primary/20 rounded-full flex items-center justify-center p-12 border border-white/10"
          >
            <div className="text-center">
              <Zap size={80} className="text-ajo-primary mx-auto mb-6" />
              <p className="text-4xl font-black uppercase tracking-tighter">Acción Directa</p>
              <p className="text-white/40 font-mono text-sm mt-2">Impacto Comunitario Real</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div style={{ x: x2 }} className="flex whitespace-nowrap mt-20">
        {[1, 2, 3, 4].map(i => (
          <h2 key={i} className="text-[10vw] font-black uppercase tracking-tighter mr-20 opacity-20 text-stroke">
            Oaxaca • Juventud • Liderazgo • 
          </h2>
        ))}
      </motion.div>
    </section>
  );
};

const ImpactGrid = () => {
  const navigate = useNavigate();

  return (
    <section id="proyectos" className="section-padding bg-ajo-paper text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <span className="text-ajo-primary font-mono text-sm uppercase tracking-widest mb-4 block">02 / Resultados</span>
            <h2 className="text-7xl md:text-9xl leading-[0.8] mb-8">Impacto <br/><span className="text-stroke !text-black/20">Medible</span></h2>
          </div>
          <div className="bg-black text-white p-8 rounded-3xl max-w-xs rotate-3">
            <p className="text-5xl font-black mb-2">+5,000</p>
            <p className="text-xs uppercase tracking-widest font-mono opacity-60">Vidas Transformadas en 12 Municipios</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-[2rem] group ${idx === 1 ? 'md:col-span-1 md:row-span-2' : ''}`}
            >
              <div className="aspect-[4/5] h-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full mb-4 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-black leading-tight mb-4">{project.title}</h3>
                  <button 
                    onClick={() => navigate(`/project/${idx + 1}`)}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-ajo-primary group-hover:text-white transition-colors cursor-pointer"
                  >
                    Ver Detalles <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LayeredNarrative = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const sections = [
    {
      title: "Participación",
      desc: "Creamos espacios donde la voz de cada joven cuenta. No solo escuchamos, actuamos.",
      color: "bg-ajo-primary",
      icon: <Globe size={48} />
    },
    {
      title: "Equidad",
      desc: "Luchamos por un Oaxaca donde el origen no determine el destino.",
      color: "bg-ajo-secondary",
      icon: <Shield size={48} />
    },
    {
      title: "Impacto",
      desc: "Resultados tangibles en salud, educación y medio ambiente.",
      color: "bg-ajo-accent",
      icon: <Zap size={48} />
    }
  ];

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black">
      {sections.map((section, idx) => {
        const start = idx / sections.length;
        const end = (idx + 1) / sections.length;
        
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const scale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.8, 1, 1, 0.8]);

        return (
          <motion.div
            key={idx}
            style={{ opacity, scale }}
            className="sticky top-0 h-screen flex items-center justify-center px-6"
          >
            <div className={`max-w-5xl w-full p-12 md:p-24 rounded-[3rem] ${section.color} text-white flex flex-col md:flex-row items-center gap-16`}>
              <div className="bg-white/20 p-8 rounded-3xl backdrop-blur-xl">
                {section.icon}
              </div>
              <div>
                <span className="font-mono text-sm uppercase tracking-widest opacity-60 mb-4 block">03 / Pilar {idx + 1}</span>
                <h2 className="text-6xl md:text-8xl mb-6 leading-none">{section.title}</h2>
                <p className="text-2xl font-light opacity-90 leading-relaxed">{section.desc}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const HowToHelp = () => {
  const contributions = [
    {
      id: 'voluntariado',
      title: 'Voluntariado',
      desc: 'Únete a nuestras brigadas y proyectos en campo. Tu tiempo y talento son el motor de nuestra acción comunitaria.',
      icon: <HandHeart size={40} />,
      cta: 'Ser Voluntario',
      color: 'border-ajo-primary hover:bg-ajo-primary',
      action: () => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      id: 'donaciones',
      title: 'Donaciones',
      desc: 'Tu apoyo financiero nos permite llegar a más comunidades y asegurar la sostenibilidad de nuestros programas.',
      icon: <Heart size={40} />,
      cta: 'Donar Ahora',
      color: 'border-ajo-secondary hover:bg-ajo-secondary',
      action: () => window.open('https://donate.stripe.com/test', '_blank') // Placeholder link
    },
    {
      id: 'alianzas',
      title: 'Alianzas',
      desc: 'Buscamos colaborar con empresas y organizaciones que compartan nuestra visión de un Oaxaca más justo.',
      icon: <Users size={40} />,
      cta: 'Crear Alianza',
      color: 'border-ajo-accent hover:bg-ajo-accent',
      action: () => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
    }
  ];

  return (
    <section id="ayudar" className="section-padding bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-ajo-primary font-mono text-sm uppercase tracking-widest mb-4 block">04 / Colaboración</span>
          <h2 className="text-7xl md:text-9xl leading-[0.8] mb-8">Tú Eres El <br/><span className="text-stroke">Cambio</span></h2>
          <p className="text-xl text-white/40 max-w-2xl font-light">Existen múltiples formas de sumarte a la Alianza. Elige la que mejor se adapte a ti.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {contributions.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-12 rounded-[3rem] border-2 ${item.color} transition-all duration-500 group flex flex-col h-full`}
            >
              <div className="mb-8 text-white group-hover:scale-110 transition-transform duration-500 origin-left">
                {item.icon}
              </div>
              <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-lg text-white/60 mb-12 flex-grow font-light leading-relaxed group-hover:text-white transition-colors">
                {item.desc}
              </p>
              <button 
                onClick={item.action}
                className="w-full py-5 rounded-full bg-white text-black font-black uppercase tracking-widest text-xs group-hover:bg-black group-hover:text-white transition-all cursor-pointer"
              >
                {item.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const scrollToJoin = () => {
    document.getElementById('ayudar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-white text-black text-center overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="grid grid-cols-10 gap-4">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="aspect-square bg-black rounded-full"></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-7xl md:text-[10vw] leading-[0.8] mb-12">Oaxaca <br/>Te <span className="text-ajo-primary">Necesita</span></h2>
        <p className="text-2xl mb-16 font-light text-black/60">Tu apoyo financiero o tu tiempo como voluntario son el combustible de este movimiento. No esperes a que alguien más lo haga.</p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button 
            onClick={() => window.open('https://donate.stripe.com/test', '_blank')}
            className="bg-black text-white px-16 py-8 rounded-full text-lg font-black uppercase tracking-widest hover:bg-ajo-primary transition-all shadow-2xl cursor-pointer"
          >
            Donar Ahora
          </button>
          <button 
            onClick={scrollToJoin}
            className="bg-transparent border-2 border-black text-black px-16 py-8 rounded-full text-lg font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            Ser Voluntario
          </button>
        </div>
      </div>
    </section>
  );
};

const TransparencySection = () => {
  return (
    <section id="transparencia" className="section-padding bg-ajo-paper text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-ajo-primary font-mono text-sm uppercase tracking-widest mb-4 block">05 / Transparencia</span>
          <h2 className="text-6xl md:text-8xl leading-[0.8] mb-8">Cuentas <br/><span className="text-stroke !text-black/20">Claras</span></h2>
          <p className="text-xl text-black/60 max-w-2xl font-light">La confianza es nuestro activo más valioso. Publicamos nuestros reportes financieros y de impacto trimestralmente.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TRANSPARENCY_DOCS.map((doc, idx) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-black/5 hover:border-ajo-primary transition-colors group cursor-pointer"
              onClick={() => window.open('#', '_blank')}
            >
              <div className="mb-6 text-ajo-primary group-hover:scale-110 transition-transform origin-left">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
              <div className="flex justify-between items-center text-sm text-black/40 font-mono mt-4">
                <span>{doc.date}</span>
                <span className="flex items-center gap-2 group-hover:text-ajo-primary transition-colors">
                  {doc.size} <Download size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contacto" className="bg-black text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img 
                src="/public/images/logo_alianza.png" 
                alt="Alianza Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-display font-black text-xl tracking-tighter uppercase">Alianza Oaxaca</span>
            </div>
            <p className="text-white/40 leading-relaxed font-mono text-sm">Empoderando a la juventud oaxaqueña para construir un futuro de equidad y justicia social.</p>
            <div className="flex gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-ajo-primary transition-colors"><Facebook size={24} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-ajo-primary transition-colors"><Instagram size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-ajo-primary transition-colors"><Twitter size={24} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-white/40 mb-10">Navegación</h4>
            <ul className="space-y-6">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <button 
                    onClick={() => handleNavClick(link.href)} 
                    className="text-lg font-bold hover:text-ajo-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-white/40 mb-10">Contacto</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/60">
                <MapPin size={20} className="text-ajo-primary shrink-0" />
                <span className="text-sm">Calle Independencia #123, Centro Histórico, Oaxaca.</span>
              </li>
              <li className="flex items-center gap-4 text-white/60">
                <Mail size={20} className="text-ajo-primary shrink-0" />
                <a href="mailto:contacto@alianza-oaxaca.org" className="text-sm hover:text-white transition-colors">contacto@alianza-oaxaca.org</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-white/40 mb-10">Newsletter</h4>
            <div className="relative">
              <input type="email" placeholder="TU EMAIL" className="w-full bg-white/5 border-b border-white/20 px-0 py-4 text-white outline-none focus:border-ajo-primary transition-colors font-mono text-sm" />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-ajo-primary cursor-pointer hover:scale-110 transition-transform">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 text-[10px] font-mono uppercase tracking-widest text-white/20 flex flex-col md:flex-row justify-between gap-4">
          <p>© 2025 ALIANZA DE LA JUVENTUD OAXAQUEÑA A.C.</p>
          <div className="flex gap-8">
            <button onClick={() => navigate('/privacy')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0 uppercase">Privacidad</button>
            <button onClick={() => navigate('/terms')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0 uppercase">Términos</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Home = () => (
  <>
    <Hero />
    <NarrativeSection />
    <ImpactGrid />
    <LayeredNarrative />
    <HowToHelp />
    <TransparencySection />
    <CTASection />
  </>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="bg-black selection:bg-ajo-primary selection:text-white min-h-screen flex flex-col">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-ajo-primary z-[200] origin-left"
          style={{ scaleX }}
        />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<PlaceholderPage title="Detalles del Proyecto" />} />
            <Route path="/privacy" element={<PlaceholderPage title="Política de Privacidad" />} />
            <Route path="/terms" element={<PlaceholderPage title="Términos y Condiciones" />} />
            <Route path="*" element={<PlaceholderPage title="Página No Encontrada" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
