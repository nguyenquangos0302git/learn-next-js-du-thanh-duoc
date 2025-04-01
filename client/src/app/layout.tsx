import type { Metadata } from "next";
// import { Inter, Roboto } from "next/font/google";

import localFont from 'next/font/local'

import "./globals.css";

// const roboto = Roboto({
//   subsets: ['vietnamese'], weight: [
//     '100', '300'
//   ]
// })

// const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({
  src: [
    {
      path: './font/Roboto_Condensed-Bold.ttf'
    },
    {
      path: './font/Roboto_Condensed-Italic.ttf'
    }],
  display: 'swap',
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      {/* <body className={`${myFont.className}`}>{children}</body> */}
      <body className={`${myFont.variable}`}>{children}</body>
    </html>
  );
}
