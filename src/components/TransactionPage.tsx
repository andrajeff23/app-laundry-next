import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { 
  Shirt, 
  Wind, 
  Sparkles, 
  ShoppingBag,
  Plus,
  Minus,
  Calendar,
  MapPin,
  CreditCard,
  Wallet
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function TransactionPage() {
  const [selectedService, setSelectedService] = useState('cuci-setrika');
  const [weight, setWeight] = useState(3);
  const [pickupDate, setPickupDate] = useState('');
  const [address, setAddress] = useState('Jl. Sudirman No. 123, Jakarta Selatan');
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const services = [
    {
      id: 'cuci-kering',
      name: 'Cuci Kering',
      icon: Wind,
      price: 5000,
      unit: 'kg',
      color: 'bg-blue-500'
    },
    {
      id: 'cuci-setrika',
      name: 'Cuci Setrika',
      icon: Shirt,
      price: 7000,
      unit: 'kg',
      color: 'bg-green-500'
    },
    {
      id: 'setrika-saja',
      name: 'Setrika Saja',
      icon: Sparkles,
      price: 4000,
      unit: 'kg',
      color: 'bg-purple-500'
    },
    {
      id: 'dry-clean',
      name: 'Dry Clean',
      icon: ShoppingBag,
      price: 15000,
      unit: 'pcs',
      color: 'bg-orange-500'
    }
  ];

  const selectedServiceData = services.find(s => s.id === selectedService) || services[1];
  const subtotal = selectedServiceData.price * weight;
  const deliveryFee = 5000;
  const total = subtotal + deliveryFee;

  const handleSubmitOrder = () => {
    if (!pickupDate) {
      toast.error('Silakan pilih tanggal pickup');
      return;
    }
    toast.success('Pesanan berhasil dibuat!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-4 sticky top-0 z-10">
        <h1 className="text-gray-900">Buat Pesanan Baru</h1>
        <p className="text-gray-600 text-sm">Pilih layanan dan atur detail pesanan</p>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Service Selection */}
        <Card>
          <CardContent className="p-4">
            <Label className="mb-3 block">Pilih Layanan</Label>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedService === service.id
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center mb-2`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-900 text-sm mb-1">{service.name}</p>
                    <p className="text-indigo-600 text-xs">
                      Rp {service.price.toLocaleString('id-ID')}/{service.unit}
                    </p>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Weight/Quantity */}
        <Card>
          <CardContent className="p-4">
            <Label className="mb-3 block">
              Jumlah ({selectedServiceData.unit})
            </Label>
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setWeight(Math.max(1, weight - 1))}
                className="h-12 w-12 rounded-full"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <div className="text-center">
                <p className="text-gray-900">{weight}</p>
                <p className="text-gray-500 text-xs">{selectedServiceData.unit}</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setWeight(weight + 1)}
                className="h-12 w-12 rounded-full"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Pickup Schedule */}
        <Card>
          <CardContent className="p-4">
            <Label htmlFor="pickupDate" className="mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Jadwal Pickup
            </Label>
            <Input
              id="pickupDate"
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </CardContent>
        </Card>

        {/* Address */}
        <Card>
          <CardContent className="p-4">
            <Label htmlFor="address" className="mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Alamat Pickup
            </Label>
            <Input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Masukkan alamat lengkap"
            />
            <Button variant="link" className="mt-2 px-0 text-indigo-600">
              Gunakan lokasi saat ini
            </Button>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card>
          <CardContent className="p-4">
            <Label className="mb-3 block">Metode Pembayaran</Label>
            <div className="space-y-2">
              <button
                onClick={() => setPaymentMethod('cash')}
                className={`w-full p-4 rounded-lg border-2 flex items-center gap-3 transition-all ${
                  paymentMethod === 'cash'
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Wallet className="w-5 h-5 text-gray-600" />
                <div className="text-left flex-1">
                  <p className="text-gray-900">Tunai</p>
                  <p className="text-gray-500 text-xs">Bayar saat pengambilan</p>
                </div>
                {paymentMethod === 'cash' && (
                  <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => setPaymentMethod('digital')}
                className={`w-full p-4 rounded-lg border-2 flex items-center gap-3 transition-all ${
                  paymentMethod === 'digital'
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <CreditCard className="w-5 h-5 text-gray-600" />
                <div className="text-left flex-1">
                  <p className="text-gray-900">E-Wallet / Transfer</p>
                  <p className="text-gray-500 text-xs">OVO, GoPay, Dana, Transfer Bank</p>
                </div>
                {paymentMethod === 'digital' && (
                  <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50">
          <CardContent className="p-4">
            <h3 className="text-gray-900 mb-3">Ringkasan Pesanan</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">
                  {selectedServiceData.name} ({weight} {selectedServiceData.unit})
                </span>
                <span className="text-gray-900">
                  Rp {subtotal.toLocaleString('id-ID')}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Biaya Antar-Jemput</span>
                <span className="text-gray-900">
                  Rp {deliveryFee.toLocaleString('id-ID')}
                </span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between">
                  <span className="text-gray-900">Total</span>
                  <span className="text-indigo-600">
                    Rp {total.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>
            </div>
            <Button 
              onClick={handleSubmitOrder}
              className="w-full bg-indigo-600 hover:bg-indigo-700"
            >
              Buat Pesanan
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
