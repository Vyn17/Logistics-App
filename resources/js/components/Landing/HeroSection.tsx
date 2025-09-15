import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRightIcon, ShoppingBagIcon, TruckIcon, GiftIcon } from '@heroicons/react/24/outline';

interface HeroSectionProps {
  user?: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ user }) => {
  const features = [
    {
      icon: ShoppingBagIcon,
      title: 'Produk Terlengkap',
      description: 'Jutaan produk dari berbagai kategori'
    },
    {
      icon: TruckIcon,
      title: 'Pengiriman Gratis',
      description: 'Free shipping untuk pembelian minimal'
    },
    {
      icon: GiftIcon,
      title: 'Promo Menarik',
      description: 'Dapatkan cashback dan voucher setiap hari'
    }
  ];

  const stats = [
    { label: 'Produk Tersedia', value: '2M+' },
    { label: 'Seller Aktif', value: '100K+' },
    { label: 'Pembeli Puas', value: '5M+' }
  ];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Marketplace
            <span className="block text-yellow-300">Terpercaya</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Belanja online mudah, aman, dan nyaman. Temukan jutaan produk berkualitas 
            dengan harga terbaik dari seller terpercaya di seluruh Indonesia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {!user ? (
              <>
                <a
                  href="/register"
                  className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
                >
                  Mulai Belanja
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/products"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Lihat Produk
                </a>
              </>
            ) : (
              <>
                <a
                  href="/dashboard"
                  className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
                >
                  Dashboard
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/products"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Belanja Sekarang
                </a>
              </>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <feature.icon className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-purple-100">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                {stat.value}
              </div>
              <div className="text-purple-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
