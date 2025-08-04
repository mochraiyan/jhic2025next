"use client";

import Image from "next/image";
import { useState } from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";

export default function RootPage() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <>
      <Header isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />

      <main className="w-screen h-screen">
        <div className="border-b- mt-50 flex justify-evenly items-center">
          <div className="text-end flex flex-col gap-2.5">
            <h1
              style={{ fontFamily: "var(--font-brygada-mono)" }}
              className="text-5xl"
            >
              Hello World
            </h1>
            <h2
              style={{ fontFamily: "var(--font-brygada-mono)" }}
              className="text-2xl"
            >
              Hello World
            </h2>
            <h3
              style={{ fontFamily: "var(--font-brygada-mono)" }}
              className="text-1xl"
            >
              Hello World
            </h3>
          </div>

          <Image
            src="/logo.webp"
            alt="SMKN 2 Singosari Logo"
            width={300}
            height={300}
          />
        </div>
      </main>

      <Aside isOpen={isAsideOpen} setIsOpen={setIsAsideOpen} />
    </>
  );
}
