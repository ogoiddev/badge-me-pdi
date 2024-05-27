import { FC } from "react";
import Link from 'next/link';

interface HeaderDefaultHomeProps {
  style?: any;
}

const HeaderDefaultHome: FC<HeaderDefaultHomeProps> = () => {
  return (
    <header className="flex items-center justify-between p-0 gap-4">
      <div className="flex w-[30%] items-center justify-center px-4">
        <p className="m-0 h-fit">LOGO</p>
      </div>
      <nav className="flex w-[60%] justify-between gap-6 py-4 px-8">
        <h1>{"Escolha o Layout =>"}</h1>
        <ul className="flex justify-evenly gap-4">
          <li>
            <Link href="/badge-layouts/pages/barcode-layout">BarCode Layout</Link>
          </li>
          <li>
            <Link href="/badge-layouts/pages/qr-code-layout">QR Code Layout</Link>
          </li>
          <li>
            <Link href="/badge-layouts/pages/qr-barcode-layout">QR BarCode Layout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDefaultHome;
