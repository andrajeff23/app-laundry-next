import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Shirt, 
  Wind, 
  Sparkles, 
  ShoppingBag, 
  Clock, 
  MapPin,
  Bell,
  User,
  ChevronRight,
  Package
} from 'lucide-react';

export function HomePage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'cuci-kering',
      name: 'Cuci Kering',
      icon: Wind,
      price: 'Rp 5.000/kg',
      duration: '1-2 hari',
      color: 'bg-blue-500'
    },
    {
      id: 'cuci-setrika',
      name: 'Cuci Setrika',
      icon: Shirt,
      price: 'Rp 7.000/kg',
      duration: '2-3 hari',
      color: 'bg-green-500'
    },
    {
      id: 'setrika-saja',
      name: 'Setrika Saja',
      icon: Sparkles,
      price: 'Rp 4.000/kg',
      duration: '1 hari',
      color: 'bg-purple-500'
    },
    {
      id: 'dry-clean',
      name: 'Dry Clean',
      icon: ShoppingBag,
      price: 'Rp 15.000/pcs',
      duration: '3-4 hari',
      color: 'bg-orange-500'
    }
  ];

  const activeOrders = [
    {
      id: 'ORD-001',
      service: 'Cuci Setrika',
      weight: '3 kg',
      status: 'Dalam Proses',
      statusColor: 'bg-yellow-500'
    },
    {
      id: 'ORD-002',
      service: 'Dry Clean',
      weight: '2 pcs',
      status: 'Siap Diambil',
      statusColor: 'bg-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <div className="bg-indigo-600 text-white px-4 pt-6 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm opacity-90">Selamat Datang</p>
              <p>John Doe</p>
            </div>
          </div>
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm opacity-90">
          <MapPin className="w-4 h-4" />
          <span>Jakarta Selatan, Indonesia</span>
        </div>
      </div>

      <div className="px-4 -mt-6">
        {/* Quick Stats */}
        <Card className="shadow-lg">
          <CardContent className="p-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-600 text-xs">Aktif</p>
                <p className="text-indigo-600">{activeOrders.length}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-gray-600 text-xs">Selesai</p>
                <p className="text-indigo-600">12</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-gray-600 text-xs">Poin</p>
                <p className="text-indigo-600">250</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-900">Layanan Kami</h2>
            <button className="text-indigo-600 text-sm flex items-center gap-1">
              Lihat Semua
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedService === service.id ? 'ring-2 ring-indigo-600' : ''
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <CardContent className="p-4">
                    <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-1">{service.name}</h3>
                    <p className="text-indigo-600 text-sm mb-1">{service.price}</p>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{service.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Active Orders */}
        <div className="mt-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-900">Pesanan Aktif</h2>
            <button className="text-indigo-600 text-sm flex items-center gap-1">
              Lihat Semua
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {activeOrders.map((order) => (
              <Card key={order.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <Shirt className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <p className="text-gray-900">{order.id}</p>
                        <p className="text-gray-600 text-sm">{order.service} • {order.weight}</p>
                      </div>
                    </div>
                    <Badge className={`${order.statusColor} text-white border-0`}>
                      {order.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Promo Banner */}
        <Card className="mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="mb-1">Promo Spesial! 🎉</h3>
                <p className="text-white/90 text-sm">Diskon 20% untuk member baru</p>
                <Button variant="secondary" size="sm" className="mt-3">
                  Klaim Sekarang
                </Button>
              </div>
              <Sparkles className="w-16 h-16 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
