"use client";
import { useBadgeInfo } from "@/context";
import Image from "next/image";
import { FC } from "react";
import InputForName from "../../components/InputForName";
import InputForEmail from "../../components/InputForEmail";
import Avatar from "../../components/Avatar";

const avatarMan = "/images/avatar-man.jpg";
const logoCracha = "/images/logo-cracha.png";
const barcode = "/images/barcode.png";

const QrBarcodeLayout: FC = () => {
  const { userInfo } = useBadgeInfo();

  return (
    <div className="flex flex-col flex-1 items-center transition-all">
      <h2 className="w-full text-center m-10 text-xl">
        Modelo com QR Code e Código de Barras
      </h2>
      <section className="flex flex-col gap-8 items-center py-6 px-8 rounded-3xl w-[40vw] min-w-[320px] max-w-[488px] min-h-[424px] h-fit shadow-custom bg-gray-900">
        <Image
          src={logoCracha}
          alt="Avatar"
          width={200}
          height={200}
          className="h-full w-full max-h-40 max-w-fit m-0 rounded-xl"
        />

        <Avatar avatar={avatarMan} />

        <aside className="flex flex-col w-full text-xl gap-4">
          <span className="flex gap-3 h-fit w-full">
            Name:
            <InputForName />
          </span>
          <span className="flex gap-3 h-fit w-full">
            Email:
            <InputForEmail />
          </span>
        </aside>

        <Image
          src={barcode}
          alt="barcode"
          width={200}
          height={200}
          className="h-full w-full max-h-40 max-w-fit"
        />
      </section>
    </div>
  );
};

export default QrBarcodeLayout;
