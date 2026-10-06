import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#0B0F14]">
      <ScrollToTop />
      <Header />
      <main id="main-content" className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
