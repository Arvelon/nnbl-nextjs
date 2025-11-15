// pages/index.tsx — styled like margotfoubert.be but using YOUR
// logo, colors (#F2C0BD, #F5D1CC, #fff8f6), names, content, links.

import Image from 'next/image';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#333] font-sans antialiased">
      <Nav />

      {/* HERO */}
      <header className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="order-2 md:order-1">
            <div className="">
              <Image
              src="/logo.svg"
              alt="Natural Nails by Lisa logo"
              width={450}
              height={200}
              className="object-contain"
            />
            </div>

            <p className="mt-6 text-lg max-w-md text-[#555]">
              Beautiful nails, personalized care, and a relaxing experience. Boek je afspraak en laat je verwennen.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://booking.naturalnailsbylisa.be"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: '#F2C0BD' }}
              >
                Maak een afspraak
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-full border border-[#F2C0BD] text-sm font-bold text-[#F2C0BD]"
              >
                Bekijk diensten
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="order-1 md:order-2 w-full h-80 md:h-[520px] rounded-md overflow-hidden flex items-center justify-center bg-[#fff8f6]">
            <Image
              src="/hero.jpg"
              alt="Natural Nails by Lisa logo"
              width={550}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-6 text-center"
        style={{ backgroundColor: '#fff8f6' }}
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl font-semibold">Over Lisa</h2>
          <p className="text-[#555] text-lg max-w-2xl">
            Ik ben Lisa, een gepassioneerde nagelstyliste die focust op persoonlijke aandacht, rust en kwaliteit. Elke behandeling wordt met zorg uitgevoerd zodat jij met prachtige handen en een goed gevoel buiten stapt.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold">Diensten</h2>

        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[ 'Manicure', 'Pedicure', 'Gelnagels', 'Nagelverzorging', 'Versteviging', 'Nail Art' ].map((s) => (
            <div
              key={s}
              className="p-8 rounded-2xl text-white shadow-sm text-lg font-medium"
              style={{ backgroundColor: '#F2C0BD' }}
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-center flex flex-col items-center gap-6"
        style={{ backgroundColor: '#fff8f6' }}
      >
        <h2 className="text-3xl font-semibold">Klaar voor mooie nagels?</h2>
        <a
          href="https://booking.naturalnailsbylisa.be"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-full font-bold text-white text-sm"
          style={{ backgroundColor: '#F2C0BD' }}
        >
          Boek je afspraak
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t text-center text-sm text-[#777]">
        © {new Date().getFullYear()} Natural Nails by Lisa
      </footer>
    </div>
  );
}
