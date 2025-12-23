import React from 'react';
import BottomNav from '../components/BottomNav';
import { User, ServiceItem } from '../types';

const Home: React.FC = () => {
  const categories = ['Todo', 'Hogar', 'Mascotas', 'Clases', 'Tecnología'];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white min-h-screen pb-24">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 pb-3 pt-2">
          <div className="flex items-center gap-1 text-primary cursor-pointer">
            <span className="material-symbols-outlined text-[28px] filled">location_on</span>
          </div>
          <button className="flex flex-1 items-center justify-center gap-1 font-bold text-lg tracking-tight active:scale-95 transition-transform">
            <span>Barrio Palermo</span>
            <span className="material-symbols-outlined text-[20px]">expand_more</span>
          </button>
          <button className="relative flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 size-2.5 bg-red-500 rounded-full border-2 border-white dark:border-surface-dark"></span>
          </button>
        </div>
      </div>

      <div className="px-4 pt-6 pb-2">
        <h3 className="text-2xl font-bold leading-tight">
          Hola, Juan. <br/>
          <span className="text-text-secondary dark:text-gray-400">Explora tu barrio.</span>
        </h3>
      </div>

      {/* Search */}
      <div className="px-4 py-3 sticky top-[60px] z-40 bg-background-light dark:bg-background-dark">
        <label className="flex flex-col w-full">
          <div className="flex w-full items-center rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 h-12 overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 transition-all">
            <div className="flex items-center justify-center pl-4 text-text-secondary dark:text-gray-400">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="flex-1 w-full h-full border-none bg-transparent px-3 text-base font-medium placeholder:text-text-secondary/70 focus:outline-none" placeholder="Buscar electricista, paseador..." />
          </div>
        </label>
      </div>

      {/* Toggle */}
      <div className="px-4 py-2">
        <div className="flex p-1 bg-gray-200 dark:bg-gray-800 rounded-xl relative">
          <div className="w-1/2 h-full absolute left-0 top-0 p-1">
             <div className="w-full h-full bg-white dark:bg-surface-dark shadow-sm rounded-lg"></div>
          </div>
          <button className="relative z-10 flex-1 py-2 text-sm font-bold text-center text-primary">Ofrezco Servicios</button>
          <button className="relative z-10 flex-1 py-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400">Busco Ayuda</button>
        </div>
      </div>

      {/* Categories */}
      <div className="w-full overflow-x-auto no-scrollbar py-3 pl-4">
        <div className="flex gap-3 pr-4 min-w-max">
          {categories.map((cat, idx) => (
            <button key={cat} className={`flex h-9 items-center justify-center px-4 rounded-full font-bold text-sm shadow-sm transition-transform active:scale-95 ${idx === 0 ? 'bg-primary text-white shadow-primary/20' : 'bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="px-4 pt-2 pb-3 flex justify-between items-end">
        <h4 className="text-lg font-bold">Destacados cerca de ti</h4>
        <a href="#" className="text-sm font-semibold text-primary">Ver todos</a>
      </div>

      <div className="flex flex-col px-4 gap-4">
        <ServiceCard 
            user={{ id: '1', name: 'Juan P.', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC40EZORYoayZvNetBmuvQ4kc_bYi_toUUSei9GMAWL9BkLj24SbAcsu3YJ1jQc40l_Y_w952RBXFEO0DkqqgwbsGrgZ3h4l533QY4KmzNJTyxeSuVpXIMuFW79sAnXMo6h7P1lnWJyABQ1tw6LwlTvi_4hdyF4cmiWl52QLQZeFe_eCLNLsYdutuooObvYMgJu9gf0qILvDiVhFBkKZZt1s_edgdtiJfs86_WYVlQw0tjHP3lU3g2-8pRkCsjdr3L1IgIhmPwPSyFX', isPro: true, rating: 4.9, reviews: 12, isVerified: true }}
            title="Reparación de PC y Mac a domicilio"
            description="Servicio técnico garantizado con más de 5 años de experiencia. Diagnóstico gratuito si se realiza el trabajo."
            distance="300m"
            price="$15.000"
            type="service"
        />
        <ServiceCard 
            user={{ id: '2', name: 'Ana M.', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0zAFRTik-e2Xk-mkO48rRuP22PVOcc5-mlmSuLsdQd6XS9FtLAN8bSRWi-4wH-TouylZiO9z9GVDjrkINvKRazQ9ei5CneRXnYjtfwT-6yTLXdDutGigaRr3a-t3Nh6NtpxspKjsXzWQnsQHrT0vRXen4xOcC1cEH0riP1WUAJ709N7iH4XLdtnAzgCn6CY11dJpKTE9ARye-T3PqmU6QKBfRDog6Yl1GKjDZsuZQXcbViv2Yx0Sa8huS8c0PEctjVKNPj4EvDik1' }}
            title="Necesito alguien que riegue mis plantas"
            description="Me voy de viaje por 3 días y necesito alguien de confianza para regar mis plantas del balcón."
            distance="100m"
            timeAgo="Hace 2h"
            isUrgent
            type="request"
        />
         <ServiceCard 
            user={{ id: '3', name: 'Carlos M.', avatarUrl: 'https://via.placeholder.com/50', isVerified: true, rating: 5.0, reviews: 4 }}
            title="Paseador de perros responsable"
            description="Amante de los animales. Paseos individuales o en grupo pequeño. Disponibilidad por las mañanas."
            distance="800m"
            price="$5.000"
            type="service"
            customAvatar={<div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold text-lg border-2 border-white dark:border-gray-700 shadow-sm">CM</div>}
        />
      </div>

      <BottomNav />
    </div>
  );
};

interface ServiceCardProps {
    user: User;
    title: string;
    description: string;
    distance: string;
    price?: string;
    type: 'service' | 'request';
    isUrgent?: boolean;
    timeAgo?: string;
    customAvatar?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ user, title, description, distance, price, type, isUrgent, timeAgo, customAvatar }) => {
    return (
        <div className="group relative flex flex-col w-full bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 transition-all active:scale-[0.99] hover:shadow-md">
            <div className="flex items-start justify-between mb-3">
                <div className="flex gap-3 items-center">
                    <div className="relative">
                        {customAvatar ? customAvatar : (
                            <img src={user.avatarUrl} alt={user.name} className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm" />
                        )}
                        {user.isVerified && (
                             <div className="absolute -bottom-1 -right-1 bg-white dark:bg-surface-dark rounded-full p-0.5">
                                <span className="material-symbols-outlined filled text-primary text-[18px]">verified</span>
                             </div>
                        )}
                    </div>
                    <div>
                        <div className="flex items-center gap-1">
                            <h5 className="text-sm font-bold text-text-main dark:text-white">{user.name}</h5>
                            {user.isPro && <span className="text-[10px] bg-primary/10 text-primary-dark dark:text-primary px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Pro</span>}
                        </div>
                        {user.rating ? (
                             <div className="flex items-center gap-1 text-yellow-500 mt-0.5">
                                <span className="material-symbols-outlined filled text-[14px]">star</span>
                                <span className="text-xs font-bold text-text-main dark:text-white">{user.rating}</span>
                                <span className="text-xs text-gray-400">({user.reviews} reseñas)</span>
                             </div>
                        ) : (
                            <span className="text-xs text-gray-400">Vecina • {timeAgo}</span>
                        )}
                    </div>
                </div>
                {isUrgent ? (
                    <div className="flex items-center gap-1 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-lg border border-red-100 dark:border-red-900/30">
                        <span className="material-symbols-outlined filled text-[14px] text-red-500">priority_high</span>
                        <span className="text-xs font-bold text-red-600 dark:text-red-400">Urgente</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-1 bg-background-light dark:bg-gray-800 px-2 py-1 rounded-lg">
                        <span className="material-symbols-outlined text-[14px] text-text-secondary">near_me</span>
                        <span className="text-xs font-bold text-text-secondary">{distance}</span>
                    </div>
                )}
            </div>

            <h3 className="text-lg font-bold leading-tight mb-2">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">{description}</p>

            <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-3 mt-auto">
                {type === 'service' ? (
                     <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wide">{price?.includes('hora') ? 'La hora' : 'Desde'}</span>
                        <span className="text-base font-bold text-text-main dark:text-white">{price}</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-1 text-text-secondary">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        <span className="text-sm font-medium">A {distance} de ti</span>
                    </div>
                )}
                
                {type === 'service' ? (
                    <button className="bg-primary hover:bg-primary-dark text-[#112111] font-bold py-2 px-5 rounded-lg text-sm transition-colors shadow-lg shadow-primary/30 flex items-center gap-2">
                        <span>Contactar</span>
                        <span className="material-symbols-outlined text-[16px]">send</span>
                    </button>
                ) : (
                    <button className="bg-surface-light dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-text-main dark:text-white border border-gray-200 dark:border-gray-700 font-bold py-2 px-5 rounded-lg text-sm transition-colors">
                        Ofrecer Ayuda
                    </button>
                )}
            </div>
        </div>
    );
};

export default Home;