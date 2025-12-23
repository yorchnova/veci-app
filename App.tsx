import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Welcome from './screens/Welcome';
import OnboardingOffer from './screens/OnboardingOffer';
import OnboardingTrust from './screens/OnboardingTrust';
import Login from './screens/Login';
import CreateProfile from './screens/CreateProfile';
import ConfigureZone from './screens/ConfigureZone';
import Home from './screens/Home';
import Requests from './screens/Requests';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Mobile Container Simulation */}
        <div className="w-full max-w-[480px] bg-background-light dark:bg-background-dark min-h-screen shadow-2xl relative overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/onboarding/1" element={<OnboardingOffer />} />
            <Route path="/onboarding/2" element={<OnboardingTrust />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile/create" element={<CreateProfile />} />
            <Route path="/profile/zone" element={<ConfigureZone />} />
            <Route path="/home" element={<Home />} />
            <Route path="/requests" element={<Requests />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;