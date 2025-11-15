import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white sticky top-0 z-50">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Logo.svg"
          width={120}
          height={120}
          className="object-contain"
        />
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/" className="text-[#333] font-medium hover:opacity-70 transition">Home</Link>
        <Link href="/services" className="text-[#333] font-medium hover:opacity-70 transition">Services</Link>
        <Link href="/gallery" className="text-[#333] font-medium hover:opacity-70 transition">Gallery</Link>
        <Link href="/contact" className="text-[#333] font-medium hover:opacity-70 transition">Contact</Link>
      </div>
    </nav>
  );
}
