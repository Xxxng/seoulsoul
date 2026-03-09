import SeoulSoulQuiz from './SeoulSoulQuiz';
import { MapPin, Coffee, Zap, Moon, Heart, HelpCircle, BookOpen, Info } from 'lucide-react';
import { FAQ_DATA } from '../lib/data';

export default function Home() {
  return (
    <div className="flex flex-col bg-orange-50 font-mono">
      {/* Hero Section */}
      <section className="bg-white border-b-8 border-black p-8 sm:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>
        <h1 className="text-6xl sm:text-8xl font-black mb-6 uppercase italic tracking-tighter leading-none text-black">
          Seoul <span className="text-orange-500">Soul</span> Match
        </h1>
        <p className="max-w-3xl mx-auto text-xl sm:text-3xl font-bold leading-tight mb-10 text-black">
          The Definitive Personality Guide to Seoul's Neighborhoods. 
          <span className="block text-lg sm:text-xl mt-4 text-gray-600 italic">Curated for Digital Nomads, Expats, and Urban Explorers.</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4">
           <span className="bg-yellow-300 border-4 border-black px-4 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
             Expertly Curated
           </span>
           <span className="bg-blue-300 border-4 border-black px-4 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
             Updated 2026
           </span>
           <span className="bg-pink-300 border-4 border-black px-4 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
             Data Driven
           </span>
        </div>
      </section>

      {/* Main Quiz Area */}
      <section id="quiz-section" className="py-16 px-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        <SeoulSoulQuiz />
      </section>

      {/* Value-Add: Why This Guide? */}
      <section className="bg-black text-white p-12 sm:p-24 border-y-8 border-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8 text-white">
            <Info size={48} className="text-yellow-400" />
            <h2 className="text-4xl font-black uppercase italic">Why Trust Our Match?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg font-bold leading-relaxed">
            <div className="space-y-4 text-white">
              <p className="text-yellow-400 text-2xl font-black">01. Beyond Tourism</p>
              <p>We don't just list landmarks. We analyze the "psychographics" of each district—from the speed of the Wi-Fi to the community's creative openness and cultural density.</p>
            </div>
            <div className="space-y-4 text-white">
              <p className="text-blue-400 text-2xl font-black">02. Expert Insights</p>
              <p>Our data is compiled by long-term Seoul residents and urban planners who understand how a neighborhood's vibe affects your productivity and long-term well-being.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Spotlight Section */}
      <section className="bg-white border-b-8 border-black p-8 sm:p-20 text-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-black">
            <h2 className="text-5xl font-black mb-4 uppercase italic text-center underline decoration-8 decoration-yellow-400 underline-offset-8">
              Seoul District Deep-Dives
            </h2>
            <p className="text-xl font-bold text-gray-600 uppercase tracking-widest">In-depth analysis of Seoul's top hubs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="border-4 border-black p-8 bg-red-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col text-black">
              <div className="flex items-center gap-4 mb-6 text-black">
                <Coffee size={32} className="text-red-600" />
                <h3 className="text-3xl font-black uppercase">Seongsu-dong</h3>
              </div>
              <p className="font-bold leading-relaxed mb-6 flex-grow text-lg">
                The undisputed capital of creative industrialism. Seongsu is where heritage meets high-tech. Once a hub for shoe factories, it now hosts the world's most innovative pop-ups and specialty roasteries.
              </p>
              <div className="bg-white border-2 border-black p-2 text-sm font-black uppercase italic text-center">
                Best For: Designers & Makers
              </div>
            </div>

            <div className="border-4 border-black p-8 bg-blue-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col text-black">
              <div className="flex items-center gap-4 mb-6 text-black">
                <MapPin size={32} className="text-blue-600" />
                <h3 className="text-3xl font-black uppercase">Hannam-dong</h3>
              </div>
              <p className="font-bold leading-relaxed mb-6 flex-grow text-lg">
                Seoul's international heart. Nestled between Namsan and the Han River, Hannam offers a quiet, sophisticated hilltop lifestyle with elite galleries and global culinary excellence.
              </p>
              <div className="bg-white border-2 border-black p-2 text-sm font-black uppercase italic text-center">
                Best For: Expats & Art Lovers
              </div>
            </div>

            <div className="border-4 border-black p-8 bg-yellow-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col text-black">
              <div className="flex items-center gap-4 mb-6 text-black">
                <Zap size={32} className="text-orange-600" />
                <h3 className="text-3xl font-black uppercase">Hongdae</h3>
              </div>
              <p className="font-bold leading-relaxed mb-6 flex-grow text-lg">
                The pulse of Korea's youth culture. Hongdae is a 24/7 explosion of indie music, street performance, and affordable creative energy that never sleeps.
              </p>
              <div className="bg-white border-2 border-black p-2 text-sm font-black uppercase italic text-center">
                Best For: Students & Night Owls
              </div>
            </div>

            <div className="border-4 border-black p-8 bg-green-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col text-black">
              <div className="flex items-center gap-4 mb-6 text-black">
                <Moon size={32} className="text-green-600" />
                <h3 className="text-3xl font-black uppercase">Euljiro</h3>
              </div>
              <p className="font-bold leading-relaxed mb-6 flex-grow text-lg">
                The "Hipjiro" phenomenon. Discover the authentic gritty charm of Seoul's printing alleys, now transformed into a hidden maze of the city's trendiest speakeasies and bars.
              </p>
              <div className="bg-white border-2 border-black p-2 text-sm font-black uppercase italic text-center">
                Best For: Authentic Urbanites
              </div>
            </div>

            <div className="border-4 border-black p-8 bg-purple-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col text-black">
              <div className="flex items-center gap-4 mb-6 text-black">
                <Heart size={32} className="text-purple-600" />
                <h3 className="text-3xl font-black uppercase">Gangnam</h3>
              </div>
              <p className="font-bold leading-relaxed mb-6 flex-grow text-lg">
                High-speed metropolis living. Gangnam is the symbol of Seoul's modern success, offering luxury shopping, corporate powerhouses, and world-class infrastructure.
              </p>
              <div className="bg-white border-2 border-black p-2 text-sm font-black uppercase italic text-center">
                Best For: Professionals & Luxury
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - HIGH VALUE FOR ADSENSE */}
      <section className="p-8 sm:p-24 bg-orange-100 text-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12 text-black">
            <HelpCircle size={48} className="text-black" />
            <h2 className="text-4xl font-black uppercase italic">Seoul Living FAQ</h2>
          </div>
          <div className="space-y-8 text-black">
            {FAQ_DATA.map((item, index) => (
              <div key={index} className="border-4 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black">
                <h4 className="text-2xl font-black mb-4 flex items-start gap-3 text-black">
                  <span className="bg-black text-white px-2 py-1 text-sm">Q</span>
                  {item.q}
                </h4>
                <div className="text-lg font-bold text-gray-700 leading-relaxed flex items-start gap-3 text-black">
                   <span className="bg-orange-500 text-white px-2 py-1 text-sm shrink-0">A</span>
                   {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Footer */}
      <section className="p-12 sm:p-24 bg-yellow-400 border-t-8 border-black text-center text-black">
        <div className="max-w-3xl mx-auto text-black">
          <BookOpen size={64} className="mx-auto mb-8 text-black" />
          <h2 className="text-4xl font-black mb-8 uppercase italic text-black">Ready to find your match?</h2>
          <p className="text-xl font-bold mb-12 text-black">
            Join 10,000+ others who have discovered their perfect Seoul neighborhood through our data-driven vibe check.
          </p>
          <a href="#quiz-section" className="inline-block bg-black text-white text-2xl font-black px-12 py-6 hover:bg-gray-900 transition-all transform hover:-translate-y-2 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            GO TO QUIZ
          </a>
        </div>
      </section>
    </div>
  );
}
