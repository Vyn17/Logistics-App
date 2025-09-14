import React from 'react';
import { Link } from '@inertiajs/react';
import { 
  TruckIcon, 
  RocketLaunchIcon, 
  ClockIcon, 
  CubeIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const ServicesSection: React.FC = () => {
  const services = [
    {
      name: 'Pengiriman Reguler',
      description: 'Layanan pengiriman standar dengan waktu tempuh 2-5 hari kerja untuk paket dalam dan luar kota.',
      icon: TruckIcon,
      price: 'Mulai dari Rp 15.000',
      features: [
        'Waktu tempuh 2-5 hari kerja',
        'Asuransi gratis hingga Rp 500.000',
        'Tracking real-time',
        'Free pickup untuk area tertentu'
      ],
      popular: false,
    },
    {
      name: 'Express Delivery',
      description: 'Pengiriman cepat dengan waktu tempuh 1-2 hari kerja, cocok untuk kebutuhan mendesak.',
      icon: RocketLaunchIcon,
      price: 'Mulai dari Rp 25.000',
      features: [
        'Waktu tempuh 1-2 hari kerja',
        'Asuransi gratis hingga Rp 1.000.000',
        'Priority handling',
        'Garansi tepat waktu'
      ],
      popular: true,
    },
    {
      name: 'Same Day Delivery',
      description: 'Pengiriman di hari yang sama untuk area Jakarta, Bogor, Depok, Tangerang, dan Bekasi.',
      icon: ClockIcon,
      price: 'Mulai dari Rp 35.000',
      features: [
        'Pengiriman hari yang sama',
        'Khusus area Jabodetabek',
        'Pickup maksimal jam 14:00',
        'Delivered sebelum jam 18:00'
      ],
      popular: false,
    },
    {
      name: 'Cargo & Heavy Items',
      description: 'Layanan khusus untuk barang berat dan volume besar dengan armada khusus.',
      icon: CubeIcon,
      price: 'Harga sesuai dimensi',
      features: [
        'Untuk barang >50kg',
        'Armada khusus (pickup, engkel, CDD)',
        'Door to door service',
        'Konsultasi gratis'
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Layanan Pengiriman Kami
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Pilih layanan yang sesuai dengan kebutuhan pengiriman Anda. 
            Dari pengiriman reguler hingga express, semua dengan jaminan kualitas terbaik.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 ${
                service.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
                    Paling Populer
                  </span>
                </div>
              )}
              
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <div className="flex items-center gap-x-3">
                    <service.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                    <h3 className="text-xl font-semibold leading-8 text-gray-900">
                      {service.name}
                    </h3>
                  </div>
                </div>
                
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>
                
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-2xl font-bold tracking-tight text-gray-900">
                    {service.price}
                  </span>
                </p>
                
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                href="/register"
                className={`mt-8 flex items-center justify-center gap-x-2 rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  service.popular
                    ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500 focus-visible:outline-blue-600'
                    : 'bg-white text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300'
                }`}
              >
                Pilih Layanan
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-3xl bg-blue-600 px-6 py-16 sm:mt-20 sm:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Butuh Layanan Khusus?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Tim ahli kami siap membantu merancang solusi logistik yang sesuai dengan kebutuhan 
              bisnis Anda. Konsultasi gratis dengan expert logistics.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Konsultasi Gratis
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                Lihat Semua Layanan <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
