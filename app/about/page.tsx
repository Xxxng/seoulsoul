import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-orange-50 p-6 sm:p-12 font-mono">
      <div className="max-w-4xl mx-auto border-8 border-black bg-white p-8 sm:p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="text-6xl font-black mb-8 leading-none uppercase italic border-b-8 border-black pb-4">
          About <span className="text-orange-500">SeoulSoul</span>
        </h1>
        
        <div className="space-y-8 text-xl font-bold leading-relaxed">
          <p className="bg-yellow-200 p-4 border-4 border-black">
            Seoul is a massive, vibrant metropolis with a unique vibe in every corner. Whether you're a digital nomad, an expat, or a curious traveler, finding the right neighborhood can be the difference between a good trip and a soul-matching experience.
          </p>
          
          <h2 className="text-3xl font-black uppercase mt-12">Our Mission</h2>
          <p>
            We created SeoulSoul Match to help people navigate the complexity of Seoul's many neighborhoods through a lens of personality, work style, and lifestyle preferences. We believe that everyone has a "Seoul Soul Match"—a place where they feel most at home.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="border-4 border-black p-6 bg-blue-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black mb-4 uppercase text-blue-600">Why Use This?</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Personalized recommendations</li>
                <li>Curated by Seoul locals</li>
                <li>Focus on digital nomad & expat needs</li>
                <li>Interactive and fun</li>
              </ul>
            </div>
            <div className="border-4 border-black p-6 bg-pink-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black mb-4 uppercase text-pink-600">The Neighborhoods</h3>
              <p>
                We've analyzed everything from cafe density and internet speed to nightlife and safety in areas like Seongsu, Hannam, Hongdae, Euljiro, and Gangnam.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-black uppercase mt-12">Who We Are</h2>
          <p>
            We are a small team of travelers and tech enthusiasts who fell in love with Seoul. This project is a labor of love to help others discover the magic of this city.
          </p>

          <div className="bg-black text-white p-8 mt-12">
            <p className="text-2xl italic">"Seoul is not just a city, it's a feeling. We're here to help you find yours."</p>
          </div>
        </div>
      </div>
    </div>
  );
}
