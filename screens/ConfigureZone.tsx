import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const ConfigureZone: React.FC = () => {
  const navigate = useNavigate();
  const [radius, setRadius] = useState(2.0);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-text-main dark:text-white">
      {/* Top App Bar */}
      <div className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between h-16">
          <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
          </button>
          <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
            Configura tu Zona
          </h2>
        </div>
      </div>

      <main className="flex-1 flex flex-col px-5 pb-24 pt-4 max-w-md mx-auto w-full">
        <div className="mb-6">
          <h1 className="text-[28px] font-bold leading-tight mb-2">Define tu Barrio</h1>
          <p className="text-gray-500 dark:text-gray-400 text-base font-medium">Ponle nombre a tu zona y elige qué tan lejos quieres conectar con tus vecinos.</p>
        </div>

        <div className="mb-8">
          <label className="block mb-2 text-base font-semibold">Nombre del Barrio</label>
          <div className="relative">
            <input 
              className="w-full bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-4 text-base text-text-main dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
              defaultValue="Mi Pequeño Barrio"
              type="text"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
              <span className="material-symbols-outlined">edit</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 mb-8 group">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLb9SqF5PtvUbUxgntOVvnYquPLlsoKggzHbeIXx8S7NwW2QwUKBA1AB8td2_goE1eJm1-Q-jlxU49uLWpEd61vvz-FMfBQkBRFjnSaWkz_1h_Qm7scBSSnQ28Fpcl7QBIbG0kBAMYcqEQ-IPrWP4t-ZXJxv-FSk5rN6720roMkuRVBZ-r2j5YZA1rCx7U4g1mEGcU3MFiy1l-8bNRy4nVcA1-ZXlAg_m4b3V3ywgLkbCxSMnlPY8_H3Del9X0bXWM-w_wMozmhR0a")' }}></div>
          <div className="absolute inset-0 bg-black/5 dark:bg-black/20 pointer-events-none"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full border-2 border-primary/50 flex items-center justify-center animate-pulse">
            <div className="relative -mt-8 drop-shadow-lg">
              <span className="material-symbols-outlined text-5xl text-primary filled">location_on</span>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/30 rounded-full blur-[2px]"></div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
            <div className="size-10 bg-surface-light dark:bg-surface-dark rounded-lg shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <span className="material-symbols-outlined">my_location</span>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">radar</span>
              <span className="font-bold">Radio de alcance</span>
            </div>
            <span className="font-bold text-xl text-primary">{radius.toFixed(1)} km</span>
          </div>
          <div className="relative py-2">
            <input 
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary" 
              type="range" 
              min="0.5" 
              max="5.0" 
              step="0.1" 
              value={radius}
              onChange={(e) => setRadius(parseFloat(e.target.value))}
            />
          </div>
          <div className="flex justify-between text-xs font-medium text-gray-400 mt-2">
            <span>500m</span>
            <span>1km</span>
            <span>3km</span>
            <span>5km</span>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 p-4 pb-8 z-40">
        <div className="max-w-[480px] mx-auto w-full">
            <Button onClick={() => navigate('/home')} icon="check_circle" fullWidth>
                Confirmar Ubicación
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfigureZone;