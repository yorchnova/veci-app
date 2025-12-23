import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const OnboardingOffer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display p-4">
      <div className="h-2 w-full"></div>
      
      {/* Top Nav */}
      <div className="flex items-center justify-end p-2 pb-2">
        <button onClick={() => navigate('/login')} className="flex items-center justify-center rounded-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="text-gray-500 dark:text-gray-400 text-sm font-bold tracking-wide">Saltar</span>
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-between w-full pb-10 pt-2">
        {/* Illustration */}
        <div className="w-full flex-1 flex items-center justify-center my-4 relative">
          <div className="absolute inset-0 m-auto w-[280px] h-[280px] bg-primary/10 rounded-full blur-2xl dark:bg-primary/5"></div>
          <div className="relative w-full aspect-square max-w-[320px] rounded-2xl overflow-hidden shadow-sm">
             <div className="w-full h-full bg-center bg-no-repeat bg-cover" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXhORn29Wmh1OcvzMlz09PxjtFg-Vjtp5S5B2Yr5VwksHNnzL6Z5_rrjK2tm36HgQHCSBz768N76jXmj4Txn3Av4BSpoEWAZoo5UhZxdSPCFDjWbOJieopknfg57GDV_i1uNTLyUTKXzatLbwKXLoVlbsV173XVXYr21_gx4g364OOUn1PPq16t5fmBWSJq0MDCCVEV93DufbRv4gYTJyff4hoKdvAZRyXmri_QotrCEjLtCh7C80aRQUvQ1AS_x1MNToBlQXpzUcV")' }}>
             </div>
          </div>
        </div>

        {/* Text */}
        <div className="w-full flex flex-col items-center text-center space-y-4 mb-8">
          <h1 className="text-[#112111] dark:text-white tracking-tight text-[32px] font-bold leading-[1.2]">
            Ofrece y encuentra ayuda local
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base font-medium leading-relaxed max-w-[300px]">
            Publica tus habilidades para generar ingresos extra o encuentra vecinos de confianza para solucionar tus pendientes.
          </p>
        </div>

        {/* Footer */}
        <div className="w-full flex flex-col items-center gap-8">
          <div className="flex flex-row items-center justify-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div className="h-2.5 w-8 rounded-full bg-primary"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          </div>
          
          <Button onClick={() => navigate('/onboarding/2')} icon="arrow_forward">
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingOffer;