import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutGrid, Gift, Settings, LogOut, ChevronRight, User } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const history = useHistory();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    history.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 border-r border-gray-800">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-800">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250105_173613-jTwGDdm4m9zYjtW6GkrAXjqlnvvF5C.png"
              alt="DragX Logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-red-500">DragX</span>
          </div>
          <nav className="p-4 space-y-2">
            <button
              onClick={() => history.push('/profile')}
              className="flex items-center w-full gap-3 px-4 py-2 text-sm text-gray-300 transition-colors rounded-lg hover:bg-gray-800 hover:text-red-500 group"
            >
              <LayoutGrid size={18} />
              <span>Dashboard</span>
              <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100" />
            </button>
            <button
              onClick={() => history.push('/redeem')}
              className="flex items-center w-full gap-3 px-4 py-2 text-sm text-gray-300 transition-colors rounded-lg hover:bg-gray-800 hover:text-red-500 group"
            >
              <Gift size={18} />
              <span>Redeem Code</span>
              <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100" />
            </button>
            <button
              onClick={() => history.push('/profile')}
              className="flex items-center w-full gap-3 px-4 py-2 text-sm text-gray-300 transition-colors rounded-lg hover:bg-gray-800 hover:text-red-500 group"
            >
              <Settings size={18} />
              <span>Settings</span>
              <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100" />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center w-full gap-3 px-4 py-2 text-sm text-gray-300 transition-colors rounded-lg hover:bg-gray-800 hover:text-red-500 group"
            >
              <LogOut size={18} />
              <span>Logout</span>
              <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100" />
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <header className="flex items-center justify-between px-8 py-4 bg-gray-900 border-b border-gray-800">
            <h1 className="text-xl font-semibold text-white">Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800">
                <User size={16} className="text-red-500" />
                <span className="text-sm text-gray-300">User Panel</span>
              </div>
            </div>
          </header>
          <main className="p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

