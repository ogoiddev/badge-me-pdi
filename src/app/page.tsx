
'use client';
import { useAppGlobalOfflineHook } from "@/context";
import dynamic from "next/dynamic";

const HomePage = () => {
  const context = useAppGlobalOfflineHook();

  console.log("🚀 ~ Context:", context);

  const LayoutComponent = dynamic(() => import(`./badge-layouts/pages/${context.layout}/page`));

  return <LayoutComponent />;
};

export default HomePage;
