'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface IUserInfo {
  name: string;
  email: string;
  photo?: string;
}

interface IAppContext {
  layout: string;
  setLayout: (layout: string) => void;
  userInfo: IUserInfo;
  setUserInfo: (info: IUserInfo) => void;
}

const AppGlobalOfflineContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [layout, setLayout] = useState<string>('barcode-layout');
  const [userInfo, setUserInfo] = useState<IUserInfo>({ name: '', email: '' });
  
  return (
    <AppGlobalOfflineContext.Provider value={{ layout, setLayout, userInfo, setUserInfo }}>
      {children}
    </AppGlobalOfflineContext.Provider>
  );
};

export const useAppGlobalOfflineHook = () => {
  const context = useContext(AppGlobalOfflineContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};