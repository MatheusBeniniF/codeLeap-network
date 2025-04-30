import React from 'react';
import { LogOut } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Header: React.FC = () => {
  const { username, logout } = useUser();

  return (
    <header className="bg-[#7695EC] text-white">
      <div className="max-w-[800px] mx-auto px-6 py-7 flex justify-between items-center">
        <h1 className="text-[22px] font-bold leading-[26px]">CodeLeap Network</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm">@{username}</span>
          <button
            onClick={logout}
            className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            aria-label="Sign out"
          >
            <LogOut size={20} />
            <span className="text-sm">Sign out</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;