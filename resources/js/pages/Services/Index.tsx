import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button, Card, Input, Loading, Alert } from '@/components/Common';
import { MagnifyingGlassIcon, FunnelIcon, TruckIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';
import type { PageProps, ShippingService, VendorFilters } from '@/types';

interface ServicesPageProps extends PageProps {
  services: ShippingService[];
  filters: VendorFilters;
}

export default function ServicesPage({ auth, services, filters }: ServicesPageProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(filters.search || '');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedService, setSelectedService] = useState<ShippingService | null>(null);

  const serviceTypeColors = {
    express: 'bg-red-100 text-red-800',
    regular: 'bg-blue-100 text-blue-800',
    economy: 'bg-green-100 text-green-800',
    same_day: 'bg-purple-100 text-purple-800'
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1000);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(price);
  };

  return (
    <AppLayout>
      <Head title="Layanan Pengiriman" />
      
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Layanan Pengiriman</h1>
            <p className="mt-2 text-gray-600">
              Temukan layanan pengiriman terbaik untuk kebutuhan Anda
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Cari layanan pengiriman..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    leftIcon={<MagnifyingGlassIcon />}
                  />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  leftIcon={<FunnelIcon className="h-4 w-4" />}
                >
                  Filter
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? <Loading size="sm" color="white" /> : 'Cari'}
                </Button>
              </div>

              {showFilters && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  <Input
                    label="Area Cakupan"
                    placeholder="Masukkan kota..."
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipe Layanan
                    </label>
                    <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                      <option value="">Semua Tipe</option>
                      <option value="express">Express</option>
                      <option value="regular">Regular</option>
                      <option value="economy">Economy</option>
                      <option value="same_day">Same Day</option>
                    </select>
                  </div>
                  <Input
                    label="Rating Minimum"
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    placeholder="4.0"
                  />
                </div>
              )}
            </form>
          </Card>

          {/* Service List */}
          {services.length === 0 ? (
            <Alert
              type="info"
              title="Tidak ada layanan ditemukan"
              message="Coba ubah kata kunci pencarian atau filter yang Anda gunakan."
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    {/* Service Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <TruckIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{service.name}</h3>
                          <p className="text-sm text-gray-600">{service.vendor?.company_name}</p>
                        </div>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${serviceTypeColors[service.type]}`}>
                        {service.type}
                      </span>
                    </div>

                    {/* Service Details */}
                    <p className="text-sm text-gray-600">{service.description}</p>

                    {/* Service Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">
                          {service.estimated_days_min}-{service.estimated_days_max} hari
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <span className="text-gray-600">
                          {service.vendor?.rating || 0} ({service.vendor?.total_orders || 0})
                        </span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Mulai dari</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {formatPrice(service.base_price)}
                          </p>
                          <p className="text-xs text-gray-500">
                            + {formatPrice(service.price_per_kg)}/kg
                          </p>
                        </div>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm">
                            Detail
                          </Button>
                          <Button size="sm">
                            Pesan
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Coverage Areas */}
                    {service.coverage_areas && service.coverage_areas.length > 0 && (
                      <div className="border-t border-gray-200 pt-3">
                        <p className="text-xs text-gray-500 mb-2">Area Cakupan:</p>
                        <div className="flex flex-wrap gap-1">
                          {service.coverage_areas.slice(0, 3).map((area, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-800">
                              {area}
                            </span>
                          ))}
                          {service.coverage_areas.length > 3 && (
                            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-800">
                              +{service.coverage_areas.length - 3} lainnya
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Load More */}
          {services.length > 0 && (
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                Muat Lebih Banyak
              </Button>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
