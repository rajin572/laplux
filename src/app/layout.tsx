import type { Metadata } from "next";
import { Oxygen as FontSans } from "next/font/google";
import "./globals.css";
import "@smastrom/react-rating/style.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Laplux",
  description: "Awesome Laptop Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
