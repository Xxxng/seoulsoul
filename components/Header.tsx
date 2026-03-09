import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black p-4 font-mono">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-black uppercase tracking-tighter">
          SEOUL<span className="text-orange-500">SOUL</span>
        </Link>
        <nav className="flex gap-4 sm:gap-8 font-bold text-sm sm:text-base">
          <Link href="/" className="hover:text-orange-500 transition-colors">QUIZ</Link>
          <Link href="/about" className="hover:text-orange-500 transition-colors">ABOUT</Link>
          <Link href="/contact" className="hover:text-orange-500 transition-colors uppercase">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
