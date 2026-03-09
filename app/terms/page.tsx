import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-orange-50 p-6 sm:p-12 font-mono">
      <div className="max-w-4xl mx-auto border-8 border-black bg-white p-8 sm:p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="text-6xl font-black mb-8 leading-none uppercase italic border-b-8 border-black pb-4">
          Terms of <span className="text-orange-500">Service</span>
        </h1>
        
        <div className="space-y-8 text-xl font-bold leading-relaxed">
          <section>
            <h2 className="text-3xl font-black uppercase mb-4 underline">1. Acceptance of Terms</h2>
            <p>
              By accessing or using SeoulSoul Match, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black uppercase mb-4 underline">2. Description of Service</h2>
            <p>
              SeoulSoul Match provides an interactive quiz and information about neighborhoods in Seoul. The content is for informational and entertainment purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black uppercase mb-4 underline">3. User Conduct</h2>
            <p>
              You agree not to use the service for any unlawful purpose or in any way that interrupts, damages, or impairs the service.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black uppercase mb-4 underline">4. Intellectual Property</h2>
            <p>
              All content on this site, including text, graphics, logos, and images, is the property of SeoulSoul Match and is protected by intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black uppercase mb-4 underline">5. Disclaimer of Warranties</h2>
            <p>
              The service is provided on an "as is" and "as available" basis. We make no warranties regarding the accuracy or reliability of the content.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black uppercase mb-4 underline">6. Limitation of Liability</h2>
            <p>
              SeoulSoul Match shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black uppercase mb-4 underline">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of the site following any changes constitutes your acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
