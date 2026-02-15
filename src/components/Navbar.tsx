"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Youtube } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-red-600 text-white">
      <div className="mx-auto max-w-7xl px-0.5 py-5 md:py-6 flex items-center justify-between">

        {/* LEFT - Logo + Name */}
        <div className="flex items-center gap-4 flex-1">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logos.jpg"
              alt="Visa Zone Logo"
              width={350}
              height={100}
              priority
              className="object-contain w-36 md:w-40 h-auto cursor-pointer"
            />

            {/* Transparent Stylish Name Box */}
            <span className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 text-lg md:text-xl font-semibold tracking-wide hover:bg-white/20 transition duration-300">
              Sardar Jagmohan Singh
            </span>
          </Link>
        </div>

        {/* CENTER - Navigation Links */}
        <ul className="hidden md:flex gap-10 font-semibold text-lg flex-1 justify-center">
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

        {/* RIGHT - Social Icons */}
        <div className="flex gap-6 flex-1 justify-end">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 cursor-pointer hover:opacity-80 transition" strokeWidth={2.5} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 cursor-pointer hover:opacity-80 transition" strokeWidth={2.5} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-6 h-6 cursor-pointer hover:opacity-80 transition" strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </nav>
  );
}
