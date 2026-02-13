"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

interface VisaFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export default function VisaForm() {
  const [formData, setFormData] = useState<VisaFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-red-600 text-white py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">

        {/* ================= TOP SECTION ================= */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          How to apply
        </h2>

        {/* Visa Check Card */}
        <div className="bg-white text-black rounded-xl shadow-lg p-8 max-w-2xl mx-auto mb-14">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Check Visa Online
          </h3>

          <input
            type="text"
            placeholder="Enter Your Passport / Application ID"
            className="w-full border border-gray-300 rounded-md px-4 py-3 mb-6
            placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="text-center">
            <button className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition">
              Check Now
            </button>
          </div>
        </div>

        {/* ================= ALERT TEXT ================= */}
        <div className="text-center bg-red-600 mb-16">
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
        कनाडा पोस्ट में श्रम व्यवधान के कारण डाक वितरण में देरी होगी।

हम आवेदन प्रक्रिया सामान्य रूप से जारी रखे हुए हैं। हालांकि, निम्नलिखित में देरी हो सकती है:

कनाडा के भीतर या कनाडा को भेजे जाने वाले आवेदनों में
और हमारी ओर से डाक प्राप्त करने में

यदि संभव हो, तो हम आपको ऑनलाइन आवेदन करने के लिए प्रोत्साहित करते हैं। यदि आपको कागज़ पर आवेदन करना है, तो कृपया आवेदन भेजने के लिए किसी अन्य कूरियर सेवा का उपयोग करें।
          </p>
        </div>

        {/* ================= APPLICATION FORM ================= */}
        <div className="bg-red-500 text-black rounded-xl shadow-xl p-8 md:p-12">

          <form className="space-y-6">

            {/* First + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="firstName"
                onChange={handleChange}
                placeholder="First Name"
                className="bg-white border border-gray-300 rounded-md px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                name="lastName"
                onChange={handleChange}
                placeholder="Last Name"
                className="bg-white border border-gray-300 rounded-md px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Email */}
            <input
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* Phone */}
            <input
              name="phone"
              onChange={handleChange}
              placeholder="Phone / Mobile"
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* City + State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="city"
                onChange={handleChange}
                placeholder="City"
                className="bg-white border border-gray-300 rounded-md px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                name="state"
                onChange={handleChange}
                placeholder="State"
                className="bg-white border border-gray-300 rounded-md px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Zip + Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="zip"
                onChange={handleChange}
                placeholder="Zip Code"
                className="bg-white border border-gray-300 rounded-md px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <select
                name="country"
                onChange={handleChange}
                className="bg-white border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Country</option>
                <option>Canada</option>
                <option>India</option>
                <option>Pakistan</option>
                <option>UAE</option>
              </select>
            </div>

            {/* File Uploads */}
<div className="space-y-6 pt-4">

  {/* Passport Photo */}
  <label className="block text-gray-900 font-semibold">
    Passport Photo
    <input
      type="file"
      className="w-full border border-gray-300 p-3 rounded-md file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded-md file:border-0 file:mr-4 hover:file:bg-blue-700 transition mt-2"
    />
  </label>

  {/* Aadhar Card */}
  <label className="block text-gray-900 font-semibold">
    Aadhar Card
    <input
      type="file"
      className="w-full border border-gray-300 p-3 rounded-md file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded-md file:border-0 file:mr-4 hover:file:bg-blue-700 transition mt-2"
    />
  </label>

  {/* Selfie Upload */}
  <label className="block text-gray-900 font-semibold">
    Selfie Upload
    <input
      type="file"
      className="w-full border border-gray-300 p-3 rounded-md file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded-md file:border-0 file:mr-4 hover:file:bg-blue-700 transition mt-2"
    />
  </label>

</div>

            {/* Submit */}
            <div className="text-center pt-8">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg text-lg font-semibold transition shadow-md"
              >
                Submit Form
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/0000000000"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <MessageCircle className="text-white w-6 h-6" />
      </a>

    </section>
  );
}
