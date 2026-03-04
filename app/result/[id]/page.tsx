import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  return {
    title: `You are a ${id} Seoul Soul!`,
    description: `Check out my Seoul neighborhood match! I'm a perfect fit for ${id}.`,
    openGraph: {
      title: `You are a ${id} Seoul Soul!`,
      description: `Check out my Seoul neighborhood match! I'm a perfect fit for ${id}.`,
      images: [
        {
          url: `/result/${id}/opengraph-image`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `You are a ${id} Seoul Soul!`,
      description: `Check out my Seoul neighborhood match! I'm a perfect fit for ${id}.`,
      images: [`/result/${id}/opengraph-image`],
    },
  };
}

export default function ResultPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 font-mono text-white">
      <div className="max-w-md w-full border-4 border-white bg-white p-8 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] text-black">
        <h1 className="text-4xl font-black mb-4 uppercase">Seoul Soul Result</h1>
        <p className="text-xl font-bold mb-8">
          The soul found its match in <span className="bg-yellow-300 px-2 underline">{id}</span>!
        </p>
        
        <p className="mb-8 font-medium leading-relaxed">
           Want to find your own perfect neighborhood in Seoul? Take the vibe check below.
        </p>

        <Link 
          href="/"
          className="w-full bg-black text-white p-4 font-black block text-center hover:bg-gray-800 transition-colors uppercase"
        >
          TAKE THE QUIZ MYSELF
        </Link>
      </div>
    </div>
  );
}
