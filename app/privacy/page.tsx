import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-orange-50 p-6 sm:p-12 font-mono">
      <div className="max-w-4xl mx-auto border-8 border-black bg-white p-8 sm:p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="text-6xl font-black mb-8 leading-none uppercase italic border-b-8 border-black pb-4">
          Privacy <span className="text-orange-500">Policy</span>
        </h1>
        
        <div className="space-y-8 text-xl font-bold leading-relaxed">
          <section>
            <h2 className="text-3xl font-black uppercase mb-4 underline">1. Information Collection</h2>
            <p>
              We collect information that you provide directly to us, such as when you submit your email for our neighborhood guide or when you take our quiz. This may include your email address and your quiz results.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black uppercase mb-4 underline">2. Use of Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Provide and improve our services</li>
              <li>Send you the requested neighborhood guide</li>
              <li>Analyze usage patterns and trends</li>
              <li>Personalize your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-black uppercase mb-4 underline">3. Cookies & Advertising</h2>
            <p>
              We use cookies to personalize content and ads, to provide social media features, and to analyze our traffic. We also share information about your use of our site with our social media, advertising, and analytics partners.
            </p>
            <div className="bg-yellow-200 border-4 border-black p-6 mt-4">
              <h3 className="text-2xl font-black uppercase mb-2">Google AdSense</h3>
              <p>
                Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the advertising cookie enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet. Users may opt out of personalized advertising by visiting Google's Ad Settings.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black uppercase mb-4 underline">4. Data Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black uppercase mb-4 underline">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at support@seoulsoulmatch.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
