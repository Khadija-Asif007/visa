"use client";

import Image from "next/image";
import Link from "next/link"; // <-- Next.js Link import
import { Facebook, Twitter, Youtube } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-red-600 text-white">
      <div className="mx-auto max-w-7xl px-4 py-5 md:py-6 flex items-center justify-between">

        {/* Logo Image */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logos.jpg"
              alt="Visa Zone Logo"
              width={350}
              height={100}
              priority
              className="object-contain w-40 md:w-50 h-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 font-semibold text-lg">
          <li>
            <Link href="/" className="hover:opacity-80 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:opacity-80 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:opacity-80 transition">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook
              className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
              strokeWidth={2.5}
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter
              className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
              strokeWidth={2.5}
            />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube
              className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
              strokeWidth={2.5}
            />
          </a>
        </div>

      </div>
    </nav>
  );
}
