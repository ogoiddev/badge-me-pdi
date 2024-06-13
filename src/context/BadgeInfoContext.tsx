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

interface IBadgeInfoContext {
  layout: string;
  setLayout: (layout: string) => void;
  userInfo: IUserInfo;
  handleSetUserInfo: (info: Partial<IUserInfo>) => void;
  fileAvatar: File | null;
  setFileAvatar: (file: File | null) => void;
  previewAvatar: string | null;
  setPreviewAvatar: (preview: string | null) => void;
}

const BadgeInfoContext = createContext<IBadgeInfoContext | undefined>(
  undefined
);

export const BadgeInfoProvider = ({ children }: { children: ReactNode }) => {
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
    <BadgeInfoContext.Provider
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
    </BadgeInfoContext.Provider>
  );
};

export const useBadgeInfo = () => {
  const context = useContext(BadgeInfoContext);
  if (!context) {
    throw new Error("useAppContext must be used within an BadgeInfoProvider");
  }
  return context;
};
