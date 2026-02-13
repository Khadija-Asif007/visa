"use client";

import { ClipboardCheck, RefreshCcw, BadgeDollarSign, Headphones } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="bg-red-600 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Feature Card */}
          <div className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center text-white 
                          transition-all duration-300 hover:-translate-y-3 hover:bg-white hover:text-red-600">

            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center 
                            bg-[#0f2b3d] rounded-xl 
                            transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">

              <ClipboardCheck size={28} />
            </div>

            <h3 className="font-bold text-xl mb-3">
              Fast Approvals
            </h3>
            <p className="text-sm opacity-90 group-hover:opacity-100">
              Get Visa decisions within 48 hours.
            </p>
          </div>

          {/* Feature Card */}
          <div className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center text-white 
                          transition-all duration-300 hover:-translate-y-3 hover:bg-white hover:text-red-600">

            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center 
                            bg-[#0f2b3d] rounded-xl 
                            transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">

              <RefreshCcw size={28} />
            </div>

            <h3 className="font-bold text-xl mb-3">
              Flexible Terms
            </h3>
            <p className="text-sm opacity-90 group-hover:opacity-100">
              Customizable Visitor Visa plans.
            </p>
          </div>

          {/* Feature Card */}
          <div className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center text-white 
                          transition-all duration-300 hover:-translate-y-3 hover:bg-white hover:text-red-600">

            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center 
                            bg-[#0f2b3d] rounded-xl 
                            transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">

              <BadgeDollarSign size={28} />
            </div>

            <h3 className="font-bold text-xl mb-3">
              Transparent Pricing
            </h3>
            <p className="text-sm opacity-90 group-hover:opacity-100">
              No hidden fees; clear terms.
            </p>
          </div>

          {/* Feature Card */}
          <div className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center text-white 
                          transition-all duration-300 hover:-translate-y-3 hover:bg-white hover:text-red-600">

            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center 
                            bg-[#0f2b3d] rounded-xl 
                            transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">

              <Headphones size={28} />
            </div>

            <h3 className="font-bold text-xl mb-3">
              Trusted Support
            </h3>
            <p className="text-sm opacity-90 group-hover:opacity-100">
              24/7 customer service & financial advice.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
