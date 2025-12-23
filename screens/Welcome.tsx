import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display p-4">
      {/* Header */}
      <div className="flex items-center justify-center pt-8 pb-4 w-full z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-text-main">
            <span className="material-symbols-outlined text-[20px] filled">location_on</span>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-text-main dark:text-white">VECI</h1>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-between w-full h-full">
        {/* Hero Image */}
        <div className="w-full py-4 flex justify-center items-center flex-1">
          <div 
            className="w-full aspect-[4/5] max-h-[450px] bg-center bg-contain bg-no-repeat rounded-2xl" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-VLHTNETa4MdM9pp1Q8EcAo7Nej8QIOo8yEvUo8al5WJZR-lFnDCi_RDR_Iu7F68GH6mBIpR4DsWJviP_MSuZSI7SS1R-HmDbGiYCJqeAr-QFzkDSTgfu5t8hDt5Ws_9vNrdgTduKp40YIlCfu7vME5-sE-wV9QkHAm6swe9mxtiZ9ADV5z83Cslbgl8D1nVqTRsb-SvgvfpbCBvP5Cjm7EcZholF29CpDwM6wwEXZDUz6oa-so97LZcV7EfvdqdeCKjmDpjXcYc3")' }}
          ></div>
        </div>

        {/* Content */}
        <div className="w-full pb-8 pt-4 flex flex-col items-center text-center">
          <div className="mb-8 space-y-3">
            <h2 className="text-text-main dark:text-white text-3xl font-extrabold leading-tight tracking-tight">
              Conecta con tu Barrio
            </h2>
            <p className="text-text-secondary dark:text-gray-400 text-base font-normal leading-relaxed max-w-[320px] mx-auto">
              Encuentra servicios de confianza y ofrece tu talento a tus vecinos más cercanos. Hagamos comunidad juntos.
            </p>
          </div>

          <div className="w-full space-y-3">
            <Button onClick={() => navigate('/onboarding/1')} icon="arrow_forward">
              Empezar
            </Button>
            <Button variant="ghost" onClick={() => navigate('/login')}>
              ¿Ya tienes cuenta? Iniciar Sesión
            </Button>
          </div>
          <div className="h-4 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;