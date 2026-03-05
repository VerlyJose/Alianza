import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const PlaceholderPage = ({ title }: { title?: string }) => {
  const { id } = useParams();
  const displayTitle = title || (id ? `Detalles del Proyecto: ${id}` : 'Página en Construcción');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-ajo-primary">{displayTitle}</h1>
        <p className="text-xl text-white/60 mb-12">
          Estamos trabajando para traerte esta sección muy pronto. 
          Mientras tanto, puedes regresar al inicio para seguir explorando.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-ajo-primary hover:text-white transition-all"
        >
          <ArrowLeft size={20} /> Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default PlaceholderPage;
