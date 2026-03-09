import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-orange-50 p-6 sm:p-12 font-mono text-black">
      <div className="max-w-4xl mx-auto border-8 border-black bg-white p-8 sm:p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="text-6xl font-black mb-8 leading-none uppercase italic border-b-8 border-black pb-4">
          Contact <span className="text-orange-500">Us</span>
        </h1>
        
        <div className="space-y-12 text-xl font-bold leading-relaxed">
          <p className="bg-blue-100 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Got a question about a Seoul neighborhood? Found a bug? Or just want to say hi? We'd love to hear from you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase underline">Get in Touch</h2>
              <div className="flex items-center gap-4">
                <div className="bg-black p-3 border-2 border-black">
                  <Mail className="text-white" size={32} />
                </div>
                <div>
                  <p className="text-sm uppercase text-gray-500">Email us at</p>
                  <p className="text-2xl font-black tracking-tighter">hello@seoulsoulmatch.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-black p-3 border-2 border-black">
                  <MessageSquare className="text-white" size={32} />
                </div>
                <div>
                  <p className="text-sm uppercase text-gray-500">Socials</p>
                  <p className="text-2xl font-black tracking-tighter">@seoulsoulmatch</p>
                </div>
              </div>
            </div>

            <div className="border-4 border-black p-8 bg-yellow-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black uppercase mb-4">Response Time</h3>
              <p>We're a small team, but we try our best to respond to every message within 48 hours. Please be patient with us!</p>
              <div className="mt-8 flex justify-end">
                 <Send size={48} className="text-black rotate-12" />
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 border-4 border-black bg-pink-100">
             <h2 className="text-3xl font-black uppercase mb-4 text-center">Collaboration</h2>
             <p className="text-center italic text-2xl">
               Interested in featuring your Seoul-based business or cafe on our site? Reach out for partnership opportunities!
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
