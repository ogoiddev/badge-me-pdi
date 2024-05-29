"use client";
import { useAppGlobalOfflineHook } from "@/context";
import Image from "next/image";
import { FC, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import InputForName from "../../components/InputForName";
import InputForEmail from "../../components/InputForEmail";
import Avatar from "../../components/Avatar";

const avatarGirl = "/images/avatar-girl.jpg";
const logoCracha = "/images/logo-cracha.png";
const barcode = "/images/barcode.png";

const BarcodeLayout: FC = () => {
  const { userInfo, handleSetUserInfo } = useAppGlobalOfflineHook();

  return (
    <div className="flex flex-col flex-1 items-center transition-all">
      <h2 className="w-full text-center m-10 text-xl">
        Modelo com Código de Barras
      </h2>
      <section className="flex flex-col gap-8 items-center py-6 px-8 rounded-3xl w-[40vw] min-w-[320px] max-w-[488px] min-h-[424px] h-fit shadow-custom bg-custom">
        <Image
          src={logoCracha}
          alt="Avatar"
          width={200}
          height={200}
          className="h-full w-full max-h-40 max-w-fit m-0 rounded-xl"
        />

        <Avatar avatar={avatarGirl} />

        <aside className="flex flex-col w-full text-xl gap-4">
          <span className="flex gap-3 h-fit w-full">
            <p className="w-14 text-left">Name:</p>
            <InputForName />
          </span>
          <span className="flex gap-3 h-fit w-full">
            <p className="w-14 text-left">Email:</p>
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

export default BarcodeLayout;
