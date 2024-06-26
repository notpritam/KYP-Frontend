import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Inter as FontSans } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen min-w-screen max-w-screen bg-background font-sans antialiased overflow-hidden overflow-y-auto",
          fontSans.variable
        )}
      >
        <Header />
        <div className="flex flex-col mt-[4rem] py-8 px-[5rem]">{children}</div>
      </body>
    </html>
  );
}
