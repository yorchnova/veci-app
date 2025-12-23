import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const NavItem = ({ path, icon, label, filled = false, badge = false }: { path: string, icon: string, label: string, filled?: boolean, badge?: boolean }) => {
    const isActive = currentPath === path;
    const colorClass = isActive ? "text-primary" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300";
    
    return (
      <button 
        onClick={() => navigate(path)}
        className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${colorClass}`}
      >
        <div className="relative">
          <span className={`material-symbols-outlined text-[24px] ${isActive || filled ? 'filled' : ''}`}>
            {icon}
          </span>
          {badge && (
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white dark:border-surface-dark"></span>
          )}
        </div>
        <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>{label}</span>
      </button>
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 pb-safe">
      <div className="flex justify-around items-center h-16 max-w-[480px] mx-auto">
        <NavItem path="/home" icon="explore" label="Explorar" filled={currentPath === '/home'} />
        <NavItem path="/requests" icon="assignment" label="Solicitudes" filled={currentPath === '/requests'} />
        <NavItem path="/messages" icon="chat" label="Mensajes" badge />
        <NavItem path="/profile" icon="person" label="Perfil" />
      </div>
      {/* iOS Home Indicator Spacer */}
      <div className="h-4 w-full bg-surface-light/95 dark:bg-surface-dark/95"></div>
    </div>
  );
};

export default BottomNav;