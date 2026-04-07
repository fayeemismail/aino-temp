"use client";

import { LuMapPin, LuPhone } from "react-icons/lu";

export function ContactLocation() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background animated element - kept as static for visual consistency */}
      <div 
        className="absolute top-1/2 w-96 h-96 bg-linear-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Location Card */}
          <div className="p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10">
            <LuMapPin className="w-12 h-12 text-amber-400 mb-6" />
            <h3 className="text-2xl text-white mb-4 font-medium">Our Location</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              123 Innovation Street
              <br />
              San Francisco, CA 94105
              <br />
              United States
            </p>
            <p className="text-white/60 text-sm">
              Located in the heart of San Francisco&apos;s tech district
            </p>
          </div>

          {/* Business Hours Card */}
          <div className="p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10">
            <div className="inline-block mb-6">
              <LuPhone className="w-12 h-12 text-cyan-400" />
            </div>
            <h3 className="text-2xl text-white mb-4 font-medium">Business Hours</h3>
            <div className="space-y-2 text-white/70">
              <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
              <p>Saturday: 10:00 AM – 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <p className="text-white/60 text-sm mt-4">Pacific Standard Time (PST)</p>
          </div>
        </div>
      </div>
    </section>
  );
}