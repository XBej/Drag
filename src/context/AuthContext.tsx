import React, { createContext, useState, useContext, useEffect } from 'react';

interface AuthContextType {
  token: string | null;
  apiKey: string | null;
  login: (token: string, apiKey: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [apiKey, setApiKey] = useState<string | null>(localStorage.getItem('apiKey'));

  const login = (newToken: string, newApiKey: string) => {
    setToken(newToken);
    setApiKey(newApiKey);
    localStorage.setItem('token', newToken);
    localStorage.setItem('apiKey', newApiKey);
  };

  const logout = () => {
    setToken(null);
    setApiKey(null);
    localStorage.removeItem('token');
    localStorage.removeItem('apiKey');
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedApiKey = localStorage.getItem('apiKey');
    if (storedToken && storedApiKey) {
      setToken(storedToken);
      setApiKey(storedApiKey);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, apiKey, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

