import type { Metadata } from "next";
import { Urbanist, Merriweather } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const merriweather = Merriweather({
  weight: ["700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "About Me | Lee Mander",
  description: "All about junior web developer Lee Mander",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <div className="grid grid-rows-layout min-h-screen bg-orange-200 text-red-900">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
