"use client";
import { FC } from "react";
import Image from "next/image";
import { useBadgeInfo } from "@/context";
import InputForName from "../../components/InputForName";
import InputForEmail from "../../components/InputForEmail";
import Avatar from "../../components/Avatar";

const avatarGuy = "/images/avatar-guy.png";
const logoCracha = "/images/logo-cracha.png";
const barcode = "/images/barcode.png";

const QrCodeLayout: FC = () => {
  const { userInfo } = useBadgeInfo();

  return (
    <div className="flex items-center justify-center w-full">
      <section className="flex flex-col gap-8 items-center py-6 px-8 rounded-3xl w-[40vw] min-w-[320px] max-w-[488px] min-h-[424px] h-fit shadow-custom bg-gray-900">
        <Image
          src={logoCracha}
          alt="Avatar"
          width={200}
          height={200}
          className="h-full w-full max-h-40 max-w-fit m-0 rounded-xl"
        />

        <Avatar avatar={avatarGuy} />

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

export default QrCodeLayout;
