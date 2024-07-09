'use client';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });


// export const metadata: Metadata = {
//   title: "Ticket Online",
//   description: "Online ticket store!",
// };

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${inter.className}`}>
        <Header/>
          {children}
        <Footer />
      </body>
    </html>
  );
}
