"use client";
import { useAppContext } from "@/context";
import { FC } from "react";
import InputForName from "../../components/InputForEmail";
import InputForEmail from "../../components/InputForName";

const QrBarcodeLayout: FC = () => {
  const { userInfo } = useAppContext();

  return (
    <div>
      <h2>QR + Barcode Layout</h2>
      <span>
        Name: <InputForName />
      </span>
      <span>
        Email: <InputForEmail />
      </span>
    </div>
  );
};

export default QrBarcodeLayout;
