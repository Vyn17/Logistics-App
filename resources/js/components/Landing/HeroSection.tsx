import React from 'react';
import { Link } from '@inertiajs/react';
import { TruckIcon, ClockIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const HeroSection: React.FC = () => {
  const features = [
    {
      name: 'Pengiriman Cepat',
      description: 'Jaringan vendor terpercaya dengan layanan express dan same-day delivery',
      icon: TruckIcon,
    },
    {
      name: 'Real-time Tracking',
      description: 'Pantau status pengiriman secara real-time dari pickup hingga delivered',
      icon: ClockIcon,
    },
    {
      name: 'Harga Kompetitif',
      description: 'Bandingkan harga dari berbagai vendor dan pilih yang terbaik',
      icon: CurrencyDollarIcon,
    },
    {
      name: 'Pembayaran Aman',
      description: 'Sistem pembayaran terintegrasi dengan gateway terpercaya',
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Marketplace Jasa Pengiriman{' '}
              <span className="text-blue-600">Logistik Terpercaya</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hubungkan bisnis Anda dengan jaringan vendor logistik terbaik di Indonesia. 
              Kelola pengiriman dengan mudah, cepat, dan aman dalam satu platform terintegrasi.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/register"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Mulai Kirim Sekarang
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
              >
                Cara Kerja <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Keunggulan LogisMarket</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Solusi Lengkap Untuk Kebutuhan Logistik Anda
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Platform yang menghubungkan pengirim dengan berbagai vendor logistik terbaik, 
            memberikan Anda fleksibilitas, transparansi, dan kendali penuh atas pengiriman.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-blue-600 py-24 sm:py-32 mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-blue-200">Vendor Terdaftar</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                500+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-blue-200">Pengiriman Berhasil</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                1M+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-blue-200">Kota Terjangkau</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                1000+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-blue-200">Rating Kepuasan</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                4.9/5
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
