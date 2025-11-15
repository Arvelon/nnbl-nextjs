import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-center md:justify-between items-center px-8 py-4 bg-white sticky top-0 z-50">
      <Link href="/" className="flex flex-col items-end">
        <h1 className="text-3xl font-medium">
          Natural Nails
          {/* <Image
              src="/logo.svg"
              alt="Natural Nails by Lisa logo"
              width={450}
              height={200}
              className="object-contain"
            /> */}
        </h1>
        <span className="text-sm -mt-2">by Lisa</span>
      </Link>

      <div className="md:flex items-center gap-6 hidden">
        <Link
          href="/"
          className="text-[#333] font-normal hover:opacity-70 transition text-xl"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="text-[#333] font-normal hover:opacity-70 transition text-xl"
        >
          Services
        </Link>
        <Link
          href="/gallery"
          className="text-[#333] font-normal hover:opacity-70 transition text-xl"
        >
          Gallery
        </Link>
        <Link
          href="/contact"
          className="text-[#333] font-normal hover:opacity-70 transition text-xl"
        >
          Contact
        </Link>
        <a
          href="https://booking.naturalnailsbylisa.be"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full text-lg font-bold text-white"
          style={{ backgroundColor: "#E6A8A0" }}
        >
          Maak een afspraak
        </a>
      </div>
    </nav>
  );
}
