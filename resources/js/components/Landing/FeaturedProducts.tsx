import React from 'react';
import { StarIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/solid';
import { EyeIcon } from '@heroicons/react/24/outline';

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 21999000,
      originalPrice: 23999000,
      rating: 4.8,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300',
      discount: 8,
      seller: 'TechStore Official',
      badge: 'Terlaris'
    },
    {
      id: 2,
      name: 'MacBook Air M3',
      price: 18999000,
      originalPrice: 20999000,
      rating: 4.9,
      reviews: 856,
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300',
      discount: 10,
      seller: 'Apple Authorized',
      badge: 'Pilihan Editor'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24',
      price: 12999000,
      originalPrice: 14999000,
      rating: 4.7,
      reviews: 2156,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300',
      discount: 13,
      seller: 'Samsung Official',
      badge: 'Flash Sale'
    },
    {
      id: 4,
      name: 'Sony WH-1000XM5',
      price: 4299000,
      originalPrice: 4999000,
      rating: 4.8,
      reviews: 3421,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
      discount: 14,
      seller: 'Audio Pro',
      badge: 'Promo'
    },
    {
      id: 5,
      name: 'iPad Pro 11"',
      price: 13999000,
      originalPrice: 15999000,
      rating: 4.9,
      reviews: 987,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300',
      discount: 12,
      seller: 'Gadget Zone',
      badge: 'Terbaru'
    },
    {
      id: 6,
      name: 'Nintendo Switch OLED',
      price: 4799000,
      originalPrice: 5299000,
      rating: 4.6,
      reviews: 1876,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
      discount: 9,
      seller: 'Gaming Central',
      badge: 'Limited'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Terlaris': return 'bg-red-500 text-white';
      case 'Pilihan Editor': return 'bg-purple-500 text-white';
      case 'Flash Sale': return 'bg-orange-500 text-white';
      case 'Promo': return 'bg-green-500 text-white';
      case 'Terbaru': return 'bg-blue-500 text-white';
      case 'Limited': return 'bg-yellow-500 text-black';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Produk Pilihan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Produk terpopuler dengan kualitas terbaik dan harga terjangkau
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getBadgeColor(product.badge)}`}>
                    {product.badge}
                  </span>
                </div>

                {/* Discount */}
                {product.discount > 0 && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
                      -{product.discount}%
                    </span>
                  </div>
                )}

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <EyeIcon className="h-5 w-5" />
                  </button>
                  <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <HeartIcon className="h-5 w-5" />
                  </button>
                  <button className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors">
                    <ShoppingCartIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="text-sm text-gray-600 mb-3">
                  {product.seller}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {formatPrice(product.price)}
                    </div>
                    {product.originalPrice > product.price && (
                      <div className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </div>
                    )}
                  </div>
                  
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                    + Keranjang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="/products"
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            Lihat Semua Produk
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
