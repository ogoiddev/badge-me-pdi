'use client'
import { useAppGlobalOfflineHook } from "@/context";
import { redirect, useRouter } from "next/navigation";
import { FC } from "react";


const HomePage: FC = () => {
  const { layout } = useAppGlobalOfflineHook();

  const route = `/pages/${layout}`;
  redirect(route);

  return (
    <div>
      oi
    </div>
  );
};

export default HomePage;