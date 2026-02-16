import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  title: "U-Move Australia | Shipping Container Solutions Perth WA",
  description: "25+ years of shipping container sales, hire, storage, and custom modifications. Perth's trusted container experts. Call (08) 9459 8888.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
