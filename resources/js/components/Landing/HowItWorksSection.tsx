import React from 'react';
import { 
  UserPlusIcon, 
  DocumentTextIcon, 
  CreditCardIcon, 
  TruckIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      name: 'Daftar & Verifikasi',
      description: 'Buat akun gratis dan verifikasi identitas Anda untuk mulai menggunakan platform.',
      icon: UserPlusIcon,
      details: [
        'Registrasi dengan email atau nomor telepon',
        'Upload dokumen identitas (KTP/SIM)',
        'Verifikasi alamat pickup default',
        'Setup profil bisnis (opsional)'
      ]
    },
    {
      name: 'Buat Pesanan',
      description: 'Input detail pengiriman, pilih layanan, dan bandingkan penawaran dari berbagai vendor.',
      icon: DocumentTextIcon,
      details: [
        'Masukkan alamat pickup dan tujuan',
        'Input dimensi dan berat paket',
        'Pilih jenis layanan (reguler/express/same day)',
        'Bandingkan harga dan estimasi dari vendor'
      ]
    },
    {
      name: 'Bayar & Konfirmasi',
      description: 'Pilih vendor terbaik, lakukan pembayaran, dan konfirmasi pesanan Anda.',
      icon: CreditCardIcon,
      details: [
        'Pilih vendor berdasarkan harga dan rating',
        'Pembayaran aman via transfer/e-wallet/kartu',
        'Dapatkan nomor resi otomatis',
        'Notifikasi konfirmasi ke vendor'
      ]
    },
    {
      name: 'Pickup & Kirim',
      description: 'Vendor akan pickup paket sesuai jadwal dan mulai proses pengiriman.',
      icon: TruckIcon,
      details: [
        'Vendor pickup sesuai jadwal yang dipilih',
        'Paket diproses di sorting center',
        'Pengiriman ke alamat tujuan',
        'Update status secara real-time'
      ]
    },
    {
      name: 'Selesai',
      description: 'Paket diterima di tujuan dengan konfirmasi penerimaan dan rating vendor.',
      icon: CheckCircleIcon,
      details: [
        'Notifikasi saat paket sampai tujuan',
        'Konfirmasi penerimaan dari penerima',
        'Berikan rating dan review vendor',
        'Invoice dan riwayat tersimpan otomatis'
      ]
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Cara Kerja</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            5 Langkah Mudah Kirim Paket
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Proses pengiriman yang sederhana dan transparan. Dari registrasi hingga paket sampai tujuan, 
            semua bisa dimonitor dalam satu platform.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step, stepIdx) => (
              <div key={step.name} className="flex flex-col">
                <div className="relative">
                  {stepIdx !== steps.length - 1 && (
                    <div className="absolute left-8 top-16 h-32 w-0.5 bg-gray-200 lg:h-24" aria-hidden="true" />
                  )}
                  <div className="flex items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600">
                      <step.icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-blue-600">
                        Langkah {stepIdx + 1}
                      </div>
                      <div className="text-base font-semibold leading-7 text-gray-900">
                        {step.name}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="text-base leading-7 text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start">
                        <svg
                          className="h-5 w-5 flex-none text-blue-600 mt-0.5"
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
                        <span className="ml-2 text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Benefits Section */}
        <div className="mt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Mengapa Memilih LogisMarket?
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Platform yang dirancang untuk memberikan pengalaman terbaik bagi semua pihak
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
              <div className="relative">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.317-.207-1.709-.482-.845-.596-.945-1.821-.15-2.527.707-.629 1.71-.629 2.417 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Hemat Biaya
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Bandingkan harga dari berbagai vendor dan pilih yang paling ekonomis untuk kebutuhan Anda.
                </dd>
              </div>
              
              <div className="relative">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>
                  </div>
                  Akses Mudah
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Platform terintegrasi yang mudah digunakan dari desktop maupun mobile device.
                </dd>
              </div>
              
              <div className="relative">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  Terpercaya
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Semua vendor telah melalui proses verifikasi ketat untuk menjamin kualitas layanan.
                </dd>
              </div>
              
              <div className="relative">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25c0-1.372-.465-2.637-1.244-3.626.28-.586.456-1.224.456-1.874a4.5 4.5 0 00-1.72-3.526 4.025 4.025 0 01-1.72 0A4.5 4.5 0 0015 5.25a4.5 4.5 0 00-4.06 2.497A4.502 4.502 0 006.75 12a4.502 4.502 0 01-4.06-2.497A4.5 4.5 0 001.72 12.5a4.025 4.025 0 01-1.72 0z" />
                    </svg>
                  </div>
                  Support 24/7
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Tim customer service kami siap membantu Anda kapan saja melalui berbagai channel.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
