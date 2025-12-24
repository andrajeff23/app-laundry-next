import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  User,
  MapPin,
  Bell,
  CreditCard,
  HelpCircle,
  FileText,
  Shield,
  LogOut,
  ChevronRight,
  Star,
  Gift,
  Languages,
  Moon
} from 'lucide-react';

interface SettingPageProps {
  onLogout: () => void;
}

export function SettingPage({ onLogout }: SettingPageProps) {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    if (confirm('Apakah Anda yakin ingin keluar?')) {
      onLogout();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-4 pt-6 pb-20 rounded-b-3xl">
        <h1 className="mb-6">Pengaturan</h1>
        
        {/* Profile Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16 border-2 border-white">
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="bg-indigo-700 text-white">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-white mb-1">John Doe</p>
                <p className="text-white/80 text-sm">john.doe@email.com</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-white/80 text-sm">Member Gold</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-white/60" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="px-4 -mt-12 pb-6">
        {/* Points Card */}
        <Card className="mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/90 text-sm mb-1">Poin Rewards</p>
                <p className="text-2xl">250 Poin</p>
              </div>
              <Gift className="w-12 h-12 opacity-50" />
            </div>
            <Button variant="secondary" size="sm" className="mt-3 w-full">
              Tukar Poin
            </Button>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <div className="mb-4">
          <h2 className="text-gray-700 px-2 mb-3">Akun</h2>
          <Card>
            <CardContent className="p-0">
              <button className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors border-b">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-gray-900">Profil Saya</p>
                  <p className="text-gray-500 text-sm">Edit informasi pribadi</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors border-b">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-gray-900">Alamat Tersimpan</p>
                  <p className="text-gray-500 text-sm">Kelola alamat pengiriman</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-gray-900">Metode Pembayaran</p>
                  <p className="text-gray-500 text-sm">Atur cara pembayaran</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Preferences */}
        <div className="mb-4">
          <h2 className="text-gray-700 px-2 mb-3">Preferensi</h2>
          <Card>
            <CardContent className="p-0">
              <div className="p-4 flex items-center justify-between border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Bell className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900">Notifikasi</p>
                    <p className="text-gray-500 text-sm">Terima pemberitahuan pesanan</p>
                  </div>
                </div>
                <Switch
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>

              <div className="p-4 flex items-center justify-between border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Moon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-900">Mode Gelap</p>
                    <p className="text-gray-500 text-sm">Aktifkan tema gelap</p>
                  </div>
                </div>
                <Switch
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </div>

              <button className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Languages className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-gray-900">Bahasa</p>
                  <p className="text-gray-500 text-sm">Indonesia</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Support */}
        <div className="mb-4">
          <h2 className="text-gray-700 px-2 mb-3">Bantuan & Dukungan</h2>
          <Card>
            <CardContent className="p-0">
              <button className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors border-b">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-gray-900">Pusat Bantuan</p>
                  <p className="text-gray-500 text-sm">FAQ dan panduan</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors border-b">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-gray-900">Syarat & Ketentuan</p>
                  <p className="text-gray-500 text-sm">Kebijakan layanan</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-gray-900">Kebijakan Privasi</p>
                  <p className="text-gray-500 text-sm">Perlindungan data</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Logout */}
        <Card>
          <CardContent className="p-0">
            <button 
              onClick={handleLogout}
              className="w-full p-4 flex items-center gap-3 hover:bg-red-50 transition-colors text-red-600"
            >
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <LogOut className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1 text-left">
                <p>Keluar</p>
                <p className="text-red-500 text-sm">Keluar dari akun Anda</p>
              </div>
            </button>
          </CardContent>
        </Card>

        {/* App Version */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          <p>LaundryKu App v1.0.0</p>
          <p className="text-xs mt-1">© 2025 LaundryKu. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
