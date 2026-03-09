import { Metadata } from 'next';
import Link from 'next/link';
import { QUIZ_DATA } from '../../../lib/data';
import { MapPin, ArrowRight, Sparkles, CheckCircle, AlertCircle, Star, Lightbulb, BookOpen } from 'lucide-react';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;
  const result = QUIZ_DATA.results[id as keyof typeof QUIZ_DATA.results];
  
  return {
    title: result ? `I match with ${result.title}! | Seoul Soul Match` : 'Seoul Soul Match Result',
    description: result ? `My Seoul Soul Match is ${result.title} (${result.vibe}). ${result.desc}` : 'Check out my Seoul neighborhood match!',
    openGraph: {
      images: [`/result/${id}/opengraph-image`],
    },
  };
}

export default function ResultPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const result = QUIZ_DATA.results[id as keyof typeof QUIZ_DATA.results];

  if (!result) {
    return (
      <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-6 font-mono">
        <h1 className="text-4xl font-black mb-4">MATCH NOT FOUND</h1>
        <Link href="/" className="underline font-bold">Return to Home</Link>
      </div>
    );
  }

  const guide = result.fullGuide;

  return (
    <div className={`min-h-screen ${result.color} flex flex-col items-center p-6 font-mono transition-colors duration-700`}>
      <div className="max-w-4xl w-full border-8 border-black bg-white p-8 sm:p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] my-12 relative overflow-hidden text-black">
        <div className="absolute top-4 right-4 animate-pulse">
            <Sparkles size={64} className="text-yellow-400" strokeWidth={3} />
        </div>
        
        <header className="border-b-8 border-black pb-8 mb-12">
            <h3 className="text-2xl font-black uppercase mb-2 tracking-widest text-gray-500">Your Seoul Soul Match Is:</h3>
            <h1 className="text-7xl sm:text-8xl font-black leading-none uppercase italic text-black">
            {result.title}
            </h1>
            <div className="flex items-center gap-3 mt-4">
            <MapPin size={32} fill="black" />
            <span className="text-3xl font-black italic">{result.vibe}</span>
            </div>
        </header>

        <section className="mb-12">
            <h2 className="text-3xl font-black mb-6 uppercase flex items-center gap-2 underline decoration-yellow-400 decoration-4">
                <BookOpen /> Neighborhood Deep-Dive
            </h2>
            <p className="text-xl font-bold leading-relaxed bg-gray-50 p-6 border-4 border-black border-dashed italic">
                "{guide.intro}"
            </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border-4 border-black p-6 bg-green-50">
                <h3 className="text-2xl font-black mb-4 flex items-center gap-2 uppercase text-green-700">
                    <CheckCircle /> The Pros
                </h3>
                <ul className="space-y-3">
                    {guide.pros.map((pro, i) => (
                        <li key={i} className="font-bold flex items-start gap-2 italic">
                            <span className="shrink-0 mt-1">→</span> {pro}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="border-4 border-black p-6 bg-red-50">
                <h3 className="text-2xl font-black mb-4 flex items-center gap-2 uppercase text-red-700">
                    <AlertCircle /> The Cons
                </h3>
                <ul className="space-y-3">
                    {guide.cons.map((con, i) => (
                        <li key={i} className="font-bold flex items-start gap-2 italic text-gray-700">
                            <span className="shrink-0 mt-1">×</span> {con}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <section className="mb-12 border-4 border-black p-8 bg-yellow-50">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-2 uppercase">
                <Star className="fill-yellow-400" /> Essential Hotspots
            </h3>
            <div className="flex flex-wrap gap-4">
                {guide.topSpots.map((spot, i) => (
                    <span key={i} className="bg-black text-white px-4 py-2 font-black text-lg uppercase italic transform -rotate-1 hover:rotate-0 transition-all cursor-default">
                        {spot}
                    </span>
                ))}
            </div>
        </section>

        <section className="mb-12 bg-blue-600 text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-black mb-4 flex items-center gap-2 uppercase text-yellow-300">
                <Lightbulb /> Local Expert Tip
            </h3>
            <p className="text-xl font-bold italic leading-relaxed">
                {guide.livingTip}
            </p>
        </section>

        <div className="space-y-6 pt-8 border-t-8 border-black">
          <p className="font-black text-center text-2xl uppercase italic">Share your match & inspire others!</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
                href="/"
                className="flex-1 bg-yellow-400 border-4 border-black p-6 font-black flex items-center justify-center gap-4 text-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase italic text-black"
            >
                Retake Quiz <ArrowRight size={32} strokeWidth={3} />
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/about" className="text-lg font-black underline hover:text-orange-500 uppercase tracking-tighter">
            Who created this guide? Read our Seoul Story
          </Link>
        </div>
      </div>
    </div>
  );
}
