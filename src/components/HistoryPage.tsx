import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Shirt,
  Search,
  Filter,
  Calendar,
  MapPin,
  Package,
  CheckCircle2,
  XCircle,
  Clock
} from 'lucide-react';

export function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'completed' | 'cancelled'>('all');

  const orders = [
    {
      id: 'ORD-005',
      service: 'Cuci Setrika',
      weight: '3 kg',
      date: '2025-11-10',
      status: 'completed',
      statusText: 'Selesai',
      statusColor: 'bg-green-500',
      total: 26000,
      pickupAddress: 'Jl. Sudirman No. 123'
    },
    {
      id: 'ORD-004',
      service: 'Dry Clean',
      weight: '2 pcs',
      date: '2025-11-08',
      status: 'completed',
      statusText: 'Selesai',
      statusColor: 'bg-green-500',
      total: 35000,
      pickupAddress: 'Jl. Thamrin No. 45'
    },
    {
      id: 'ORD-003',
      service: 'Cuci Kering',
      weight: '5 kg',
      date: '2025-11-05',
      status: 'completed',
      statusText: 'Selesai',
      statusColor: 'bg-green-500',
      total: 30000,
      pickupAddress: 'Jl. Sudirman No. 123'
    },
    {
      id: 'ORD-002',
      service: 'Setrika Saja',
      weight: '2 kg',
      date: '2025-11-03',
      status: 'cancelled',
      statusText: 'Dibatalkan',
      statusColor: 'bg-red-500',
      total: 13000,
      pickupAddress: 'Jl. Gatot Subroto No. 78'
    },
    {
      id: 'ORD-001',
      service: 'Cuci Setrika',
      weight: '4 kg',
      date: '2025-11-01',
      status: 'completed',
      statusText: 'Selesai',
      statusColor: 'bg-green-500',
      total: 33000,
      pickupAddress: 'Jl. Sudirman No. 123'
    }
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          order.service.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: orders.length,
    completed: orders.filter(o => o.status === 'completed').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-4 sticky top-0 z-10">
        <h1 className="text-gray-900 mb-1">Riwayat Pesanan</h1>
        <p className="text-gray-600 text-sm">Lihat semua pesanan Anda</p>
      </div>

      <div className="px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
            <CardContent className="p-4 text-center">
              <Package className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <p className="text-2xl mb-1">{stats.total}</p>
              <p className="text-xs opacity-90">Total</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
            <CardContent className="p-4 text-center">
              <CheckCircle2 className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <p className="text-2xl mb-1">{stats.completed}</p>
              <p className="text-xs opacity-90">Selesai</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0">
            <CardContent className="p-4 text-center">
              <XCircle className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <p className="text-2xl mb-1">{stats.cancelled}</p>
              <p className="text-xs opacity-90">Batal</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Cari nomor pesanan atau layanan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <Button
            variant={filterStatus === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilterStatus('all')}
            className={filterStatus === 'all' ? 'bg-indigo-600' : ''}
          >
            <Filter className="w-4 h-4 mr-2" />
            Semua
          </Button>
          <Button
            variant={filterStatus === 'completed' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilterStatus('completed')}
            className={filterStatus === 'completed' ? 'bg-green-600' : ''}
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Selesai
          </Button>
          <Button
            variant={filterStatus === 'cancelled' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilterStatus('cancelled')}
            className={filterStatus === 'cancelled' ? 'bg-red-600' : ''}
          >
            <XCircle className="w-4 h-4 mr-2" />
            Dibatalkan
          </Button>
        </div>

        {/* Orders List */}
        <div className="space-y-3">
          {filteredOrders.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">Tidak ada riwayat pesanan</p>
              </CardContent>
            </Card>
          ) : (
            filteredOrders.map((order) => (
              <Card key={order.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shirt className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <p className="text-gray-900">{order.id}</p>
                        <p className="text-gray-600 text-sm">{order.service}</p>
                      </div>
                    </div>
                    <Badge className={`${order.statusColor} text-white border-0`}>
                      {order.statusText}
                    </Badge>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Package className="w-4 h-4" />
                      <span>{order.weight}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(order.date).toLocaleDateString('id-ID', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="truncate">{order.pickupAddress}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <p className="text-gray-600 text-sm">Total Pembayaran</p>
                    <p className="text-indigo-600">
                      Rp {order.total.toLocaleString('id-ID')}
                    </p>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      Detail
                    </Button>
                    {order.status === 'completed' && (
                      <Button variant="outline" size="sm" className="flex-1">
                        Pesan Lagi
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
