import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const OnboardingTrust: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111811] dark:text-white flex flex-col min-h-screen overflow-hidden antialiased">
      <header className="flex items-center justify-center p-6 w-full shrink-0 z-10">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-background-dark">
            <span className="material-symbols-outlined text-[20px] font-bold filled">shield</span>
          </div>
          <h2 className="text-[#111811] dark:text-white text-xl font-extrabold tracking-tight">VECI</h2>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-md mx-auto px-6 pb-4 relative z-0">
        <div className="w-full aspect-[4/5] max-h-[40vh] mb-8 relative group rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10"></div>
          <div className="w-full h-full bg-center bg-cover" 
               style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzfU6WIZdSO2HWwB9iB90hYIMLltF2IBginzAy8MnlM63a_YvqUpYkExpPCUmDiyW1QMSW90MGNaaz6B0980oQ5ShzauPrpe8MnyqaLnuIGb0G0ITybfzOw9oYXRL1SqXI9rjAgM_lP-uDa40cUQQb8UGAQF5o_GLCtH5__Gtcm98AmncQjR4dCE9gW3E7JclQXxkWT4nOdpzdnWi39yh2x8ZXDdGvgqKCHo-Iprai4qmD9q9oXhBIHfrb9rYGrYZMp1zB1gJ5N98U")' }}>
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-sm p-3 rounded-xl flex items-center gap-3 shadow-lg z-20 border border-white/20">
            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
              <span className="material-symbols-outlined text-[20px]">badge</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-gray-800 dark:text-gray-100 uppercase tracking-wider">Documento Verificado</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">Comunidad real y segura</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <div className="h-2 w-8 rounded-full bg-primary"></div>
        </div>

        <div className="text-center space-y-4 mb-4">
          <h1 className="text-[#111811] dark:text-white text-3xl font-extrabold leading-tight tracking-tight">
            Confianza y Seguridad Vecinal
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed px-2">
            Validamos la identidad de cada vecino mediante documento gubernamental. Únete a una comunidad construida sobre la confianza real.
          </p>
        </div>
      </main>

      <footer className="w-full max-w-md mx-auto px-6 pb-8 pt-2 shrink-0 z-10">
        <div className="flex flex-col gap-4">
          <Button onClick={() => navigate('/login')} icon="arrow_forward">
            Registrarse
          </Button>
          <button 
            onClick={() => navigate('/login')}
            className="w-full py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center justify-center gap-1"
          >
            ¿Ya tienes cuenta? <span className="text-primary hover:underline">Iniciar Sesión</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default OnboardingTrust;