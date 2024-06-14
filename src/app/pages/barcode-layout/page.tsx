"use client";
import Image from "next/image";
import { FC } from "react";
import Avatar from "../../components/Avatar";
import InputForEmail from "../../components/InputForEmail";
import InputForName from "../../components/InputForName";
import HeaderDefaultHome from "@/app/components/HeaderDefaultHome";

const avatarGirl = "/images/avatar-girl.jpg";
const logoCracha = "/images/logo-cracha.png";
const barcode = "/images/barcode.png";

const BarcodeLayout: FC = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <HeaderDefaultHome />
      <section className="flex flex-col gap-8 items-center py-6 px-8 rounded-3xl w-[40vw] min-w-[320px] max-w-[488px] min-h-[424px] h-fit shadow-custom bg-gray-900 dark:bg-gray-200">
        <Image
          src={logoCracha}
          alt="Avatar"
          width={200}
          height={200}
          className="h-full w-full max-h-40 max-w-fit m-0 rounded-xl"
          placeholder="blur"
          blurDataURL="data:image/png;base64,..."
          loading="eager"
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
