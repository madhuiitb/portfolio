import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Madhu | Frontend & Systems Engineer",
  description: "Portfolio featuring high-concurrency systems, UI components, and frontend architecture.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#090d16] text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white`}
      >
        {/* Subtle Ambient Background Gradient */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <NavBar />
        
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}