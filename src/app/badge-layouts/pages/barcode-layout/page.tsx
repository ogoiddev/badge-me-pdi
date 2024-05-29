"use client";
import { useAppGlobalOfflineHook } from "@/context";
import Image from "next/image";
import { FC, useCallback, useState } from "react";
import InputForEmail from "../../components/InputForEmail";
import InputForName from "../../components/InputForName";
import { useDropzone } from "react-dropzone";

const avatarGirl = "/images/avatar-girl.jpg";
const logoCracha = "/images/logo-cracha.png";
const barcode = "/images/barcode.png";

const BarcodeLayout: FC = () => {
  const { userInfo } = useAppGlobalOfflineHook();
  const [fileAvatar, setFileAvatar] = useState<File | null>(null);
  const [previewAvatar, setPreviewAvatar] = useState<string | null>(null);
  console.log("🚀 ~ previewAvatar:", previewAvatar)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log("🚀 ~ onDrop ~ acceptedFiles:", acceptedFiles)
    setFileAvatar(acceptedFiles[0]);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewAvatar(reader.result as string);
    };

    reader.readAsDataURL(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col flex-1 items-center">
      <h2 className="w-full text-center m-10 text-xl">
        Modelo com Código de Barras
      </h2>
      <section className="flex flex-col items-center p-6 rounded-3xl w-[40vw] min-w-[320px] max-w-[464px] min-h-[424px] h-[65vh] shadow-custom bg-gray-900">
        <div className="group flex w-fit h-fit relative">

        <div {...getRootProps()} className="flex items-end p-0 text-center w-full h-full absolute bottom-0 left-0 transition-all">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Solte aqui...</p>
            ) : (
              <p
              className={`group px-6 py-2 rounded-full w-full group-hover:text-black group-hover:bg-white/80 ${previewAvatar ? "text-transparent bg-transparent" : "text-black bg-slate-300/50"}`}
              >{previewAvatar ? "editar..." : "Arraste sua Foto ou Clique aqui!"}</p>
              )}
        </div>
        <Image
          src={previewAvatar || avatarGirl}
          alt="Avatar"
          width={200}
          height={200}
          className="h-full w-full max-h-40 max-w-fit m-8 rounded-xl"
          />
          </div>
        <aside className="flex flex-col p-2 w-full">
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

export default BarcodeLayout;
