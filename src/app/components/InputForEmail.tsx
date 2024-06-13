"use client";
import { useBadgeInfo } from "@/context";
import { FC } from "react";

const InputForEmail: FC = () => {
  const { userInfo, handleSetUserInfo } = useBadgeInfo();

  return (
    <input
      id="email"
      className="border-none bg-transparent color-white outline-none" 
      type="email"
      value={userInfo?.email}
      maxLength={50}
      onChange={({ target }) => handleSetUserInfo({ email: target.value })}
      placeholder="Enter your email address"
      x-moz-errormessage="Por favor, especifique um endereço de e-mail."
    />
  );
};

export default InputForEmail;
