"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  isAsideOpen: boolean;
  setIsAsideOpen: (isOpen: boolean) => void;
}

export default function Header({ isAsideOpen, setIsAsideOpen }: HeaderProps) {
  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 m-4">
      <div className="bg-blue-700 mx-auto max-w-7xl pl-5 pr-10 rounded-full p-3 shadow-lg">
        <nav className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image src="/logo.webp" width={70} height={70} alt="SMKN2 Logo" />
            <div className="flex flex-col items-start justify-center text-white">
              <p className="text-2xl font-bold">STEMDASI</p>
              <p className="-mt-2 text-sm font-semibold">SMKN 2 SINGOSARI</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={toggleAside}
              className="text-white"
              aria-label="Toggle menu"
            >
              <Menu size={32} className="cursor-pointer" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
