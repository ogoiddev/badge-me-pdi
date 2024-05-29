'use client';
import { useAppGlobalOfflineHook } from "@/context";
import Image from "next/image";
import { FC } from "react";
import InputForName from "../../components/InputForEmail";
import InputForEmail from "../../components/InputForName";

const avatarMan = "/images/avatar-man.jpg";
const logoCracha = "/images/logo-cracha.png";
const barcode = "/images/barcode.png";

const QrBarcodeLayout: FC = () => {
  const { userInfo } = useAppGlobalOfflineHook();

  return (
    <div className="flex flex-col flex-1 items-center">
      <h2 className="w-full text-center m-10 text-xl">Modelo com QR Code e Código de Barras</h2>
      <section className="flex flex-col items-center w-[40vw] min-w-[364px] max-w-[516px] min-h-[424px] h-[65vh] shadow-custom bg-gray-900">
        <Image
          src={logoCracha}
          alt="Avatar"
          width={200}
          height={200}
          className="h-full w-full max-h-40 max-w-fit m-8"
        />
        <Image
          src={avatarMan}
          alt="Avatar"
          width={200}
          height={200}
          className="h-fit w-fit max-h-40 border-solid border-2"
        />
        <aside className="flex flex-col p-8 w-full">
          <span className="flex gap-3 h-fit w-full p-2">
            Name:
            <InputForName />
          </span>
          <span className="flex gap-3 h-fit w-full p-2">
            Email:
            <InputForEmail />
          </span>
        </aside>

        <Image
          src={barcode}
          alt="barcode"
          width={200}
          height={200}
          className="h-full w-full max-h-40 max-w-fit m-8"
        />
      </section>
    </div>
  );
};

export default QrBarcodeLayout;
