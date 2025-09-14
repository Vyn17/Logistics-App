import React from 'react';
import { Head } from '@inertiajs/react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import HowItWorksSection from './HowItWorksSection';

interface LandingPageProps {
  user?: any;
}

const LandingPage: React.FC<LandingPageProps> = ({ user }) => {
  return (
    <>
      <Head title="LogisMarket - Marketplace Jasa Pengiriman Logistik Terpercaya" />
      
      <div className="min-h-screen bg-white">
        <Header user={user} />
        
        <main>
          <HeroSection />
          <ServicesSection />
          <HowItWorksSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
