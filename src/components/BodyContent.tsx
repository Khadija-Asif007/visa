"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CheckCircle, Phone, Mail } from "lucide-react";
import { FileText, Home, Briefcase } from "lucide-react";


interface Job {
  title: string;
  company: string;
  salary: string;
  benefits: string;
}

const jobs: Job[] = [
 
  {
    title: "Food Packer",
    company: "Maple Leaf Foods",
    salary: "3500 CAD",
    benefits: "Free visa, free ticket, free accommodation, free food, free medical, yearly bonus",
  },
  {
    title: "Driver",
    company: "Maple Leaf Foods",
    salary: "5000 CAD",
    benefits: "Free visa, free ticket, free accommodation, free food, free medical, yearly bonus",
  },
  {
    title: "Truck Driver",
    company: "Maple Leaf Foods",
    salary: "4800 CAD",
    benefits: "Free visa, free ticket, free accommodation, free food, free medical, yearly bonus",
  },
  {
    title: "Electrician",
    company: "Maple Leaf Foods",
    salary: "4000 CAD",
    benefits: "Free visa, free ticket, free accommodation, free food, free medical, yearly bonus",
  },
  {
    title: "Plumber",
    company: "Maple Leaf Foods",
    salary: "3500 CAD",
    benefits: "Free visa, free ticket, free accommodation, free food, free medical, yearly bonus",
  },
  {
    title: "Security Guard",
    company: "Maple Leaf Foods",
    salary: "4000 CAD",
    benefits: "Free visa, free ticket, free accommodation, free food, free medical, yearly bonus",
  },
  {
    title: "Laborer",
    company: "Maple Leaf Foods",
    salary: "3500 CAD",
    benefits: "Free visa, free ticket, free accommodation, free food, free medical, yearly bonus",
  },
  {
    title: "Nursing Staff",
    company: "Maple Leaf Foods",
    salary: "4200 CAD",
    benefits: "Free visa, free ticket, free accommodation, free food, free medical, yearly bonus",
  },
  {
    title: "Carpenter",
    company: "Maple Leaf Foods",
    salary: "3600 CAD",
    benefits: "Free visa, free ticket, free accommodation, free food, free medical, yearly bonus",
  },
  {
    title: "Steel Fixer",
    company: "Maple Leaf Foods",
    salary: "3700 CAD",
    benefits: "Free visa, free ticket, free accommodation, free food, free medical, yearly bonus",
  },
  {
    title: "Office Worker",
    company: "Maple Leaf Foods",
    salary: "3000 CAD",
    benefits: "Free visa, free ticket, free accommodation, free food, free medical, yearly bonus",
  },
  {
    title: "Store Keeper",
    company: "Maple Leaf Foods",
    salary: "3200 CAD",
    benefits: "Free visa, free ticket, free accommodation, free food, free medical, yearly bonus",
  },
  {
    title: "Factory Worker",
    company: "Maple Leaf Foods",
    salary: "2500 CAD",
    benefits: "Free visa, free ticket, free accommodation, free food, free medical, yearly bonus",
  },
  {
    title: "Cook",
    company: "Maple Leaf Foods",
    salary: "4000 CAD",
    benefits: "Free visa, free ticket, free accommodation, free food, free medical, yearly bonus",
  },
  {
    title: "Cleaner",
    company: "Maple Leaf Foods",
    salary: "2400 CAD",
    benefits: "Free visa, free ticket, free accommodation, free food, free medical, yearly bonus",
  },
];








export default function HomeBody() {
  return (
    <main className="font-sans">

      
{/* ================================
   PREPARE DOCUMENTS SECTION
================================ */}

<section className="bg-[#f3f3f3] py-24 px-6">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-5xl font-extrabold text-[#0f2b3d] text-center mb-20">
      Prepare documents and apply
    </h2>

    {/* Cards */}
    <div className="grid md:grid-cols-4 gap-16">

      {/* Card 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <div className="bg-red-600 w-16 h-16 flex items-center justify-center rounded-xl mb-6">
          <span className="text-white text-2xl">👤</span>
        </div>

        <h3 className="text-red-600 font-bold text-xl mb-3">
          Personal Visa Job
        </h3>

        <p className="text-gray-600 leading-relaxed text-base">
          The reason you're traveling to Canada determines the way you apply and the documents you need to submit with your visa application.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <div className="bg-red-600 w-16 h-16 flex items-center justify-center rounded-xl mb-6">
          <span className="text-white text-2xl">🏢</span>
        </div>

        <h3 className="text-red-600 font-bold text-xl mb-3">
          Business Visa
        </h3>

        <p className="text-gray-600 leading-relaxed text-base">
          We enable you to apply online, guide you through the application process, answer questions, error proof the application according to Canada visa requirements.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <div className="bg-red-600 w-16 h-16 flex items-center justify-center rounded-xl mb-6">
          <span className="text-white text-2xl">🏠</span>
        </div>

        <h3 className="text-red-600 font-bold text-xl mb-3">
          Immigrate to Canada
        </h3>

        <p className="text-gray-600 leading-relaxed text-base">
          Make your goal of moving to Canada a reality by exploring over 100 available ways to immigrate.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-6 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <div className="bg-red-600 w-16 h-16 flex items-center justify-center rounded-xl mb-6">
          <span className="text-white text-2xl">🏬</span>
        </div>

        <h3 className="text-red-600 font-bold text-xl mb-3">
          Canadian Work Permits
        </h3>

        <p className="text-gray-600 leading-relaxed text-base">
          Find out if you need a Canadian temporary work permit to work in Canada and how to obtain one.
        </p>
      </div>

    </div>

  </div>
</section>

      


<section className="bg-[#f5f5f5] py-20 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      <h2 className="text-5xl font-extrabold text-[#2d2d2d] mb-8">
        Canada Visa apply online
      </h2>

      <h4 className="font-semibold text-lg mb-3 text-gray-800">
        Step 1: Prepare your application
      </h4>

      <ul className="space-y-3 text-gray-900 text-[15px] leading-relaxed">
        <li>
          <span className="font-semibold">Create an account:</span> Go to the official Government of Canada immigration website to create an account and start your application.
        </li>
        <li>
          <span className="font-semibold">Gather forms and documents:</span>  Download and complete the necessary application forms for your specific visa type (e.g., visitor, study permit).
        </li>
        <li>
          <span className="font-semibold">Prepare supporting documents:</span>  Gather all required documents, such as proof of financial support, a valid passport, and photos that meet Canadian specifications. 
        </li>
      </ul>

      {/* Step 2 */}
      <div className="flex items-start gap-3 mt-8">
        <div className="bg-red-600 p-2 rounded">
          <FileText size={18} className="text-white" />
        </div>
        <div>
          <h4 className="text-red-600 font-bold text-lg">
            Step 2: Submit your application online
          </h4>
          <p className="text-gray-600 text-[15px] leading-relaxed mt-1">
            Fill out the forms: Enter your personal information and passport details accurately in the online application. Pay the fees: You will need to pay the application fee and biometric fee online. Upload documents: Upload all your completed forms and supporting documents through your online account. Step 3: Visit the Visa Application Centre (VAC) Receive your Biometric Instruction Letter (BIL): After submitting your application, you will receive a letter instructing you to provide biometrics. Book an appointment: Book an appointment at a VAC in Pakistan to provide your biometrics. Submit your passport: At your VAC appointment, you will submit your passport, which the visa office will use to process your visa application.
          </p>
        </div>
      </div>

      {/* Track */}
      <div className="flex items-start gap-3 mt-6">
        <div className="bg-red-600 p-2 rounded">
          <Home size={18} className="text-white" />
        </div>
        <div>
          <h4 className="text-red-600 font-bold text-lg">
            Track your application
          </h4>
          <p className="text-gray-600 text-[15px]">
            You can track the status of your application online through the VAC website.
          </p>
        </div>
      </div>

      {/* Visitor Visa */}
      <div className="flex items-start gap-3 mt-6">
        <div className="bg-red-600 p-2 rounded">
          <Briefcase size={18} className="text-white" />
        </div>
        <div>
          <h4 className="text-red-600 font-bold text-lg">
            Application for a Visitor Visa (Temporary Resident Visa)
          </h4>
          <p className="text-gray-600 text-[15px] leading-relaxed">
           Apply online. Before you apply, make sure you need a visa to enter Canada. Find out what document you need to enter Canada. You must have both of these to apply ...


          </p>
           <div className="w-[150px] h-[150px] border border-gray-400 rounded-md overflow-hidden hover:scale-105 transition-transform duration-200">
      <Image
        src="/small.visa.jpg"  // apni image ka path yahan
        alt="Box Image"
        width={150}
        height={150}
        className="object-cover"
      />
    </div>
        </div>
      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center">

      <div className="absolute inset-0 border-4 border-dashed border-purple-300 rounded-[40px]"></div>

      <Image
        src="/about.jpeg"
        alt="Canada Visa Apply"
        width={500}
        height={600}
        className="relative rounded-[40px] object-cover z-10"
      />

    </div>

  </div>
</section>

{/* DARK STATS SECTION */}
<section className="bg-blue-950 text-white py-20 text-center px-4">
  <h2 className="text-6xl font-bold mb-6">Apply for a visa</h2>

  <div className="mt-6 max-w-3xl mx-auto text-center space-y-4 leading-relaxed">
    <p className="text-gray-50 mb-4">
      The first step is to determine which IRCC immigration program you should apply for.
    </p>
    <p className="text-gray-50 mb-4">
      IRCC has an online tool called Come to Canada, which will help you determine whether you can come to Canada as an immigrant, visitor, worker or student.
    </p>
    <p className="text-gray-50 mb-5">
      This tool will help you understand IRCC’s requirements, including which supporting documents you may need to provide and how much you will need to pay for your application. All you need to do is answer some questions and based on your information, you’ll receive a list of program options and step-by-step instructions on how to apply.
    </p>
    {/* Fixed problematic paragraph */}
    <p className="text-gray-50 mb-4">
      The first step is to determine which IRCC immigration program you should apply for.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-6 border-t border-blue-400 pt-10 mt-10 max-w-4xl mx-auto">
    <CounterBox end={5200} label="Happy Customers" prefix="+" suffix="k" />
    <CounterBox end={100} label="Work Quality" suffix="%" border />
    <CounterBox end={65} label="Award Winner" prefix="+" />
  </div>
</section>

       {/* HERO SECTION */}
      <section className="bg-red-600 text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl p-4 relative">
              <Image
                src="/team.jpg"
                alt="Office Discussion"
                width={500}
                height={350}
                className="rounded-lg object-cover"
              />

              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold">Growth</p>
                <div className="flex gap-1 mt-2">
                  <div className="w-2 h-6 bg-white"></div>
                  <div className="w-2 h-8 bg-white"></div>
                  <div className="w-2 h-10 bg-white"></div>
                  <div className="w-2 h-12 bg-white"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              World Wide Visa Service 25/7
            </h1>

            <p className="text-lg">
              Canada is home to over 300,000 people of All origin. If you are
              looking to immigrate to Canada from World Wide, you have come to
              the right place. This CanadaVisa page provides an overview of
              Canadian immigration options available to All Country.
            </p>

            <div className="flex items-center gap-6 mt-6">
              <Image
                src="/canada.jpg"
                alt="Canada Flag"
                width={120}
                height={80}
                className="rounded shadow-lg"
              />

              <div className="bg-white text-black px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                <CheckCircle className="text-green-600" />
                <span className="font-semibold">
                  Visa Status: Issued
                </span>
              </div>
            </div>
          </div>
        </div>

        
      </section>
     




      


      {/* JOB TABLE */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <div className="bg-blue-900 text-white text-center py-6 rounded-t-xl">
            <h2 className="text-2xl font-bold">
              इस वेबसाइट पर कनाडा में मुफ्त वीजा वाली नौकरियों के अवसर उपलब्ध हैं
            </h2>
          </div>

          <div className="overflow-x-auto shadow-lg rounded-b-xl">
            <table className="min-w-full border border-gray-200 text-center">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="py-3 border">Job Title</th>
                  <th className="py-3 border">Company Name</th>
                  <th className="py-3 border">Salary (CAD)</th>
                  <th className="py-3 border">Benefits</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr key={index} className="odd:bg-blue-700 even:bg-gray-800">
                    <td className="py-3 border">{job.title}</td>
                    <td className="py-3 border">{job.company}</td>
                    <td className="py-3 border">{job.salary}</td>
                    <td className="py-3 border text-sm px-2">
                      {job.benefits}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
               <ul className="space-y-2 text-gray-300">
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
     

    </main>
  );
}

/* COUNTER COMPONENT */
function CounterBox({
  end,
  label,
  prefix = "",
  suffix = "",
  border = false,
}: {
  end: number;
  label: string;
  prefix?: string;
  suffix?: string;
  border?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className={border ? "border-x border-blue-400" : ""}>
      <h3 className="text-4xl font-bold">
        {prefix}
        {count}
        {suffix}
      </h3>
      <p className="text-gray-300">{label}</p>
    </div>
  );
}
