// pages/index.tsx — styled like margotfoubert.be but using YOUR
// logo, colors (#F2C0BD, #F5D1CC, #fff8f6), names, content, links.

import Image from "next/image";
import Nav from "../components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#333] font-sans antialiased">
      <Nav />

      {/* HERO */}
      <header className="pt-32 pb-20 md:pt-40 md:pb-32 h-screen">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl font-medium">
              Natural Nails by Lisa
              {/* <Image
              src="/logo.svg"
              alt="Natural Nails by Lisa logo"
              width={450}
              height={200}
              className="object-contain"
            /> */}
            </h1>

            <p className="mt-6 text-lg max-w-md text-[#555]">
              Beautiful nails, personalized care, and a relaxing experience.
              Boek je afspraak en laat je verwennen.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://booking.naturalnailsbylisa.be"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 pb-2 rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: "#E6A8A0" }}
              >
                Maak een afspraak
              </a>
              <a
                href="#services"
                className="px-6 py-3 pb-2 rounded-full border border-[#E6A8A0] text-sm font-bold text-[#E6A8A0]"
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
        className="py-24 px-6 flex justify-center items-center"
        style={{ backgroundColor: "#fff8f6" }}
      >
        <div className="max-w-3xl flex flex-col p-10 pr-30">
          <h2 className="text-3xl font-semibold">Onze aanpak</h2>
          <p className="text-[#555] text-lg max-w-2xl mb-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            porro inventore architecto delectus consectetur ipsa nostrum. Minus,
            aliquam, obcaecati fugit, quas assumenda sunt explicabo provident
            suscipit aperiam quia beatae excepturi.
          </p>
          <h2 className="text-3xl font-semibold">BIAP Strategie</h2>
          <p className="text-[#555] text-lg max-w-2xl mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            sequi temporibus nobis itaque vero delectus dolorum minima veniam
            dignissimos totam architecto dolorem, impedit cum nulla quae sint
            dolores similique!
          </p>
          <h2 className="text-3xl font-semibold">Verzorging</h2>
          <p className="text-[#555] text-lg max-w-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            iusto, expedita dolorum doloribus voluptatum ipsa quod explicabo
            voluptas, modi natus nisi voluptatem eveniet reiciendis numquam
            incidunt hic ex aspernatur vero.
          </p>
        </div>
        <div>
          <Image
            src="/images/IMG_20250919_144126.jpg"
            alt="Natural Nails by Lisa logo"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold">Galerij</h2>

        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Image
              src="/images/IMG_20250919_141008.jpg"
              alt={`Gallery image 1`}
              width={300}
              height={300}
              className="object-cover"
            />
            <Image
              src="/images/IMG_20251008_193322.jpg"
              alt={`Gallery image 2`}
              width={300}
              height={300}
              className="object-cover"
            />
            <Image
              src="/images/IMG_20251105_192757.jpg"
              alt={`Gallery image 3`}
              width={300}
              height={300}
              className="object-cover"
            />
        </div>
        <Link href="/gallery">
        <p className="hover:underline mt-10">Bekijk meer</p>
      </Link>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-center flex flex-col items-center gap-6"
        style={{ backgroundColor: "#fff8f6" }}
      >
        <h2 className="text-3xl font-semibold">Klaar voor mooie nagels?</h2>
        <a
          href="https://booking.naturalnailsbylisa.be"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-full font-bold text-white text-sm"
          style={{ backgroundColor: "#E6A8A0" }}
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
