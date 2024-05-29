import { FC } from "react";
import Link from "next/link";

interface HeaderDefaultHomeProps {
  style?: any;
}

const HeaderDefaultHome: FC<HeaderDefaultHomeProps> = () => {
  return (
    <header className="flex w-[100%] justify-between p-0">
      <div className="flex min-w-[15%] items-center justify-center px-4">
        <p className="m-0 h-fit">LOGO</p>
      </div>
      <nav className="flex max-w-[100%] justify-between gap-4 py-4 px-4 text-nowrap [font-size:_clamp(14px,2vw,18px)]">
        <h1>{"Escolha o Layout =>"}</h1>
        <div className="flex justify-evenly gap-4">
          <Link href="/pages/barcode-layout">BarCode Layout</Link>

          <Link href="/pages/qr-code-layout">QR Code Layout</Link>

          <Link href="/pages/qr-barcode-layout">QR BarCode Layout</Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderDefaultHome;
