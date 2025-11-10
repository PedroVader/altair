import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Altair Austin Roofing
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-secondary transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-secondary transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-secondary transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <Link 
          href="/contact" 
          className="hidden md:block bg-secondary text-primary px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
        >
          Get Free Quote
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}