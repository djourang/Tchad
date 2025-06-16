// components/Header.tsx
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 min-h-[100px] flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/icones/logo_header_nom_drapeau1e3a8a_tchad.svg"
              alt="Logo Tchad"
              width={140}
              height={60}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <nav className="flex flex-col gap-1 text-sm items-end">
          <Link href="/en" className="link-white">
            English
          </Link>
          <Link href="/nous-joindre" className="link-white">
            Nous joindre
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
