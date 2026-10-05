import { Inter } from "next/font/google";
import "./globals.css";
import Spotlight from "@/components/Spotlight";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: "Saurabh Kumar Sahu | Full Stack Developer",
  description:
    "Portfolio of Saurabh Kumar Sahu - Full Stack Developer, MERN Stack Developer, Python & C++ Programmer.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="relative overflow-x-hidden bg-[#0d1117] text-white selection:bg-sky-500/25 selection:text-sky-200">
        <Spotlight />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
