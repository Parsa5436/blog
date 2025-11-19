import { NavbarItem } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const navbarItems: NavbarItem[] = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blogs" },
  { label: "Create Blog", href: "/create-blog" },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Blog
            </h1>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex space-x-1">
            {navbarItems.map((item: NavbarItem) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  "text-gray-700 hover:text-blue-600 hover:bg-blue-50",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
