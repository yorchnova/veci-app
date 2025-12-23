import React from 'react';
import BottomNav from '../components/BottomNav';
import { User } from '../types';

const Requests: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col pb-24 text-text-main dark:text-white">
      <header className="sticky top-0 z-30 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Ubicación Actual</span>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="material-symbols-outlined text-primary text-[20px] group-hover:scale-110 transition-transform">location_on</span>
              <h1 className="text-lg font-bold leading-tight">Barrio Palermo</h1>
              <span className="material-symbols-outlined text-text-secondary dark:text-gray-400 text-[20px]">expand_more</span>
            </div>
          </div>
          <button className="relative p-2 rounded-full bg-background-light dark:bg-background-dark hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary border-2 border-white dark:border-background-dark"></span>
          </button>
        </div>
      </header>

      <div className="px-4 py-4 bg-background-light dark:bg-background-dark">
        <label className="flex flex-col w-full h-12 shadow-sm">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-white dark:bg-surface-dark overflow-hidden border border-transparent focus-within:border-primary transition-colors">
            <div className="text-text-secondary dark:text-gray-400 flex items-center justify-center pl-4 pr-2">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="flex w-full min-w-0 flex-1 bg-transparent text-text-main dark:text-white placeholder:text-text-secondary px-2 focus:outline-none" placeholder="¿Qué necesitas o qué ofreces?" />
            <div className="flex items-center pr-2">
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-text-secondary">
                    <span className="material-symbols-outlined">tune</span>
                </button>
            </div>
          </div>
        </label>
      </div>

      <div className="flex gap-2 px-4 pb-2 overflow-x-auto no-scrollbar items-center">
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 shadow-sm shadow-primary/30 active:scale-95">
            <span className="material-symbols-outlined text-[18px]">grid_view</span>
            <p className="text-sm font-bold">Todos</p>
        </button>
        {['Jardinería', 'Plomería', 'Cuidado', 'Mascotas'].map(label => (
             <button key={label} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 text-text-main dark:text-gray-200 px-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                <span className="material-symbols-outlined text-[18px] text-primary">circle</span>
                <p className="text-sm font-medium">{label}</p>
            </button>
        ))}
      </div>

      <main className="flex flex-col gap-4 p-4">
        <RequestCard 
            user={{ id: '1', name: 'Ana G.', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAusst2d7pyZ1AHxGxP8blvh0tHDxVign9Hc1jRyctLe2Df3m8E8zZ0Cmu3lG9A7cbb4ZCpnDBsLuTS7x3phJKNJ1mBQGE_I-Y7bWw2ZUKHx5MdbqASOviFoaQMzfEHbZIe5QnylvCrFP_dTVvF3_uxZd7H82TtTQgN4L0qAOYjZSnbv1AWqtWAmUEuybHEVMQtUFb20BmL_1vrIeGkrVmG18a7WH-dXx-dQTslvXO4JhOhI1BobW7HlxTY9PwIinq7WeSwoDrf1Edq', isVerified: true, rating: 4.9, reviews: 24 }}
            badge="Super Vecino"
            timeAgo="Hace 2h"
            distance="200m"
            title="Ayuda con mudanza pequeña"
            description="Busco alguien con camioneta para mover un sofá y dos cajas grandes este sábado por la mañana. Pago acordado."
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDnmiKOnIdMCyA61pdH74iGG4rUYou5RmbbimYAj8LC6W4Dov1mFUI-smM0COm3I-LYEP2AMcbIthFMuqZBfvwRm7swtxN0txSt6zar7lV3HXDs1Qlvc4YUYl7NEHB6_bHrUOqU8C3q-BxWN7JNt9rZlCKscFloUFR1SuBJuX4ZCstj-mo1WAf6xuHRnUvUxsj1M44d-uK84vBi8gxk-Zayuuo7df_1_tmHDE4nrSQ4KgUMH1rMNLs3Z5FK_z34ip3teYw3Hqg0C2aW"
            category="Transporte"
        />
         <RequestCard 
            user={{ id: '2', name: 'Carlos R.', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmlg9VONB1e6PlQIBQd_fr5f0FTvDtLScPxQOOXSbhxEXpVV4xqwq1FFCLoE9ZgzGuEjouChqBR9ENj9uG6mjjFNmbEbbvDH-FzmgFK8TAagOeQEEfaZl43eI2OXmM3bLAiyrjpFcBIrQrtGlBiGrvYKsdr6XPLHKfUUN6PvaXypq8BxSCnfe-8dfBkSd8xaxJ2zRRcVwbmAShoamQ3VGndRIT0NdpzhA6a5Qp31-iTX4bDaPCh9f6IQByuLbkkImw_wu9OWcUvvO6' }}
            badge="Nuevo aquí"
            badgeColor="blue"
            timeAgo="Hace 4h"
            distance="100m"
            title="Clases de Matemáticas"
            description="Profesor universitario jubilado ofrece clases de apoyo para secundaria y universidad. ¡Primera clase gratis!"
            category="Educación"
            isDetail
        />
        <RequestCard 
            user={{ id: '3', name: 'Sarah M.', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGLoKYAV3TP51dX5vCnFK8cJYbbEfqbEt-LhR68yghhD3sbuW48hUZQAny78p1qMeVXKn-3Wpd-3H-zhzYhSOaqZWHEzWjb0Cq1pZCACUHWbJVvAdOLQytXNQs0ukNH09Y4jpkppZhDlZi4jN0DuYkh8y1C70cjLLEhCzgpa0uDpzY0kSE8mhj8I4ShxTiMDD2dPx5ZO6LxnhCk4O-xR-fybENHU_bMColp3lV1ygW5GkRoo-XrNsl8p507n-O7cX5apB5_gN8tl4x', isVerified: true, rating: 5.0, reviews: 12 }}
            badge="Vecino Confiable"
            timeAgo="Ayer"
            distance="450m"
            title="Intercambio de Esquejes"
            description="Tengo muchos esquejes de Pothos y Monstera. Me gustaría intercambiarlos por alguna suculenta o maceta pequeña."
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCoDtWqSfOAYq2Zz2Nyu4PZR0baJJj2gvjvu-xeR6qE8UXKO0qM5LdEBJjceBJUy0WJA2GXXB4druqYo_5r-U_q5GQgcGn93KOS-iprz6lYZUrqWWxrS_W2xeZQBu0dDZPv2XbXQ0xM7nY1YtXvCEyWZ08xfyYHc6SE0BbfpWOYnyDSUQn1Rsq1SvczeSBqrI324lTM-y4_CXj3fbym5KpIRn5V7gqymyX5jNGX5_tt70IIq3n630bBgjMaB-f7aT-R7R5FswiZoLJb"
            category="Jardinería"
        />
      </main>

      <button className="fixed bottom-24 right-4 h-14 w-14 rounded-full bg-primary shadow-lg shadow-primary/40 flex items-center justify-center text-white z-40 hover:scale-105 transition-transform active:scale-95">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      <BottomNav />
    </div>
  );
};

interface RequestCardProps {
    user: User;
    badge: string;
    badgeColor?: 'green' | 'blue';
    timeAgo: string;
    distance: string;
    title: string;
    description: string;
    category: string;
    imageUrl?: string;
    isDetail?: boolean;
}

const RequestCard: React.FC<RequestCardProps> = ({ user, badge, badgeColor = 'green', timeAgo, distance, title, description, category, imageUrl, isDetail }) => {
    return (
        <div className="group relative flex flex-col gap-3 rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-gray-200 bg-center bg-cover" style={{ backgroundImage: `url('${user.avatarUrl}')` }}></div>
                        {user.isVerified && (
                             <div className="absolute -bottom-1 -right-1 flex items-center justify-center rounded-full bg-white dark:bg-surface-dark p-0.5">
                                <span className="material-symbols-outlined text-[16px] filled text-primary">verified</span>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm font-bold text-text-main dark:text-white leading-none">{user.name}</p>
                        <div className="flex items-center gap-1 mt-1">
                            <span className={`text-xs font-medium px-1.5 py-0.5 rounded-md ${badgeColor === 'blue' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-200' : 'text-primary bg-primary/10'}`}>{badge}</span>
                            <span className="text-xs text-text-secondary dark:text-gray-400">• {timeAgo}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-text-secondary dark:text-gray-400 bg-background-light dark:bg-background-dark px-2 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-[16px] text-primary">near_me</span>
                    <span className="text-xs font-semibold">{distance}</span>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="flex flex-col flex-1 gap-1">
                    <h3 className="text-lg font-bold text-text-main dark:text-white leading-tight">{title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{description}</p>
                     {user.rating && (
                         <div className="flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[14px] text-yellow-500 filled">star</span>
                            <span className="text-sm font-semibold dark:text-white">{user.rating}</span>
                            <span className="text-sm text-gray-400">({user.reviews} reseñas)</span>
                        </div>
                    )}
                </div>
                {imageUrl && (
                    <div className="w-24 h-24 rounded-lg bg-gray-100 bg-cover bg-center shrink-0" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
                )}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800 mt-1">
                <div className="flex gap-2">
                    <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md">{category}</span>
                </div>
                <button className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-bold transition-colors ${isDetail ? 'bg-surface-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800' : 'bg-primary text-white hover:bg-primary-dark'}`}>
                    <span className="material-symbols-outlined text-[18px]">{isDetail ? 'visibility' : 'chat_bubble'}</span>
                    {isDetail ? 'Ver Detalle' : 'Contactar'}
                </button>
            </div>
        </div>
    );
};

export default Requests;