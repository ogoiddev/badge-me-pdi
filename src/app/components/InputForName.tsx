"use client";
import { useBadgeInfo } from "@/context";
import { FC } from "react";

const InputForName: FC = () => {
  const { userInfo, handleSetUserInfo } = useBadgeInfo();

  return (
    <input
      id="name"
      className="border-none bg-transparent color- outline-none"
      type="text"
      value={userInfo?.name}
      maxLength={30}
      onChange={({ target }) => handleSetUserInfo({ name: target.value })}
      placeholder="Enter your name"
    />
  );
};

export default InputForName;
