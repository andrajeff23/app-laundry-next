import { useState } from 'react';
import { HomePage } from './HomePage';
import { TransactionPage } from './TransactionPage';
import { HistoryPage } from './HistoryPage';
import { SettingPage } from './SettingPage';
import { Home, FileText, History, Settings } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

export function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'transaction' | 'history' | 'setting'>('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'transaction':
        return <TransactionPage />;
      case 'history':
        return <HistoryPage />;
      case 'setting':
        return <SettingPage onLogout={onLogout} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Content */}
      <div className="h-[calc(100vh-80px)] overflow-y-auto">
        {renderPage()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <nav className="max-w-md mx-auto px-4 py-2">
          <div className="flex justify-around items-center">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'home'
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs">Home</span>
            </button>
            
            <button
              onClick={() => setActiveTab('transaction')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'transaction'
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-6 h-6" />
              <span className="text-xs">Transaction</span>
            </button>
            
            <button
              onClick={() => setActiveTab('history')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'history'
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <History className="w-6 h-6" />
              <span className="text-xs">History</span>
            </button>
            
            <button
              onClick={() => setActiveTab('setting')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'setting'
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Settings className="w-6 h-6" />
              <span className="text-xs">Setting</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
