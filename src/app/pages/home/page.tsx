'use client'
import { useBadgeInfo } from "@/context";
import { redirect, useRouter } from "next/navigation";
import { FC } from "react";


const HomePage: FC = () => {
  const { layout } = useBadgeInfo();

  const route = `/pages/${layout}`;
  redirect(route);

  return (
    <div>
      oi
    </div>
  );
};

export default HomePage;