"use client";
import { useBadgeInfo } from "@/context";
import Image from "next/image";
import { FC, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface AvatarProps {
  avatar: string;
}

const Avatar: FC<AvatarProps> = ({ avatar }) => {
  const { setFileAvatar, previewAvatar, setPreviewAvatar } = useBadgeInfo();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      console.log("🚀 ~ onDrop ~ acceptedFiles:", acceptedFiles);
      setFileAvatar(acceptedFiles[0]);

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewAvatar(reader.result as string);
      };

      reader.readAsDataURL(acceptedFiles[0]);
    },
    [setFileAvatar, setPreviewAvatar]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="group flex w-fit h-fit relative transition-all">
      {getRootProps && (
        <div
          {...getRootProps()}
          className="flex items-end p-0 text-center w-full h-full absolute top-0 left-0"
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Solte aqui...</p>
          ) : (
            <p
              className={`group p-2 cursor-help text-sm rounded-full w-full group-hover:text-black group-hover:bg-white/80 ${
                previewAvatar
                  ? "text-transparent bg-transparent"
                  : "text-black bg-slate-300/50"
              } transition-all`}
            >
              {previewAvatar ? "editar..." : "Arraste sua Foto ou Clique aqui!"}
            </p>
          )}
        </div>
      )}
      <Image
        src={previewAvatar || avatar}
        alt="Avatar"
        width={200}
        height={200}
        className="h-fit w-fit max-h-40 rounded-lg"
        placeholder="blur"
        blurDataURL="data:image/png;base64,..."
        loading="eager"
      />
    </div>
  );
};

export default Avatar;
