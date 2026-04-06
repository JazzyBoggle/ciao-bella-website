import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Nunito, Urbanist } from "next/font/google";
import { Agentation } from "agentation";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ciao Bella — A beautiful home phone made just for kids",
  description:
    "Ciao Bella connects kids to the people who love them — and nobody else gets in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable} ${nunito.variable} ${urbanist.variable} antialiased`}>
        <PageTransition>
          {children}
        </PageTransition>
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
