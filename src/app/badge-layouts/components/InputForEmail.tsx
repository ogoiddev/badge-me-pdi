import { useAppGlobalOfflineHook } from "@/context/appGlobalOfflineContext";
import { FC } from "react";

const InputForEmail: FC = () => {
  const { userInfo, setUserInfo } = useAppGlobalOfflineHook();

  return (
    <input
      className="border-none bg-transparent color-white outline-none"
      type="email"
      value={userInfo?.email}
      maxLength={50}
      onChange={({ target }) =>
        setUserInfo({ ...userInfo, email: target.value })
      }
      placeholder="Enter your email address"
    />
  );
};

export default InputForEmail;
