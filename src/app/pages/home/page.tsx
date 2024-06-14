"use client";
import { useBadgeInfo } from "@/context";
import { redirect, useRouter } from "next/navigation";
import { FC } from "react";
import { PickerExample } from "../GradientPicker/page";

const HomePage: FC = () => {
  const { layout } = useBadgeInfo();

  // const route = `/pages/${layout}`;
  // redirect(route);

  return (
    <div className="flex w-full h-full min-h-full">
      <PickerExample />
    </div>
  );
};

export default HomePage;
