import type { Metadata } from "next";
import { Marcellus, Open_Sans, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sri Ambal Promoters | Homes with a sense of place",
  description: "Thoughtful homes and land communities across Chennai's growing corridors.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${marcellus.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
