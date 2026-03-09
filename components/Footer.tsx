import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white p-8 mt-12 font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-800">
          <div>
            <h3 className="text-xl font-black mb-4 uppercase">Seoul Soul Match</h3>
            <p className="text-gray-400 font-bold">
              Find your perfect Seoul neighborhood for work, life, and play.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-black mb-4 uppercase">Site</h4>
            <ul className="space-y-2 font-bold">
              <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-500">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-black mb-4 uppercase">Legal</h4>
            <ul className="space-y-2 font-bold">
              <li><Link href="/privacy" className="hover:text-orange-500">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-orange-500">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
             <h4 className="text-lg font-black mb-4 uppercase">Language</h4>
             <ul className="space-y-2 font-bold">
               <li className="text-orange-500">English</li>
             </ul>
          </div>
        </div>
        <div className="text-center font-bold text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SEOUL SOUL MATCH. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
