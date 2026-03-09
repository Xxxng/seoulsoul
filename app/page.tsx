import SeoulSoulQuiz from './SeoulSoulQuiz';
import { MapPin, Coffee, Zap, Moon, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col bg-orange-50 font-mono">
      {/* Hero Section */}
      <section className="bg-white border-b-8 border-black p-8 sm:p-16 text-center">
        <h1 className="text-5xl sm:text-7xl font-black mb-6 uppercase italic tracking-tighter leading-none">
          Discover Your <span className="text-orange-500 underline decoration-black underline-offset-8">Seoul Soul</span> Match
        </h1>
        <p className="max-w-2xl mx-auto text-xl sm:text-2xl font-bold leading-relaxed mb-8">
          Not sure where to live, work, or explore in Seoul? Our personality-driven guide finds the neighborhood that matches your unique vibe.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
           <span className="bg-yellow-300 border-4 border-black px-4 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
             Digital Nomad Ready
           </span>
           <span className="bg-blue-300 border-4 border-black px-4 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
             Local Recommendations
           </span>
           <span className="bg-pink-300 border-4 border-black px-4 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
             100% Interactive
           </span>
        </div>
      </section>

      {/* Main Quiz Area */}
      <section id="quiz-section" className="py-12 px-6">
        <SeoulSoulQuiz />
      </section>

      {/* Neighborhood Spotlight Section - AD SENSE GOLD */}
      <section className="bg-white border-y-8 border-black p-8 sm:p-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 uppercase italic text-center underline decoration-8 decoration-yellow-400">
            Neighborhood Spotlight
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="border-4 border-black p-6 bg-red-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-2 mb-4">
                <Coffee size={24} className="text-red-600" />
                <h3 className="text-2xl font-black uppercase">Seongsu-dong</h3>
              </div>
              <p className="font-bold leading-relaxed mb-4">
                Often called the "Brooklyn of Seoul," Seongsu-dong is a hub for creative entrepreneurs and artisans. Its converted red-brick warehouses now house world-class specialty cafes, design studios, and boutique pop-up stores.
              </p>
              <p className="text-sm font-black uppercase bg-white border-2 border-black inline-block px-2">Vibe: Creative & Industrial</p>
            </div>

            <div className="border-4 border-black p-6 bg-blue-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={24} className="text-blue-600" />
                <h3 className="text-2xl font-black uppercase">Hannam-dong</h3>
              </div>
              <p className="font-bold leading-relaxed mb-4">
                The global heart of Seoul. Hannam-dong offers a sophisticated blend of high-end art galleries (like Leeum Museum), international dining, and quiet hilly residential streets favored by expats and diplomats.
              </p>
              <p className="text-sm font-black uppercase bg-white border-2 border-black inline-block px-2">Vibe: Global & Sophisticated</p>
            </div>

            <div className="border-4 border-black p-6 bg-yellow-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-2 mb-4">
                <Zap size={24} className="text-orange-600" />
                <h3 className="text-2xl font-black uppercase">Hongdae</h3>
              </div>
              <p className="font-bold leading-relaxed mb-4">
                Named after Hongik University, this is the center of Seoul's youth culture. Expect street performances, indie music clubs, affordable vintage shopping, and an energy that never sleeps.
              </p>
              <p className="text-sm font-black uppercase bg-white border-2 border-black inline-block px-2">Vibe: Youthful & Electric</p>
            </div>

            <div className="border-4 border-black p-6 bg-green-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-2 mb-4">
                <Moon size={24} className="text-green-600" />
                <h3 className="text-2xl font-black uppercase">Euljiro</h3>
              </div>
              <p className="font-bold leading-relaxed mb-4">
                Where "Old Seoul" meets "Newtro." Euljiro's narrow alleys are filled with traditional print shops by day and hidden, trendy bars and restaurants (Hipjiro) by night.
              </p>
              <p className="text-sm font-black uppercase bg-white border-2 border-black inline-block px-2">Vibe: Authentic & Newtro</p>
            </div>

            <div className="border-4 border-black p-6 bg-purple-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-2 mb-4">
                <Heart size={24} className="text-purple-600" />
                <h3 className="text-2xl font-black uppercase">Gangnam</h3>
              </div>
              <p className="font-bold leading-relaxed mb-4">
                The glitzy, high-speed center of business and luxury. Gangnam is famous for its towering skyscrapers, high-end shopping at COEX, and a professional, efficient lifestyle that defines modern Korea.
              </p>
              <p className="text-sm font-black uppercase bg-white border-2 border-black inline-block px-2">Vibe: Modern & Professional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="p-8 sm:p-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-black mb-8 uppercase text-center">Why find your Seoul Soul?</h2>
        <div className="space-y-6 text-xl font-bold leading-relaxed text-center">
          <p>
            Choosing the right neighborhood in a city of 10 million people can be overwhelming. Each "dong" (neighborhood) in Seoul has a completely different energy, history, and community.
          </p>
          <p className="bg-black text-white p-6 -rotate-1 italic">
            "Our data-driven (and fun!) approach takes into account your work style, aesthetic preferences, and social needs to give you a starting point for your Seoul adventure."
          </p>
          <p>
            Whether you need the high-speed efficiency of Gangnam or the artistic soul of Seongsu, we help you find where you truly belong.
          </p>
        </div>
      </section>
    </div>
  );
}
