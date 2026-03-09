import { Metadata } from 'next';
import Link from 'next/link';
import { QUIZ_DATA } from '../../../lib/data';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';

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

  return (
    <div className={`min-h-screen ${result.color} flex flex-col items-center justify-center p-6 font-mono transition-colors duration-700`}>
      <div className="max-w-xl w-full border-8 border-black bg-white p-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        <div className="absolute top-4 right-4 animate-pulse">
            <Sparkles size={48} className="text-yellow-400" strokeWidth={3} />
        </div>
        
        <h3 className="text-xl font-black uppercase mb-2 tracking-widest">The Match:</h3>
        <h1 className="text-6xl font-black mb-4 leading-none border-b-8 border-black pb-4 uppercase italic">
          {result.title}
        </h1>
        
        <div className="flex items-center gap-2 mb-6">
          <MapPin fill="black" />
          <span className="text-2xl font-black italic">{result.vibe}</span>
        </div>

        <p className="text-xl font-bold mb-8 leading-relaxed bg-gray-50 p-4 border-4 border-black border-dashed">
          {result.desc}
        </p>

        <div className="space-y-4">
          <p className="font-black text-center text-lg uppercase">Want to find your own match?</p>
          <Link 
            href="/"
            className="w-full bg-yellow-400 border-4 border-black p-6 font-black flex items-center justify-center gap-4 text-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase italic"
          >
            Take The Quiz <ArrowRight size={32} strokeWidth={3} />
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link href="/about" className="text-sm font-black underline hover:text-orange-500 uppercase">
            Learn more about Seoul neighborhoods
          </Link>
        </div>
      </div>
    </div>
  );
}
