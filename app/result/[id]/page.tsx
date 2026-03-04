import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;
  return {
    title: `You are a ${id} Seoul Soul!`,
    description: `Check out my Seoul neighborhood match! I'm a perfect fit for ${id}.`,
  };
}

export default function ResultPage({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 font-mono text-white">
      <div className="max-w-md w-full border-4 border-white bg-white p-8 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] text-black">
        <h1 className="text-4xl font-black mb-4 uppercase">Match Result</h1>
        <p className="text-xl font-bold mb-8">
          The soul found its match in <span className="underline">{id}</span>!
        </p>
        
        <Link 
          href="/"
          className="w-full bg-black text-white p-4 font-black block text-center hover:bg-gray-800 transition-colors"
        >
          TAKE THE QUIZ MYSELF
        </Link>
      </div>
    </div>
  );
}
