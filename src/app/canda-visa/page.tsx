"use client";

import Image from "next/image";
import { useState } from "react";
import {
  CheckCircle,
  Briefcase,
  FileText,
  Headphones,
  User,
  Upload,
} from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function CanadaVisaLandingPage() {
  const [status, setStatus] = useState("");

  return (
    <main className="w-full">

      {/* ================= HERO / STATUS ================= */}
      <section className="bg-red-600 text-white py-16 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">How to apply</h1>

        <div className="bg-white max-w-md mx-auto p-4 rounded-lg flex gap-2">
          <input
            placeholder="Enter Application Number"
            className="flex-1 px-3 py-2 text-black border rounded-md"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <button className="border border-blue-600 text-blue-600 px-4 rounded-md font-semibold">
            Check Now
          </button>
        </div>

        <p className="text-sm mt-4 max-w-3xl mx-auto">
          कनाडा पोस्ट में देरी के कारण, सभी आवेदकों को सलाह दी जाती है कि वे
          <strong> ऑनलाइन आवेदन करें</strong>।
        </p>
      </section>

      {/* ================= APPLICATION FORM ================= */}
      <section className="bg-red-600 py-16 px-4">
        <div className="bg-white max-w-5xl mx-auto rounded-xl p-8">
          <form className="grid gap-4">

            <div className="grid md:grid-cols-2 gap-4">
              <input placeholder="First Name" className="input" />
              <input placeholder="Last Name" className="input" />
            </div>

            <input placeholder="Email" className="input" />
            <input placeholder="Phone / Mobile" className="input" />
            <input placeholder="Address Line 1" className="input" />
            <input placeholder="Address Line 2" className="input" />

            <div className="grid md:grid-cols-2 gap-4">
              <input placeholder="City" className="input" />
              <input placeholder="State" className="input" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input placeholder="Zip Code" className="input" />
              <select className="input">
                <option>Country</option>
                <option>India</option>
                <option>Canada</option>
              </select>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <label className="upload"><Upload size={16} /> Passport Photo</label>
              <label className="upload"><Upload size={16} /> Aadhar Card</label>
              <label className="upload"><Upload size={16} /> Selfie</label>
            </div>

            <button className="bg-blue-600 text-white py-3 rounded-lg font-bold mt-4">
              Submit Form
            </button>
          </form>
        </div>
      </section>

      {/* ================= VALUE PROPS ================= */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          <Value icon={<CheckCircle />} title="Fast Approvals" desc="48 Hours" />
          <Value icon={<Briefcase />} title="Flexible Terms" desc="Easy Options" />
          <Value icon={<FileText />} title="Transparent Pricing" desc="No Hidden Fees" />
          <Value icon={<Headphones />} title="Trusted Support" desc="24/7 Help" />
        </div>
      </section>

      {/* ================= VISA CATEGORIES ================= */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          <VisaCard title="Personal Visa Job" />
          <VisaCard title="Business Visa" />
          <VisaCard title="Immigrate to Canada" />
          <VisaCard title="Canadian Work Permit" />
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Step number="1" text="Create Account" />
            <Step number="2" text="Gather Documents" />
            <Step number="3" text="Submit Online" />
          </div>

          <Image
            src="/placeholder-man.jpg"
            alt="Professional"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-[#001F3F] text-white py-10">
        <div className="flex justify-around text-center">
          <Stat value="+5.2k" label="Applications" />
          <Stat value="100%" label="Success Rate" />
          <Stat value="+65" label="Companies" />
        </div>
      </section>

      {/* ================= JOB TABLE ================= */}
      <section className="py-16 px-4">
        <h2 className="text-center font-bold text-xl mb-6">
          इस वेबसाइट पर कनाडा में मुफ्त वीजा वाली नौकरियों के अवसर उपलब्ध हैं
        </h2>

        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="w-full border">
            <thead className="bg-[#001F3F] text-white">
              <tr>
                <th>Job</th>
                <th>Company</th>
                <th>Salary</th>
                <th>Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td>Food Packer</td>
                <td>Maple Leaf Foods</td>
                <td>3200 CAD</td>
                <td>Free Visa</td>
              </tr>
              <tr>
                <td>Driver</td>
                <td>Logistics Ltd</td>
                <td>3800 CAD</td>
                <td>Ticket + Visa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#001F3F] text-white py-16 px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-xl">e-VISA IMMIGRATION</h3>
          <p className="text-sm mt-2">
            Trusted Canada Visa Consultancy
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Links</h4>
          <ul className="space-y-2">
            <li>Visa Application</li>
            <li>Eligibility</li>
            <li>Tracking</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <p>📞 +1 234 567 890</p>
          <p>✉️ Contact@canadavisaonline.net</p>
        </div>
      </footer>

      <WhatsAppFloat />
    </main>
  );
}

/* ===== Helper Components ===== */

function Value({ icon, title, desc }: any) {
  return (
    <div className="p-6 border rounded-lg">
      <div className="text-red-600 mb-2">{icon}</div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm">{desc}</p>
    </div>
  );
}

function VisaCard({ title }: { title: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <User className="text-red-600 mb-2" />
      <h3 className="font-bold">{title}</h3>
    </div>
  );
}

function Step({ number, text }: any) {
  return (
    <p className="mb-4 font-semibold">
      {number}. {text}
    </p>
  );
}

function Stat({ value, label }: any) {
  return (
    <div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p>{label}</p>
    </div>
  );
}
