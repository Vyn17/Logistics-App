import React from 'react';
import { Head } from '@inertiajs/react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import HeroSection from './HeroSection';
import ProductCategories from './ProductCategories';
import FeaturedProducts from './FeaturedProducts';

interface LandingPageProps {
  user?: any;
}

const LandingPage: React.FC<LandingPageProps> = ({ user }) => {
  return (
    <>
  <Head title="LogisMart - Marketplace Terpercaya untuk Semua Kebutuhan" />
      
      <div className="min-h-screen bg-white">
        <Header user={user} />
        
        <main>
          <HeroSection />
          <ProductCategories />
          <FeaturedProducts />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
