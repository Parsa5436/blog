import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Navbar from "@/components/Navbar";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Blog - Share Your Stories",
  description: "A modern blogging platform where you can read and share amazing articles and insights",
  keywords: ["blog", "articles", "writing", "stories", "community"],
  authors: [{ name: "Your Name" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3b82f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${vazirmatn.className} font-sans bg-gray-50 min-h-screen antialiased`}>
        <ErrorBoundary>
          <Navbar />
          <main className="relative">
            {children}
          </main>
          <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-gray-400">
                © 2025 Parsa Amirabadizadeh. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </footer>
        </ErrorBoundary>
      </body>
    </html>
  );
}
