import { useAppContext } from "@/context";
import { FC } from "react";

const InputForName: FC = () => {
  const { userInfo, setUserInfo } = useAppContext();

  return (
    <input
      className="border-none bg-transparent color- outline-none"
      type="text"
      value={userInfo?.name}
      maxLength={30}
      onChange={({ target }) =>
        setUserInfo({ ...userInfo, name: target.value })
      }
      placeholder="Enter your name"
    />
  );
};

export default InputForName;
