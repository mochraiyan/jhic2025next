import type { Metadata } from "next";
import { Poppins, Brygada_1918 } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const poppinsFont = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["200", "300", "500", "700"],
});

const brygada_1918Font = Brygada_1918({
  variable: "--font-brygada-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} ${brygada_1918Font.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
