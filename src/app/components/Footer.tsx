import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-3 flex flex-col gap-10 border-t-1 border-t-zinc-900">
      <div className="flex flex-row justify-evenly items-center">
        <div className="mt-4 flex flex-col justify-center items-center gap-5">
          <Image
            src="/logo.webp"
            width={140}
            height={140}
            alt="Logo SMKN2 Singosari"
          />
          <div className="text-blue-600 flex gap-4 justify-between bg-blue-600/10 p-2 pl-3 pr-3 rounded-full border-1 border-blue-500/32">
            <SiFacebook size={20} />
            <SiInstagram size={20} />
            <SiYoutube size={20} />
            <SiX size={20} />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col">
            <p className="font-semibold text-lg">Lorem</p>
            <div className="text-zinc-400 flex flex-col text-end text-md">
              <a href="#">Lorem</a>
              <a href="#">Lorem</a>
              <a href="#">Lorem</a>
              <a href="#">Lorem</a>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-lg">Lorem</p>
            <div className="text-zinc-400 flex flex-col text-end text-md">
              <a href="#">Lorem</a>
              <a href="#">Lorem</a>
              <a href="#">Lorem</a>
              <a href="#">Lorem</a>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-lg">Lorem</p>
            <div className="text-zinc-400 flex flex-col text-end text-md">
              <a href="#">Lorem</a>
              <a href="#">Lorem</a>
              <a href="#">Lorem</a>
              <a href="#">Lorem</a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-1 flex items-center justify-center mr-10 ml-10 border-t-1 border-t-zinc-900">
        <p className="mt-4 text-zinc-600">
          Copyright &copy; SMKN2 Singosari 2025
        </p>
      </div>
    </footer>
  );
}
