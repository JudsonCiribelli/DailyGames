import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import HeaderComponent from "./_components/Header-Component/headerComponent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "800"],
});
export const metadata: Metadata = {
  title: "Daily Games",
  description: "Generated by create next app",
  keywords: ["games", "jogos", "steam", "ps5", "xbox"],
  openGraph: {
    images: [`${process.env.PROJECT_URL}`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
