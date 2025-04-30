import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface UserContextProps {
  username: string;
  setUsername: (username: string) => void;
  isLoggedIn: boolean;
  logout: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    if (username) {
      localStorage.setItem('username', username);
    }
  }, [username]);

  const logout = () => {
    setUsername('');
    localStorage.removeItem('username');
  };

  const value = {
    username,
    setUsername,
    isLoggedIn: !!username,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};