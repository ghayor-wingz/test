import type { Metadata } from "next";
import "./globals.css";
import Header from "../app/(ui)/components/Header";
import Footer from "../app/(ui)/components/Footer"

export const metadata: Metadata = {
  title: "551 GROWTH LAB",
  description:
    "We’re a growth lab that combines dazzling creative with rigorous analysis to make marketing you can be proud of that also performs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-haas antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
