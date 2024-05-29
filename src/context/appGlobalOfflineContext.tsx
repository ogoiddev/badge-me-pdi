"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useMemo,
} from "react";

export interface IUserInfo {
  name: string;
  email: string;
  photo?: string;
}

interface IAppContext {
  layout: string;
  setLayout: (layout: string) => void;
  userInfo: IUserInfo;
  handleSetUserInfo: (info: Partial<IUserInfo>) => void;
  fileAvatar: File | null;
  setFileAvatar: (file: File | null) => void;
  previewAvatar: string | null;
  setPreviewAvatar: (preview: string | null) => void;
}

const AppGlobalOfflineContext = createContext<IAppContext | undefined>(
  undefined
);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [layout, setLayout] = useState<string>("barcode-layout");
  const [userInfo, setUserInfo] = useState<IUserInfo>({ name: "", email: "" });

  const [fileAvatar, setFileAvatar] = useState<File | null>(null);
  const [previewAvatar, setPreviewAvatar] = useState<string | null>(null);

  const handleSetUserInfo = useMemo(
    () => (info: Partial<IUserInfo>) =>
      setUserInfo((prev) => ({ ...prev, ...info })),
    [setUserInfo]
  );

  return (
    <AppGlobalOfflineContext.Provider
      value={{
        layout,
        setLayout,
        userInfo,
        handleSetUserInfo,
        fileAvatar,
        setFileAvatar,
        previewAvatar,
        setPreviewAvatar,
      }}
    >
      {children}
    </AppGlobalOfflineContext.Provider>
  );
};

export const useAppGlobalOfflineHook = () => {
  const context = useContext(AppGlobalOfflineContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
