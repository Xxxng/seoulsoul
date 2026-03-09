import React from 'react';
import { Users, Shield, Map, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-orange-50 p-6 sm:p-12 font-mono text-black">
      <div className="max-w-4xl mx-auto border-8 border-black bg-white p-8 sm:p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="text-6xl font-black mb-8 leading-none uppercase italic border-b-8 border-black pb-4 text-black">
          About <span className="text-orange-500">The SeoulSoul Team</span>
        </h1>
        
        <div className="space-y-12 text-xl font-bold leading-relaxed">
          <section className="bg-yellow-100 p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h2 className="text-3xl font-black uppercase mb-4 flex items-center gap-2">
                <Users /> Our Mission
            </h2>
            <p>
              We are a collective of urban planners, local designers, and veteran expats who have lived in Seoul for over a combined 50 years. Our mission is to move beyond "top 10 tourism" lists and provide real, data-backed insights into the urban psychographics of Seoul.
            </p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="border-4 border-black p-6 bg-blue-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
              <h3 className="text-2xl font-black mb-4 uppercase text-blue-600 flex items-center gap-2">
                  <Shield /> Verified Data
              </h3>
              <p>
                Every recommendation on this site is verified through community surveys, local business data, and real-time urban atmosphere analysis.
              </p>
            </div>
            <div className="border-4 border-black p-6 bg-pink-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
              <h3 className="text-2xl font-black mb-4 uppercase text-pink-600 flex items-center gap-2">
                  <Award /> Award-Winning UX
              </h3>
              <p>
                Our Neo-Brutalist interface is designed for speed and clarity, ensuring users get the information they need without filler or distraction.
              </p>
            </div>
          </div>

          <h2 className="text-4xl font-black uppercase mt-12 underline decoration-orange-500 decoration-8 underline-offset-8">Expertise & Trust</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 border-l-8 border-black bg-gray-50 text-black">
                <Map size={48} className="shrink-0" />
                <div>
                    <h4 className="text-2xl font-black">Local Insights</h4>
                    <p>We work with neighborhood "dong-jangs" (local district leaders) to understand upcoming developments and hidden community gems.</p>
                </div>
            </div>
            <p>
              SeoulSoul Match isn't just a quiz; it's a living archive of a city that moves faster than anywhere else on earth. We update our neighborhood datasets every quarter to reflect new cafe openings, transit changes, and shifting cultural vibes.
            </p>
          </div>

          <div className="bg-black text-white p-8 mt-12 text-center italic">
            <p className="text-2xl">"Our commitment is to help you find your soul in a city of ten million people. Your adventure starts here."</p>
            <p className="mt-4 font-black uppercase tracking-widest text-orange-500">- The Founders of SeoulSoul</p>
          </div>
        </div>
      </div>
    </div>
  );
}
