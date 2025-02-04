import type { Metadata } from "next";
import "./globals.css";
import {Montserrat} from 'next/font/google';

export const metadata: Metadata = {
  title: "Next.js Essencial",
  description: "Generated by create next app",
};

const fonte = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={fonte.className}>
        {children}
      </body>
    </html>
  );
}
