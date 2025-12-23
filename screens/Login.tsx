import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, verify phone here.
    navigate('/profile/create');
  };

  return (
    <div className="relative w-full h-full min-h-screen mx-auto bg-surface-light dark:bg-background-dark flex flex-col">
      {/* Header Image Section */}
      <div className="relative w-full h-[260px] shrink-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(17,33,17,0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6Y7E6ooR-wrhbvgMWffWj306Ax-GBtW6mutID4tc2JuT531fkEnSNc7L-v5X3mebCtmWb2ZDAk-Sz8bb4GwL8iYucPQlKGNc_W8ve95aPn2vQu2TWHdG4mqJwVl9_wsyFIpgSyJ3OzDo6Dv2MR8hGFvqCywppKiDPTZIvVgM6qYct2C_7bYFcCQEM8idc8XUjZ-k4hcB05JVjzQyxPs6V8vf4yqgZj3vcMg0kirNJwMA64dcQKougQEkz-XN5MoaNVkJsT1V9zpg-")` 
          }}
        ></div>
        
        {/* Navigation Over Image */}
        <div className="absolute top-0 w-full p-6 pt-12 flex justify-between items-center z-10">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <button className="text-white text-sm font-medium hover:underline">Ayuda</button>
        </div>

        <div className="absolute bottom-0 w-full p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary filled">security</span>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Barrio Seguro</span>
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white mb-2">Bienvenido a tu Barrio</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pt-6 pb-8">
        <p className="text-text-main dark:text-white text-base font-normal leading-relaxed mb-8">
          Regístrate o inicia sesión para conectar con tus vecinos y encontrar ayuda de confianza cerca de ti.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-text-main dark:text-white text-sm font-semibold ml-1">Número de teléfono móvil</label>
            <div className="flex gap-3">
              <div className="relative w-[100px]">
                <select className="appearance-none w-full bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-main dark:text-white text-base rounded-xl h-14 pl-4 pr-8 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer">
                  <option value="+34">🇪🇸 +34</option>
                  <option value="+1">🇺🇸 +1</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-text-secondary">
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </div>
              </div>
              <div className="flex-1 relative">
                <input 
                  className="w-full bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-main dark:text-white text-base placeholder:text-gray-400 rounded-xl h-14 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="600 000 000"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>

          <Button type="submit" icon="arrow_forward">Recibir código por SMS</Button>

          <div className="flex items-start gap-2 px-1">
            <span className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5">lock</span>
            <p className="text-text-secondary text-xs leading-5">
              Tu número nunca será compartido públicamente. Solo lo usamos para verificar que eres un vecino real.
            </p>
          </div>
        </form>

        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-surface-light dark:bg-background-dark px-4 text-xs font-medium text-text-secondary uppercase tracking-wider">O continúa con</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
           <Button variant="secondary" className="justify-center gap-3">
            <span className="material-symbols-outlined">mail</span>
            Continuar con Email
          </Button>
           <button className="w-full h-14 bg-black dark:bg-white border border-transparent hover:bg-gray-900 dark:hover:bg-gray-100 active:scale-[0.99] transition-all rounded-xl flex items-center justify-center gap-3 relative shadow-md">
            <svg className="w-5 h-5 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-1.23 3.91-1.23.96 0 1.95.4 2.58 1.07-5.11 2.39-3.35 10.38 2.36 12.38-.85 1.55-2.11 3.48-3.93 5.37-1.74 1.77-3.54 1.77-5.32.95-1.79-.83-3.66-.83-5.33.02-1.77.92-3.57.85-5.32-.96C.69 19.46 3.5 8.91 9.07 8.63c2.72-.14 4.63 1.63 5.92 1.63 1.28 0 2.45-1.12 4.1-1.27 1.67-.16 2.94.67 3.75 1.63-3.24 1.63-5.41 4.79-5.18 8.65.23 3.86 2.87 6.47 3.66 7.04-.04.14-.07.27-.12.4-.48 1.1-1.07 2.19-1.76 3.19zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"></path>
            </svg>
            <span className="text-white dark:text-black text-sm font-semibold">Continuar con Apple</span>
           </button>
        </div>

        <div className="mt-10 text-center">
            <p className="text-xs text-text-secondary">
                Al continuar, aceptas nuestros <a href="#" className="font-semibold text-primary hover:underline">Términos de Servicio</a> y <a href="#" className="font-semibold text-primary hover:underline">Política de Privacidad</a>.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login;