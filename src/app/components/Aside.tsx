"use client";

import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { motion, AnimatePresence } from "framer-motion";
import { X as CloseIcon, ChevronDown } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { id: "01", title: "Lorem", href: "#" },
  {
    id: "02",
    title: "Lorem",
    href: "#",
    submenus: [
      { id: "02a", title: "Lorem", href: "#" },
      { id: "02b", title: "Lorem", href: "#" },
      { id: "02c", title: "Lorem", href: "#" },
    ],
  },
  {
    id: "03",
    title: "Lorem",
    href: "#",
    submenus: [
      { id: "03a", title: "Lorem", href: "#" },
      { id: "03b", title: "Lorem", href: "#" },
    ],
  },
  {
    id: "04",
    title: "Contact",
    href: "#",
    submenus: [
      { id: "04a", title: "Lorem", href: "#" },
      { id: "04b", title: "Lorem", href: "#" },
    ],
  },
];

const overlayVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const navLinkVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.3,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const submenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function Aside({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (id: string) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          className="fixed inset-0 z-999 bg-black/80 backdrop-blur-lg"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white transition-colors duration-300"
            aria-label="Close menu"
          >
            <CloseIcon size={32} />
          </button>
          <div className="flex flex-col h-full p-20 items-start justify-start">
            <nav className="mb-20 pt-20">
              <motion.ul className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={navLinkVariants}
                  >
                    <div className="flex items-center gap-5">
                      <span
                        style={{ fontFamily: "var(--font-brygada-mono)" }}
                        className="text-zinc-500 text-3xl"
                      >
                        {link.id}
                      </span>
                      <a
                        href={link.href}
                        onClick={() => {
                          if (!link.submenus) {
                            setIsOpen(false);
                          }
                        }}
                        className="text-4xl font-sans text-zinc-300 hover:text-white transition-colors duration-300"
                      >
                        {link.title}
                      </a>
                      {link.submenus && (
                        <motion.button
                          onClick={() => toggleSubmenu(link.id)}
                          animate={{
                            rotate: openSubmenu === link.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="text-zinc-400 hover:text-white transition-colors duration-300"
                        >
                          <ChevronDown size={28} />
                        </motion.button>
                      )}
                    </div>
                    <AnimatePresence>
                      {link.submenus && openSubmenu === link.id && (
                        <motion.ul
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={submenuVariants}
                          className="flex flex-col gap-4 mt-4 pl-12"
                        >
                          {link.submenus.map((submenu) => (
                            <motion.li key={submenu.id}>
                              <a
                                href={submenu.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-sans text-zinc-400 hover:text-white transition-colors duration-300"
                              >
                                {submenu.title}
                              </a>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.8, duration: 0.5 },
              }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className="w-full mt-auto flex flex-col items-start gap-8"
            >
              <hr className="w-full border-t border-zinc-600" />
              <div className="flex w-full items-center justify-between">
                <img
                  src="/logo.webp"
                  width={90}
                  height={90}
                  alt="SMKN2 Singosari Logo"
                  className="opacity-70"
                />
                <div className="text-zinc-700 flex gap-5">
                  <a href="#" aria-label="Facebook">
                    <SiFacebook size={22} />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <SiInstagram size={22} />
                  </a>
                  <a href="#" aria-label="YouTube">
                    <SiYoutube size={22} />
                  </a>
                  <a href="#" aria-label="X">
                    <SiX size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
