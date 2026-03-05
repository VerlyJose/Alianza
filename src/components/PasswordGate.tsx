import React, { useState, useEffect } from 'react';

const SESSION_KEY = 'ajo_access_granted';
const SITE_PASSWORD = import.meta.env.VITE_SITE_PASSWORD as string | undefined;

interface PasswordGateProps {
  children: React.ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [granted, setGranted] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!SITE_PASSWORD || sessionStorage.getItem(SESSION_KEY) === 'true') {
      setGranted(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === SITE_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setGranted(true);
    } else {
      setError(true);
      setInput('');
    }
  };

  if (granted) return <>{children}</>;

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <img
            src="/images/logo_alianza.png"
            alt="Alianza Logo"
            className="w-16 h-16 object-contain mx-auto mb-6"
          />
          <h1 className="text-white font-black text-2xl uppercase tracking-widest">
            Alianza <span className="text-ajo-primary">Oaxaca</span>
          </h1>
          <p className="text-white/40 font-mono text-xs uppercase tracking-widest mt-3">
            Sitio en construccion
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Contrasena de acceso"
            autoFocus
            className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/20'} rounded-full px-6 py-4 text-white font-mono text-sm outline-none focus:border-ajo-primary transition-colors text-center tracking-widest`}
          />
          {error && (
            <p className="text-red-400 font-mono text-xs text-center uppercase tracking-widest">
              Contrasena incorrecta
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-ajo-primary text-white py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
