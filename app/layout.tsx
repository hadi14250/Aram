import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

// 👉 Replace the values below with your own title and image path
export const metadata: Metadata = {
  title: "Aram Group", // e.g., "My Awesome Website"
  description: "Aram Group of companies",
  icons: {
    icon: "/images/aram_transparent.png", // e.g., "/favicon.ico" or "/logo.png"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
