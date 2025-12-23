import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const CreateProfile: React.FC = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Mascotas']);

  const interests = [
    { icon: 'pets', label: 'Mascotas' },
    { icon: 'potted_plant', label: 'Jardinería' },
    { icon: 'handyman', label: 'Bricolaje' },
    { icon: 'sports_soccer', label: 'Deportes' },
    { icon: 'restaurant', label: 'Cocina' },
    { icon: 'child_care', label: 'Niñera' },
    { icon: 'devices', label: 'Tecnología' },
  ];

  const toggleInterest = (label: string) => {
    if (selectedInterests.includes(label)) {
      setSelectedInterests(selectedInterests.filter(i => i !== label));
    } else {
      setSelectedInterests([...selectedInterests, label]);
    }
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-text-main dark:text-white">arrow_back</span>
          </button>
          <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight">Crea tu Perfil</h2>
          <div className="size-10"></div>
        </div>
        <div className="flex w-full flex-row items-center justify-center gap-2 pb-4 pt-1">
          <div className="h-1.5 w-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-1.5 w-8 rounded-full bg-primary"></div>
          <div className="h-1.5 w-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </header>

      <main className="flex-1 px-4 pb-32 pt-2">
        <div className="mb-6">
          <h1 className="text-text-main dark:text-white tracking-tight text-[32px] font-extrabold leading-tight mb-2">¡Hola, Vecino!</h1>
          <p className="text-gray-600 dark:text-gray-400 text-base font-medium">Cuéntanos un poco sobre ti para que el barrio te conozca.</p>
        </div>

        <div className="flex flex-col items-center justify-center mb-8 gap-3">
          <div className="relative group cursor-pointer">
            <div 
              className="size-28 rounded-full bg-gray-200 dark:bg-gray-800 bg-center bg-cover shadow-sm border-4 border-white dark:border-[#1a2c1a]"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBShQ6P7I83VezvDKx4NbTvs6WUEEgh7pcGP2awtVgd6zM1hldX_2QXFDoXNCM9xEvQBOf0kBSc-TwvJPPfDfE6RKAIx_JDxAzsINF7G6a05Bs1etxu-Cvo6Dblxk1vMg5d3z3GHS3uz8865Fjc-ancU0lRMfzc9GBED0v2YULpkdmdD6dkH65nL8xNI0ScXxsqUC0j-YHo__Hf6fS9ESiLxD0N4h05bUzWYG06kptuJ_rl69LQFN2jvzS5dyCVYCiCWY8Dy2mtnycJ")' }}
            ></div>
            <div className="absolute bottom-0 right-0 p-2 bg-primary rounded-full shadow-md text-[#112111] hover:scale-105 transition-transform flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">photo_camera</span>
            </div>
          </div>
          <p className="text-primary text-sm font-semibold">Subir foto</p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-text-main dark:text-white text-sm font-bold pl-1">Nombre completo</label>
            <input className="w-full h-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2c1a] px-4 text-base text-text-main dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm" placeholder="Ej. Ana García" type="text" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-text-main dark:text-white text-sm font-bold pl-1">Rango de edad</label>
            <div className="relative">
              <select className="w-full h-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2c1a] px-4 text-base text-text-main dark:text-white appearance-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm">
                <option disabled selected value="">Selecciona tu rango</option>
                <option value="18-25">18 - 25 años</option>
                <option value="26-35">26 - 35 años</option>
                <option value="36-50">36 - 50 años</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center pl-1">
              <label className="text-text-main dark:text-white text-sm font-bold">Sobre ti (Bio)</label>
              <span className="text-xs text-gray-400">0/150</span>
            </div>
            <textarea className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2c1a] p-4 text-base text-text-main dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none shadow-sm" placeholder="Me gusta ayudar con las plantas y pasear perros..." rows={3}></textarea>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <label className="text-text-main dark:text-white text-sm font-bold pl-1">Intereses y Habilidades</label>
            <div className="flex flex-wrap gap-2">
              {interests.map((item) => {
                const isSelected = selectedInterests.includes(item.label);
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => toggleInterest(item.label)}
                    className={`group flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all border ${
                      isSelected 
                        ? 'bg-primary/10 border-primary text-text-main dark:text-white font-semibold' 
                        : 'bg-white dark:bg-[#1a2c1a] border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary/50'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </form>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 pb-8 z-40">
        <div className="max-w-[480px] mx-auto w-full">
            <Button onClick={() => navigate('/profile/zone')} fullWidth>
            Unirme al Barrio
            </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;