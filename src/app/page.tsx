'use client';
import dynamic from "next/dynamic";
import { useAppContext } from "@/context";

const HomePage = () => {
  const context = useAppContext();

  console.log("🚀 ~ Context:", context);

  const LayoutComponent = dynamic(() => import(`./badge-layouts/pages/${context.layout}/page`));

  return <LayoutComponent />;
};

export default HomePage;
