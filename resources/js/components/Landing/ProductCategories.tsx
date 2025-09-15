import React from 'react';
import { 
  DevicePhoneMobileIcon, 
  ComputerDesktopIcon, 
  HomeIcon, 
  SparklesIcon,
  UserIcon,
  BookOpenIcon,
  HeartIcon,
  GiftIcon 
} from '@heroicons/react/24/outline';

const ProductCategories: React.FC = () => {
  const categories = [
    {
      icon: DevicePhoneMobileIcon,
      name: 'Elektronik',
      description: 'Smartphone, laptop, gadget terbaru',
      itemCount: '50K+ produk',
      bgColor: 'bg-blue-500',
      bgGradient: 'from-blue-400 to-blue-600'
    },
    {
      icon: UserIcon,
      name: 'Fashion',
      description: 'Pakaian, sepatu, aksesoris trendy',
      itemCount: '100K+ produk',
      bgColor: 'bg-pink-500',
      bgGradient: 'from-pink-400 to-pink-600'
    },
    {
      icon: HomeIcon,
      name: 'Rumah Tangga',
      description: 'Furniture, dekorasi, peralatan rumah',
      itemCount: '75K+ produk',
      bgColor: 'bg-green-500',
      bgGradient: 'from-green-400 to-green-600'
    },
    {
      icon: SparklesIcon,
      name: 'Kecantikan',
      description: 'Skincare, makeup, perawatan',
      itemCount: '30K+ produk',
      bgColor: 'bg-purple-500',
      bgGradient: 'from-purple-400 to-purple-600'
    },
    {
      icon: HeartIcon,
      name: 'Kesehatan',
      description: 'Vitamin, suplemen, alat kesehatan',
      itemCount: '25K+ produk',
      bgColor: 'bg-red-500',
      bgGradient: 'from-red-400 to-red-600'
    },
    {
      icon: BookOpenIcon,
      name: 'Hobi & Buku',
      description: 'Buku, alat tulis, mainan edukatif',
      itemCount: '40K+ produk',
      bgColor: 'bg-orange-500',
      bgGradient: 'from-orange-400 to-orange-600'
    },
    {
      icon: ComputerDesktopIcon,
      name: 'Komputer',
      description: 'PC, accessories, software',
      itemCount: '20K+ produk',
      bgColor: 'bg-indigo-500',
      bgGradient: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: GiftIcon,
      name: 'Hadiah',
      description: 'Kado unik, souvenir, gift card',
      itemCount: '15K+ produk',
      bgColor: 'bg-yellow-500',
      bgGradient: 'from-yellow-400 to-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Kategori Populer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan jutaan produk berkualitas dari berbagai kategori pilihan
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-90`}></div>
                
                <div className="relative p-6 text-center">
                  <div className="mb-4">
                    <category.icon className="h-12 w-12 text-white mx-auto" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {category.name}
                  </h3>
                  
                  <p className="text-sm text-white/90 mb-3">
                    {category.description}
                  </p>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-white">
                      {category.itemCount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="/categories"
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            Lihat Semua Kategori
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
