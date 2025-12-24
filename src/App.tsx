import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { Dashboard } from './components/Dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'login' | 'register' | 'dashboard'>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  const handleNavigateToRegister = () => {
    setCurrentPage('register');
  };

  const handleNavigateToLogin = () => {
    setCurrentPage('login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'login' && (
        <LoginPage 
          onLogin={handleLogin} 
          onNavigateToRegister={handleNavigateToRegister}
        />
      )}
      {currentPage === 'register' && (
        <RegisterPage 
          onRegister={handleLogin}
          onNavigateToLogin={handleNavigateToLogin}
        />
      )}
      {currentPage === 'dashboard' && isAuthenticated && (
        <Dashboard onLogout={handleLogout} />
      )}
    </div>
  );
}
