import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "flex items-center justify-center rounded-xl font-bold leading-normal transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary hover:bg-[#15cc15] text-[#112111] shadow-lg shadow-primary/20",
    secondary: "bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800",
    outline: "border-2 border-primary text-primary hover:bg-primary/5",
    ghost: "bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-text-main dark:text-white"
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const heightStyle = "h-14 px-6";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${heightStyle} ${className}`}
      {...props}
    >
      <span className="truncate">{children}</span>
      {icon && (
        <span className={`material-symbols-outlined ml-2 text-[20px] ${props.disabled ? 'opacity-50' : ''}`}>
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;