"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

export default function ApplyPage() {

  const options = useMemo(() => countryList().getData(), []);
  const [country, setCountry] = useState<any>(null);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 px-4 py-16">
        <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-12">
          
         <hgroup className="text-center mb-6">
  <h2 className="text-gray-900 font-semibold text-2xl md:text-3xl leading-snug md:leading-tight mt-2">
    Loan Application Form
  </h2>
  <h3 className="text-3xl md:text-4xl text-gray-900 font-bold mb-4">
    Registration Fees (200) SAR
  </h3>
</hgroup>
 

          <p className="text-center text-gray-600 mb-10">
            After submitting these documents, our team will contact you and you
            will have to pay your loan processing fee.
          </p>

          <form className="grid gap-6">

            {/* First + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  className="w-full border border-gray-300 bg-white text-gray-800 rounded-lg px-4 py-3 
                  focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  className="w-full border border-gray-300 bg-white text-gray-800 rounded-lg px-4 py-3 
                  focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full border border-gray-300 bg-white text-gray-800 rounded-lg px-4 py-3 
                focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter Your Mobile Number"
                className="w-full border border-gray-300 bg-white text-gray-800 rounded-lg px-4 py-3 
                focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

            {/* Address Line 1 */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Address Line 1
              </label>
              <input
                type="text"
                placeholder="Street Address"
                className="w-full border border-gray-300 bg-white text-gray-800 rounded-lg px-4 py-3 
                focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

            {/* Address Line 2 */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Address Line 2
              </label>
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full border border-gray-300 bg-white text-gray-800 rounded-lg px-4 py-3 
                focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

            {/* City + State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  City
                </label>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border border-gray-300 bg-white text-gray-800 rounded-lg px-4 py-3 
                  focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  State
                </label>
                <input
                  type="text"
                  placeholder="State"
                  className="w-full border border-gray-300 bg-white text-gray-800 rounded-lg px-4 py-3 
                  focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                />
              </div>
            </div>

            {/* Zip + Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Zip Code
                </label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="w-full border border-gray-300 bg-white text-gray-800 rounded-lg px-4 py-3 
                  focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                />
              </div>

              {/* 🔥 UPDATED COUNTRY SECTION */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Country
                </label>

                <Select
                  options={options}
                  value={country}
                  onChange={(selectedOption: any) => setCountry(selectedOption)}
                  placeholder="Search & Select Country"
                  className="text-black"
                  classNamePrefix="select"
                  isSearchable
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition text-lg shadow-md"
            >
              Submit Application
            </button>

          </form>
        </div>
      </section>

      {/* ================= Footer ================= */}
            <footer className="bg-[#001D35] py-16 px-8 text-white flex flex-col md:flex-row justify-between gap-8">
      
              {/* Left Column */}
              <div className="flex flex-col gap-4 max-w-sm">
                {/* LOGO IMAGE */}
                <Image
                  src="/logos.jpg"   // <-- apna logo yahan rakhein (public folder)
                  alt="Arab Finance Logo"
                  width={140}
                  height={60}
                  className="object-contain"
                />
      
                <p className="text-white text-smleading-relaxed">
                  Canada work visa, you first need a job offer from a Canadian employer who has likely obtained a positive Labour Market Impact Assessment (LMIA), and then{" "}
                  <span className="bg-yellow-400/20 text-yellow-300 font-semibold px-1 rounded">
                    you can apply online through the official Immigration, Refugees and Citizenship Canada (IRCC) website
                  </span>
                  . The process involves identifying the correct visa type, completing the online application, paying fees, and submitting the application to IRCC for processing. You may also be required to provide and visit a Visa Application Centre (VAC).
                </p>
              </div>
      
              {/* Middle Column */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-white text-3xl mb-2">Useful Links</h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex gap-2">
                    <span className="font-extrabold text-white">•</span>
                    Visa Application Form
                  </li>
                  <li className="flex gap-2">
                    <span className="font-extrabold text-white">•</span>
                    Eligibility Criteria
                  </li>
                  <li className="flex gap-2">
                    <span className="font-extrabold text-white">•</span>
                    Application Tracking
                  </li>
                </ul>
              </div>
      
              {/* Right Column */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-white text-3xl mb-2">Help & Support</h3>
                <p className="flex gap-2 text-gray-200">
                  <span className="font-extrabold text-white">•</span>
                  Phone: +1 234 567 890
                </p>
                <p className="flex gap-2 text-gray-200">
                  <span className="font-extrabold text-white">•</span>
                  Email: support@arabfinance.com
                </p>
              </div>
            </footer>
      
    </>
  );
}