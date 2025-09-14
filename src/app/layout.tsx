import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "StarWars",
  description: "Explore characters from the Star Wars universe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
