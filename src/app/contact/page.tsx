"use client";

import { Mail, Phone, Clock } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="bg-[#001f3f] min-h-screen relative">

      {/* ================= Navbar ================= */}
      <Navbar />

      
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-shadow-white max-w-2xl mx-auto">
          We’re here to assist you with any questions about our loan packages and services.
        </p>
      </section>

      {/* ================= Contact Info Cards ================= */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <Mail className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600">Contact@arabfinanceloan.com</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <Phone className="w-10 h-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call / WhatsApp</h3>
            <p className="text-gray-600">+966-xxx-xxx-xxxx</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-1 text-center">
            <Clock className="w-10 h-10 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Office Hours</h3>
            <p className="text-gray-600">
              Sunday – Thursday <br /> 9:00 AM – 6:00 PM
            </p>
          </div>

        </div>
      </section>

      {/* ================= Contact Form ================= */}
      <section className="container mx-auto  px-4 pb-24">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur rounded-xl p-10">

          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Send Us a Message
          </h2>

          <form className="grid  gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-lg bg-white text-gray-900   px-4 py-3 border focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="rounded-lg bg-white text-gray-900  px-4 py-3 border focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="rounded-lg bg-white text-gray-900  px-4 py-3 border focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="rounded-lg bg-white text-gray-900 px-4 py-3 border resize-none focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              className="bg-blue-600  hover:bg-blue-700 font-semibold py-3 rounded-lg transition"
            >
              Submit Message
            </button>
          </form>
        </div>
      </section>

      {/* ================= Footer (Same as About Page) ================= */}
      <footer className="bg-[#001D35] py-16 px-8 text-white flex flex-col md:flex-row justify-between gap-8">

        <div className="flex flex-col gap-4 max-w-sm">
          <Image
            src="/logos.jpg"
            alt="Arab Finance Logo"
            width={140}
            height={60}
            className="object-contain"
          />

          <p className="text-sm leading-relaxed">
            Canada work visa, you first need a job offer from a Canadian employer who has likely obtained a positive Labour Market Impact Assessment (LMIA), and then{" "}
            <span className="bg-yellow-400/20 text-yellow-300 font-semibold px-1 rounded">
               you can apply online through the official Immigration, Refugees and Citizenship Canada (IRCC) website
            </span>
           . The process involves identifying the correct visa type, completing the online application, paying fees, and submitting the application to IRCC for processing. You may also be required to provide and visit a Visa Application Centre (VAC).
          </p>
        </div>

        <div>
          <h3 className="font-bold text-3xl mb-2">Useful Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>• Visa Application Form</li>
            <li>• Eligibility Criteria</li>
            <li>• Application Tracking</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-3xl mb-2">Help & Support</h3>
          <p>• Phone: +1 234 567 890</p>
          <p>• Email: support@arabfinance.com</p>
        </div>
      </footer>

      {/* ================= WhatsApp Button ================= */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-7 h-7 text-white">
          <path fill="currentColor" d="M188.1 318.6C188.1 343.5 195.1 367.8 208.3 388.7L211.4 393.7L198.1 442.3L248 429.2L252.8 432.1C273 444.1 296.2 450.5 319.9 450.5L320 450.5C392.6 450.5 453.3 391.4 453.3 318.7C453.3 283.5 438.1 250.4 413.2 225.5C388.2 200.5 355.2 186.8 320 186.8C247.3 186.8 188.2 245.9 188.1 318.6zM370.8 394C358.2 395.9 348.4 394.9 323.3 384.1C286.5 368.2 261.5 332.6 256.4 325.4C256 324.8 255.7 324.5 255.6 324.3C253.6 321.7 239.4 302.8 239.4 283.3C239.4 264.9 248.4 255.4 252.6 251C252.9 250.7 253.1 250.5 253.3 250.2C256.9 246.2 261.2 245.2 263.9 245.2C266.5 245.2 269.2 245.2 271.5 245.3L272.3 245.3C274.6 245.3 277.5 245.3 280.4 252.1C281.6 255 283.4 259.4 285.3 263.9C288.6 271.9 292 280.2 292.6 281.5C293.6 283.5 294.3 285.8 292.9 288.4C289.5 295.2 286 298.8 283.6 301.4C280.5 304.6 279.1 306.1 281.3 310C296.6 336.3 311.9 345.4 335.2 357.1C339.2 359.1 341.5 358.8 343.8 356.1C346.1 353.5 353.7 344.5 356.3 340.6C358.9 336.6 361.6 337.3 365.2 338.6C368.8 339.9 388.3 349.5 392.3 351.5C393.1 351.9 393.8 352.2 394.4 352.5C397.2 353.9 399.1 354.8 399.9 356.1C400.8 358 400.8 366 397.5 375.2C394.2 384.5 378.4 392.9 370.8 394zM544 160C544 124.7 515.3 96 480 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160zM244.1 457.9L160 480L182.5 397.8C168.6 373.8 161.3 346.5 161.3 318.5C161.4 231.1 232.5 160 319.9 160C362.3 160 402.1 176.5 432.1 206.5C462 236.5 480 276.3 480 318.7C480 406.1 407.3 477.2 319.9 477.2C293.3 477.2 267.2 470.5 244.1 457.9z" />
        </svg>
      </a>

    </main>
  );
}